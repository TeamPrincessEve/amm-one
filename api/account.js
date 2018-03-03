'use strict';

var express = require('express');
var multer  = require('multer')();
const sc = require('../server-const');
const db = require('../db');

var router = express.Router();

router.post('/c', multer.array(), function(req, res, next) {
    res.set({
        'AMP-Access-Control-Allow-Source-Origin': process.env.CCHOST
    });
    const text = 'INSERT INTO account(user_name,user_password,name,description,birth_date,address,contact_info,weblink,mobile_phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *';
    const values = ['', '', req.body.aname, req.body.adesc, null, req.body.aaddress, req.body.acontact, req.body.aweblink, ''];
    db.query(text, values, (err, ret) => {
        if (err) {
            res.status(sc.codeError);
            res.json({ message: sc.msgError });
            next(err);
            //return next(err);
            //if (process.env.NODE_ENV != "production") console.log(err);
        } else {
            res.status(sc.codeSuccess);
            res.json({ message: sc.msgSuccess, data: ret.rows[0] });
        }
    })
    
    
});

module.exports = router;