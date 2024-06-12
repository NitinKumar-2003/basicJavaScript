// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         randomNumber = Math.random();
//         if (randomNumber > 0.5){
//             resolve('',randomNumber);
//         }else{
//             reject('Invalid Number');
//         }
//     },2000);

// });

// p1
// .then(message => {
//     console.log(`Success: ${message}');
// })
// .catch(error => {
//     console.log(`Failure: ${error}`);
// });


// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() =>resolve("Step 1"), 500);

// });


// promise
//     .then((result)=> {
//     console.log(result);
//     throw new Error("Something went wrong");
//     return result;
// })
//     .then((result)=> {
//      console.log(result);
//     })
//     .catch((error)=> {
//     console.error(error.message);
//     });


function getUser() {
return new Promise ((resolve) => {
setTimeout(() => resolve({ id: 1, name: "John Doe" }), 200);
});
}
function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout (() => resolve( ["Orderl", "Order2"]), 300);
});
}
    function getorderdetails(orderid) {
    return new Promise((resolve) => {
    setTimeout(() => resolve({ orderid, details: "Order details" }), 100);
});
}

getUser()
    .then((user)=> {
        console.log("User", user);
        return getOrders(user.id);
    })
    .then((orders)=> {l;
        console.log("Orders", orders);
        return getorderdetails(orders[0]);
    })
    .then((orderDetails) =>{
        console.log("Order details", orderDetails);
    })
    .catch((error)=>{
        console.error("Error:", error.message);
    });
    