var heading = document.querySelector("h1")
var intro = document.querySelector("p")
var answerDiv = document.getElementById("answer")
var form = document.getElementById("m-k")
var form1 = document.getElementById("k-m")
var distance = parseFloat(document.getElementById('distance').value);
var distance1 = parseFloat(document.getElementById('distance1').value);


form.addEventListener('submit', function(event){
    event.preventDefault();
    if( distance ){
        var mileConversion = (distance * 1.609344).toFixed(3)
            form1.innerHTML = "<h2>The answer is approximately " + mileConversion + "!</h2>"

    }
});