
document.body.style.background = 'silver';
document.body.style.margin = "0";

const title = document.getElementById('title');
title.style.color = "#F7AD45";
title.textContent = title.textContent.toUpperCase();

const headings = document.querySelectorAll('h3');
for (let h3 of headings) {
  h3.style.textTransform = 'uppercase';
}
const heading2 = document.querySelectorAll('h3');
for (let h3 of heading2) {
  h3.style.color = "#BB3E00";
}
const h3Headings = document.querySelectorAll('h3');
for (let h3 of h3Headings) {
  h3.style.textAlign = 'center';
}
const heading = document.getElementById('title');
heading.style.textAlign = 'center';

const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.innerHTML = "Pineapple";
fruitList.appendChild(newFruit);

const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.innerHTML = "Spinach";
vegList.appendChild(newVeg);

const introMsg = document.getElementById('intro');
introMsg.textContent = introMsg.textContent.toUpperCase();
introMsg.style.color = "#BB3E00";


function addImageToListItem(listItem, imagePath) {
  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = listItem.textContent;
  img.style.width = '200px';
  img.style.height = '200px';
  listItem.insertBefore(img, listItem.firstChild);
}

const introSection = document.getElementById('intro-container');
introSection.style.backgroundImage = "url('images/vegetables-herbs-basket.jpg')";
introSection.style.backgroundSize = "cover";
introSection.style.backgroundPosition = "center";
introSection.style.width = "100%";         
introSection.style.minHeight = "300px";    
introSection.style.display = "flex";       
introSection.style.flexDirection = "column";
introSection.style.justifyContent = "center";
introSection.style.alignItems = "center";

const fruitItems = document.querySelectorAll("#fruList li");
const vegItems = document.querySelectorAll("#vegList li");

addImageToListItem(fruitItems[0], "images/mangoes.jpg");
addImageToListItem(fruitItems[1], "images/bananas.jpg");
addImageToListItem(fruitItems[2], "images/melons.jpg");
addImageToListItem(fruitItems[3], "images/pineapples.jpg");
addImageToListItem(vegItems[0], "images/onions.jpg");
addImageToListItem(vegItems[1], "images/tomatoes.jpg");
addImageToListItem(vegItems[2], "images/kales.jpg");
addImageToListItem(vegItems[3], "images/spinach.jpg");

const allLists = document.querySelectorAll('ul, ol');
for (let list of allLists) {
  list.style.listStyleType = 'none';
}
 const images = document.querySelectorAll('img');
for (let img of images) {
  img.style.borderRadius = '50%';
}

const fruitList2 = document.getElementById('fruList');
fruitList.style.display = 'flex';
fruitList.style.gap = '76px'; 
fruitList.style.display = 'flex';
fruitList.style.flexDirection = 'row';
fruitList.style.justifyContent = 'center';

const vegieList = document.getElementById('vegList');
vegieList.style.display = 'flex';
vegieList.style.gap = '76px'; 
vegieList.style.marginBottom = '16px'; 
vegieList.style.display = 'flex';
vegieList.style.flexDirection = 'row'; 
vegieList.style.justifyContent = 'center';


const header = document.createElement("header");
header.innerHTML = `<h2>Greens Kiosk</h2>`;
header.style.background = "#657C6A";
header.style.color = "white";
header.style.padding = "16px";
header.style.textAlign = "center";
document.body.insertBefore(header, document.body.firstChild);


const footer = document.createElement("footer");
footer.innerHTML = `<p>&copy; 2025 Greens Kiosk. All rights reserved.</p>`;
footer.style.background = "#657C6A";
footer.style.color = "white";
footer.style.padding = "12px";
footer.style.textAlign = "center";
// footer.style.position = "fixed";
footer.style.left = "0";
footer.style.right = "0";
footer.style.bottom = "0";
document.body.appendChild(footer);


const items = document.querySelectorAll('.item');
fruitItems.forEach(item => {
  item.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
  item.style.borderRadius = "10px"; 
  item.style.padding = "56px";      
  item.style.background = "white"; 
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.alignItems = 'center';

});

const vegitems = document.querySelectorAll('.item');
vegItems.forEach(item => {
  item.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
  item.style.borderRadius = "10px"; 
  item.style.padding = "56px";      
  item.style.background = "white"; 
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.alignItems = 'center';
});




