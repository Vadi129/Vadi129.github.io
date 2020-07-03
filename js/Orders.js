console.log("Hello, this is a console message")

function calcAmount() {
    let price=1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value); /*egész számra konvertálja az értékét*/

    /*üres mező esetén NaN kerülne a Ft helyére
    if (isNaN(amountNumber))  {
        amountNumber = 0;}*/
        //egyszerűsítése
        amountNumber =  isNaN(amountNumber) ? 0 : amountNumber; //ha igaz a kiértékelés akkor a ? utáni értéket kapja, ha nem akkor a : utánit

        showSumPrice(price, amountNumber);
    }
/*function burgertype() {
    let priceBurger = document.querySelector("input[id='Csirke']")
    let price += 2;
    return price;
}*/
function showSumPrice (pricePerProduct=1000, amountNumber=1) { // hibakiküszöbölés, alapérték beállítás
    amountNumber = amountNumber || 0; //hibaa kiküszöbölése, ha amount.. = NaN akkor 0 lesz ha nem egyenlő akkor önmaga
    let showAmount= document.querySelector("span.show-amount"); //a span típusú show amounnt class értékhez létrehozok egy változót(amit majd kiír)

    //beírt érték egy és 10 között van
    if ( amountNumber > 10) {
        alert ("Maximum 10 terméket vásárolhat, amennyiben többet szeretne, keresse ügyfélszolgálatunkat!");
        return; //nem szükséges minden út le van fedve
    }
    else if (amountNumber < 1) {
        alert("Minimum egy terméket kell vásárolnia!");
        return; //nem szükséges minden út le van fedve
    }
    else {
        let amount = amountNumber*pricePerProduct;
    /* alert("Fizetendő:" + amount + "Ft");*/
        showAmount.innerHTML = amount;//felülírja
    }
}

//Window events.----nem html be az eseménykezelő megadását hanem js-be
let sendButton = document.querySelector("form .btn.btn-primary");
/*sendButton.onclick = function(){
    alert("Hello JS!");
}*/
/*sendButton.onclick = calcAmount; //itt nem kell a () mert azonnal lefutna és onclickbe kerülne vissza--itt kell on máshol nem
*/
// sendButton.addEventListener("click", function() {//melyik eseményt figyelje és mi történjen--hozzáadja ezt az eseményt (több dolog is lejátszódik)
//     alert("Hello JS!");
// });

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth)//this az most a window --ha átméretezi az ablakot kiírja az adatokat
})


// Add helptext.
let helpText = document.createElement("small"); //új elementet készít a memóriában
helpText.className = "form-text text-muted";
//helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)"); //ehhez a divhez adom hozzá a smallt
parent.appendChild(helpText); //valamiért nem működik
parent.removeChild(helpText); //eltávolítás


//űrlap események
let orderform = document.querySelector("#orderForm")
orderform.addEventListener("submit", function(ev){ //ev--az az eseményt adja oda ami megtörtént
 ev.preventDefault(); //ezzel megelőzi az alapértemezett működést (oldal újrabetöltését)
 //console.log(this);

 let inputs = this.querySelectorAll("input");
 let values = {};
 for (let i=0; i < inputs.length; i++){
     values[inputs[i].name] = inputs[i].value
     console.log(values);
 }
});

//Kedves vásárlónk! szöveg eltöntetése
let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction =function(ev){
    this.parentElement.style.display = "none"; //this a gomb, annak a szülője lesz a div (teljes alert üzenet) és annak a stylet módosítjuk
}
for (let i = 0; i < alertCloseButton.length; i++) {
    alertCloseButton[i].addEventListener("click", 
    alertCloseEventHandlerFunction //ne mindig induljon el csak amikor kell ezért nincs ()
    /*function(ev){
        this.parentElement.style.display = "none"; //this a gomb, annak a szülője lesz a div (teljes alert üzenet) és annak a stylet módosítjuk
    }----külön érdemes létrehozni, különben túl sok névtelen függvény lesz*/
    );
}

//select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");//selectbe betesz hogy lehessen választani
let index = 0; //tárol melyik feltétnél járok
while(index < toppings.length) {
    let option = document.createElement("option"); //ezzel létrehozok egy új optiont
    option.value = index;//optionnak tartalma value számokat ad---kihasználható számoláshoz!!!!!!!!!!!!!!!
    option.innerHTML = toppings[index];//optionnak szövege
    toppingSelect.appendChild(option);//hozzáadja a selecthez
    index++;
}

//dátum és switch
let weekDay = new Date().getDay();
let dayName= '';
switch(weekDay){
    case 0: dayName= "Vas"; //vasárnap
        break; //azért kell mert enélkül, ha talál egy jó onnantól kezdve az összeset végrehajtja--így kilép
    case 1: dayName= "Hét"; 
        break;
    case 2: dayName= "Kedd"; 
        break;
    case 3: dayName= "Sze"; 
        break;
    case 4: dayName= "Csü"; 
        break;
    case 5: dayName= "Pén"; 
        break;
    case 6: dayName= "Szo"; 
        break;
        default: dayName= "Unknown";
}


//while
let animal = {name: "Cat", age:3};
let keys = Object.keys(animal);
let i = 0;
while ( i < keys.length){
    console.log(animal[keys[i]]);
    i++;
}

//do while--egyszer mindenképpen lefut--hátultesztelő ciklus
i = 10;
do {
    console.log(i);
    i++;
}
while (i<0);


//megjegyzés
//&& és; || vagy

//const legyen nagybetű!!

//I l és O 0 összekeverhető
//függvény név ige legyen és max 3 input

/*let valami = "kutya "
let valami2 = "    harap   "
valami.concat(valami2.trim()).toLoweRcase() 
eredmény= kutyaharap
*/

/*példa functionra-dokument elrejtése---eljárás
function hider() {
     document.body.innerHTML = ""
}
*/

/*példa functionra-összeadás---függvény van input output
function sum (x,y)
{
return x+y; --visszaadja az adatot
}
sum(2,7)
9
*/

/*amot lehet még tartalmaznia kell @-t és .-t az email címnek
minden mezőben legyen karakter
végösszeg kiszámítás*/