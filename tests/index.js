const App = require('yeps');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const cookies = require('..');
const expect = chai.expect;

chai.use(chaiHttp);
let app;

describe('YEPS cookies parser', async () => {

    beforeEach(() => {
        app = new App();
        app.all([cookies()]);
    });

    it('should test empty cookies', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;

        app.then(async ctx => {
            isTestFinished1 = true;

            expect(ctx.request.cookies).to.be.empty;

            ctx.res.statusCode = 200;
            ctx.res.end();
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .then(res => {
                expect(res).to.have.status(200);
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

    it('should test cookies parser', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;

        app.then(async ctx => {
            isTestFinished1 = true;

            expect(ctx.request.cookies).to.be.not.empty;
            expect(ctx.request.cookies).is.a('object');
            expect(ctx.request.cookies).to.have.property('data');
            expect(ctx.request.cookies.data).to.be.not.empty;
            expect(ctx.request.cookies.data).to.be.equal('test');

            ctx.res.statusCode = 200;
            ctx.res.setHeader('Set-Cookie', 'data=test');
            ctx.res.end('');
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .set('Cookie', 'data=test;test=test')
            .send()
            .then(res => {
                expect(res).to.have.status(200);
                expect(res).to.have.cookie('data');
                expect(res).to.have.cookie('data', 'test');
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

});
