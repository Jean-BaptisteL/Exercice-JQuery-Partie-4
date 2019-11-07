$(function(){
  $('#validation').click(function(){//Fonction qui se déclanche lorsqu'on clique sur le bouton Validation
    let scoreOne = parseFloat($('#numberOne').val());//Déclaration de variables qui correspondent à la valeur des inputs
    let scoreTwo = parseFloat($('#numberTwo').val());
    let scoreThree = parseFloat($('#numberThree').val());
    let scoreFour = parseFloat($('#numberFour').val());
    let scoreFive = parseFloat($('#numberFive').val());
    let average = parseFloat((scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive)/5);//Déclaration d'une variable qui correspond à la moyenne des autres variables
    let appreciation;
    //Condition dans le cas où les valeurs des inputs ne sont pas exploitables
    if (isNaN(average) || scoreOne<0 || scoreOne>20 || scoreTwo<0 || scoreTwo>20 || scoreThree<0 || scoreThree>20 || scoreFour<0 || scoreFour>20 || scoreFive<0 || scoreFive>20) {
      alert('Une note c\'est un nombre hein. Un nombre entre 0 et 20 hein. Non mais franchement!');
    }else{
      if (average>=0 && average<10) {//Si la moyenne est entre 0 et 10
        appreciation = 'en dessous de la moyenne!';
      } else if (average>=10 && average<13) {//Si la moyenne est entre 10 et 13
        appreciation = 'plutôt moyen.';
      } else if (average>=13 && average<16) {//Si la moyenne est entre 13 et 16
        appreciation = 'bien.';
      } else if (average>=16 && average<20) {//Si la moyenne est entre 16 et 20
        appreciation = 'très bien !';
      } else {//Si la moyenne est égale à 20
        appreciation = 'excellent !';
      }
    }
    //On écrit la moyenne et l'appréciation dans un paragraphe
    $('#average').text('La moyenne de Jean-Bernard est de ' + average + '/20 et c\'est ' + appreciation);
  });
});
