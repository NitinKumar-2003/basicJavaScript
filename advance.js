var addSix = createBase(10);

addSix(20);
addSix(31);

function createBase(x){
    return function addSix(y){
        console.log(x+y);
    }
}