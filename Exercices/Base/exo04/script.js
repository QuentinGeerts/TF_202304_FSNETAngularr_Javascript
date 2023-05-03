// let date = new Date();
// //if(date.getDay() === 2){alert("Bonjour nous sommes mardi")};
// switch(date.getDay())
// {
//   case 0 : alert("Bonjour nous sommes Dimanche"); break;
//   case 1 : alert("Bonjour nous sommes Lundi"); break;
//   case 2: alert("Bonjour nous sommes Mardi"); break;
//   case 3: alert("Bonjour nous sommes Mercredi"); break;
//   case 4: alert("Bonjour nous sommes Jeudi"); break;
//   case 5: alert("Bonjour nous sommes Vendredi"); break;
//   default: alert("Bonjour nous sommes Samedi"); 
// }

//Ou
let jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi",];
alert("Bonjour nous sommes "+ jours[new Date().getDay()]);