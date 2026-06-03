function updateTime(){

let now = new Date();

let lastUpdate =
document.getElementById("lastUpdate");

if(lastUpdate){

lastUpdate.innerHTML =
"Last Updated: " + now.toLocaleString();

}

}

updateTime();

setInterval(updateTime,30000);

function generateOrderCode(){

let code =
"IMPORD" + Date.now();

let orderCode =
document.getElementById("orderCode");

if(orderCode){

orderCode.innerHTML =
"Order Code : " + code;

}

}

function toggleMenu(){

let navbar =
document.getElementById("navbar");

if(navbar){

navbar.classList.toggle("active");

}

}

function bookingSuccess(){

let bookingMessage =
document.getElementById("bookingMessage");

if(bookingMessage){

bookingMessage.innerHTML =
"Booking request submitted successfully. Our team will contact you shortly.";

}
}



