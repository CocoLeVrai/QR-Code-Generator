let qrcode = new QRCode("qrCodeDiv", {

    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H

});

function makeCode() {    
    let url = document.getElementById("qrCodeInTxt")
  
    if (!url.value) {
        return;
    }
    
    qrcode.makeCode(url.value);
    
    qrcode.addEventListener("click", () => {

})
}

makeCode()

document.getElementById("qrCodeBtn").addEventListener("click", () => {
    makeCode();
    let url = document.getElementById("qrCodeInTxt")
    url.value = "";
})

let img = document.querySelector("#qrCodeDiv img");

if (img) {

    img.addEventListener("mouseenter", () => {
        img.style.cursor = "pointer";
    });


    img.onclick = () => {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "qr-code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}