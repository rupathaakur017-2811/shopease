
const headphonePrice = 1499;
const watchPrice = 1399;
const shirtPrice = 1099;
const shoesPrice = 2099;
const sunglassesPrice = 1599;
const boardPrice = 1499;

let headphoneQuantity = 0;
let watchQuantity = 0;
let shirtQuantity = 0;
let shoesQuantity = 0;
let sunglassesQuantity = 0;
let boardQuantity = 0;
let countCart = 0;
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function addToCart(product) {
    if (product === "headphone") {
        headphoneQuantity++;
        document.getElementById("product").innerText = "Headphone";

        document.getElementById("price").innerText = "₹" + headphonePrice;

        document.getElementById("headphoneQuantity").innerText = headphoneQuantity;
    }
    if (product === "watch") {

        watchQuantity++;

        document.getElementById("productt").innerText =
            "Smart Watch";

        document.getElementById("pricee").innerText =
            "₹" + watchPrice;

        document.getElementById("watchQuantity").innerText =
            watchQuantity;

    }
    if (product === "shirt") {

        shirtQuantity++;

        document.getElementById("producta").innerText =
            "T-Shirt";

        document.getElementById("pricea").innerText =
            "₹" + shirtPrice;

        document.getElementById("shirtQuantity").innerText =
            shirtQuantity;

    }
    if (product === "shoes") {

        shoesQuantity++;

        document.getElementById("productb").innerText =
            "Shoes";

        document.getElementById("priceb").innerText =
            "₹" + shoesPrice;

        document.getElementById("shoesQuantity").innerText =
            shoesQuantity;

    }
    if (product === "sunglasses") {

        sunglassesQuantity++;

        document.getElementById("productc").innerText =
            "Sunglasses";

        document.getElementById("pricec").innerText =
            "₹" + sunglassesPrice;

        document.getElementById("sunglassesQuantity").innerText =
            sunglassesQuantity;

    }
    if (product === "board") {

       boardQuantity++;

        document.getElementById("productd").innerText =
            "Keyboard";

        document.getElementById("priced").innerText =
            "₹" + boardPrice;

        document.getElementById("boardQuantity").innerText =
            boardQuantity;

    }
    countCart++;

    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function increaseHeadphone() {

    headphoneQuantity++;

    countCart++;


    document.getElementById("headphoneQuantity").innerText =
        headphoneQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseHeadphone() {

    if (headphoneQuantity > 0) {

        headphoneQuantity--;

        countCart--;

    }


    document.getElementById("headphoneQuantity").innerText =
        headphoneQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetHeadphone() {

    countCart -= headphoneQuantity;

    headphoneQuantity = 0;


    document.getElementById("headphoneQuantity").innerText =
        headphoneQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function increaseWatch() {

    watchQuantity++;

    countCart++;


    document.getElementById("watchQuantity").innerText =
        watchQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseWatch() {

    if (watchQuantity > 0) {

        watchQuantity--;

        countCart--;

    }


    document.getElementById("watchQuantity").innerText =
        watchQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetWatch() {

    countCart -= watchQuantity;

    watchQuantity = 0;


    document.getElementById("watchQuantity").innerText =
        watchQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function increaseShirt() {

    shirtQuantity++;

    countCart++;


    document.getElementById("shirtQuantity").innerText =
        shirtQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseShirt() {

    if (shirtQuantity > 0) {

        shirtQuantity--;

        countCart--;

    }


    document.getElementById("shirtQuantity").innerText =
        shirtQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetShirt() {

    countCart -= shirtQuantity;

    shirtQuantity = 0;


    document.getElementById("shirtQuantity").innerText =
        shirtQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}

function increaseShoes() {

    shoesQuantity++;

    countCart++;


    document.getElementById("shoesQuantity").innerText =
        shoesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseShoes() {

    if (shoesQuantity > 0) {

        shoesQuantity--;

        countCart--;

    }


    document.getElementById("shoesQuantity").innerText =
        shoesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetShoes() {

    countCart -= shoesQuantity;

    shoesQuantity = 0;


    document.getElementById("shoesQuantity").innerText =
        shoesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function increaseSunglasses() {

    sunglassesQuantity++;

    countCart++;


    document.getElementById("sunglassesQuantity").innerText =
       sunglassesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseSunglasses() {

    if (sunglassesQuantity > 0) {

        sunglassesQuantity--;

        countCart--;

    }


    document.getElementById("sunglassesQuantity").innerText =
        sunglassesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetSunglasses() {

    countCart -= sunglassesQuantity;

    sunglassesQuantity = 0;


    document.getElementById("sunglassesQuantity").innerText =
       sunglassesQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function increaseBoard() {

   boardQuantity++;

    countCart++;


    document.getElementById("boardQuantity").innerText =
        boardQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function decreaseBoard() {

    if (boardQuantity > 0) {

       boardQuantity--;

        countCart--;

    }


    document.getElementById("boardQuantity").innerText =
       boardQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}
function resetBoard() {

    countCart -= boardQuantity;

    boardQuantity = 0;


    document.getElementById("boardQuantity").innerText =
        boardQuantity;


    document.getElementById("countCart").innerText =
        countCart;


    calculateTotal();

}


function calculateTotal() {

    let headphoneTotal =
        headphoneQuantity * headphonePrice;


    let watchTotal =
        watchQuantity * watchPrice;

    let shirtTotal =
        shirtQuantity * shirtPrice;

    let shoesTotal =
        shoesQuantity * shoesPrice;


    let sunglassesTotal =
        sunglassesQuantity * sunglassesPrice;

    let boardTotal =
       boardQuantity * boardPrice;

    let total =
        headphoneTotal + watchTotal + shirtTotal + shoesTotal + sunglassesTotal + boardTotal;


    document.getElementById("totalPrice").innerText =
        total;

}
