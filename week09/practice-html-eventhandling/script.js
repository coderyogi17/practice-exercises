window.addEventListener("DOMContentLoaded", event => {
    const mirroredDiv = document.getElementById("mirrored");
    const originalText = document.getElementById("original");
    originalText.addEventListener("input", event => {
      let text = originalText.value;
      mirroredDiv.innerText = text;
    })
  });

//   window.addEventListener("DOMContentLoaded", event => {
//     const mirroredDiv = document.getElementById("mirrored");
//     document.getElementById("original")
//       .addEventListener("input", event => {
//         mirroredDiv.innerText = event.target.value;
//       })
//   });