function calNumber(num) {
    var inputId = document.getElementById("inputId");
    inputId.value += num;
}

function cleanNumber() {
    var inputId = document.getElementById("inputId");
    inputId.value = "";
}

function resultNumber() {
    var inputId = document.getElementById("inputId");
    inputId.value = eval(inputId.value);
}

