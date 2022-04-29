const traitMaker = () => {
  const trait = document.createElement("span");
  document.body.appendChild(trait);
  trait.classList.add("trait");
  const size = Math.random() * 10 + "px";
  const size100 = Math.random() * 100 + "%";
  trait.style.height = size;
  trait.style.width = size;
  trait.style.left = size100;
  trait.style.setProperty("--left", Math.random() + 100 + "%");
  const plusMinus = Math.random() > 0.49 ? 1 : -1;
  trait.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  Math.random() > 0.5
    ? (trait.style.background = "#1c2c68")
    : (trait.style.background = "#8dba19");
};

setInterval(traitMaker, 300);
