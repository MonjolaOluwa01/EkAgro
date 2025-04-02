document.addEventListener("DOMContentLoaded", function() {
    //handle email click
    document.getElementById("email").addEventListener("click", function(){
        window.location.href = "mailto: ekurietimita@gmail.com";
    });
    //handle phone click
    document.getElementById("phone").addEventListener("click", function(){
        window.location.href = "tel: +2349031729381"
    });
});
