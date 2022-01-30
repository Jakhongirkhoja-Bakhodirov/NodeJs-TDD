exports.add = (a,b) => {
    return a+b;
}

exports.addCallback = (a,b,callback) => {
    setTimeout(() => {
        return callback(null , a + b); 
    },500);
};

exports.addPromise = (a,b) => {
    // if(b === 0) {
    //     console.log(b);
    //     return Promise.reject(new Error('Dividing to the zero'));
    // }
    return Promise.resolve(a+b);
}