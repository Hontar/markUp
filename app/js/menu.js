document.addEventListener('DOMContentLoaded', function(){ 
    
    var burger_btn = document.getElementById("burger")
    var navMenu = document.getElementById("burger_list")
    burger_btn.onclick = function(event){
        
        burger_btn.classList.toggle("active")
        navMenu.classList.toggle("active")
    }
});
