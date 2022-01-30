const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

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
        it('should add with a promise callback' , (done) => {
            demo.addPromise(1,2).then(result => {
               expect(result).to.equal(3);
               done();
            }).catch((er) => {
                console.log('Catch error');
                done(er);
            }); 
        });

        it('test promise again' , () => {
            //if you do not use catch block to catch any error , any errors will be passed without throwing errors
            demo.addPromise(1,2).then(result => {
                expect(result).to.equal(3);
            });
        });

        //using async await to test promise
        it('should test promise with async await' , async() => {
            let result = await demo.addPromise(4,4);
            expect(result).to.equal(8);
        });

        it('should test promise with chai as promised' , async() => {
            await expect(demo.addPromise(1,2)).to.eventually.equal(3);
        });
    });
});