import listener from '../src';
import chai = require('chai');
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('API', () => {
    it('Not Found', async () => {
        const res = await request(listener)
            .get('/notFound')
            .send();

        expect(res).to.have.status(200);
        expect(res).to.have.header('Cache-Control', 'no-cache');
        expect(res.text).to.equal('<p>404 Not Found</p>');
    });
});