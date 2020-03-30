jQuery('document').ready(function () {
  // jQuery('body').append('<a href="https://www.google.com/"> Go to Google!</a>');
  //jQuery('div').remove();

  //let p_clone = jQuery('p').clone();
  //jQuery('body').append(p_clone);

  // jQuery('button').on('click', function () {
  //   let value1, value2, value3, value4;
  //   value1 = jQuery('#myval1').val();
  //   value2 = jQuery('#myval2').val();

  //   value1 = parseInt(value1) * parseInt(value1);
  //   value2 = parseInt(value2) * parseInt(value2);
  //   alert('Value 1: ' + value1 + '\n' + 'Value 2 :' + value2);
  //   value3 = value1 + value2;
  //   alert('result++:  ' + value3);
  //   value4 = Math.sqrt(value3);
  //   alert(Math.round(value4));

  // });
  // jQuery('input').on('keyup', function () {
  //   let value1, value2, value3;
  //   value1 = jQuery('#myval1').val();
  //   value2 = jQuery('#myval2').val();

  //   value1 = parseInt(value1);
  //   value2 = parseInt(value2);

  //   value3 = value1 + value2;
  //   jQuery('#result').html(value3);

  // });

  // let test1 = prompt('Enter your name', '');
  // jQuery('#result').html(test1);

  // let test2 = confirm('Do you want clear your sheet?');
  // jQuery('#result').remove();
  // let a1 = 601;
  // if (a1 > 600) {
  //   alert('600 dan katta');
  // } else {
  //   alert('600 dan kichik');
  // }

  let pogoda = 'yomgir';
  let time = 'tun';
  if ((pogoda == 'quyoshli' || pogoda == 'bulutli') && time == 'kun') {
    alert('Piknikka borsa buladi');
  } else if (pogoda == 'yomgir' && time == 'kun') {
    alert('Piknikka borsa buladi, faqat zontik olvolish kerak!');
  } else {
    if (time == 'kun') {
      alert('Piknikka borib bulmaydi, chunki havo,' + pogoda + 'ku.\n Undan kurasi uyda utir, hozir karantin');
    } else {
      let message = 'Hozir tun! Qanaqa piknik?';
      if (pogoda == 'yomgir') {
        message = message + 'Yetmaganiga yomgir yogyabti, toming joyidami?';

      }
      alert(message);

    }
  }
});