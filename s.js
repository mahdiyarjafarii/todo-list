let input=document.getElementById("userInput");
let button=document.getElementById("enter");
let ul=document.querySelector("ul");
let item=document.getElementsByTagName("li");
function inputlength(){
    
return input.value.length;

}
function creatlist(){
let li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
function taghirrang(){
    li.classList.toggle("done")
}
li.addEventListener("click",taghirrang);
let dbtn=document.createElement("button");
dbtn.appendChild(document.createTextNode("x"));
li.appendChild(dbtn);
dbtn.addEventListener("click",remove);
function remove(){
    li.classList.add("delete")

}






}
function addlistafterclick(){
    
    if(inputlength()>0){
        creatlist();
    }


}



function addlistafterkey(event){
    if(inputlength()>0 && event.which===13){
        creatlist();
    }

}


button.addEventListener("click",addlistafterclick);
input.addEventListener("keypress",addlistafterkey);