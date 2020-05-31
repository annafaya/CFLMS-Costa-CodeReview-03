function theInsurance(){
    //DEFINING THE VARIABLES BY GETTING THEM FROM USERINPUT
let name = document.getElementById("yourname").value;
let age = Number(document.getElementById("age").value);
let country = document.getElementById("country").value;
let horsepower = Number(document.getElementById("horsepower").value);
let output = document.getElementById("amount");
let insurance;

    switch (country) {
       
        case "Austria":
            insurance = horsepower * 100 / age + 50;
            output.innerHTML = `${name}, your insurance costs ${insurance.toFixed(2)}€.`;
        break
        case "Hungary":
            insurance = horsepower * 120 / age + 100;
            output.innerHTML = `${name}, your insurance costs ${insurance.toFixed(2)}€.`;
        break
        case "Greece":
            insurance = horsepower * 150 / (age +3) + 50;
            output.innerHTML = `${name}, your insurance costs ${insurance.toFixed(2)}€.`;
        break
        default :
            output.innerHTML = `Something went wrong.`
        break
        }
    }


let button = document.getElementById("botao");
button.addEventListener("click", theInsurance, false);

