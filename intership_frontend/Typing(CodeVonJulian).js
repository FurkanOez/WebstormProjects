const text =  "type this away, this is a demonstration of what you can do with JavaScript!";
const arr = text.split("");
let rendered = [];
arr.forEach((word) => {
  rendered.push(`<span>${word}</span>`);
});

rendered[0] = rendered[0].replace("<span>", '<span class="highlighted">');
document.getElementById("text").innerHTML = rendered.join("");

document.addEventListener("keydown", update);

function update(e) {
  console.log(e.code, e.key);

  const elem = document.getElementById("text");
  const span = elem.getElementsByTagName("span")[0];
  console.log(elem);
  let current = elem.textContent;
  console.log(current);
  if (current.startsWith(e.key)) {
    elem.getElementsByTagName("span")[1]?.classList.add("highlighted");
    elem.removeChild(span);
  }
}
