const cont = document.querySelector(".container");


for(let i = 0; i< 256; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  cont.appendChild(box);
}
