const display = document.getElementById('input')

function addinput(input){
    display.value += input
}

function deleteinput(){
    display.value = ''
}

function calc(){
    display.value = eval(display.value)
}