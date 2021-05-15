const expect = require('chai').expect;
const request = require('request');

describe('Color code Converter API', () => {

  describe('RGB to Hex conversion', () => {
    const url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it('returns status 200', () => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      })
    })

    it('returns the color in hex', () => {
      request(url, (error, response, body) => {
        expect(body).to.equal('ffffff');
        done();
      })
    })

  })

  describe('Hex to RGB conversion', () => {
    let url = "http://localhost:5000/hexToRgb?hex=00ff00";

    it('returns status 200', () => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      })
    });

    it('returns the color in RGB', () => {
      request(url, (error, response, body) => {
        expect(body).to.equal('[0,255,0]');
        done();
      })
    })

  })

})