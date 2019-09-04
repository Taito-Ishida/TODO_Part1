let symbol = "+";
let total = "";
let curVal = "";
let curValb = "";
let flag = 0; // 数字 = 0, 演算子 = 1

const screen = document.getElementById("screen");
const clear = document.getElementById("ac");

screen.textContent = "0"; // 初期表示で0を表示

// 数字を入力
const inputValue = data => {
  if(curVal.length <= 9) {  // 入力は9桁まで
    clear.innerText = "C" // ACをCに変える
    flag = 0;
    if (screen.textContent === "0") { // 表示が0の場合は、入力された文字と入れ替える
      curVal = data + "";
    } else {
      curVal += data;
    }
    screen.textContent = curVal;
  }
};

// 文字列から"."を見つけ、入力を制限する
const inputDot = data => {
  if (!curVal.includes(".")) {
    if(curVal === "") { // 数字が未入力時に"."を入力した場合、表示を"0."にする
      curVal = "0";
    }
    clear.innerText = "C" // ACをCに変える
    curVal += data;
    screen.textContent = curVal;
  }
};

// 0が複数入力できないように制限する
const inputZero = data => {
  if (screen.textContent !== "0") {
    clear.innerText = "C" // ACをCに変える
    flag = 0;
    curVal += data;
    screen.textContent = curVal;
  }
};

// プラスマイナスの反転
const inverted = () => {
  if (curVal === "") { // 合計の数字を反転
    total = -total;
    screen.textContent = total;
  } else { // 入力した数字を反転
    curVal = -curVal;
    screen.textContent = curVal;
  }
};

// 計算をする
const calclation = data => {
  if (flag === 0 && data !== "=") { // =以外の記号を押した
    flag = 1;

    let formula = total + symbol + curVal;
    total = eval(formula);

    symbol = data;
    curVal = "";
    screen.textContent = total;

  } else if (flag === 1 && data === "=") { // =を２回以上連打した
    let formula = total + symbol + curValb;
    total = eval(formula);

    curVal = "";
    screen.textContent = total;

  } else if (data === "=") { // =を一回押した
    flag = 1;

    let formula = total + symbol + curVal;
    total = eval(formula);

    curValb = curVal;
    curVal = "";
    screen.textContent = total;

  } else { // =を押した後数字を入力せず記号を押した
    symbol = data;
  }
};

const percent = () => {
  if (symbol === "+" || symbol === "-") { // 足し算、引き算の場合の動作
   let formula = curVal / 100;
   formula = total * formula;
   curVal = eval(formula);

   screen.textContent = curVal;
 } else { // それ以外(数字のみ、掛け算、割り算の動作)
   let formula = curVal / 100;
   curVal = eval(formula);

   screen.textContent = curVal;
 }
};


// ACまたはCを押した場合の動作
const allCrear = () => {
  if (clear.textContent === "C") {  // Cの場合
    total = "0";
    curVal = "";
    clear.innerText = "AC";
    screen.textContent = "0";
  } else {  // ACの場合
    symbol = "+";
    total = "";
    curVal = "";
    curValb = "";
    flag = 0;
    screen.textContent = "0";
  }
};