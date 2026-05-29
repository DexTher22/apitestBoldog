import request from "supertest"
import { expect } from "chai"
import app from "../app/app.js"

describe('/employees', () => {
    it('GET /employees', async () =>{
        const res = await request(app)
            .get('/employees')
        expect(res.body.data).to.be.an('array')
        expect(res.body.data).to.have.length.at.least(1)
        expect(res.body.data[0]).to.have.property('id')
    })
})