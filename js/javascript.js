// let nombreAvtividad1 = 'Pilates'
// let vacantesActividad1 = 20

// let nombreActividad2 = 'Funcional'
// let vacantesActividad2 = 15

// let nombreActividad3 = 'Pesas'
// let vacantesActividad3 = 30

// function Actividad(nombre, cantidadInscriptos, vacantes){
//     this.nombre = nombre;
//     this.cantidadInscriptos = cantidadInscriptos;
//     this.vacantes = vacantes;
//     this.restarVacantes = function(cantidad){
//         this.vacantes -= cantidadInscriptos
//     }
// }

// let actividad1 = new Actividad("Pilates", 10, 20)
// let actividad2 = new Actividad("Funcional", 5, 15)
// let actividad3 = new Actividad("Pesas", 4, 30)

// let cantidadInscriptos = parseInt(prompt("Cuantas personas desea inscribir:"))
// for(let i = 0 ; i < cantidadInscriptos; i = i + 1){
//     let actividadInscripcion = prompt("ingrse la actividad que desea inscribirse: \n - Pilates\n - Funcional\n - Pesas")

//     if(actividadInscripcion == 'Pilates'){
//         let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad1.nombre + "que esta por inscribir:")
//         calculoVacantes(cantidadActividadInscripcion , actividad1.vacantes)
//         actividad1.restarVacantes(CantidadActividadInscripcion)
//     }
//     else if(actividadInscripcion == 'Funcional'){
//         let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad2.nombre + "que esta por inscribir:")
//         calculoVacantes(cantidadActividadInscripcion , actividad2.vacantes)
//         actividad2.restarVacantes(CantidadActividadInscripcion)
//     }
//     else if(actividadInscripcion == 'Pesas'){
//         let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad3.nombre + "que esta por inscribir:")
//         calculoVacantes(cantidadActividadInscripcion , actividad3.vacantes)
//         actividad3.restarVacantes(CantidadActividadInscripcion)
//     }
//     else{
//         alert("Esa actividad no se encuentra disponible, por favor selecciona otra disponible")
//     }
// }

// var l = localStorage;

// let input = document.querySelector('.input');
// let result = document.querySelector('#result');
// input.addEventListener('change', function () {
//     result.textContent =this.value;
// })

// first_name.addEventListener("focusOut", function(){
//     l.setItem("fn", first_name.value);
// })

// last_name.addEventListener("focusOut", function(){
//     l.setItem("ln", last_name.value);
// })

// phone.addEventListener("focusOut", function(){
//     l.setItem("ph", phone.value);
// })

// email.addEventListener("focusOut", function(){
//     l.setItem("em", phone.value);
// })

// function recuperarValores(){
//     first_name.value = l.getItem("fn");
//     last_name.value = l.getItem("ln");
//     phone.value = l.getItem("ph");
//     email.value = l.getItem("em");
// }
// document.addEventListener("DOMContentLoader", recuperarValores);

//Carrito
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//Agregar ventana carrito
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//Cerrar ventana carrito
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//Funcionamiento del carrito

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready();
}

//Funciones

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem); 
    }
}
//Cantidades
var quantiyInputs = document.getElementsByClassName("cart-quantity");
for (var i = 0; i < quantiyInputs.length; i++){
    var input = quantiyInputs[i];
    input.addEventListener("change", quantityChanged);
}

    //Agregar al carrito
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.lenght; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    
//Boton de comprar
    document
        .getElementsByClassName('btn-buy')[0]
        .addEventListener('click', buyButtonClicked);
}

//Boton Comprar
function buyButtonClicked() {
    alert("Su pedido esta hecho");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }               updatetotal(): void
    updatetotal();
}

//Eliminar compra
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Cambios de cantidad
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

//Agragar al carrito 2
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.lenght; i++) {
        if(cartItemsNames[i].innerText == title) {
            alert("Ya agrego este item al carrito");
            return;
        }
    }   
    var cartBoxContent = `
                            <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                            <div class="cart-product-title"><${title}</div>
                            <div class="cart-price">${price}/div>
                            <input type="number" value="1" class="cart-quantity">
                            </div>
                            <!--Eliminar Compra-->
                            <i class='bx bxs-trash-alt cart-remove' ></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
}

//Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.lenght; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}












