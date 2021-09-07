window.onload = function(){
    document.getElementById("value").innerHTML = 0; 
    document.getElementById("display").innerHTML = "0%";
};

function increase() {
    var value = Number(document.getElementById("value").innerHTML);
    if (value < 100) {
        value += 5;
    }
    document.getElementById("value").innerHTML = value;
    document.getElementById("display").innerHTML = value + "%";
}

function decrease() {
    var value = Number(document.getElementById("value").innerHTML);
    if (value > 0) {
        value -= 5;
    }
    document.getElementById("value").innerHTML = value;
    document.getElementById("display").innerHTML = value + "%";
}
