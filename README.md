
### This repository is just for testing perpose



---

# node-js-sample

A image storage Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:amitranawits/imageConverter.git # or clone your own fork
cd imageConverter
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


## Running test cases

Sample file is in testImage folder
npm test will pick the image from testImage folder, add new key with image name and place it to Images folder with new extenstion giver in params.

```sh
npm test
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


## Documentation

Two api's are there

- GET image
/image?name=test.png&type=name&ext=jpeg
type can be url or name 
ext can be any extension jpeg, png etc 
name should be image name

- POST image

files = multiple files