let items=document.querySelectorAll(".list");
items.forEach(item => {
    item.addEventListener("click",function(){
        alert(this.innerText);
    })
});