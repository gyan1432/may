

//navbar

let shops =document.getElementById("shops");
let reviews =document.getElementById("reviews");
let blogs =document.getElementById("blogs");
let contacts=document.getElementById("contacts");


shops.addEventListener("click", ()=>{
    shops.style.color="rgb(25, 235, 235)"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(25, 235, 235)"
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(25, 235, 235)"
    shops.style.color="white"
    reviews.style.color="white"
    contacts.style.color="white"
})
contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(25, 235, 235)"
    shops.style.color="white"
    reviews.style.color="white"
    contacts.style.color="white"
})