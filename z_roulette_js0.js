// retourne le nombre mise
function nombre_mise(){
      let val=document.getElementById("list").options.selectedIndex;
      let value= document.getElementById("list").options[val].text;
      return value;
}
 