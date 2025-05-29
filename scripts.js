const button = document.querySelector(".alert-redirect");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".button-close");

if(button && dialog){
    button.onclick = function(){
        dialog.showModal();
    }
}

if(closeButton && dialog){
    closeButton.onclick = function(){
        dialog.close();
    }
}