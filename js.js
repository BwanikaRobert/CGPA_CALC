const stdName = document.querySelector(".student_name");
const stdNo = document.querySelector(".student_no");
const btnCalc = document.querySelector(".btn");
const body = document.querySelector("body");
let btnAdd = document.getElementsByClassName("plus_icon")[0];
const form = document.querySelector(".form_input");
const inputBox = document.getElementsByClassName("input_box");

let marks = [];
let units = [];
let grades = [];
// let =[]
let counter = 1;

const assignGrades = function (mark) {
  if (mark >= 90 && mark < 101) return "A5";
  else if (mark >= 80) return "B4";
  else if (mark >= 70) return "C3";
  else if (mark >= 60) return "D2";
  else if (mark >= 50) return "E1";
  else if (mark > 0 && mark < 50) return "F0";
};

btnCalc.addEventListener("click", function (e) {
  e.preventDefault();
  collectData();
  console.log(stdName.value);
});
btnAdd.addEventListener("click", function () {
  newCourse();
});

// HTML text
function newCourse() {
  counter++;
  const text = `       
   <div class="input_box">
          <label for="c1"> Course Unit ${counter}:</label>
          <input type="text" class="c${counter}" placeholder="Mark ${counter}" />
          <input type="text" class="g${counter}" placeholder="C${counter}" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="plus_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>`;
  btnCalc.insertAdjacentHTML("beforebegin", text);
  btnAdd = inputBox[counter - 1].querySelector("svg");
  btnAdd.addEventListener("click", function () {
    newCourse();
    // body.addEventListener("keydown", function (e) {
    //   console.log(e);
    // });
  });
  inputBox[counter - 2].querySelector("svg").classList.add("hidden");
}

const collectData = function (arr) {
  const dataBox = [...arr];
  marks.length = 0;
  units.length = 0;
  dataBox.forEach((elem, ind) => {
    marks.push(+elem.querySelector(`.c${ind + 1}`).value);
    elem.querySelector(`.c${ind + 1}`).value = "";
    units.push(+elem.querySelector(`.g${ind + 1}`).value);
    elem.querySelector(`.g${ind + 1}`).value = "";
  });
};
btnCalc.addEventListener("click", function () {
  collectData(inputBox);
  grades.length = 0;
  // Assign and store grades
  marks.forEach((elem) => {
    grades.push(assignGrades(elem));
  });
  // arithmetics
  arithmetic(grades, units);
});

function arithmetic(arr1, arr2) {
  let sum = 0;
  arr1.forEach((ele, ind) => {
    sum = sum + +ele[1] * arr2[ind];
  });
  const GP =
    sum /
    arr2.reduce((acc, elem) => {
      return acc + elem;
    });
  let finalGP = Math.round(GP * 100) / 100;
  // console.log(sum, Math.round(finalGP * 100) / 100);
  alert(`Hey ${stdName.value} your CGPA is ${finalGP}`);
}
