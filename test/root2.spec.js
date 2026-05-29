import request from "supertest"
import { expect } from "chai"
import app from "../app/app.js"

describe('A gyökér útvonal tesztelése', () => {
    it('GET /', (done) => {
        request(app)
            .get('/')
            .expect('Hello')
            .end(done)
    })
})