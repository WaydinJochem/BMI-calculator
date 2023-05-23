let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let outputValue = document.querySelector("#result");
let display = document.querySelector("#state");
let statement = document.querySelector("#stats");
let BMI, height, weight;

outputValue.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight / (height ** 2);
    display.innerText = BMI;

    if (BMI < 18.5) {
        statement.innerText = "UnderWeight";
    }
    else if ((BMI > 18.5) && (BMI <= 24.9)) {
        statement.innerText = "Normal Weight";
    }
    else if ((BMI >= 25) && (BMI <= 29.9)) {
        statement.innerText = "Overweight";
    }
    else {
        statement.innerText = "Obese";
    }
});