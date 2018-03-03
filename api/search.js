'use strict';
var fn = require('../functions');
var express = require('express');
//var multer  = require('multer')();
var bodyParser = require('body-parser');
const sc = require('../server-const');
const db = require('../db');

var router = express.Router();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, fn.ccSearch);

// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
// })

//router.all('/all', multer.array(), function(req, res, next) {

// router.post('/', urlencodedParser, function(req, res) {
// console.log(req.body.tg);
//     if (!req.body.tg) {
//         res.status(sc.codeSuccess);
//         res.json({});
//     } else if (req.body.tg == "getallfortest") {
//         const text = 'SELECT * FROM account';
//         db.query(text, (err, ret) => {
//             if (err) {
//                 res.status(sc.codeError);
//                 res.json({ message: sc.msgError });
//                 next(err);
//                 //return next(err);
//             } else {
// console.log(ret.rows);
//                 res.status(sc.codeSuccess);
//                 res.json({ "items": ret.rows });
//             }
//         });
//     } else {
//         var kw = req.body.tg.replace(/%/g, '').trim();
//         if (kw) {
//             const text = "SELECT * FROM account WHERE name LIKE '%' || $1 || '%' OR description LIKE '%' || $1 || '%'";
//             const values = [kw];
//             db.query(text, values, (err, ret) => {
//                 if (err) {
//                     res.status(sc.codeError);
//                     res.json({ message: sc.msgError });
//                     next(err);
//                     //return next(err);
//                     //if (process.env.NODE_ENV != "production") console.log(err);
//                 } else {
// console.log(ret.rows);
//                     res.status(sc.codeSuccess);
//                     res.json({ "items": ret.rows });
//                 }
//             });
//         } else {
//             res.status(sc.codeSuccess);
//             res.json({});
//         }


//     }

    
    
// });

module.exports = router;