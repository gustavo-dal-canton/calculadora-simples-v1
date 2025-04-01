let soma = ""

function addSimbolo(x) {
    let aux = document.getElementById("display").value.slice(-1);
    if(aux || !isNaN(x) || x=="("){
    if (!isNaN(x) || x=="(" || aux == ")" || !isNaN(Number(aux))) {
        soma += x;
        if (x == "/100*") {
            document.getElementById("display").value += "%";
        } else if (x == "*") {
            document.getElementById("display").value += "x";
        } else if (x == "/") {
            document.getElementById("display").value += "÷";
        } else if (x == ".") {
            document.getElementById("display").value += ",";
        } else {
            document.getElementById("display").value += x;
        }
    } else {
        soma = (soma.slice(0, -1)) + x;
        if (x == "/100*") {
            x = "%";
        } else if (x == "*") {
            x = "x";
        } else if (x == "/") {
            x = "÷";
        } else if (x == "."){
            x = ","
        }
        document.getElementById("display").value = ((document.getElementById("display").value).slice(0, -1)) + x;

    }
}
}

function limpar() {
    document.getElementById("display").value = (document.getElementById("display").value).slice(0, -1);
    soma = soma.slice(0, -1);
}

function calcular() {
    if(!isNaN(eval(soma))){
    document.getElementById("display").value = (eval(soma) * 100) / 100;
    soma = ((eval(soma) * 100) / 100).toString();
    }
}