exports.add = (a,b) => {
    return a+b;
}

exports.addCallback = (a,b,callback) => {
    setTimeout(() => {
        return callback(null , a + b); 
    },500);
};

