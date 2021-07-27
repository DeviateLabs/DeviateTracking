
const sha256 = require("../sha256/index.js");

module.exports = async function hashData(data){
  let shaPromises = [];

  if (data.userData.email){
    shaPromises.push(sha256(data.userData.email).then((digest) => {
      data.userData.email = digest;
    }));
  }
  if (data.userData.phone){
    shaPromises.push(sha256(data.userData.phone).then((digest) => {
      data.userData.phone = digest;
    }));
  }
  if (data.userData.gender){
    shaPromises.push(sha256(data.userData.gender).then((digest) => {
      data.userData.gender = digest;
    }));
  }
  if (data.userData.dateOfBirth){
    shaPromises.push(sha256(data.userData.dateOfBirth).then((digest) => {
      data.userData.dateOfBirth = digest;
    }));
  }
  if (data.userData.lastName){
    shaPromises.push(sha256(data.userData.lastName).then((digest) => {
      data.userData.lastName = digest;
    }));
  }
  if (data.userData.firstName){
    shaPromises.push(sha256(data.userData.firstName).then((digest) => {
      data.userData.firstName = digest;
    }));
  }
  if (data.userData.city){
    shaPromises.push(sha256(data.userData.city).then((digest) => {
      data.userData.city = digest;
    }));
  }
  if (data.userData.state){
    shaPromises.push(sha256(data.userData.state).then((digest) => {
      data.userData.state = digest;
    }));
  }
  if (data.userData.zip){
    shaPromises.push(sha256(data.userData.zip).then((digest) => {
      data.userData.zip = digest;
    }));
  }
  if (data.userData.city){
    shaPromises.push(sha256(data.userData.city).then((digest) => {
      data.userData.city = digest;
    }));
  }
  if (data.userData.country){
    shaPromises.push(sha256(data.userData.country).then((digest) => {
      data.userData.country = digest;
    }));
  }

  if (data.userData.externalId){
    shaPromises.push(sha256(data.userData.externalId).then((digest) => {
      data.userData.externalId = digest;
    }));
  }

  return Promise.all(shaPromises);
};
