const images = [
    "file:///Users/thereal/Desktop/pje/nomard/image/01.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/02.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/03.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/04.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/05.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/06.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/07.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/08.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/09.jpg", 
    "file:///Users/thereal/Desktop/pje/nomard/image/10.jpg", 
];
const choseImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `image/${choseImage}`;


//file:///Users/thereal/Desktop/pje/nomard/image/03.jpg

//document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${choseImage})`
console.log(choseImage);
