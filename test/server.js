process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
var should = require('chai').should();
const path = require("path");


chai.use(chaiHttp);

describe('Images', () => {
    
  describe('/GET getImage', () => {
      it('getting image with change extenson', (done) => {
        chai.request(server)
            .get('/getImage?name=test.png&type=name&ext=jpeg')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/POST saveImage', () => {
      it('saving image', (done) => {
        chai.request(server)
            .post('/saveImage')
            .field('customKey', 'customValue')
            .attach('files', './testImage/test1.png', 'test1.png')
            .end((err, res) => {
                  res.should.have.status(200);
                   res.body.should.be.a('object');
              done();
            });
      });

  });
});