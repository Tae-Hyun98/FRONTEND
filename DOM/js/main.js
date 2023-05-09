import shoppingList from "./data.js";

const bestProduct = document.querySelector('.best_product');
for (let j = 1; j <= 2; j++) {
  for (let i = 0; i < shoppingList.length; i++) {
    const bestDiv = document.createElement('div');
    bestDiv.setAttribute('class', 'best_box');

    let bestImg = document.createElement('img');
    bestImg.setAttribute('src', shoppingList[i].src);

    let bestName = document.createElement('p');
    let bestNameText = document.createTextNode(shoppingList[i].name);
    bestName.setAttribute('class', 'center');
    bestName.appendChild(bestNameText);

    let bestPrice = document.createElement('p');
    let bestPriceSale = document.createElement('p');
    let bestPriceSaleText = document.createTextNode(shoppingList[i].price * 0.5+'원');
    let bestPriceText = document.createTextNode(shoppingList[i].price);
    bestPrice.appendChild(bestPriceText);
    bestPriceSale.appendChild(bestPriceSaleText);

    bestDiv.appendChild(bestImg);
    bestDiv.appendChild(bestName);
    bestDiv.appendChild(bestPrice);
    bestDiv.appendChild(bestPriceSale);

    bestProduct.appendChild(bestDiv);
  }
}