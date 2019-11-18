function AddSomething(e) {
  console.log(e.target);
  circleOrCross();
  if (e.target.matches(".box")) {

    if (xInRow === true) {
      alert("X Won!")
      return;
    }
    if (oInRow === true) {
      alert("O Won!")
      return;
    }

    if (positions === 9) {
      alert("Tie!");
      return;
    }

    if (isCross) {
      e.target.append(addCross());
      crossTOrF(e.target.id)
    }
    else if (isCircle) {
      e.target.append(addCircle());
      circleTOrF(e.target.id)
    }

    positions++;
    xWin();
    oWin();

  }
}

function circleOrCross() {
  if (!isCircle && !isCross) {
    isCircle = true;
  }
  else if (isCircle) {
    isCross = true;
    isCircle = false;
  }
  else if (isCross) {
    isCircle = true;
    isCross = false;
  }
}

function addCross() {
	let newCross = document.createElement("p");
	newCross.innerHTML = "&#10060;";
	return newCross;
}

function addCircle() {
	let newCircle = document.createElement("div");
	newCircle.setAttribute('id', 'circle');
	return newCircle;
}

function xWin() {
	if( cross1 === true && cross2 === true && cross3 === true ||
      cross4 === true && cross5 === true && cross6 === true ||
		  cross7 === true && cross8 === true && cross9 === true ||
      cross1 === true && cross4 === true && cross7 === true ||
		  cross2 === true && cross5 === true && cross8 === true ||
      cross3 === true && cross6 === true && cross9 === true ||
		  cross1 === true && cross5 === true && cross9 === true ||
      cross3 === true && cross5 === true && cross7 === true )	{
    xInRow = true;
	}
}

function oWin() {
	if( circle1 === true && circle2 === true && circle3 === true ||
      circle4 === true && circle5 === true && circle6 === true ||
		  circle7 === true && circle8 === true && circle9 === true ||
      circle1 === true && circle4 === true && circle7 === true ||
		  circle2 === true && circle5 === true && circle8 === true ||
      circle3 === true && circle6 === true && circle9 === true ||
		  circle1 === true && circle5 === true && circle9 === true ||
      circle3 === true && circle5 === true && circle7 === true )   {
    oInRow = true;
	}
}

function crossTOrF(box) {
	switch(box) {
		case "num1":
			cross1 = true;
			break;
		case "num2":
			cross2 = true;
			break;
		case "num3":
			cross3 = true;
			break;
		case "num4":
			cross4 = true;
			break;
		case "num5":
			cross5 = true;
			break;
		case "num6":
			cross6 = true;
			break;
		case "num7":
			cross7 = true;
			break;
		case "num8":
			cross8 = true;
			break;
		case "num9":
			cross9 = true;
			break;
	}
}

function circleTOrF(box) {
	switch(box) {
		case "num1":
			circle1 = true;
			break;
		case "num2":
			circle2 = true;
			break;
		case "num3":
			circle3 = true;
			break;
		case "num4":
			circle4 = true;
			break;
		case "num5":
			circle5 = true;
			break;
		case "num6":
			circle6 = true;
			break;
		case "num7":
			circle7 = true;
			break;
		case "num8":
			circle8 = true;
			break;
		case "num9":
			circle9 = true;
			break;
	}
}


function onClick(e) {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  cross1 = false;
  cross2 = false;
  cross3 = false;
  cross4 = false;
  cross5 = false;
  cross6 = false;
  cross7 = false;
  cross8 = false;
  cross9 = false;
  circle1 = false;
  circle2 = false;
  circle3 = false;
  circle4 = false;
  circle5 = false;
  circle6 = false;
  circle7 = false;
  circle8 = false;
  circle9 = false;

  isCross = false;
  isCircle = false;

  xInRow = false;
  oInRow = false;

  positions = 0;
}

let cross1 = false;
let cross2 = false;
let cross3 = false;
let cross4 = false;
let cross5 = false;
let cross6 = false;
let cross7 = false;
let cross8 = false;
let cross9 = false;
let circle1 = false;
let circle2 = false;
let circle3 = false;
let circle4 = false;
let circle5 = false;
let circle6 = false;
let circle7 = false;
let circle8 = false;
let circle9 = false;

let isCross = false;
let isCircle = false;

let box1 = document.querySelector("#num1");
let box2 = document.querySelector("#num2");
let box3 = document.querySelector("#num3");
let box4 = document.querySelector("#num4");
let box5 = document.querySelector("#num5");
let box6 = document.querySelector("#num6");
let box7 = document.querySelector("#num7");
let box8 = document.querySelector("#num8");
let box9 = document.querySelector("#num9");

let xInRow = false;
let oInRow = false;

let positions = 0;


document.addEventListener("click", AddSomething);

let myButton = document.querySelector("button");
myButton.addEventListener("click", onClick);
