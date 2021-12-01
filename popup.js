//#region Event Listeners
document.getElementById("addListItem").addEventListener("click", function () {
  var textValue = document.querySelector("#new-todo").value;
  addListItem(textValue);
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//#endregion Event Listeners

function addListItem(textValue) {
  if (textValue != null) {
    var ul = document.getElementById("todo-items");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textValue));
    ul.appendChild(li);
    spanAndX(li);
    document.querySelector("#new-todo").value = "";
  }
}

function addListSubItem() {
  console.log("todo");
}

function spanAndX(li) {
  var plusSpan = document.createElement("SPAN");
  var plusTxt = document.createTextNode("+");
  plusSpan.className = "add-subitem";
  plusSpan.appendChild(plusTxt);
  li.appendChild(plusSpan);
  plusSpan.addEventListener("click", addListSubItem);

  var xSpan = document.createElement("SPAN");
  var xTxt = document.createTextNode("\u00D7");
  xSpan.className = "close";
  xSpan.appendChild(xTxt);
  li.appendChild(xSpan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
