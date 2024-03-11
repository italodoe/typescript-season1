import "./style.css";

function createParagraph(text: string = "<empty>"):HTMLParagraphElement {
  const p = document.createElement("p");
  p.textContent = text || "<imposible>";
  return p;
}

document.body.appendChild(createParagraph(`
You Only Live Once,\n
is an idealized concept,
fashioned by the foolish
and selfishness of heart.`));

document.body.appendChild(createParagraph(`Choosing to be self-deceived,
living under a false impression,
they hope that Jehovah’s grace
has been divinely imparted…`));

document.body.appendChild(createParagraph());
document.body.appendChild(createParagraph(""+0));
document.body.appendChild(createParagraph(""));


function printMessage(text: string){
  console.log('Hay un mensaje: ', text);
}


const result = printMessage("Hey");
console.log(result);