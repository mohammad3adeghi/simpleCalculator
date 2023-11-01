let buttons = document.querySelectorAll(".btn");
let inputs = document.querySelector("input");
let result = document.querySelector("b");

function backSpace () {
    inputs.value = inputs.value.substr(0,inputs.value.length - 1);
    result.innerHTML = 0
}

function clearAll () {
    inputs.value = "";
    result.innerHTML = 0
}
for (let item of buttons) {
        item.addEventListener(("click"), function(e) {
            const btnText = e.target.innerHTML;
    
            inputs.value += btnText;
        })
}

function calculateing () {
    result.innerHTML = eval(inputs.value)
}