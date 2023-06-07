function calcGasCost(startReading, endReading){
    return endReading-startReading * 0.15;
}

function multThreeNums(num1, num2, num3){
    return num1 * num2 * num3;
}

function coneCalc(radius, height){
    return radius * radius * 3.14 * height / 3;
}

function summationSentenceVoid(num1, num2){
    console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
}

function summationSentenceSting(num1, num2){
    return "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);
}

function remainderCalculator(numerator, denominator){
    return numerator % denominator;
}

function bananaPicker(quantity){
    return "🍌".repeat(quantity);
}

console.log(bananaPicker(10))

function emojiFactory(quantity, emoji){
    return emoji.repeat(quantity);
}
console.log(emojiFactory(19, "🗿"))

function nameConcat(firstName, lastName, middle=""){
    return firstName + " " + middle + " " + lastName;
}

function stringLength(string){
    return string.length;
}

console.log(stringLength(nameConcat("John", "Smith", "F.")))