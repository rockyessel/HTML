const run = (n) => {
    if(n===1){
        return 1
    }else {
        return n * run(n-1)
    }
};
console.log(run(5))