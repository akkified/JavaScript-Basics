(function(){

    "use strict";
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]

    var currentImage = 0
    
    document.getElementById("next").addEventListener("click", nextPhoto)
    
    document.getElementById("previous").addEventListener("click", previousPhoto)
    
    function nextPhoto() {
        currentImage++
        if(currentImage > myImages.length-1){currentImage = 0}
        document.getElementById("myimage").src = myImages[currentImage]
    }
    
    function previousPhoto() {
        currentImage = currentImage - 1
        if(currentImage < 0){currentImage = 4}
        document.getElementById("myimage").src = myImages[currentImage]
    }

})();

