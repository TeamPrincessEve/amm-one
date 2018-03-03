const firebase = require("firebase")
const fse = require('fs-extra')

firebase.initializeApp({"apiKey":"AIzaSyBm-csDUazrYMkWT4URXpYYDpqmUZ1pbr0","databaseURL":"https://cc-amp.firebaseio.com","storageBucket":"cc-amp.appspot.com","authDomain":"cc-amp.firebaseapp.com","messagingSenderId":"771080220517","projectId":"cc-amp"})

function getJson() {
  firebase.database().ref('tags').once('value').then(function(snapshot) {
    var cl = snapshot.val();
    console.log(cl)
//     for (var al in cl) {
//       if (cl.hasOwnProperty(al)) {
//         var cll = cl[al];
//         var clr = document.getElementById("clr");
//         var li = document.createElement("li");
//         li.className = "search-list";
//         var lis = '<h4>'+cll['name']+'</h4><hr/>';
//         var weblink = cll['weblink'];
//         if (weblink) lis += '<a href="'+weblink+'" target="_blank">'+weblink+'</a>';
//         lis += '<p>'+cll['description']+'</p><hr/><p>'+cll['contact_info']+'</p>';
//         li.innerHTML = lis;
//         clr.appendChild(li);
//       }
//     }
  })
}
function findJson() {
//   firebase.database().ref('cclist/'+'-L2jps1ecPGXzHvef7_7').once('value').then(snapshot => {
//     console.log(snapshot.val())
//   })
  firebase.database().ref('tags/ต่อเติม').once('value').then(function(snapshot) {
//     var cl = snapshot.val();
//     for (var al in cl) {
//       if (cl.hasOwnProperty(al)) {
//         console.log(al)
//       }
//     }
    //console.log(cl)
    
    //var a = ['-L2jps1ecPGXzHvef7_7', '-L2jps1p_twnjNs6PYOR', '-L2jps1qfJ6SQGdIUOon', '-L2jps1rFndszWW7lQNO', '-L2jps1rFndszWW7lQNP']
    var a = ['-L2jps1ecPGXzHvef7_7', '-L2jps1p_twnjNs6PYOR']
    const b = a.map(id => { return firebase.database().ref('cclist/'+id).once('value').then(snapshot => {return snapshot.val()}) })
    const c = Promise.all(b).then(d => {
      console.log(d)
    })
    
//  function loadVideosParallel(videoIds, callback) {
//   Promise.all(
//     videoIds.map(id => {
//       console.log('send request '+id);
//       return db.child('videos').child(id).once('value')
//       .then(snapshot => {
//         console.log('got response '+id);
//         return snapshot;
//       })
//     })
//   ).then(r => callback());
// }
    
    
  })
}
//getJson();
findJson();
console.log('end getting json')
