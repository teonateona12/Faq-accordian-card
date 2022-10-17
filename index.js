const icon = document.querySelectorAll(".icon");
const hiddenText = document.querySelectorAll(".answerd");
const divv = document.querySelectorAll(".question");

for (let i = 0; i < divv.length; i++) {
  divv[i].addEventListener("click", (event) => {
    divv[i].classList.toggle("question-click");
    let iconn = event.target.nextSibling.nextSibling;
    iconn.classList.toggle("rotate");
    let text = event.target.parentNode.nextSibling.nextSibling;
    if (text.textContent === "") {
      text.classList.add("question");
      text.classList.add("padding");
      text.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
    } else {
      text.textContent = "";
    }
  });
}
