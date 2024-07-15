import chaiModule from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import app from "../server.js";
const expect = chaiModule.expect;

dotenv.config();
const chai = chaiModule.use(chaiHttp);


describe('API verification test', () => {
    it("should return 400 bad request", (done) => {
        chai.request.execute(app)
            .post('/eavo/donation/pay')
            .send()
            .end((_err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('message');
            })
            done();
    })

    it("should return 401 unaouthrized", (done) => {
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
})