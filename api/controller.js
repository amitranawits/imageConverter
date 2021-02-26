'use strict';

var service = require('../service');
const path = require("path");
const fs = require('fs')
const stream = require('stream')

var controllers = {
    saveFile: function(req, res) {
       service.saveImage.uploadFile(req, res, function(err, dist) {
            if (err) {
                res.send(err);
            }
            else {
                res.status(200).send({status: 200, message: dist});
            }
        });
    },
    convertFile: async function(req, res) {
        try {
            const pathToImg = await service.imageConverter.convertFile(req);
            // fs.readFile(path.join(__dirname, pathToImg), (err, data) => {
            //     res.status(200).send(data.toString());
            //  });

            const r = fs.createReadStream(path.join(__dirname, pathToImg)) 
            const ps = new stream.PassThrough()
            stream.pipeline(
            r,
            ps, 
            (err) => {
                if (err) {
                console.log(err) 
                return res.sendStatus(400); 
                }
            })
            ps.pipe(res) 


            //return res.sendFile(path.join(__dirname, pathToImg));
        }
        catch (err){
            res.send(err);
        }
    },
};

module.exports = controllers;