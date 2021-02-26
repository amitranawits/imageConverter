var multer = require('multer');
var uuid = require('uuid');
var filename = uuid.v4();

//Current folder for storing is Image
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Images");
    },
    filename: function(req, file, callback) {
        callback(null, filename  + '_' + file.originalname);
    }
});
// Limit 10
var upload = multer({
    storage: Storage
}).array("files", 10);

var saveImage = {
    uploadFile: function(req, res, next) {
        upload(req, res, function(err) {
            if (err) {
                console.log(err, '======')
                return res.end("Something went wrong!");
            }
            return res.send("File uploaded sucessfully!.");
        });
    }
};

module.exports = saveImage;