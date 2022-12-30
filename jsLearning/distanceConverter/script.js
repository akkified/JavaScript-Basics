var convertType = "miles";
var heading = document.querySelector("h1")
var intro = document.querySelector("p")
var answerDiv = document.getElementById("answer")
var form = document.getElementById("convert")

document.addEventListener('keydown', function(event){
    var key = event.code;

    if (key == 'KeyK'){
        convertType = "kilometers"
        heading.innerHTML = "Kilometers to Miles Converter"
        intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
    }
    else if (key == 'KeyM'){
        convertType = "miles"
        heading.innerHTML = "Miles to Kilometers Converter"
        intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
    }

    });

form.addEventListener('submit', function(event){
    event.preventDefault();
    var distance = parseFloat(document.getElementById('distance').value);

    if (distance){
        if (convertType == "miles"){
            var mileConversion = (distance * 1.609344).toFixed(3)
            answer.innerHTML = "<h2>The answer is approximately " + mileConversion + "!</h2>"
        }
        if (convertType == "kilometers"){
            var kiloConversion = (distance/1.609344).toFixed(3)
            answer.innerHTML = "<h2>The answer is approximately " + kiloConversion + "!</h2>"
        }
    }
    else{
        answer.innerHTML = "<h2>Please provide a number!</h2>"
    }
});