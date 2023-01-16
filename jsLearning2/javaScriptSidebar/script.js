(function () {
    "use strict";     
    var submenus = document.querySelectorAll('ul li ul')

    function hideSubmenus(){
        for(var i = 0; i < submenus.length; i++){
        submenus[i].className = 'hide-menu'
    }
    }

    hideSubmenus()

    var menulinks = document.querySelectorAll('.menulink')

    for(var i = 0; i < menulinks.length; i++){
        menulinks[i].addEventListener("click", function(event){
            event.preventDefault()
            var thisMenu = this.parentNode.querySelector("ul");
            if(thisMenu.classList.contains("hide-menu")){
                hideSubmenus()
                thisMenu.className = "show-menu"
            }
            else {
                thisMenu.className = "hide-menu"
            }
        })
    }
  })();
