console.log("Hello, this is a console message")

function calcAmount() {
    let price=1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount= document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value)*price;
   /* alert("Fizetendő:" + amount + "Ft");*/

   showAmount.innerHTML = amount;/*felülírja*/
}