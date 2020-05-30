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
  $(".bg-modal").css("display", "flex");

  // lock scrolling
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
    width: "100%"
  });
});
