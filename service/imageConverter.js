const { promises } = require('fs');
var Jimp = require('jimp');
const path = require("path");

// We can change size 
const convertFileExt = async (url, name, ext) => {
    return new Promise((resolve, reject) => {
        Jimp.read(url)
        .then(lenna => {
            return resolve(lenna
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write(path.join(__dirname,`../Images/${name.split(path.extname(name).slice(1))[0]}${ext}`))); // save
        })
        .catch(err => {
            reject(err);
        });
    }) 
}

var imageConverter = {
    convertFile: async function(req) {
        return new Promise(async (resolve, reject) => {
            let url;
            if(req.query.type == 'URL'){
                url = req.query.name;
            }
            else {
                url = path.join(__dirname, `../Images/${req.query.name}`);
            }
            try {
                if(req.query.ext){
                    await convertFileExt(url, req.query.name, req.query.ext)
                    return resolve(`../Images/${req.query.name.split(path.extname(req.query.name).slice(1))[0]}${req.query.ext}`);
                }
                else {
                    return resolve(`../Images/${req.query.name}`);
                }
            }
            catch(err) {
                return reject(err)
            }
        });
    }
};

module.exports = imageConverter;