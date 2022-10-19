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

function findValueOf(letter) {
    let grade = document.getElementById(letter).value;
    return grade;
}

var input = document.querySelectorAll("input[type=number]")
for (let i = 1; i < input.length; i++){
  input[i].addEventListener("change", function () {
    var upper = document.getElementById(input[i - 1].id).value;
    var lower = document.getElementById(input[i + 1].id).value;
    if (this.value.length && this.value - upper <= 0 && this.value - lower >= 0) {
      if (input[i - 1].id != "max")
        document.getElementById(input[i - 1].id).min = findValueOf(input[i].id);
      if (i + 1 < length)
        document.getElementById(input[i + 1].id).max = findValueOf(input[i].id);
    }
    else {
      // handle error
      alert("Invalid input! Please try again!")
    }         
  })
}


function handleFileLoad(event) {
    data = event.target.result;

    grades = data.match(/[+-]?\d+(\.\d+)?/g);

    let pair = data.split('\r\n')
    
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

    for (let i = 0; i < grades.length; i++){
        for (let j = 1; j < input.length; j++){
            if (
              parseFloat(grades[i]) >=
              parseFloat(document.getElementById(input[j].id).value)
            ) {
                document.getElementById(j).innerHTML += "👨‍🎓";
                break;
            }
        }
    }
}

function median(nums) {
    nums.sort(function (a, b) { return a - b; });

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

grades = undefined;

for (let k = 1; k < input.length; k++){
  document.getElementById(input[k].id).addEventListener("change", function () {
    var upper = document.getElementById(input[k - 1].id).value
    var lower = document.getElementById(input[k + 1].id).value
    
    if (this.value.length && (this.value - upper <= 0) && (this.value - lower >= 0)) {
      for (let i = 1; i < input.length; i++) {
        document.getElementById(i).innerHTML = "";
      }
      if (grades) {
        for (let i = 0; i < grades.length; i++) {
          for (let j = 1; j < input.length; j++) {
            if (
              parseFloat(grades[i]) >=
              parseFloat(document.getElementById(input[j].id).value)
            ) {
              document.getElementById(j).innerHTML += "👨‍🎓";
              break;
            }
          }
        }
      }
    }
  });
}






