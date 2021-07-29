//eslint-disable-next-line complexity
module.exports = function createUserDataObject(data){
  //this code only adds a key to the object if its value is defined
  //the way it works is that && only evaluates the second term if the first is true
  //also && returns the value of the last term
  //so if !fields.email, the spread operator has nothing to spread
  //and if fields.email, the spread operator gets an object and copies its properties into the returned object
  return {
    ...data?.userData?.email && {"em": data.userData.email},
    ...data?.userData?.phone && {"ph": data.userData.phone},
    ...data?.userData?.city && {"ct": data.userData.city},
    ...data?.userData?.ipAddress && {"client_ip_address": data.userData.ipAddress},
    ...data?.userData?.userAgent && {"client_user_agent": data.userData.userAgent},
    ...data?.userData?.dateOfBirth && {"db": data.userData.dateOfBirth},
    ...data?.userData?.country && {"country": data.userData.country},
    ...data?.userData?.fbLoginId && {"fb_login_id": data.userData.fbLoginId},
    ...data?.userData?.fbp && {"fbp": data.userData.fbp[0]},
    ...data?.userData?.externalId && {"external_id": data.userData.externalId},
    ...data?.userData?.fbc && {"fbc": data.userData.fbc[0]},
    ...data?.userData?.firstName && {"fn": data.userData.firstName},
    ...data?.userData?.lastName && {"ln": data.userData.lastName},
    ...data?.userData?.gender && {"ge": data.userData.gender},
    ...data?.userData?.state && {"st": data.userData.state},
    ...data?.userData?.subscriptionId && {"subscription_id": data.userData.subscriptionId},
    ...data?.userData?.zip && {"zp": data.userData.zip},
  };
};
