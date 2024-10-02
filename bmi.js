function calculateBMI(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Your BMI is " + bmi.toFixed(2) + ", indicating that you are underweight. It is recommended to increase your nutrient intake and engage in regular exercise.";
  } else if (bmi < 24.9) {
    return "Your BMI is " + bmi.toFixed(2) + ", indicating a healthy weight. Keep up the good lifestyle habits!";
  } else if (bmi < 29.9) {
    return "Your BMI is " + bmi.toFixed(2) + ", indicating that you are overweight. It is recommended to control your diet and increase your physical activity.";
  } else {
    return "Your BMI is " + bmi.toFixed(2) + ", indicating obesity. Please seek guidance from a doctor or nutritionist.";
  }
}

var weight = parseFloat(prompt("Please enter your weight (in kilograms):"));
var height = parseFloat(prompt("Please enter your height (in meters):"));

var bmi = calculateBMI(weight, height);
var interpretation = interpretBMI(bmi);

console.log("Based on the information provided:");
console.log("Weight: " + weight.toFixed(2) + " kilograms");
console.log("Height: " + height.toFixed(2) + " meters");
console.log("===================================");
console.log(interpretation);
