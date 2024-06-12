//p1

// y=1
// console.log(y)


// arr=[1,2,3,4,5,6,7,8,9];
// arr.sort((a, b ) => {
//     if (a>b) {
//         return 1;
//     }
//     else if (a == b){
//         return 0;
//     }
//     else {
//         return -1;
//     }
// });
// console.log(arr);



// const filterGreaterThanSix = (arr) => arr.filter(x => x > 6);
// return true;


// const inputArray = [1, 2, 3, 7, 8, 9, 10];
// const arr = filterGreaterThanSix(inputArray);
// console.log(arr); 

// arr.filter(x => x > 6);


arr=[1,2,3,4,5,6,7,8,9];
let sortedPrice = arr.filter((element, index, arr)=>{
    if (element> 6){
        return true;
    }
});
console.log(arr);
console.log(sortedPrice);