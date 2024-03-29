import "./style.css";

function appendToBody(elem: HTMLElement) {
  document.body.appendChild(elem);
}

function createParagraph(text: string = "<empty>"): HTMLParagraphElement {
  const p = document.createElement("p");
  p.textContent = text || "<imposible>";
  return p;
}

document.body.appendChild(
  createParagraph(`
You Only Live Once,\n
is an idealized concept,
fashioned by the foolish
and selfishness of heart.`)
);

document.body.appendChild(
  createParagraph(`Choosing to be self-deceived,
living under a false impression,
they hope that Jehovah\’s grace
has been divinely imparted…`)
);

document.body.appendChild(createParagraph());
document.body.appendChild(createParagraph("" + 0));
document.body.appendChild(createParagraph(""));

function printMessage(text: string) {
  console.log("Hay un mensaje: ", text);
}

const result = printMessage("Hey");
console.log(result);

function createElement(type: string, text: string) {
  const elem = document.createElement(type);
  elem.textContent = text;
  return elem;
}

const div = createElement("div", "Do you best");
const span = createElement("span", " ✔✌");
div.appendChild(span);
appendToBody(div);

/////Objects

let slayer: Record<string, any> = {
  name: "Buffy Summers",
  status: "alive",
  born: "1981-01-19",
  died: ["1997-10-18", "2001-05-05"],
  classification: "human",
  active: true,
};

console.log(slayer);

slayer.died.push("2024-03-08");
slayer.active = false;
slayer.status = "fallen";
console.log(slayer);

slayer.annihilator = "Angel";
delete slayer.classification;
console.log(slayer);

slayer["full name"] = "Buffy Anne Summers";

console.log(slayer);

for (let field in slayer) console.log(field + ":", slayer[field]);

let x = Math.E;
let y = Math.PI;

type Cord2D = { x: number; y: number };

let punto2D: Cord2D = { x, y };

console.log(punto2D);

let rectangle: {
  width: number;
  height: number;
  origin?: Cord2D | undefined;
} = {
  width: 100,
  height: 222,
  origin: undefined,
};

console.log(rectangle);

/////interfaces and types

interface url {
  protocol: string;
  hostname: string;
  port: number;
}

interface SetUrl {
  (protocol: string, hostname: string, port: number): void;
}

type urlType = {
  protocol: string;
  hostname: string;
  port: number;
};

type SetUrlType = (protocol: string, hostname: string, port: number) => void;

type host = string;
type partialUrlProtocol = { protocol: string };
type partialUrlHostname = { hostname: string };
type partialUrlport = { port: number };

type CompleteUrl = partialUrlProtocol | partialUrlHostname | partialUrlport;

type url_tuple = [string, string, number];

interface partialUrlHostnameInterface {
  hostname: string;
}
interface UrlInterface extends partialUrlHostnameInterface {
  protocol: string;
  port: number;
}

type PartialUrlHostnameType = { hostname: string };
type UrlType = PartialUrlHostnameType & { protocol: string; port: number };

type PartialUrlHostnameTypeToInterface = { hostname: string };
interface UrlFromType extends PartialUrlHostnameTypeToInterface {
  protocol: string;
  port: number;
}

interface ParticalUrlInterfaceToType {
  hostname: string;
}
type UrlTypeFromInterface = ParticalUrlInterfaceToType & {
  protocol: string;
  port: number;
};

class GoogleUrlFromInterface implements UrlTypeFromInterface {
  protocol = "https";
  hostname = "google.com";
  port = 443;
}

class GoogleUrlFromType implements UrlFromType {
  protocol = "https";
  hostname = "google.com";
  port = 443;
}
