const cont = document.querySelector(".container");
let color = "white";


var total_columns = sessionStorage.getItem("columns");
console.log(total_columns);
cont.style.setProperty("--col", total_columns);

for(let i = 0; i<total_columns**2; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  cont.appendChild(box);
}


const colors = document.querySelector(".colors")


document.addEventListener("keydown", (e) => {
  if (e.key == "b"){color = "#00f";}
  else if (e.key == "r"){color = "#f00";}
  else if (e.key == "k"){color = "black";}
  else if (e.key == "w"){color = "white";}
  else if (e.key == "g"){color = "#0f0";}
  else if (e.key == "c"){color = "#0ff";}
  else if (e.key == "m"){color = "#f0f";}
  else if (e.key == "y"){color = "#ff0";}


} );

const boxes = document.querySelectorAll(".box")
boxes.forEach( (box) => box.addEventListener("mouseover",
    (e) => {
      e.target.style.background = color;
    } ) );

// target.classList.toggle("box-over")
// Add functionality to change the color that
//e.target.style.background = color;
