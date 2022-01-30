const chai = require('chai');
const expect = chai.expect;

const demo = require('./demo');

describe('demo' , () => {
    context('add' , () => {
        it('should add two numbers' , ()=>{
            expect(demo.add(1,2)).to.equal(3);
        });
    });

    context('callback add' , () => {
        it('should test the callback' , (done) => {
            demo.addCallback(1,2,(err,result) => {
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done();
            });
        })
    });

    context('test promise' , () => {
        // it('should add with a promise callback' , (done) => {
        //     demo.addPromise(1,0).then(result => {
        //        expect(result).to.equal(3);
        //        done();
        //     }).catch((er) => {
        //         console.log('Catch error');
        //         done(er);
        //     }); 
        // });
        it('test promise again' , () => {
            //if you do not use catch block to catch any error , any errors will be passed without throwing errors
            demo.addPromise(1,2).then(result => {
                expect(result).to.equal(3);
            });
        });
    });
});