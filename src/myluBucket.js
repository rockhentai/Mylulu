import min from 'min';
import Model from 'min-model';
import qiniu from 'qiniu.js';
import crypto from 'crypto-browserify';

const myluBucket = qiniu.bucket('mylulu',{
  url:(qiniuBucketUrl ? qiniuBucketUrl : `${location.protocol}//${location.host}`)
});

function getKeys(password) {
  return myluBucket.getFile(`secret-${password}.json`)
    .then(body => JSON.parse(body));
}

myluBucket.fetchPutToken = function(password,keys=null,returnBody=null) {
  return (keys ? Promise.resolve(keys) : getKeys(password))
    .then(keys => {
      const options = {
        scope:'mylulu',
        deadline:Math.floor(Date.now()/1000) + 3600,
        insertOnly:1
      }

      if(returnBody) options.returnBody = returnBody;

      //Signature
      const signature = safeEncode(JSON.stringify(options));

      //encodeDigest
      const encodeDigest = encodeSign(signature,keys.ak);

      //Put Token
      const token = `${keys.ak}:${encodeDigest}:${signature}`;

      return token;
    })
}

function safeEncode(str) {
  return btoa(str).replace(/\//g,'_').replace(/\+/g,'-');
}

function encodeSign(str,key) {
  return crypto
    .createHmac('sha1',key)
    .update(str)
    .digest('base64')
    .replace(/\//g,'_')
    .replace(/\+/g,'-')
}

export default myluBucket
