var playerMarker;
var turnsTaken;
var board;
var gameOver;

function clearOut(){
  //clear variables
  playerMarker = "X";
  turnsTaken = 0;
  board = [0,0,0,0,0,0,0,0,0];
  gameOver = false;
  //clear UI
  $("#winner").text("Who will win?");
  $("td").text("");
  $("td").removeClass("yellow");
  $("#newGameButton").hide();
}


function sum( x,y,z) {
  return board[x] + board[y] + board[z];
}

function hasWinner() {
  if (sum(0,1,2) === 3 || sum(3,4,5) === 3 ||
      sum(6,7,8) === 3 || sum(0,3,6) === 3 ||
      sum(1,4,7) === 3 || sum(2,5,8) === 3 ||
      sum(0,4,8) === 3 || sum(2,4,6) === 3) {
    return 1;
  }

  if (sum(0,1,2) === -3 || sum(3,4,5) === -3 ||
      sum(6,7,8) === -3 || sum(0,3,6) === -3 ||
      sum(1,4,7) === -3 || sum(2,5,8) === -3 ||
      sum(0,4,8) === -3 || sum(2,4,6) === -3) {
    return -1;
  }

  return 0;
}

function placeMarker(id) {
  var element = $("#" + id);
  if (gameOver) {
    alert("Game over man.");
  }
  else {
    if(element.text()===""){
      turnsTaken = turnsTaken + 1;
      element.text(playerMarker);
      if(playerMarker === "O"){
        playerMarker = "X";
        board[id] = -1;
      }
      else{
        playerMarker = "O";
        board[id] = 1;
        element.addClass("yellow");
      };
    }
  };
  if(hasWinner() === 1) {
    $("#winner").text("X is the winner!");
    gameOver = true;
  }
  if(hasWinner() === -1) {
    $("#winner").text("O is the winner!");
    gameOver = true;
  }
  if(hasWinner() === 0 && turnsTaken === 9){
    $("#winner").text("Cat's Game!");
    gameOver = true;
  }
  if(gameOver){
    $("#newGameButton").show();
  }
};


$(document).ready(function() {

  clearOut();
  $("#newGameButton").on("click", clearOut);
  $("#0").on("click", function() {
    placeMarker(0);
  });
  $("#1").on("click", function() {
    placeMarker(1);
  });
  $("#2").on("click", function() {
    placeMarker(2);
  });
  $("#3").on("click", function() {
    placeMarker(3);
  });
  $("#4").on("click", function() {
    placeMarker(4);
  });
  $("#5").on("click", function() {
    placeMarker(5);
  });
  $("#6").on("click", function() {
    placeMarker(6);
  });
  $("#7").on("click", function() {
    placeMarker(7);
  });
  $("#8").on("click", function() {
    placeMarker(8);
  });










}); // End of ready function
