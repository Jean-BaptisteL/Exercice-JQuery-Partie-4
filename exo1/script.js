$(function(){
  let tryingNbr = 0;
  let victoryNbr = 0;
  $('#button').click(function(){
    let numberShifumi = parseInt(Math.random()*3);
    let shifumi;
    let userChoice = $('select option:selected').val();
    tryingNbr++;
    if (numberShifumi == 0) {
      shifumi = 'Pierre';
    } else if (numberShifumi == 1) {
      shifumi = 'Feuille';
    } else {
      shifumi = 'Ciseau';
    }
    if (shifumi == userChoice) {
      $('#result').text('Égalité !');
      $('#result').css('color','black');
    } else if ((shifumi == 'Pierre' && userChoice == 'Feuille') || (shifumi =='Feuille' && userChoice =='Ciseau') || (shifumi == 'Ciseau' && userChoice =='Pierre')) {
      $('#result').text('C\'est la victoire !!!');
      $('#result').css('color','green');
      victoryNbr++;
    } else {
      $('#result').text('Tu as perdu !');
      $('#result').css('color','red');
    }
    $('#players').text('Tu as joué ' + userChoice + ' et l\'ordinateur à joué ' + shifumi +'.' );
    let percent = (victoryNbr*100/tryingNbr).toFixed(2);
    $('#statistics').text('Tu as gagné '+ victoryNbr + ' fois et perdu ' + (tryingNbr-victoryNbr) + ' fois, soit ' + percent + '% de victoires.');
  });
});
