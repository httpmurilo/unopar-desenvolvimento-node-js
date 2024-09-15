const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../web/server.js'); 

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes de Integração para o Servidor HTTP', () => {
  it('should GET / and return Hello World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });

  it('should POST /data and return sucess message with data', (done) => {
    const jsonData = { nome: 'Murilo', idade: 27 };

    chai.request(app)
      .post('/data')
      .send(jsonData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Sucesso!');
        expect(res.body.data).to.deep.equal(jsonData);
        done();
      });
  });
});
