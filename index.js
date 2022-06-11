let items = [...document.querySelectorAll(".item")];
console.log(items);
// let 
items.map((a) => {
    console.log(a);
    let img = document.createElement("img");
    img.setAttribute("src", "./image 9.png");
    img.classList.add("image");
    a.append(img);
    a.querySelector(".image").style.display="none";
    a.addEventListener("mouseover", () => {
        a.querySelector("p").style.display = "none";
        a.querySelector("img").style.display="none"
        img.style.display="block"; 
        // a.querySelector("img").setAttribute("src",`./image 9.png`)
    })
});
items.map((a) => {
    a.addEventListener("mouseout", () => {
        a.querySelector("p").style.display = "block";
        a.querySelector("img").style.display="block"
        a.querySelector(".image").style.display="none";
    })
})
