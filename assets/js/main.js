// let amount =document.getElementById("billAmount")
let output = document.getElementById("result");
let serviceQ = document.getElementById("service");
let amount = document.getElementById("billAmount");
let peopleN = document.getElementById("nPeople");
function calcTip() {
    console.log("test")
    let serviceQvalue = Number(serviceQ.value);
    let amountvalue = Number(amount.value);
    let peopleNvalue = Number(peopleN.value);

    if (serviceQvalue === 0) {
        output.innerHTML = ("Bitte gib an, wie dein Service war!");
    }
    else if (amountvalue === "" || peopleNvalue == 0) {
        output.innerHTML = ("Bitte gib an, die Rechnungsbeträgt und die personen numer ");
    }

    else if (serviceQvalue === 1) {
        let tip = amountvalue * .02;
        let total = amountvalue + tip;
        let devide = total / peopleNvalue;
        output.innerHTML = ("Das Trinkgeld ist: " + tip.toFixed(2) +
            "<br>Die Gesamtsumme beträgt: " + total.toFixed(2) +
            "<br>Der Preis pro Person ist:  " + devide.toFixed(2));
    } else if (serviceQvalue === 2) {
        let tip = amountvalue * .1;
        let total = amountvalue + tip;
        let devide = total / peopleNvalue;
        output.innerHTML = ("Das Trinkgeld ist: " + tip.toFixed(2)) +
            ("<br>Die Gesamtsumme beträgt: " + total.toFixed(2)) +
            ("<br>Der Preis pro Person ist:  " + devide.toFixed(2));

    } else if (serviceQvalue === 3) {
        let tip = amountvalue * .2;
        let total = amountvalue + tip;
        let devide = total / peopleNvalue;
        output.innerHTML = ("Das Trinkgeld ist: " + tip.toFixed(2)) +
            ("<br> Die Gesamtsumme beträgt: " + total.toFixed(2)) +
            ("<br> Der Preis pro Person ist:  " + devide.toFixed(2));
    } else {
        output.innerHTML = ("PLEASE ENTER A Valid Number");
    }
}

