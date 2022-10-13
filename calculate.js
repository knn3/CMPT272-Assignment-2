function init() {
  document
    .getElementById("fileInput")
      .addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0]);
    console.log(reader);
}

function findValueOf(letter) {
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

function handleFileLoad(event) {
  console.log(event);
//   document.getElementById("fileContent").textContent = event.target.result;
    let data = event.target.result
    var grades = data.match(/[+-]?\d+(\.\d+)?/g);
    console.log(data)
    console.log(grades)
    console.log(input)


    // let pair = data.split('\r\n')
    // console.log(pair)

    // num = pair[1].match(/[+-]?\d+(\.\d+)?/g);
    // console.log(num)

    // if (num == grades[0]) {
    //     console.log("It works")
    //     console.log(pair[1]) // pair of name and grade with "," 
    //     console.log(pair[1].split(",")[0].trim()) // return the name and the grade
    // }
    var nums = grades.map((grade) => {
        return parseFloat(grade);
    });
    var max = Math.max(...nums);

    console.log(nums.indexOf(max))

    // var histogram = document.querySelectorAll()

    for (let i = 0; i < grades.length; i++){
        for (let j = 1; j < input.length; j++){
            if (
              parseFloat(grades[i]) >=
              parseFloat(document.getElementById(input[j].id).value)
            ) {
                console.log(grades[i])
                document.getElementById(j).innerHTML += "O";
                break;
            }
        }


        // if (parseFloat(grades[i]) >= parseFloat(document.getElementById("A+").value)) {
        //   document.getElementById("0").innerHTML += "O";
        // } else if (parseFloat(grades[i]) >= parseFloat(document.getElementById("A").value)) {
        //   document.getElementById("1").innerHTML += "O";
        // } else if (parseFloat(grades[i]) >= parseFloat(document.getElementById("A-").value)) {
        //     document.getElementById("2").innerHTML += "O";
        // }
    }
}


