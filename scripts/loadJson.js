const firebase = require("firebase")
//const jdata = require('./cc-amp-export.json')
const jdata = require('./test1.json')
const fse = require('fs-extra')

firebase.initializeApp({"apiKey":"AIzaSyBm-csDUazrYMkWT4URXpYYDpqmUZ1pbr0","databaseURL":"https://cc-amp.firebaseio.com","storageBucket":"cc-amp.appspot.com","authDomain":"cc-amp.firebaseapp.com","messagingSenderId":"771080220517","projectId":"cc-amp"})

function loadJson(Json) {
  for (var key in Json) {
    if (Json.hasOwnProperty(key)) {
      var JsonData = Json[key]
      firebase.database().ref(key).set(JsonData)
    }
  }
}
loadJson(jdata);
console.log('end loading by json')
