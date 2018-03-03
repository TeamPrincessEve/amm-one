// https://firebase.googleblog.com/2017/04/easier-configuration-for-firebase-on-web.html

const fbcli = require('/usr/lib/node_modules/firebase-tools');
const fs = require('fs');

// by default, uses the current project and logged in user
fbcli.setup.web().then(config => {
  fs.writeFileSync(
    'scripts/initFirebase.js',
    `firebase.initializeApp(${JSON.stringify(config)});`
  );
});