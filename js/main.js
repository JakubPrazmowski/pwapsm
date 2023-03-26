window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

window.navigator = window.navigator || {};

if (navigator.vibrate === undefined) {

    document.getElementById('v-unsupported').classList.remove('hidden');

    ['btnplay', 'button-play-v-thrice', 'button-stop-v'].forEach(function(elementId) {

      document.getElementById(elementId).setAttribute('disabled', 'disabled');

    });

} else {

    document.getElementById('butnplay').addEventListener('pointerdown', function() {

      navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]);

    });

    document.getElementById('button-play-v-thrice').addEventListener('click', function() {

      navigator.vibrate([1000, 500, 1000, 500, 2000]);

    });

    document.getElementById('button-stop-v').addEventListener('click', function() {

      navigator.vibrate(0);

    });

}
