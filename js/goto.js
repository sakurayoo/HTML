for(let i=0;i>8;i++){
            
}
let btn = document.querySelector("#show");
let infoModal = document.querySelector("#infoModal");
let close = document.querySelector("#close");
btn.addEventListener("click", function () {
    document.getElementById("infoModal").style.opacity = "0";
    setTimeout(function () {
        infoModal.showModal();
        document.getElementById("infoModal").style.opacity = "1";
    }, 100);
})
//dialog::backdrop
close.addEventListener("click", function () {
    document.getElementById("infoModal").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("infoModal").style.opacity = "1";
        infoModal.close();
    }, 500);
})