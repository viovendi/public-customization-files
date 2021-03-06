console.log('Start working, Google Tag Manager');
$.getScript('https://viovendi.github.io/customizations/shared/http.js');
$('.customization2_attendee_edit-action').append('<span class="code-message"></span>');

function getInput(name) {
  var input;
  $('.customization2_attendee_further-data_custom-question').each(function () {

    var inputName = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
    if (inputName.indexOf(name) >= 0) {
      input = $(this).find('.customization2_attendee_further-data_custom-question_input')
    }
  });
  return input;
};

function prefill(input) {
  if (input) input.value = 'ZS';
  var event;
  if (typeof (Event) === 'function') {
    event = new Event('input'); // for Chrome
  } else {
    event = document.createEvent('Event');
    event.initEvent('input', true, true); // for IE
  }
  input.dispatchEvent(event)
}

var debounce = function (fn, ms) {
  var timeout;
  return function () {
    var fnCall = function () {
      fn.call(this, arguments)
    }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms)
  };
}

async function checkCode() {
  const input = getInput('Abonnentennummer');
  const code = input.val().trim();
  const result = await makeRequest({
    url: `https://cs.doo.net/v1/integrations/vincentz/booking-code?code=${code}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
  })
  if (result.payload.id) {
    $('.customization2_attendee_edit-action_save').prop('disabled', false);
    $('.code-message').text('')
    return false;
  } else {
    $('.code-message').text('Bitte geben Sie Ihre Abonnentennummer an')
    $('.customization2_attendee_edit-action_save').prop('disabled', true);
  }
}



async function handler() {
  const input = getInput('Abonnentennummer');

  if (input) $('.customization2_attendee_edit-action_save').prop('disabled', true);
  prefill(input[0])
  onChange = debounce(checkCode, 500);
  input.keyup('keyup', onChange);
}

handler()