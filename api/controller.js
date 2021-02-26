'use strict';

var service = require('../service');
const path = require("path");
const { json } = require('body-parser');

var controllers = {
    saveFile: function(req, res) {
        console.log('here')
       service.saveImage.uploadFile(req, res, function(err, dist) {
            if (err)
                res.send(err);
            return res.send(dist);
        });
    },
    convertFile: async function(req, res) {
        try {
            const pathToImg = await service.imageConverter.convertFile(req);
            return res.sendFile(path.join(__dirname, pathToImg));
        }
        catch (err){
            res.send(err);
        }
    },
};

module.exports = controllers;