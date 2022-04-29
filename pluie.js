const traitMaker = () => {
  const trait = document.createElement("span");
  document.body.appendChild(trait);
  trait.classList.add("trait");
  const size = Math.random() * 100 + "px";
  const size100 = Math.random() * 100 + "%";
  trait.style.height = size;

  //   trait.style.top = size100;
  trait.style.left = size100;
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  trait.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
};

setInterval(traitMaker, 30);
// document.getElementById("entreprise");
console.log(entreprise.clientHeight);
