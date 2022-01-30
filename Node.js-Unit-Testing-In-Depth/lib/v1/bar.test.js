const chai = require('chai');
const expect = chai.expect;

describe('bar test js' , () => {
    it('some test for bar.js file' , () => {
        expect(2).to.equal(2);
    });
    
    it('a pending test for bar.js file')

    it('it should work for development mode' , () => {
    
        expect(1).to.exist;
        if(process.env.NODE_ENV === 'development') {
            console.log("Env:" , process.env.NODE_ENV);
        }
    })
})