//click function for expenses
$("#subFunds").on("click", function() {
  event.preventDefault();

  console.log("submit press");

  // display modal
  $("#subExpense").css("display", "flex");

  // lock scrolling
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
    width: "100%"
  });
});

//Function for Submit Expense
$("#expenseSubmit").on("click", function(event) {
  event.preventDefault();

  var newTransaction = {
    id: $("#id")
      .val()
      .trim(),
    name: $("#name")
      .val()
      .trim(),
    catagory: $("#catagory")
      .val()
      .trim(),
    amount:
      $("#amount")
        .val()
        .trim() * -1,
    total: $("#total")
      .val()
      .trim()
  };

  // display modal
  $("#bB-modal").css("display", "flex");

  // lock scrolling
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
    width: "100%"
  });

  $.post("/api/new", newTransaction).done(function(data) {
    console.log(data);

    $("#id").val("");
    $("#name").val("");
    $("#catagory").val("");
    $("#amount").val("");
    $("#total").val("");
  });

  // closing the modal
  $(".close").on("click", function() {
    $(".bB-modal").css("display", "none");

    $("html, body").css({
      overflow: "auto",
      height: "auto"
    });
  });
});

// Function for Submit Income
$("#incomeSubmit").on("click", function(event) {
  event.preventDefault();

  var newTransaction = {
    id: $("#id")
      .val()
      .trim(),
    name: $("#name")
      .val()
      .trim(),
    catagory: $("#catagory")
      .val()
      .trim(),
    amount: $("#amount")
      .val()
      .trim(),
    total: $("#total")
      .val()
      .trim()
  };

  // display modal
  $("#bB-modal").css("display", "flex");

  // lock scrolling
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
    width: "100%"
  });

  $.post("/api/new", newTransaction).done(function(data) {
    console.log(data);

    $("#id").val("");
    $("#name").val("");
    $("#catagory").val("");
    $("#amount").val("");
    $("#total").val("");
  });
});

// closing the modal
$(".close").on("click", function() {
  $(".bB-modal").css("display", "none");

  $("html, body").css({
    overflow: "auto",
    height: "auto"
  });
});

// submit on click capture button for income
$("#incomeSubmit").one("click", function() {
  var nameAmount = $("#enterName")
    .val()
    .trim();

  var incomeAmount = $("#incomeForm")
    .val()
    .trim();

  var catagoryAmout = $("#catagoryInput")
    .val()
    .trim();

  event.preventDefault();

  console.log(nameAmount);
  console.log(incomeAmount);
  console.log(catagoryAmout);
});

//click function for the add funds submit button
$("#addFunds").on("click", function() {
  event.preventDefault();

  console.log("submit press");

  // display modal
  // $(".bg-modal").css("display", "flex");

  // lock scrolling
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
    width: "100%"
  });
});

// modal.html code
//Total Money
var totalMoney;
$.get("/api/all", function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data.length !== 0) {
      totalMoney += data[i].amount;
    }
  }
});
console.log(totalMoney);

// Get the modal
var modal = document.getElementById("buddyModal");

// Get the button that opens the modal
var btn = document.getElementById("submitExpense");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//Function for expense button
//$("#expenseSubmit").on("click", function(event) {

//Budget Buddy Hide/Show
//       $("#budgetBuddy").toggle();

//Condtional for remark
expensePercent;
if (expense === "food") {
  expensePercent = 10;
} else if (expense === "living expense") {
  expensePercent = 50;
} else if (expense === "entertainment") {
  expensePercent = 5;
} else if (expense === "gas") {
  expensePercent = 30;
} else if (expense === "social") {
  expensePercent = 5;
}

//array of postive remarks
var positive = [
  "Right on track, keep it up!",
  "Look at those gains!",
  "Cha-Ching!!",
  "Everything is looking good here",
  "You're that much closer to your goal!"
];

//array of negative remarks
var negative = [
  "Are you sure you reaaaaally need that?",
  "Now that's just a guilty pleasure",
  "Uhhh let's take a second and think about this",
  "Wait wait wait, why do you need this?",
  "Don't. Just dont't."
];

isPositive();

function isPositive() {
  var randomPositive = positive[Math.floor(Math.random() * positive.length)];
  var randomNegative = negative[Math.floor(Math.random() * negative.length)];

  targetExpense = totalMoney / expensePercent;
  if (expensePercent < TargetExpense) {
    $("#modalText").text(randomPositive);
  } else {
    $("#modalText").text(randomNegative);
  }
}
