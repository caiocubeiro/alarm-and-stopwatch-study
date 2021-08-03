//------------//
//------------//
//    Alarm   //
//------------//
//------------//

var display = document.getElementById('display');

var minutos1 = document.getElementById('minutos');
var segundos1 = document.getElementById('segundos');

var start = document.getElementById('start');

var controle = false

var interval;
var minutoAtual;
var segundoAtual;

// For para criar todas opções possiveis na lista exibida em html
// Minutos de 0 a 60
for (var i = 0; i <= 60; i++) {
    minutos1.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

// For para criar todas opções possiveis na lista exibida em html
// Segundos de 1 a 60
for (var i = 1; i <= 60; i++) {
    segundos1.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

//Função que roda ao acionar o botão
//
//usa o setInterval para rodar uma função em certa quantidade de tempo, sendo 
//controlada pelo if de veririficação com return
start.addEventListener('click', function() {
    minutoAtual = minutos1.value;
    segundoAtual = segundos1.value;

    if (segundoAtual < 10 && minutoAtual < 10) {
        display.childNodes[1].innerHTML = "0" + minutoAtual + ":" + "0" + segundoAtual;
    } else if (segundoAtual < 10 && controle == false) {
        display.childNodes[1].innerHTML = minutoAtual + ":" + "0" + segundoAtual;
    } else if (minutoAtual < 10 && controle == false) {
        display.childNodes[1].innerHTML = "0" + minutoAtual + ":" + segundoAtual;
    } else {
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
        segundoAtual;

    }
    controle = false;


    interval = setInterval(function() {

        segundoAtual--; //decresimo de segundo a cada atualização da função

        //
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                minutoAtual = 0;
                segundoAtual = 0;
                display.childNodes[1].innerHTML = "0" + minutoAtual + ":" + "0" + segundoAtual;
                document.getElementById("sound").play();
                alert("Time over!")
                clearInterval(interval);

                return;
            }
        }
        if (segundoAtual < 10 && minutoAtual < 10) {
            display.childNodes[1].innerHTML = "0" + minutoAtual + ":" + "0" + segundoAtual;
        } else if (segundoAtual < 10 && controle == false) {
            display.childNodes[1].innerHTML = minutoAtual + ":" + "0" + segundoAtual;
        } else if (minutoAtual < 10 && controle == false) {
            display.childNodes[1].innerHTML = "0" + minutoAtual + ":" + segundoAtual;
        } else {
            display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
            segundoAtual;

        }
        controle = false;

    }, 1000);
})

//------------//
//------------//
//    Alarm   //
//------------//
//------------//

//------------//
//------------//
// Stop watch //
//------------//
//------------//
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

var format;

function iniciar() {
    cron = setInterval(() => { timer(); }, tempo)
}

function pausar() {
    clearInterval(cron);
}

function parar() {
    clearInterval(cron);
    format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    alert("Stopped at " + format);
    hh = 0;
    mm = 0;
    ss = 0;
}

function timer() {

    ss++

    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;

        }
    }

    format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById('counter').innerText = format;
}

//------------//
//------------//
// Stop watch //
//------------//
//------------//