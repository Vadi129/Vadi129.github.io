console.log("Hello, this is a console message")

function calcAmount() {
    let price=1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value); /*egész számra kerekít az értékét*/
    
    /*üres mező esetén NaN kerülne a Ft helyére
    if (isNaN(amountNumber))  {
        amountNumber = 0;}*/
        //egyszerűsítése
        amountNumber =  isNaN(amountNumber) ? 0 : amountNumber; //ha igaz a kiértékelés akkor a ? utáni értéket kapja, ha nem akkor a : utánit
        
        showSumPrice(price, amountNumber);
    }
    
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