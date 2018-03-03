const firebase = require("firebase")
const bdata = require('./cc-amp-export.json')
const fse = require('fs-extra')

firebase.initializeApp({"apiKey":"AIzaSyBm-csDUazrYMkWT4URXpYYDpqmUZ1pbr0","databaseURL":"https://cc-amp.firebaseio.com","storageBucket":"cc-amp.appspot.com","authDomain":"cc-amp.firebaseapp.com","messagingSenderId":"771080220517","projectId":"cc-amp"})

function writeSampleData() {
//   firebase.database().ref('users/' + '2').set({
//     username: 'test222224444',
//     email: 'test2@email.com',
//     profile_picture : 'test2.img'
//   });
  firebase.database().ref('cclist').set({
    '20180113001': {
      name: 'รุ่งเจริญ รับเหมา 2518 ต่อเติม',
      description: 'บริการรับเหมาต่อเติม ภายนอกและภายใน ครบวงจร เราให้บริการทั้ง ปูกระเบื้อง ทาสี งานหลังคา เทพื้น ต่อเติมครัว ห้องนอน เรือนรับรอง ด้วยประสบการณ์ และการเอาใจใส่ ให้กับลูกค้าทุกคน',
      contact_info: 'ติดต่อสอบถามเพิ่มเติม หรือ นัดสำรวจหน้างาน โทร. 081-453-0004 ช่างกิติ 081-583-0011 รุ่งเจริญ',
      weblink: 'https://www.rungcharoen2518.com/'
    },
    '20180113002': {
      name: 'ช่างติ่ง',
      description: 'บริการ ต่อเติม บ้าน ที่จอดรถ ครัวปูน รับเหมาก่อสร้าง รับงาน ต่อเติม บ้าน ทาวเฮ้าส์ งานไฟฟ้า ประปา สี กระเบื้อง ย่าน รามอินทรา วัชรพล',
      contact_info: 'ช่าง ติ่ง 089-5081810'
    },
    '20180113003': {
      name: 'ช่างต่อ',
      description: 'รับเหมาต่อเติมบ้าน ถนัดงานต่อเติมห้องครัว การรีโนเวทบ้าน คอนโด ตึก และ ต่อเติมโกดัง ทำกันสาด และต่อเติมโรงรถ',
      contact_info: 'Facebook : รับเหมาต่อเติม by ช่างต่อ โทร. 081-824-4245 E-mail : kwittawatt@gmail.com'
    },
    '20180113004': {
      name: 'หจก.ภูมิภัทรพันธ์ 2008',
      description: 'รับต่อเติมบ้านชลบุรี ด้วยทีมงานช่างต่อเติมบ้าน เชี่ยวชาญเฉพาะทาง มีอุปกรณ์ทันสมัย ในการซ่อมบ้าน ต่อเติมบ้าน ใน ชลบุรี',
      contact_info: 'โทร. 064-2263649 Line ID : 0642263649'
    },
    '20180113005': {
      name: 'TOTAL HOME SOLUTION (THS)',
      description: 'งานสร้างบ้านครบวงจร งานออกแบบบ้าน งานสร้างบ้านใหม่ งานปรับปรุง ซ่อมแซม บำรุงรักษาบ้าน งานต่อเติมบ้าน งานแก้ปัญหาอาคารทรุด และงานปรับปรุงฐานราก งานซ่อมรอยแตกร้าว, รั่วซึม',
      contact_info: 'โทร. 662 753 0112 Mobile, Line : +6696 914 0497'
    },
    '20180113006': {
      name: 'สมศรี บริการ',
      description: 'จำหน่าย: แท้งค์น้ำสแตนเลส ปั๊มน้ำ, บริการ: ติดตั้งปั๊มน้ำ แท้งค์น้ำ ซ่อมปั๊มน้ำ, ตรวจสอบด้วยช่างที่มีประสบการณ์มืออาชีพ อะไหล่แท้ ฮิตาชิ มิตซู ITC กรุนต์ฟอส',
      contact_info: 'โทร. 089 054 0535'
    }
  });
  
}

function loadByPush() {
  var cclist = firebase.database().ref('cclist');
  cclist.push().set({
      name: 'รุ่งเจริญ รับเหมา 2518 ต่อเติม',
      description: 'บริการรับเหมาต่อเติม ภายนอกและภายใน ครบวงจร เราให้บริการทั้ง ปูกระเบื้อง ทาสี งานหลังคา เทพื้น ต่อเติมครัว ห้องนอน เรือนรับรอง ด้วยประสบการณ์ และการเอาใจใส่ ให้กับลูกค้าทุกคน',
      contact_info: 'ติดต่อสอบถามเพิ่มเติม หรือ นัดสำรวจหน้างาน โทร. 081-453-0004 ช่างกิติ 081-583-0011 รุ่งเจริญ',
      weblink: 'https://www.rungcharoen2518.com',
      tags: {
        'รับเหมา':true,
        'ต่อเติม':true,
        'ทาสี':true,
        'หลังคา':true
      }
  });
  cclist.push().set({
      name: 'ช่างติ่ง',
      description: 'บริการ ต่อเติม บ้าน ที่จอดรถ ครัวปูน รับเหมาก่อสร้าง รับงาน ต่อเติม บ้าน ทาวเฮ้าส์ งานไฟฟ้า ประปา สี กระเบื้อง ย่าน รามอินทรา วัชรพล',
      contact_info: 'ช่าง ติ่ง 089-5081810', 
      tags: {
        'ต่อเติม':true,
        'รับเหมา':true,
        'รามอินทรา':true,
        'วัชรพล':true
      }
  });
  cclist.push().set({
      name: 'ช่างต่อ',
      description: 'รับเหมาต่อเติมบ้าน ถนัดงานต่อเติมห้องครัว การรีโนเวทบ้าน คอนโด ตึก และ ต่อเติมโกดัง ทำกันสาด และต่อเติมโรงรถ',
      contact_info: 'Facebook : รับเหมาต่อเติม by ช่างต่อ โทร. 081-824-4245 E-mail : kwittawatt@gmail.com'
  });
  cclist.push().set({
      name: 'หจก.ภูมิภัทรพันธ์ 2008',
      description: 'รับต่อเติมบ้านชลบุรี ด้วยทีมงานช่างต่อเติมบ้าน เชี่ยวชาญเฉพาะทาง มีอุปกรณ์ทันสมัย ในการซ่อมบ้าน ต่อเติมบ้าน ใน ชลบุรี',
      contact_info: 'โทร. 064-2263649 Line ID : 0642263649'
  });
  cclist.push().set({
      name: 'TOTAL HOME SOLUTION (THS)',
      description: 'งานสร้างบ้านครบวงจร งานออกแบบบ้าน งานสร้างบ้านใหม่ งานปรับปรุง ซ่อมแซม บำรุงรักษาบ้าน งานต่อเติมบ้าน งานแก้ปัญหาอาคารทรุด และงานปรับปรุงฐานราก งานซ่อมรอยแตกร้าว, รั่วซึม',
      contact_info: 'โทร. 662 753 0112 Mobile, Line : +6696 914 0497'
  });
  cclist.push().set({
      name: 'สมศรี บริการ',
      description: 'จำหน่าย: แท้งค์น้ำสแตนเลส ปั๊มน้ำ, บริการ: ติดตั้งปั๊มน้ำ แท้งค์น้ำ ซ่อมปั๊มน้ำ, ตรวจสอบด้วยช่างที่มีประสบการณ์มืออาชีพ อะไหล่แท้ ฮิตาชิ มิตซู ITC กรุนต์ฟอส',
      contact_info: 'โทร. 089 054 0535'
  });
}
//writeSampleData();
loadByPush();
console.log('end');

function loadVideosSequential(videoIds) {
  if (videoIds.length > 0) {
    db.child('videos').child(videoIds[0]).once('value', snapshot => {
      if (videoIds.length > 1) {
        loadVideosSequential(videoIds.splice(1), callback)
      }
    });
  }
}

function loadVideosParallel(videoIds) {
  Promise.all(
    videoIds.map(id => db.child('videos').child(id).once('value'))
  );
}

// CREATE TABLE account_type (
//     account_type_id SERIAL PRIMARY KEY,
//     name            VARCHAR(100)
// );

// CREATE TABLE account (
//     account_id      SERIAL PRIMARY KEY,
//     user_name       VARCHAR(50),
//     user_password   VARCHAR(50),
//     name            VARCHAR(100),
//     description     VARCHAR(250),
//     birth_date      DATE,
//     address         VARCHAR(250),
//     contact_info    VARCHAR(250),
//     weblink         VARCHAR(250),
//     mobile_phone    VARCHAR(50),
//     account_type_id INTEGER REFERENCES account_type (account_type_id)
// );

// CREATE TABLE account_log (
//     account_log_id      SERIAL PRIMARY KEY,
//     account_log_type    VARCHAR(1),  --C R U D
//     event               VARCHAR(50),
//     event_desc          VARCHAR(250),
//     event_time          TIMESTAMP,
//     account_id          INTEGER REFERENCES account (account_id)
// );