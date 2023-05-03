let pu  = prompt("Veuillez entrer le prix unitaire HTVA. Merci :)");
while(isNaN(pu))
{
    pu  = prompt("Veuillez entrer le prix unitaire HTVA. Merci :)");
}
let qte = prompt("Quel quantité voulez-vous acheter ??");
while(isNaN(qte))
{
    qte = prompt("Quel quantité voulez-vous acheter ??"); 
}
 
alert("Le prix de la commande est de " + ((qte*pu)*1.21).toFixed(2) + '€');
