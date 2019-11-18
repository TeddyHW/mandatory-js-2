// -----Funktioner är i toppen-----
// ----- Skapande av variabler samt kallande på funktioner börjar
// på rad 250 i botten av filen-----

// -----MAIN FUNKTION-----
function AddSomething(e) {
  console.log(e.target);
  circleOrCross();
  if (e.target.matches(".box")) {

    // Kollar om någon har vunnit eller om spelet är slut
    xWin();
    oWin();
    if (xInRow === true || oInRow === true || positions === 9) {
      alert("Game is over! Press reset button to start over.")
      return;
    }

    // Kollar ifall boxen redan är fylld
    boxFilled(e.target.id);

    if (boxfull === false) {
      // Lägger till Kryss eller Cirkel
      if (isCross) {
        e.target.append(addCross());
        crossTOrF(e.target.id)
      }
      else if (isCircle) {
        e.target.append(addCircle());
        circleTOrF(e.target.id)
      }

      // Visar vem som vann
      xWin();
      oWin();
      if (xInRow === true) {
        alert("X Won!")
      }
      if (oInRow === true) {
        alert("O Won!")
      }
      if (positions === 9) {
        alert("Tie!");
      }
      positions++;
    }
    else { // Ifall boxen redan var full så skippas inte spelarens tur
      circleOrCross();
    }
  }
}

// -----VEMS TUR-----
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

// -----SKAPAR KRYSS-----
function addCross() {
	let newCross = document.createElement("p");
	newCross.innerHTML = "&#10060;";
	return newCross;
}

// -----SKAPAR CIRKEL-----
function addCircle() {
	let newCircle = document.createElement("div");
	newCircle.setAttribute('id', 'circle');
	return newCircle;
}

// -----KOLLAR OM KRYSS HAR VUNNIT-----
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

// -----KOLLAR OM CIRKEL HAR VUNNIT-----
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

// -----HÅLLER KOLL PÅ VAR DET FINNS KRYSS-----
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

// -----HÅLLER KOLL PÅ VAR DET FINNS CIRKLAR-----
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

// -----KOLLAR OM BOXEN ÄR TOM-----
function boxFilled(box) {
  boxfull = false;
	switch(box) {
		case "num1":
			if (box1.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num2":
      if (box2.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num3":
      if (box3.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num4":
      if (box4.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num5":
      if (box5.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num6":
      if (box6.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num7":
      if (box7.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num8":
      if (box8.innerHTML !== "") {
        boxfull = true;
      }
			break;
		case "num9":
      if (box9.innerHTML !== "") {
        boxfull = true;
      }
			break;
	}
}

// -----RESET KNAPP-----
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
  cross1 = cross2 = cross3 = cross4 = cross5 =
  cross6 = cross7 = cross8 = cross9 = false;

  circle1 = circle2 = circle3 = circle4 = circle5 =
  circle6 = circle7 = circle8 = circle9 = false;

  isCircle = isCross = false;
  oInRow = xInRow = false;
  positions = 0;
}

// -----SLUT PÅ FUNKTIONER-----

// Skapar variabler för kryss och cirklar
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

// Skapar variabler för vems tur det är
let isCross = false;
let isCircle = false;

// Skapar variabler för boxarna
let box1 = document.querySelector("#num1");
let box2 = document.querySelector("#num2");
let box3 = document.querySelector("#num3");
let box4 = document.querySelector("#num4");
let box5 = document.querySelector("#num5");
let box6 = document.querySelector("#num6");
let box7 = document.querySelector("#num7");
let box8 = document.querySelector("#num8");
let box9 = document.querySelector("#num9");

let boxfull = false;

// Skapar variabler för vem som vann
let xInRow = false;
let oInRow = false;

// Skapar variabel för hur många rutor som är fyllda
let positions = 0;


// -----KALLAR PÅ MAIN FUNKTIONEN-----
document.addEventListener("click", AddSomething);

// -----KALLAR PÅ KNAPP FUNKTIONEN-----
let myButton = document.querySelector("button");
myButton.addEventListener("click", onClick);
