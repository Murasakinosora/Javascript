//function save(){
//    console.log("SAVE INPUT");
//}

//event listeners

let myLeads =[];
//use const for different implementation, and avoid reassignment of values
//use const for variables that must not be changed
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
//grabbing unordered list element to display list
const ulEl = document.getElementById("ul-El");
//variable to hold the saved values 

inputbtn.addEventListener("click",function(){
    //executes when the button is clicked
    myLeads.push(inputEl.value);
    //clearing the input field
    inputEl.value = "";
    renderLeads();
});

function renderLeads(){
let listItems ="";
for(let i=0; i<myLeads.length; i++){
    //to render html lines and add its elements use innerHTML, else <li> tags will be displayed as plain text
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    //other implementation for rendering html elements usign javascript\
    //creating element
    //const li = document.createElement("li");
    //setting text content
    //li.textContent = myLeads[i];
    //appending into the html file
    //ulEl.append(li);
    
    //include li tag to render it automatically at the end of the loop
    //adding anchor tag to make the link clickable
    //listItems +=  "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</a></li>" ;
    //Simplifying list items
    // adding javascript variable with ${here}
    listItems =  `<li>
                     <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]} 
                     </a>
                   </li>` ;
}
ulEl.innerHTML += listItems
}