function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function sha256(message) {
  //encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  //hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  //convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  //convert bytes to hex string
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

//eslint-disable-next-line complexity
function createUserDataObject(data){
  //this code only adds a key to the object if its value is defined
  //the way it works is that && only evaluates the second term if the first is true
  //also && returns the value of the last term
  //so if !fields.email, the spread operator has nothing to spread
  //and if fields.email, the spread operator gets an object and copies its properties into the returned object
  return {
    ...data?.userData?.email && {"em": data.userData.email},
    ...data?.userData?.phone && {"ph": data.userData.phone},
    ...data?.userData?.city && {"ct": data.userData.city},
    ...data?.userData?.userAgent && {"client_user_agent": data.userData.userAgent},
    ...data?.userData?.dateOfBirth && {"db": data.userData.dateOfBirth},
    ...data?.userData?.country && {"country": data.userData.country},
    ...data?.userData?.fbLoginId && {"fb_login_id": data.userData.fbLoginId || null},
    ...data?.userData?.fbc && {"fbp": data.userData.fbc[0] || null},
    ...data?.userData?.externalId && {"external_id": data.userData.externalId},
    ...data?.userData?.fbc && {"fbc": data.userData.fbc[0] || null},
    ...data?.userData?.firstName && {"fn": data.userData.firstName},
    ...data?.userData?.lastName && {"ln": data.userData.lastName},
    ...data?.userData?.gender && {"ge": data.userData.gender},
    ...data?.userData?.state && {"st": data.userData.state},
    ...data?.userData?.subscriptionId && {"subscription_id": data.userData.subscriptionId || null},
    ...data?.userData?.zip && {"zp": data.userData.zip},
  };
}

function extractFbqProps(data){
  let nameMap = {
    "content_category": "contentCategory",
    "content_ids": "contentIds",
    "content_name": "contentName",
    "content_type": "contentType",
    "contents": "contents",
    "currency": "currency",
    "delivery_category": "deliveryCategory",
    "event_id": "eventId",
    "num_items": "numItems",
    "order_id": "orderId",
    "predicted_ltv": "predictedLtv",
    "search_string": "searchString",
    "status": "status",
    "value": "value",
  };
  let propMap = {
    "AddPaymentInfo": ["content_name", "event_id", "content_category", "content_ids", "contents", "currency", "value", "order_id", "delivery_category"],
    "AddToCart": ["event_id", "content_ids", "content_name", "content_type", "contents", "currency", "value", "order_id", "delivery_category"],
    "AddToWishlist": ["event_id", "content_category", "content_ids", "content_name", "contents", "currency", "value", "order_id", "delivery_category"],
    "CompleteRegistration": ["event_id", "content_name", "currency", "status", "value", "order_id", "delivery_category"],
    "Contact": ["event_id", "content_name", "order_id", "delivery_category"],
    "CustomizeProduct": ["event_id", "content_name", "order_id", "delivery_category"],
    "Donate": ["event_id", "content_name", "order_id", "delivery_category"],
    "FindLocation": ["event_id", "content_name", "order_id", "delivery_category"],
    "InitiateCheckout": ["event_id", "content_category", "content_ids", "content_name", "contents", "currency", "num_items", "value", "order_id", "delivery_category"],
    "Lead": ["event_id", "content_category", "content_name", "currency", "value", "order_id", "delivery_category"],
    "PageView": ["content_name", "event_id", "delivery_category", "order_id"],
    "Purchase": ["event_id", "content_ids", "content_name", "content_type", "contents", "currency", "num_items", "value", "order_id", "delivery_category"],
    "Schedule": ["event_id", "content_name", "order_id", "delivery_category"],
    "Search": ["event_id", "content_category", "content_ids", "content_name", "contents", "search_string", "value", "order_id", "delivery_category", "currency"],
    "StartTrial": ["event_id", "content_name", "currency", "predicted_ltv", "value", "order_id", "delivery_category"],
    "SubmitApplication": ["event_id", "content_name", "order_id", "delivery_category"],
    "Subscribe": ["event_id", "content_name", "currency", "predicted_ltv", "value", "order_id", "delivery_category"],
    "ViewContent": ["event_id", "content_category", "currency", "content_ids", "content_name", "content_type", "contents", "value", "order_id", "delivery_category"],
  };

  let objectData = {};
  if (propMap[data.eventName]){
    propMap[data.eventName].forEach((key) => {
      if (data[nameMap[key]]){
        objectData[key] = data[nameMap[key]];
      }
    }, {});
  }

  objectData = {
    ...objectData,
    ...createUserDataObject(data),
  };

  return objectData;
}

//copied from facebook
function injectPixel(){
  //f=window
  //b=document
  //e=script url
  //v="script"
  !function(f, b, e, v, n, t, s) {
    if (f.fbq) {
      return;
    }
    n = f.fbq = function(){
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq){
      f._fbq = n;
    }

    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
}

function initPixel(data){
  fbq("init", data.pixelId);
}

function setupPixel(data){
  if (typeof fbq !== "function"){
    injectPixel();
    initPixel(data);
  }
}

function sendServerEvent(data){
//let url = `${"https://v3.api.deviatetracking.com/capi?data="}${JSON.stringify(data)}`;
  let url = `http://localhost:4080/capi?data=${JSON.stringify(data)}`;

  fetch(url);
}

async function fireDeviateTracking(data){
  //convert gtm default values to null
  for (const [key, value] of Object.entries(data)){
    if ((value === "None") || (value === "Automatic") || (value === "EventId")){
      data[key] = null;
    }
  }

  //inject pixel if necessary
  setupPixel(data);

  //set ua
  if (!data.userData){
    data.userData = {};
  }
  data.userData.userAgent = window.navigator.userAgent;

  //set exid if user didn't override it
  if (!data.externalId){
    data.externalId = window.navigator.userAgent;
  }
  data.eventSourceUrl = window.location.href;

  //generate an event id if user didn't give one
  if (!data.eventId){
    data.eventId = uuidv4();
  }

  //send event to the deviatetracking capi server

  if (data.sendServerEvent){
    sendServerEvent(data);
  }

  if (data.sendBrowserEvent){
    let shaPromises = [
      sha256(data.userData.email).then((digest) => {
        if (data.userData.email){
          data.userData.email = digest;
        }
      }),
      sha256(data.userData.phone).then((digest) => {
        if (data.userData.phone){
          data.userData.phone = digest;
        }
      }),
      sha256(data.userData.gender).then((digest) => {
        if (data.userData.gender){
          data.userData.gender = digest;
        }
      }),
      sha256(data.userData.dateOfBirth).then((digest) => {
        if (data.userData.dateOfBirth){
          data.userData.dateOfBirth = digest;
        }
      }),
      sha256(data.userData.lastName).then((digest) => {
        if (data.userData.lastName){
          data.userData.lastName = digest;
        }
      }),
      sha256(data.userData.firstName).then((digest) => {
        if (data.userData.firstName){
          data.userData.firstName = digest;
        }
      }),
      sha256(data.userData.city).then((digest) => {
        if (data.userData.city){
          data.userData.city = digest;
        }
      }),
      sha256(data.userData.state).then((digest) => {
        if (data.userData.state){
          data.userData.state = digest;
        }
      }),
      sha256(data.userData.zip).then((digest) => {
        if (data.userData.zip){
          data.userData.zip = digest;
        }
      }),
      sha256(data.userData.country).then((digest) => {
        if (data.userData.country){
          data.userData.country = digest;
        }
      }),
      sha256(data.userData.externalId).then((digest) => {
        if (data.userData.externalId){
          data.userData.externalId = digest;
        }
      }),
    ];
    await Promise.all(shaPromises)
      .then(() => {
        let objectData = extractFbqProps(data);
        fbq("track", data.eventName, objectData, {eventID: data.eventId});
      });
  }
}

if (typeof exports !== "undefined") {
  module.exports = {
    fireDeviateTracking,
  };
} else {
  window.fireDeviateTracking = fireDeviateTracking;
  console.log("Deviate Tracking active");
}
