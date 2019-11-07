$(function(){
  $('#firstName').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let firstName = $('#firstName').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-]+$/.test(firstName)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules et de -
      $('#firstName').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#one').text('✓');
      $('#one').css('color','green');
    } else {
      $('#firstName').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#one').text('✗');
      $('#one').css('color','red');
    }
  });
  $('#lastName').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let lastName = $('#lastName').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-\s]+$/.test(lastName)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules, de - et d'espace \s
      $('#lastName').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#two').text('✓');
      $('#two').css('color','green');
    } else {
      $('#lastName').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#two').text('✗');
      $('#two').css('color','red');
    }
  });
  $('#email').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let email = $('#email').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,6}$/.test(email)) {//Regex qui recherche la présence de lettres, chiffres, -, . ou _ suivi d'un @, puis une autre chaîne de caractères suivi d'un . et enfin 3 lettres
      $('#email').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#three').text('✓');
      $('#three').css('color','green');
    } else {
      $('#email').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#three').text('✗');
      $('#three').css('color','red');
    }
  });
  $('#telNbr').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let telNbr=$('#telNbr').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[0-9-/\/.]+$/.test(telNbr)) {//Regex qui recherche la présence de chiffres, de -, de / et de .
      $('#telNbr').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#four').text('✓');
      $('#four').css('color','green');
    } else {
      $('#telNbr').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#four').text('✗');
      $('#four').css('color','red');
    }
  });
});
