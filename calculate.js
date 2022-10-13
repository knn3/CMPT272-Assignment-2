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
//   document.getElementById("fileContent").textContent = event.target.result;
    data = event.target.result;

    grades = data.match(/[+-]?\d+(\.\d+)?/g);
    
    console.log(data)
    console.log(grades)
    console.log(input)


    let pair = data.split('\r\n')
    // console.log(pair)

    // num = pair[1].match(/[+-]?\d+(\.\d+)?/g);
    // console.log(num)

    // if (num == grades[0]) {
    //     console.log("It works")
    //     console.log(pair[1]) // pair of name and grade with "," 
        console.log(pair[1].split(",")[0].trim()) // return the name and the grade
    // }
    var nums = grades.map((grade) => {
        return parseFloat(grade);
    });
    var max = Math.max(...nums);
    var maxIndex = nums.indexOf(max);
    document.getElementById("Highest").innerHTML = pair[maxIndex + 1].split(",")[0].trim() + " (" + max + "%)";

    var min = Math.min(...nums);
    var minIndex = nums.indexOf(min);
    document.getElementById("Lowest").innerHTML = pair[minIndex + 1].split(",")[0].trim() + " (" + min + "%)";

    document.getElementById("Mean").innerHTML = mean(nums).toPrecision(4);

    document.getElementById("Median").innerHTML = median(nums);
    // var histogram = document.querySelectorAll()

    for (let i = 0; i < grades.length; i++){
        for (let j = 1; j < input.length; j++){
            if (
              parseFloat(grades[i]) >=
              parseFloat(document.getElementById(input[j].id).value)
            ) {
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

function median(nums) {
    nums.sort(function (a, b) { return a - b; });
    console.log(nums)
    console.log(Math.floor(nums.length / 2));
    if (nums.length % 2 == 1) {
        return nums[Math.floor(nums.length / 2)]
    }
    else {
        return (nums[(nums.length / 2) - 1] + nums[(nums.length / 2)]) / 2
    }
}

function mean(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum / nums.length;
}

for (let k = 1; k < input.length; k++){
    document.getElementById(input[k].id).addEventListener("change", function () {
      for (let i = 1; i < input.length; i++) {
        document.getElementById(i).innerHTML = "";
      }

      for (let i = 0; i < grades.length; i++) {
        for (let j = 1; j < input.length; j++) {
          if (
            parseFloat(grades[i]) >=
            parseFloat(document.getElementById(input[j].id).value)
          ) {
            document.getElementById(j).innerHTML += "O";
            break;
          }
        }
      }
    });
}






