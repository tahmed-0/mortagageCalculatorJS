
function myFunction() {
    var homePrice = parseInt(document.getElementById("home").value);
    var downPayement = parseInt(document.getElementById("down").value);
    var months = parseInt(document.getElementById("loan").value);
    var rate = parseFloat(document.getElementById("rate").value);
    
    var principle = homePrice - downPayement;

    var interest = (principle * (rate * 0.01)) / months;
    var total = ((principle / months) + interest).toFixed(2);

    
   document.getElementById("results").innerHTML = "$" + total;
 

}

function clearEverything() {
    document.getElementById("home").value = "";
    document.getElementById("down").value = "";
    document.getElementById("loan").value = "";
    document.getElementById("rate").value = "";   
    document.getElementById("results").innerHTML = 0; 
}