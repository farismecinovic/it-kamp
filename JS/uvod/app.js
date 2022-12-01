//document.getElementById(pocetak)
//document.getElemenyByClassName(prva-klasa)
//document.querySelector('#id')
//document.querySelectorAll('#id')
//document.getElementByTagName()

const glavniDiv = document.querySelector("#pocetak");
const body = document.querySelector("body");

const paragraf = document.createElement("p");
paragraf.textContent = "Ovo je p dodat iz JS"; //<p>Ovo je p dodat iz JS</p>

// glavniDiv.style.backgroundColor = "red"; //inline style

glavniDiv.classList.add("kocka"); // dodavanje klase
paragraf.classList.add("text");

const dugme = document.createElement("button");
dugme.textContent = "Click me";
glavniDiv.append(dugme);

const onButtonClick = () => {
  paragraf.classList.toggle("veci-font");
  skriveniDiv.classList.toggle("nevidljivo");
};

dugme.addEventListener("click", onButtonClick);

glavniDiv.append(paragraf);

const skriveniDiv = document.createElement("div");
skriveniDiv.classList.add("drugaKocka");
body.append(skriveniDiv);

skriveniDiv.innerHTML = `
<h1>Ovo je h1</h1>
<p>Neka deskripcija</p>
`;
