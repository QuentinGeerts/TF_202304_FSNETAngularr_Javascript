console.log("Mon beau sapin");
let corps = "A";// prompt("Quel symbole voulez-vous pour le corps du sapin?");
let boules = "8";//prompt("Quel symbole voulez-vous pour les boules du sapin?");
let taille =20;// prompt("Quel Taille pour le sapin?(nb lignes)");
let zone = document.getElementById("container");     
console.log("Enjoy :p");
//Ajout de la flêche
for (let i = 0;i<taille+3;i++) {
    zone.innerHTML +='&nbsp;'
}
zone.innerHTML +='î';
for (let i = 0;i<taille;i++)
{  

    //Les espaces blanc
    for (let j = 0;j<=(taille-i);j++)
    {
        zone.innerHTML +='&nbsp;';
    }
    if(i!=0) zone.innerHTML +="<span style='color:red'>"+boules +"</span>";
    for (let j = 0;j<i;j++)
    {
        //console.log(corps);
        zone.innerHTML +="<span style='color:green'>"+corps +"</span>" ;
    }
    if(i!=0) zone.innerHTML +="<span style='color:red'>"+boules +"</span>";
    zone.innerHTML+="<br>";
}

//Pot
for(let j=0;j<taille/2;j++)
{
    for (let i = 0;i<taille+2;i++)
    {
        zone.innerHTML+="&nbsp;"
    }
    zone.innerHTML+="<span style='color:brown'>|||||||||||||||||||</span><br/>";
} 
for (let i = 0;i<taille+2;i++)
    {
        zone.innerHTML+="&nbsp;"
    }
zone.innerHTML+="<span style='color:brown'>|_______|</span><br/>";
 
        