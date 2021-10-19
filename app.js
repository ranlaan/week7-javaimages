const currentimage = document.querySelector("#image");

const images = ["images/pilt1.jpg", "images/pilt2.jpg", "images/pilt3.jpg"];

function changeimage() {
    
    let randomnumber = Math.floor(Math.random() * images.length);
    console.log(randomnumber);
    currentimage.src = images[randomnumber];
}