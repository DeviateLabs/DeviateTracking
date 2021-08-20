module.exports = async function setFbCookies(data){
  //set fbp and fbc
  let cookies = document.cookie.split(";");
  let fbp = null;
  let fbc = null;
  for (let i = 0; i < cookies.length; i++){
    let pieces = cookies[i].split("=");
    if (pieces[0].trim() === "_fbp"){
      fbp = pieces[1].trim();
    } else if (pieces[0].trim() === "_fbc"){
      fbc = pieces[1].trim();
    }
  }

  if (!data.userData){
    data.userData = {};
  }
  if (fbp){
    data.userData.fbp = fbp;
  }
  if (fbc){
    data.userData.fbc = fbc;
  } else {
    let urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.fbclid){
      data.userData.fbc = `fb.1.${Date.now()}.${params.fbclid}`;
    }
  }
};
