(function() {
  'use strict';

  var button = document.getElementById('copyEmail');
  var message = document.getElementById('message');

  function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  button.addEventListener('click', function() {
    let emailText = button.dataset.clipboardText;
    copyToClipboard(emailText);
    message.classList.remove('hide');
    window.setTimeout(function() {
      message.classList.add('hide-transition');
    }, 1000);
    window.setTimeout(function() {
      message.classList.add('hide');
      message.classList.remove('hide-transition');
    }, 3000);
  });
})();
