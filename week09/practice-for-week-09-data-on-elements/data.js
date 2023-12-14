// Your code here

window.addEventListener("DOMContentLoaded",() =>{

    //define the event listener for add button
    let addBtn = document.getElementById("add");
    let inputName = document.getElementById("name");
    let selectType = document.getElementById("type");
    const addBtnFunc = () =>{
        if(inputName.value){
            
            const newRows= document.createElement("li");
            newRows.id="first-element";
            newRows.innerHTML="first item";
            newRows.innerText = selectType.value;
            //newRows.setAttribute("data-value",inputName.value);
            newRows.setAttribute("data-type",selectType.value);
            document.getElementById("shopping-list").appendChild(newRows);

        }
    }

    //addBtn.addEventListener("click", addBtnFunc());

    addBtn.addEventListener("click", e => {
        e.preventDefault();
        addBtnFunc();
        //const newRows = e.target;
       // alert(`Dog #${newRows.dataset.selectType.value} loves you!`);
    });
});