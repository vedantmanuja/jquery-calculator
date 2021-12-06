let outputScreen = document.getElementById("finalOutput");
function display(num) {
    outputScreen.value += num;
}

function calc() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err) {
        alert('invalid operation');
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}