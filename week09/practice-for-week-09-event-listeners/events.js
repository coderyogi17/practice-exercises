// Your code here

window.addEventListener("DOMContentLoaded", () => {
    alert("DOM has loaded");
    //make input element background red when input value is red
    let redInput = document.getElementById("red-input");
    const redInputFunc = () => {
      if (redInput.value === "red") {
        redInput.style.backgroundColor = "red";
      } else {
        redInput.style.backgroundColor = "transparent";
      }
    };
  
    redInput.addEventListener("input", redInputFunc);
  
    //make add-item trigger list item appendation with value from input
  
    let listAdd = document.getElementById("list-add");
    let addItem = document.getElementById("add-item");
    let ul = document.querySelector("#section-2 > ul");
  
    let addItemFunc = () => {
      let newListItem = document.createElement("li");
      newListItem.innerText = listAdd.value;
  
      ul.appendChild(newListItem);
    };
    addItem.addEventListener("click", addItemFunc);
  
    //when new color is selected in color selct, change background color of section
  
    let colorSelect = document.getElementById("color-select");
    let section3 = document.getElementById("section-3");
    let colorSelectFunc = () => {
      color = colorSelect.value;
      section3.style.backgroundColor = color;
    };
    colorSelect.addEventListener("input", colorSelectFunc);
  
    //when remove listeners is clicked, all other event listeners should be removed
  
    let removeListeners = document.getElementById("remove-listeners");
    removeListeners.addEventListener("click", () => {
        redInput.removeEventListener("input", redInputFunc());
      addItem.removeEventListener("click", addItemFunc());
      colorSelect.removeEventListener("input", colorSelectFunc());
    });
  
    //bonus one
    
    const addListeners = document.createElement("button");
    addListeners.id = "restore-listeners";
    addListeners.innerHTML = "Restore Listener";
    document.getElementById("section-4").appendChild(addListeners);

    addListeners.addEventListener("click", () => {
      redInput.addEventListener("input", redInputFunc());
      addItem.addEventListener("click", addItemFunc());
      colorSelect.addEventListener("input", colorSelectFunc());
    });
  
    //bonus 2
    let hoverDiv = document.createElement("div");
    hoverDiv.id = "hover-div";
    hoverDiv.innerHTML = "<h2> You Found me! <h2>";
    hoverDiv.style.color = "yellow"
    document.body.appendChild(hoverDiv);
   document.getElementById(hoverDiv).addEventListener(
      "mouseover",
      () => {
        hoverDiv.innerText = "You are hovering over me";
        hoverDiv.style.color = "black"
      }
    );
  
    hoverDiv.addEventListener("mouseleave", () => {
        hoverDiv.innerText = "You are not hovering over me";
    });
  });


  
  //bonus 3
  window.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      alert("YOU CLICKED THE SPACEBAR OMG");
    }
  });


  window.addEventListener("DOMContentLoaded", event => {
    // Now listen for a click on the body
    document.body.addEventListener("click", event => {
      console.log("The body click event!");
      console.log(event.target.id);
    });
  });

//   const form = document.getElementById("signup-form");

// const checkPasswordMatch = event => {
//     const passwordValue = document.getElementById("password").value;
//     const passwordConfirmValue = document.getElementById("confirm-password").value;
//     if (passwordValue !== passwordConfirmValue) {
//         alert("Passwords must match!");
//     } else {
//         alert("The form was submitted!");
//     }
// };

// form.addEventListener("submit", checkPasswordMatch);

// const form = document.getElementById("birthday-form");

// const checkMinimumAge = event => {
//     const birthday = document.getElementById("birthday").value;
//     const minBirthday = new Date(new Date().setFullYear(new Date().getFullYear() - 21));
//     if (minBirthday < birthday) {
//         event.preventDefault();
//         // younger than 21 years old
//     } else {
//         // over 21 years old
//     }
//     console.log(event.defaultPrevented);
// };

// form.addEventListener("submit", checkMinimumAge);

// // Fill dogsUl with list items; one per dog.
// const dogUl = document.getElementById("dogs");
// Object.keys(DOGS).forEach( id => {
//   const dog = DOGS[id];

//   const dogLi = document.createElement("li");
//   dogLi.innerText = dog.name + " -- " + dog.genus;

//   // store the dog's id in a **data-* attribute**
//   dogLi.setAttribute("data-id", dog.id);

//   dogUl.append(dogLi);
// });

// const dogUl = document.getElementById("dogs");
//     Object.keys(DOGS).forEach( id => {
//         const dog = DOGS[id];

//         const dogLi = document.createElement("li");
//         dogLi.innerText = dog.name + " -- " + dog.genus;

//         // store the dog's id in a **data-* attribute**
//         dogLi.setAttribute("data-id", dog.id);

//         // add event listener to alert the dogs id
//         dogLi.addEventListener("click", e => {
//             const dog = e.target;
//             alert(`Dog #${dog.dataset.id} loves you!`);
//         });

//         dogUl.append(dogLi);
//     });