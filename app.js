var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var Output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    message(
      `😵 Ohhh the loss is ${loss} and the percentage is ${lossPercentage} %`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    message(
      `🤩 Wow  the profit is ${profit} and the percentage is ${profitPercentage} %`
    );
  } else {
    message(`There is No Profit No Loss!!`);
  }
}

function message(msg) {
  Output.innerText = msg;
}
