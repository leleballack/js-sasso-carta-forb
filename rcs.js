// Sasso Carta e Forbice tra due giocatori CPU

//Creare due variabili per generare SCF di due giocatori CPU
var pc = Math.random();
  if (pc < 1/3) {
	pc = "scissors";
  } else if (pc < 2/3) {
	pc = "rock";
  } else {
	pc = "paper";
  }

var computer = Math.random();
  if (computer < 1/3) {
	computer = "paper";
  } else if (computer < 2/3) {
	computer = "scissors";
  } else {
	computer = "rock";
  }

//Stampare i risultati dei due giocatori
document.writeln("Pc: " + pc)
document.writeln("<br>Computer: " + computer);
