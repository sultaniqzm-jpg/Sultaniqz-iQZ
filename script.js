
function goProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}



function buyProduct(productName, price, image){

    openOrder(
        productName,
        price,
        image
    );

}



function contactAdmin(){

    window.open(
        "https://wa.me/02054631734",
        "_blank"
    );

}



function searchProducts(){

    const input =
    document.getElementById("search")
    .value
    .toLowerCase();


    const products =
    document.querySelectorAll(".product");


    products.forEach(product => {

        const text =
        product.innerText.toLowerCase();


        if(text.includes(input)){

            product.style.display = "block";

        }else{

            product.style.display = "none";

        }

    });

}



// =================
// ເມນູ
// =================

function openMenu(){

    document
    .getElementById("sideMenu")
    .classList.add("active");

}



function closeMenu(){

    document
    .getElementById("sideMenu")
    .classList.remove("active");

}



// =================
// ລະບົບສັ່ງຊື້
// =================

let qty = 1;

let currentPrice = 0;



function openOrder(name, price, image){


    document.getElementById("orderPopup").style.display = "block";


    document.getElementById("orderName").innerHTML = name;


    document.getElementById("orderPrice").innerHTML = price;


    document.getElementById("orderImage").src = image;



    currentPrice =
    Number(price.replace(/[^\d]/g,""));



    qty = 1;


    document.getElementById("qty").innerHTML = qty;


    updateTotal();

}



function closeOrder(){


    document.getElementById("orderPopup").style.display = "none";


    qty = 1;


    document.getElementById("qty").innerHTML = qty;


    updateTotal();

}



function plusQty(){


    qty++;


    document.getElementById("qty").innerHTML = qty;


    updateTotal();

}



function minusQty(){


    if(qty > 1){

        qty--;

    }


    document.getElementById("qty").innerHTML = qty;


    updateTotal();

}



function updateTotal(){


    let total = currentPrice * qty;


    document.getElementById("totalPrice").innerHTML =
    "฿" + total;


}
// =================
// ລະບົບຊຳລະເງິນ
// =================


function openPayment(){

    document
    .getElementById("paymentModal")
    .style.display = "flex";

}



function closePayment(){

    document
    .getElementById("paymentModal")
    .style.display = "none";

}



function showPayment(){

    document
    .getElementById("orderPopup")
    .style.display = "none";


    document
    .getElementById("paymentModal")
    .style.display = "flex";

}



function closePaymentBox(){

    document
    .getElementById("paymentModal")
    .style.display = "none";

}



// =================
// ເມນູຊ້ຳ (ກັນກົດ)
// =================


function openMenu(){

    document
    .getElementById("sideMenu")
    .classList.add("active");

}



function closeMenu(){

    document
    .getElementById("sideMenu")
    .classList.remove("active");

}



// =================
// ເລື່ອນໄປຫາສິນຄ້າ
// =================


function scrollProducts(){

    document
    .getElementById("products")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// =================
// ຕິດຕໍ່ຮ້ານ
// =================


function facebook(){

    window.open(
        "https://www.facebook.com/Sultaniqz",
        "_blank"
    );

}



function whatsapp(){

    window.open(
        "https://wa.me/02054631734",
        "_blank"
    );

}
// =================
// ປິດ Popup ເມື່ອກົດນອກກ່ອງ
// =================

window.onclick = function(event){

    let payment =
    document.getElementById("paymentModal");


    let order =
    document.getElementById("orderPopup");


    if(event.target == payment){

        payment.style.display = "none";

    }


    if(event.target == order){

        order.style.display = "none";

    }

}



// =================
// ເລີ່ມຕົ້ນເວັບ
// =================

document.addEventListener(
"DOMContentLoaded",
function(){

    

    let order =
    document.getElementById("orderPopup");


    if(order){

        order.style.display = "none";

    }


    let qr =
    document.getElementById("qrPopup");


    if(qr){

        qr.style.display = "none";

    }


    let success =
    document.getElementById("paymentSuccess");


    if(success){

        success.style.display = "none";

    }

});


// =================
// QR PAYMENT
// =================

function showQR(){

    let name =
    document.getElementById("orderName");

    let qty =
    document.getElementById("qty");

    let total =
    document.getElementById("totalPrice");


    if(document.getElementById("qrName")){
        document.getElementById("qrName").innerHTML = name.innerHTML;
    }


    if(document.getElementById("qrQty")){
        document.getElementById("qrQty").innerHTML = qty.innerHTML;
    }


    if(document.getElementById("qrTotal")){
        document.getElementById("qrTotal").innerHTML = total.innerHTML;
    }


    let qrPopup =
    document.getElementById("qrPopup");


    if(qrPopup){

        qrPopup.style.display = "flex";

    }

}


function closeQR(){

    let qrPopup =
    document.getElementById("qrPopup");


    if(qrPopup){

        qrPopup.style.display = "none";

    }

}


// =================
// HISTORY ORDER
// =================

function openHistory(){

    let history =
    document.getElementById("historyPage");


    if(history){

        history.style.display = "flex";

    }

}


function closeHistory(){

    let history =
    document.getElementById("historyPage");


    if(history){

        history.style.display = "none";

    }

}
function openHistory(){
    document.getElementById("historyPage").style.display="block";
}

function closeHistory(){
    document.getElementById("historyPage").style.display="none";
}

