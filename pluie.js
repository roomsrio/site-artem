const traitMaker = () => {
  const trait = document.createElement("span");
  document.body.appendChild(trait);
  trait.classList.add("trait");
  const size = Math.random() * 100 + "px";
  const size100 = Math.random() * 100 + "%";
  trait.style.height = size;
  trait.style.left = size100;
};

setInterval(traitMaker, 30);
// document.getElementById("entreprise");
console.log(entreprise.clientHeight);
