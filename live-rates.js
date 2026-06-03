function loadManualRates(){

document.getElementById("gold999").innerHTML =
"₹" + rates.gold999.toLocaleString();

document.getElementById("gold999gst").innerHTML =
"₹" + (rates.gold999 * 1.03).toLocaleString();

document.getElementById("gold995").innerHTML =
"₹" + rates.gold995.toLocaleString();

document.getElementById("gold995gst").innerHTML =
"₹" + (rates.gold995 * 1.03).toLocaleString();

document.getElementById("goldcoin").innerHTML =
"₹" + rates.goldCoin.toLocaleString();

document.getElementById("goldcoingst").innerHTML =
"₹" + (rates.goldCoin * 1.03).toFixed(0);

document.getElementById("silver").innerHTML =
"₹" + rates.silver999.toLocaleString();

document.getElementById("silvergst").innerHTML =
"₹" + (rates.silver999 * 1.03).toLocaleString();

document.getElementById("goldSpot").innerHTML =
"$" + rates.goldSpot;

document.getElementById("silverSpot").innerHTML =
"$" + rates.silverSpot;

document.getElementById("usdInr").innerHTML =
"₹" + rates.usdInr;

document.getElementById("lastUpdate").innerHTML =
rates.updated;

}

loadManualRates();