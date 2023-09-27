const cart = document.getElementById("cart");
const before = document.getElementById("before");
const service = document.getElementById("service");
const after = document.getElementById("after");
const h3 = document.getElementById("result");
const h4 = document.getElementById("warning");
const button = document.getElementById("button");
const resetButton = document.getElementById("reset");


button.addEventListener('click', function() {
    let cartSerial = cart.value;
    let beforeQuan = before.value;
    let serviceQuan = service.value;
    let afterQuan = after.value;


    function convert () {
        pintsService = (afterQuan - beforeQuan) / 16; 
        return pintsService;

    }

    function final () {
        finalService = (serviceQuan - convert()) / 2;
        if (finalService > 0) {
            h3.innerHTML = "Replenished " + finalService + " quarts" + " from cart " + cartSerial;
            h4.innerHTML = "Remember! Above 8 Quarts = Not Serviceable!"
        }
    }

    final();

});

resetButton.addEventListener('click', function () {
    cart.value = '';
    before.value = '';
    service.value = '';
    after.value = '';
    h3.innerHTML = '';
    h4.innerHTML = '';
})
