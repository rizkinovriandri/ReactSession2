$(document).ready(function(){

    var check = true;

    $("#btn1").click(function(){
        document.getElementById("output").value += 1;
    });

    $("#btn2").click(function(){
        document.getElementById("output").value += 2;
    });

    $("#btn3").click(function(){
        document.getElementById("output").value += 3;
    });

    $("#btn4").click(function(){
        document.getElementById("output").value += 4;
    });

    $("#btn5").click(function(){
        document.getElementById("output").value += 5;
    });

    $("#btn6").click(function(){
        document.getElementById("output").value += 6;
    });

    $("#btn7").click(function(){
        document.getElementById("output").value += 7;
    });

    $("#btn8").click(function(){
        document.getElementById("output").value += 8;
    });

    $("#btn9").click(function(){
        document.getElementById("output").value += 9;
    });

    $("#btn0").click(function(){
        document.getElementById("output").value += 0;
    });

    $("#btnDot").click(function(){
        document.getElementById("output").value += '.';
    });

    $("#btnMultiply").click(function(){
        document.getElementById("output").value += '*';
    });

    $("#btnDivide").click(function(){
        document.getElementById("output").value += '/';
    });

    $("#btnMinus").click(function(){
        document.getElementById("output").value += '-';
    });

    $("#btnPlus").click(function(){
        document.getElementById("output").value += '+';
    });

    $("#btnClear").click(function(){
        document.getElementById("output").value = '';
    });

    $("#btnCalc").click(function(){
        document.getElementById("output").value = eval(document.getElementById("output").value);
    });

});