import chaiModule from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import axios from "axios";
import sinon from "sinon";

import app from "../server.js";
const expect = chaiModule.expect;
const assert = chaiModule.assert;

dotenv.config();
const chai = chaiModule.use(chaiHttp);


describe("payment gateway test", () => {


    describe('API verification test', () => {
        it("should return 400 bad request", (done) => {
            const mResponse = { statusCode: 400, body: {message: "amount required1"} };
            const mRp = sinon.stub(axios, "post").callsFake(() =>  mResponse)
            const res = axios.post(`${process.env.BASE_URL}/eavo/donation/pay`)
                sinon.assert.calledOnce(mRp);
                expect(res.statusCode).to.be.equal(400);
                expect(res).to.have.property("body");
                expect(res.body).to.have.property("message");
                expect(res.body.message).to.be.equal("amount required1")
                done();
                mRp.restore();
        })
    
        it.skip("should return 401 unaouthrized", (done) => {
            chai.request.execute("https://api.chapa.co")
                .post('/v1/transaction/initialize')
                .set("Authorization", "Bearer Invalid token")
                .send()
                .end((_err, res) => {
                    expect(res).to.have.status(401);
                    expect(res.body).to.have.property('message');
                })
                done();
                
        })
    })
    
    
    describe("request parameter validation", () => {
        it("first_name not manadatory", (done) => {
            chai.request.execute(app)
                .post("/eavo/donation/pay")
                .send({
                    last_name: "test",
                    amount: 10,
                    currency: "USD",
                    email: "test@gmail.com",
                })
                .end((_err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("checkout_url");
                })
                done();
        })
    
        it("last name not mandatory", (done) => {
            chai.request.execute(app)
                .post("/eavo/donation/pay")
                .send({
                    first_name: "test",
                    amount: 10,
                    currency: "USD",
                    email: "test@gmail.com",
                })
                .end((_err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("checkout_url");
                })
                done();
        })
    
        it("amount is needed", (done) => {
            chai.request.execute(app)
            .post("/eavo/donation/pay")
            .send({
                first_name: "test",
                last_name: "test",
                currency: "USD",
                email: "test@gmail.com",
            })
            .end((_err, res) => {
                expect(res.statusCode).to.be.equal(400);
                expect(res.body).to.have.property("message");
            })
            done();
        })
    
        it("email is needed", (done) => {
            chai.request.execute(app)
            .post("/eavo/donation/pay")
            .send({
                first_name: "test",
                last_name: "test",
                amount: 10,
                currency: "USD",
            })
            .end((_err, res) => {
                expect(res.statusCode).to.be.equal(400);
                expect(res.body).to.have.property("message");
            })
            done();
        })
    
        it("default currency is ETB", (done) => {
            chai.request.execute(app)
            .post("/eavo/donation/pay")
            .send({
                first_name: "test",
                last_name: "test",
                amount: 10,
                email: "test@test.com"
            })
            .end((_err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("checkout_url");
            })
            done();
        })
    })
    
    describe("Amount handling", () => {
      it("amount with decimal", (done) => {
        chai.request.execute(app)
        .post("/eavo/donation/pay")
        .send({
            first_name: "test",
            last_name: "test",
            amount: 10.5,
            currency: "USD",
            email: "test@test.com"
        })
        .end((_err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("checkout_url");
        })
        done();
      })  
    
      it("non integer amount returns 400", (done) => {
        chai.request.execute(app)
        .post("/eavo/donation/pay")
        .send({
            first_name: "test",
            last_name: "test",
            amount: "ten",
            currency: "USD",
            email: "test@test.com"
        })
        .end((_err, res) => {
            expect(res.statusCode).to.be.equal(400);
            expect(res.body).to.have.property("message");
            expect(res.body.message).to.be.equal("amount must be integer");
        })
        done();
      })
    
      it("amount <=0 returns 400", (done) => {
        chai.request.execute(app)
        .post("/eavo/donation/pay")
        .send({
            first_name: "test",
            last_name: "test",
            amount: 0,
            currency: "USD",
            email: "test@test.com"
        })
        .end((_err, res) => {
            expect(res.statusCode).to.be.equal(400);
            expect(res.body).to.have.property("message");
            expect(res.body.message).to.be.equal("amount must be greater than 0");
        })
    
        chai.request.execute(app)
        .post("/eavo/donation/pay")
        .send({
            first_name: "test",
            last_name: "test",
            amount: -20,
            currency: "USD",
            email: "test@test.com"
        })
        .end((_err, res) => {
            expect(res.statusCode).to.be.equal(400);
            expect(res.body).to.have.property("message");
            expect(res.body.message).to.be.equal("amount must be greater than 0");
        })
        done();
      })
    })
    
    describe("callback url handling", () => {
        it("callback url returns status pending", (done) => {
    
            chai.request.execute(app)
            .post("/eavo/donation/pay")
            .send({
                first_name: "test",
                last_name: "test",
                amount: 10,
                currency: "USD",
                email: "test@gmail.com",
            })
            .end((_err, res) => {
                chai.request.execute(app)
                    .get(`/eavo/donation/verify/${res.body.tx_ref}`)
                    .send()
                    .end((_err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property("status");
                        expect(res.body.status).to.be.equal("pending");
                    })
            })
            done();
        })
    })
})