const run = (n) => {
    if(n===1){
        return 1
    }else {
        return n* run(n-2)
    }
};
console.log(run(900))