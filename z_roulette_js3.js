let argent = 100; //porte monnaie de l'utilisateur
let perte; //porte monnaie ordinateur
let a=document.getElementById("test");
function bilan(){
    if(isNaN(nombre_mise())) {alert("Veuillez miser sur un nombre entre 1 et 36");}
    else if(som_mise()>argent) {alert("Votre argent est inferieur a" + som_mise() + "fcf" );}
    else if(nombre_mise()== nombre_aleatoire()) {alert("vous gagnez"+som_mise()*35 + "fcf");
    argent+= (som_mise()*35);}
    else if(nombre_mise()%2==0 && nombre_aleatoire()%2==0 || nombre_mise()%2!=0 && nombre_aleatoire()%2!=0)
    {
        alert("Vous gagnez"+ som_mise() + "fcf");
        argent+= som_mise();
    }
    else if(argent<=0){alert("Vous ne pouvez plus continuer! vous etes ruine");}
    else {alert("Vous avez perdu");
argent-=som_mise(); 
perte+= som_mise();}
}
a.addEventListener("click",bilan);

