const select = () => {
    /* Write queries for each of the following */
  
    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.querySelectorAll("*.seed"));
  
    // 2. Get all seedless fruit elements
    // Your code here
    console.log(document.querySelectorAll("*.seedless"));
  
    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.querySelector(".seedless"));
  
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log(
      Array.from(document.getElementsByTagName("span")).find(
        (ele) => ele.innerText === "you"
      )
    );
  
    // 5. Get all children of element "wrapper"
    // Your code here
    // console.log(document.querySelectorAll("#wrapper *"))
    console.log(document.getElementById("wrapper").children);
  
    // 6. Get all odd number list items in the list
    // Your code here
    console.log(document.querySelectorAll("li.odd"));
  
    // 7. Get all even number list items in the list
    // Your code here
    console.log(document.querySelectorAll("#two > ol > li:not(.odd)"));
  
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    console.log(
      Array.from(document.querySelectorAll("#three > p > a")).filter(
        (company) => company.className === ""
      )
    );
  
    // 9. Get "Amazon" list element
    // Your code here
    console.log(document.querySelectorAll("a.shopping"));
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    console.log(
      Array.from(document.querySelectorAll("li")).filter(
        (li) => li.children[0]?.className === "unicorn"
      )
    );
  };
  
  window.onload = select;