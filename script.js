function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");

    if (display.value === "") return;

    try {
        const result = new Function("return " + display.value)();
        display.value = eval(display.value)
    } catch {
        display.value = "Error";
    }
}