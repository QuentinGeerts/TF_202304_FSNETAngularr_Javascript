const products = [
    { productName: 'Chaise', productPrice: 25 },
    { productName: 'Table', productPrice: 150 },
    { productName: 'Meuble TV', productPrice: 250 },
    { productName: 'Plante', productPrice: 15 },
];


window.onload = () => {

    const total = document.getElementById('total');
    const catalogue = document.getElementById('catalogue');

    total.innerText = 0;

    products.forEach(product => {

        // Création des éléments HTML
        const productRow = document.createElement('tr');
        const productName = document.createElement('td');
        const productPrice = document.createElement('td');
        const productAdd = document.createElement('td');
        const productAddButton = document.createElement('button');

        // Paramétrer les éléments
        productName.innerText = product.productName;
        productPrice.innerText = product.productPrice;
        productAddButton.innerText = '🛒';

        productAddButton.classList.add('addItemButton');
        productAddButton.onclick = addProductToCart;

        // Ajouter les éléments à leur parent
        // Dupliquer une ligne : ALT + SHIFT + ↑/↓
        productAdd.appendChild(productAddButton);
        productRow.appendChild(productName);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAdd);
        catalogue.appendChild(productRow);

    });

};

function addProductToCart (event) { 

    const cart = document.getElementById('cart');
    const total = document.getElementById('total');

    // Récupération de la ligne du produit sélectionné
    // console.log(this); // this => button
    const productRowCatalogue = event.target.parentNode.parentNode;
    
    // Extraction des données de la ligne
    const name = productRowCatalogue.children[0].textContent;
    const price = productRowCatalogue.children[1].textContent;

    // Création de la ligne du panier
    // > Création de l'élément HTML
    const productRowCart = document.createElement('tr');
    const productName = document.createElement('td');
    const productPrice = document.createElement('td');

    // > Paramétrer l'élément HTML
    productName.innerText = name;
    productPrice.innerText = price;

    // > Ajouter l'élément au parent
    productRowCart.appendChild(productName);
    productRowCart.appendChild(productPrice);
    cart.appendChild(productRowCart);

    // Mettre à jour le total
    total.innerText = parseInt(total.innerText) + +price;

}

