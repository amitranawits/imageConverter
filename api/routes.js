'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/getImage')
       .get(controller.convertFile);
   app.route('/saveImage')
       .post(controller.saveFile);
};