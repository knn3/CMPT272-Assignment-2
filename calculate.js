function init() {
  document
    .getElementById("fileInput")
      .addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  console.log(event);
//   document.getElementById("fileContent").textContent = event.target.result;
}

function findValueOf(letter) {
    // let grade = document.querySelector("#letter")

    // grade.addEventListener("input", function () {
    //     let val = grade.nodeValue
    //     console.log(val)
    // })

    let grade = document.getElementById(letter).value;
    console.log(grade)
    return grade;
}

var input = document.querySelectorAll("input[type=number]")
for (let i = 1; i < input.length; i++){
    input[i].addEventListener("change", function () {
        if (input[i-1].id != "max")
            document.getElementById(input[i - 1].id).min = findValueOf(input[i].id);
        if (i + 1 < length)
            document.getElementById(input[i + 1].id).max = findValueOf(input[i].id);
            
    })
}