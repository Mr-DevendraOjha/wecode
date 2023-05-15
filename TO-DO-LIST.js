const input_Box= document.getElementById("input")
const list_Container=document.getElementById("list-container")
function add (){
    if(input_Box.value === ""){
        alert("You must Write Somthing")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_Box.value;
        list_Container.appendChild(li);
        input.onfocus="add"
       
}}
function click(){
    
}