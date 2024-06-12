let foodOrder = ["Pizza", "Burger", "Coca Cola"];

//First function create order!

let createOrder = (foodOrder) => {
    if (foodOrder.length >1){
        let p1 = new Promise((resolve, reject) => {
            resolve("Order create, orderId: 1234");
        })
    }
};

let proceedToPayment = (createOrder, confirmationOrder) => {};

let confirmationOrder = () => {};
