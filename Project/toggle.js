const bar=document.getElementById("bar");
const nav=document.getElementById("nav")

if(bar){
    bar.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })
}