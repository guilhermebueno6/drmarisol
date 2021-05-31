buttons = document.querySelectorAll('.kvButton');
buttons.addEventListener("click", function(){
    if(window.location.hash === "#popup"){
        console.log('Helo');
    }
})