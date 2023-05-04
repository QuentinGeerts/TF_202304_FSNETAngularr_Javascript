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
    let productFound = false;

    // Récupération de la ligne du produit sélectionné
    // console.log(this); // this => button
    const productRowCatalogue = event.target.parentNode.parentNode;

    // Extraction des données de la ligne
    const name = productRowCatalogue.children[0].textContent;
    const price = productRowCatalogue.children[1].textContent;

    // Vérifier si le produit est dans le panier
    const productsInCart = cart.children;
    for (const product of productsInCart) {

        const productName = product.children[0].innerText;
        const productPrice = product.children[2].innerText;

        if (productName === name && productPrice === price) {
            productFound = true;
            product.children[1].innerText = parseInt(product.children[1].innerText) + 1;
            break; // Permet de court circuité la boucle si élément trouvé rapidement
        }

    }

    if (!productFound) {
        // Création de la ligne du panier
        // > Création de l'élément HTML
        const productRowCart = document.createElement('tr');
        const productName = document.createElement('td');
        const productPrice = document.createElement('td');
        const productQuantity = document.createElement('td');
        const productRemove = document.createElement('td');
        const productRemoveButton = document.createElement('button');

        // > Paramétrer l'élément HTML
        productName.innerText = name;
        productPrice.innerText = price;
        productQuantity.innerText = 1;

        productRemoveButton.innerText = '❌';
        productRemoveButton.addEventListener('click', removeToCart);

        // > Ajouter l'élément au parent
        productRowCart.appendChild(productName);
        productRowCart.appendChild(productQuantity);
        productRowCart.appendChild(productPrice);
        productRowCart.appendChild(productRemove);
        productRemove.appendChild(productRemoveButton);
        cart.appendChild(productRowCart);
    }

    // Mettre à jour le total
    total.innerText = parseInt(total.innerText) + +price;

}

function removeToCart () {
    const total = document.getElementById('total');
    const productRowToDelete = this.parentNode.parentNode;

    const productQuantity = productRowToDelete.children[1];

    // Vérifier si la quantité est supérieure à 1
    // • vrai = Réduire la quantité
    // • faux = Supprimer la ligne
    if (productQuantity.innerText > 1) {
        productQuantity.innerText = +productQuantity.innerText - 1;
    }
    else {
        productRowToDelete.remove(); // Permet de supprimer directement l'élément du DOM
    }

    // Mettre à jour le total
    total.innerText = parseInt(total.innerText) - +productRowToDelete.children[2].innerText;

}