let chrBtn = document.querySelectorAll(".chr");
let deleteCht = document.querySelector(".deleteChr");
let clearAll = document.querySelector(".clearAll");
let submit = document.querySelector(".submit");
let inputScreen = document.querySelector("#inputScreen");
let outputScreen = document.querySelector("#outputScreen");


function clearOld(){
    if(outputScreen.value !== ''){
        inputScreen.value = '';
        outputScreen.value = ''
    }
}

// input every endivisual character
chrBtn.forEach((e) => {
  e.addEventListener("click", () => {
    clearOld()
    inputScreen.value += e.innerText;
  });
});

// delete a character
deleteCht.addEventListener("click", () => {
  inputScreen.value = inputScreen.value.slice(0, -1);
});

// clear all (input and output screen)
clearAll.addEventListener("click", () => {
  inputScreen.value = "";
  outputScreen.value = "";
});

// calculate function
function calculate() {
    try {
        let expression = inputScreen.value
            .replace(/\^/g, '**')       // Handle exponentiation
            .replace(/(\d+(\.\d+)?)%/, '($1/100)'); // Handle percentage
        
        outputScreen.value = eval(expression);
    } catch (error) {
        outputScreen.value = 'Error';
    }
}

submit.addEventListener('click', ()=>{
    calculate()
})


function calculatePercentage(base, percentage) {
  let result = base * (percentage / 100);
  return `${base} * ${percentage}% = ${result}`;
}
