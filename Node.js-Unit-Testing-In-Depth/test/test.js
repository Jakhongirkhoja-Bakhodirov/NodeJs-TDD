const assert = require('assert');

describe('file to be tested' , () => {
    context('function to be tested' , () => {
        before(() => {
            console.log('Before test!');
        });

        after(() => {
            console.log('After test!');
        });

        beforeEach(() => {
            console.log('--beforeEach');
        });

        
        afterEach(() => {
            console.log('--afterEach');
        });

        it('should do something' , () => {
            assert.equal(1,1);
        });

        it('should do something else' , () => {
            assert.deepEqual({name:'John'} , {name:'John'});
        });

        it('this is a pending test');
    });


    context('another function' , () => {
        it('should to something with another function' , () => {

        });
    });
});