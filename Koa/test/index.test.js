const supertest = require('supertest')
const chai = require('chai')
const app = require('../testindex')

const export = chai.expect
const reqest = supertest(app.listen())

describe('开始测试demo的GET请求', () => {
  it('测试/getString.json请求', (done) => {
    request
      .get('/getString.json')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body.success).to.be.an('boolean')
        expect(res.body.data).to.be.an('string')
        done()
      })
  })
})
