let lettre = "A";
let symbole="#";
let ligne="";
for (let i = 0;i < 11;i++)
{
    for(let j=0; j<11-(i+1);j++)
    {
        ligne+="."; 
    }
    if(i==0){ ligne+=symbole;}
    for (let j = 0;j<i;j++)
    {
        ligne+=lettre;
    }
   ligne+="<br/>";
   document.write(ligne);
   ligne="";
}
 