const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", ];
const choseImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
const bgImageSrc = `file:///Users/thereal/Desktop/pje/nomard/image/${choseImage}`;


//file:///Users/thereal/Desktop/pje/nomard/image/03.jpg

//document.body.appendChild(bgImage);
document.body.style.background = `url(${bgImageSrc})`;

