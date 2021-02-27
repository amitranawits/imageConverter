
const Jimp = require('jimp');
const path = require("path");
const fs = require('fs');

// We can change size 
const convertFileExt = async (url, id, ext) => {
    return new Promise((resolve, reject) => {
        Jimp.read(url)
        .then(lenna => {
            return resolve(lenna
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write(path.join(__dirname,`../images/${id}.${ext}`))); // save
        })
        .catch(err => {
            reject(err);
        });
    }) 
}
const getFileFromFolder = (id) => {
  const files = fs.readdirSync(path.join(__dirname,`../images`));
  const filename = files.find((file) => {
    return file.includes(id);
  });
  return filename;
}

var imageConverter = {
    convertFile: async function(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const file = await getFileFromFolder(req.query.id);
                await convertFileExt(path.join(__dirname, `../images/${file}`), req.query.id, req.query.ext)
                return resolve(`../images/${req.query.id}.${req.query.ext}`);
            }
            catch(err) {
                return reject(err)
            }
        });
    }
};

module.exports = imageConverter;