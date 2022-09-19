'use strict';

const crypto =  require("crypto-js");
//

var decryptJson = ((encrypted) => {
  // console.log("encrypted"+encrypted);
  let decData = crypto.enc.Base64.parse(encrypted).toString(crypto.enc.Utf8);
  // Decrypt the data
  // console.log("decData"+decData);
  let decJson = crypto.AES.decrypt(decData, 'aes').toString(crypto.enc.Utf8);
  var userInfo =JSON.parse(JSON.stringify(decJson)) ;
  // console.log(userInfo);
  return userInfo;
});


module.exports = { decryptJson };