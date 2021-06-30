function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function log(text){
  //console.log(text);
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
function createUserDataObject(data, fields, gtmData){
  //this code only adds a key to the object if its value is defined
  //the way it works is that && only evaluates the second term if the first is true
  //also && returns the value of the last term
  //so if !fields.email, the spread operator has nothing to spread
  //and if fields.email, the spread operator gets an object and copies its properties into the returned object
  return {
    ...fields.email && {"em": fields.email},
    ...fields.phone && {"ph": fields.phone},
    ...fields.city && {"ct": fields.city},
    ...gtmData.ip && {"client_ip_address": gtmData.ip},
    ...gtmData.ua && {"client_user_agent": gtmData.ua},
    ...fields.dateOfBirth && {"db": fields.dateOfBirth},
    ...fields.country && {"country": fields.country},
    ...data.fbLoginId && {"fb_login_id": data.fbLoginId || null},
    ...data.fbc[0] && {"fbp": data.fbc[0] || null},
    ...fields.externalId && {"external_id": fields.externalId},
    ...data.fbc[0] && {"fbc": data.fbc[0] || null},
    ...fields.firstName && {"fn": fields.firstName},
    ...fields.lastName && {"ln": fields.lastName},
    ...fields.gender && {"ge": fields.gender},
    ...fields.state && {"st": fields.state},
    ...data.subscriptionId && {"subscription_id": data.subscriptionId || null},
    ...fields.zip && {"zp": fields.zip},
  };
}

function createCapiObject(data, fields, gtmData) {
  return JSON.stringify([
    {
      "event_name": data.StandardEvents,
      "event_time": Math.round(Date.now() / 1000),
      "action_source": "website",
      "event_id": data.DeduplicationEventID || null,
      "event_source_url": window.location.href,
      "user_data": createUserDataObject(data, fields, gtmData),
      "custom_data": {
        ...data.content_category && {"content_category": data.content_category},
        ...data.content_ids && {"content_ids": data.content_ids},
        ...data.content_name && {"content_name": data.content_name},
        ...data.content_type && {"content_type": data.content_type},
        ...data.contents && {"contents": data.contents},
        ...data.currency && {"currency": data.currency},
        ...data.delivery_category && {"delivery_category": data.delivery_category},
        ...data.num_items && {"num_items": data.num_items},
        ...data.order_id && {"order_id": data.order_id},
        ...data.predicted_ltv && {"predicted_ltv": data.predicted_ltv},
        ...data.search_string && {"search_string": data.search_string},
        ...data.status && {"status": data.status},
        ...data.value && {"value": data.value},
      },
      "opt_out": false,
    },
  ]);
}

function extractFbqProps(data, fields, gtmData){
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
  if (propMap[data.StandardEvents]){
    propMap[data.StandardEvents].forEach((key) => {
      if (data[key]){
        objectData[key] = data[key];
      }
    }, {});
  }

  objectData = {
    ...objectData,
    ...createUserDataObject(data, fields, gtmData),
    event_id: data.DeduplicationEventID,
  };

  return objectData;
}

function injectBasePixelCode(data){
  if (typeof fbq !== "function"){
    log("Pixel not defined - defining");
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

    fbq("init", data.pixelId);
    fbq("track", "PageView");
  } else {
    log("Pixel already defined");
  }
}

async function validateKey(data){
  return new Promise((resolve, reject) => {
    let query = "?";
    query += "wc-api=software-api";
    query += "&request=check";
    query += "&product_id=DeviateToolsCapi_Prod"; //not necessary after the new migration, only here to make the migration easier
    query += `&email=${encodeURIComponent(data.LicensedEmail)}`;
    query += `&license_key=${data.apiAccessToken}`;
    let url = `https://deviatetracking.com/${query}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res?.success){
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function fireDeviateTracking(data){
  //first layer of validation
  //if not valid, no need to waste cpu on the rest of this function
  //key will be validated a second time when the capi request is submitted to prevent xss
  if (! (await validateKey(data))){
    console.log("Invalid DeviateTracking key");
    data.gtmOnFailure("Invalid DeviateTracking key");
    return;
  }

  //convert gtm default values to null
  for (const [key, value] of Object.entries(data)){
    if ((value === "None") || (value === "Automatic")){
      data[key] = null;
    }
  }
  //console.log(data.delivery_category);

  //get ip
  let gtmData = await fetch("https://api.ipify.org/?format=json")
    .then((response) => {
      return response.json();
    })
    .then((ipData) => {
      return {ua: window.navigator.userAgent, ip: ipData.ip};
    });

  //will only actually do it if hasn't been done already
  injectBasePixelCode(data);



  //generate an event id if user didn't give one
  if (!data.DeduplicationEventID){
    data.DeduplicationEventID = uuidv4();
  }

  const fields = {};

  let shaPromises = [
    sha256(data.email).then((digest) => {
      if (data.email){
        fields.email = digest;
      }
    }),
    sha256(data.phone).then((digest) => {
      if (data.phone){
        fields.phone = digest;
      }
    }),
    sha256(data.gender).then((digest) => {
      if (data.gender){
        fields.gender = digest;
      }
    }),
    sha256(data.dateOfBirth).then((digest) => {
      if (data.dateOfBirth){
        fields.dateOfBirth = digest;
      }
    }),
    sha256(data.lastName).then((digest) => {
      if (data.lastName){
        fields.lastName = digest;
      }
    }),
    sha256(data.firstName).then((digest) => {
      if (data.firstName){
        fields.firstName = digest;
      }
    }),
    sha256(data.city).then((digest) => {
      if (data.city){
        fields.city = digest;
      }
    }),
    sha256(data.state).then((digest) => {
      if (data.state){
        fields.state = digest;
      }
    }),
    sha256(data.zip).then((digest) => {
      if (data.zip){
        fields.zip = digest;
      }
    }),
    sha256(data.country).then((digest) => {
      if (data.country){
        fields.country = digest;
      }
    }),
    sha256(data.externalId).then((digest) => {
      if (data.externalId){
        fields.externalId = digest;
      }
    }),
  ];
  await Promise.all(shaPromises)
    .then(() => {
      const objprop = createCapiObject(data, fields, gtmData);

      //send Get Request to Deviate Tracking API
      //eslint-disable-next-line prefer-template
      const url = "https://v2.api.deviatetracking.com/license/validate?" +
          "license_key=" + encodeURIComponent(data.apiAccessToken) +
          "&email=" + encodeURIComponent(data.LicensedEmail) +
          "&fbaccess_tkn=" + encodeURIComponent(data.FBToken) +
          "&additional_data=" + encodeURIComponent(objprop) +
          "&product_id=DeviateToolsCapi_Prod" +
          "&fbpixel_id=" + encodeURIComponent(data.pixelId) +
          "&test_event_code=" + data.TestEventLabel;
      if (data.sendServerEvent){
        log("Sending server event");
        fetch(url)
          .then(() => {
            data.gtmOnSuccess();
          })
          .catch((err) => {
            data.gtmOnFailure();
          });
      }

      if (data.sendBrowserEvent){
        log("Sending browser event");
        let objectData = extractFbqProps(data, fields, gtmData);
        fbq("track", data.StandardEvents, objectData);
      }

      data.gtmOnSuccess();
    });
}

if (typeof exports !== "undefined") {
  module.exports = {
    fireDeviateTracking,
    validateKey,
  };
} else {
  window.fireDeviateTracking = fireDeviateTracking;
  log("Deviate Tracking 4.0 active");
}
