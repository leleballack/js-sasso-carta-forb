// Sasso Carta e Forbice tra due giocatori CPU

//Creare due variabili per generare random Rock/Paper/Scissors di due giocatori CPU
var pc = Math.random();
if (pc < 1/3) {
  pc = "Scissors";
} else if (pc < 2/3) {
  pc = "Rock";
} else {
  pc = "Paper";
}

var computer = Math.random();
if (computer < 1/3) {
  computer = "Paper";
} else if (computer < 2/3) {
  computer = "Scissors";
} else {
  computer = "Rock";
}

//Stampare i risultati dei due giocatori
document.writeln("Pc: " + pc)
document.writeln("<br>Computer: " + computer + "<br>");

//Creare una funzione per controllare le possibili scelte dei due giocatori
var comparison = function (firstChoice, secondChoice) {

  //Se le scelte sono uguali, è un pareggio
  if (firstChoice === secondChoice) {
    return "It's a draw! Try again";
  }

  //Se 1 è Rock: se 2 è Scissors perde, se 2 è Paper vince
  else if (firstChoice === "Rock") {
    if (secondChoice === "Scissors") {
      return "Rock wins<br>Pc beats Computer!";
    } else {
        return "Paper wins<br>Computer beats Pc!";
      }
  }

  //Se 1 è Paper: se 2 è Rock perde, se 2 è Scissors vince
  else if (firstChoice === "Paper") {
    if (secondChoice === "Rock") {
      return "Paper wins<br>Pc beats computer!";
    } else {
        return "Scissors wins<br>Computer beats Pc!";
      }
  }
  //Se 1 è Scissors: se 2 è Paper perde, se è Rock vince
  else if (firstChoice === "Scissors") {
    if (secondChoice === "Paper") {
      return "Scissors wins<br>Pc beats computer!";
    } else {
        return "Rock wins<br>Computer beats Pc!";
      }
  }
}

//Stampare chi (Pc/Computer) e cosa vince (Rock/Paper/Scissors)
document.writeln(comparison(pc,computer));
