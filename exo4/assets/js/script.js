$(function(){
  let okFistName, okLastName, okAge, okPlace, okJob, okCompany;
  $('#firstName').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let firstName = $('#firstName').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-]+$/.test(firstName)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules et de -
      $('#firstName').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#one').text('✓');
      $('#one').css('color','green');
      okFistName = true;
    } else {
      $('#firstName').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#one').text('✗');
      $('#one').css('color','red');
      okFistName = false;
    }
  });
  $('#lastName').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let lastName = $('#lastName').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-\s]+$/.test(lastName)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules, de - et d'espace \s
      $('#lastName').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#two').text('✓');
      $('#two').css('color','green');
      okLastName = true;
    } else {
      $('#lastName').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#two').text('✗');
      $('#two').css('color','red');
      okLastName = false;
    }
  });
  $('#age').focusout(function(){
    let age = $('#age').val();
    //Regex : le premier nombre va de 01 à 29 ou de 30 à 31, le second de 01 à 09 ou de 10 à 12 et le dernier doit contenir 4 chiffres
    if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(age) && /^((00))(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(age) == false && /^([0-2][0-9]|(3)[0-1])(\/)(00)(\/)\d{4}$/.test(age) == false && /^(30)(\/)(02)(\/)\d{4}$/.test(age) == false && /^(31)(\/)(02)(\/)\d{4}$/.test(age) == false && /^(31)(\/)(04)(\/)\d{4}$/.test(age) == false && /^(31)(\/)(06)(\/)\d{4}$/.test(age) == false && /^(31)(\/)(09)(\/)\d{4}$/.test(age) == false && /^(31)(\/)(11)(\/)\d{4}$/.test(age) == false) {
      $('#age').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#three').text('✓');
      $('#three').css('color','green');
      okAge = true;
    } else {
      $('#age').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#three').text('✗');
      $('#three').css('color','red');
      okAge = false;
    }
  });
  $('#place').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let place = $('#place').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-\s]+$/.test(place)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules, de - et d'espace \s
      $('#place').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#four').text('✓');
      $('#four').css('color','green');
      okPlace = true;
    } else {
      $('#place').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#four').text('✗');
      $('#four').css('color','red');
      okPlace = false;
    }
  });
  $('#job').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let job = $('#job').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-\s]+$/.test(job)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules et de -
      $('#job').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#five').text('✓');
      $('#five').css('color','green');
      okJob = true;
    } else {
      $('#job').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#five').text('✗');
      $('#five').css('color','red');
      okJob = false;
    }
  });
  $('#company').focusout(function(){//Fonction qui s'active lorsqu'on perd le focus de l'input
    let company = $('#company').val();//Déclaration d'une variable qui correspond à la valeur de l'input
    if (/^[a-zâäàéèùêëîïôöçñA-Z-\s]+$/.test(company)) {//Regex qui recherche la présence de lettres, de lettres accentues, de lettres majuscules, de - et d'espace \s
      $('#company').css('border','1px green solid');//Changement des propriétés css de la bordure de l'input
      $('#six').text('✓');
      $('#six').css('color','green');
      okCompany = true;
    } else {
      $('#company').css('border','1px red solid');//Changement des propriétés css de la bordure de l'input
      $('#six').text('✗');
      $('#six').css('color','red');
      okCompany = false;
    }
  });
  $('#button').click(function(){
    let firstName = $('#firstName').val(), lastName = $('#lastName').val(), age = $('#age').val(), place = $('#place').val(), job = $('#job').val(), company = $('#company').val();
    if (okFistName==true && okLastName==true && okAge==true && okPlace==true && okJob==true && okCompany==true) {
      $('#sentence').text(firstName + ' ' + lastName + ', né le ' + age + ' à ' + place + ', actuellement ' + job + ' à ' + company + '.');
    } else {
      alert('Veuillez remplir correctement les champs.');
    }
  });
});
