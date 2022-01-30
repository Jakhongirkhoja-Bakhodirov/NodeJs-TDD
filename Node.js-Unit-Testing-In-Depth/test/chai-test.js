const chai = require('chai');

const expect = chai.expect;

describe('chai test' , () => {
    it('should compare some values' , () => {
        expect(1).to.equal(1);
    });

    it('a pending test');

    it('should to one more times testing' , () => {
       expect({name:'foo'}).to.deep.equal({name:'foo'});
       expect({name:'name'}).to.have.property('name')
       expect({name:'name'}).to.have.property('name').to.equal('name');
       expect(5>9).to.be.false; 
       expect(9>10).to.be.false;
       expect({}).to.be.a('object');
       expect('0').to.be.a('string');
       expect(1).to.be.a('number');
       expect('bar').to.be.a('string').with.lengthOf('3');
       expect([1,3,2].length).to.be.equal(3);
       expect(1).to.exist;
       expect(undefined).to.not.exist;
       expect(null).to.be.null;

    });
});