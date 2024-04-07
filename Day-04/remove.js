// const div =  document.querySelector('div');
// console.log(div);
// div.remove();
function getInfo(e){
    let t = document.querySelector("div");
    let el = document.createElement("p");
    el.innerText = "Ritakshi";
    t.prepend(el);
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'red';
}