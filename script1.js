const tag = document.getElementById("tag");
console.dir(tag);
const btnl = document.getElementById("btnl");
const text = document.getElementById("text");

btnl.onclick = () => {
    tag.innerText = "hello " + text.value;
    btnClick();
}

function btnClick() {
    console.log("click");
}
