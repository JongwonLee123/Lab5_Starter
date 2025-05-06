// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_select = document.getElementById('horn-select');
  const volume_slider = document.getElementById('volume');
  const volume_icon = document.querySelector('#volume-controls img');

  const play_button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const horn_image = document.querySelector('img');
  const js_confetti = new JSConfetti();

  horn_select.addEventListener('change', () => {
    const selected_horn = horn_select.value;
    updateHorn(selected_horn, audio, horn_image);
  });
  volume_slider.addEventListener('change', () => {
    const volume = volume_slider.value;
    updateVolume(volume, audio, volume_icon);
  });
  play_button.addEventListener('click', () => {
    audio.play();
    if (horn_select.value === 'party-horn') {
      js_confetti.addConfetti();
    }
  });
  // debugging
  console.log(horn_select);
  console.log(volume_slider);
  console.log(volume_icon); 
  console.log(play_button);
  console.log(audio);
  console.log(horn_image);
}

// chooses the right horn sound and image based on the selected horn
function updateHorn(selected_horn, audio, horn_image) {
  if(selected_horn === 'air-horn'){
    audio.src = './assets/audio/air-horn.mp3';
    horn_image.src = './assets/images/air-horn.svg';
  }
  else if(selected_horn === 'car-horn'){
    audio.src = './assets/audio/car-horn.mp3';
    horn_image.src = './assets/images/car-horn.svg';
  }
  else if(selected_horn === 'party-horn'){
    audio.src = './assets/audio/party-horn.mp3';
    horn_image.src = './assets/images/party-horn.svg';
  }
}

// updates the volume of the audio and changes the volume icon based on the volume level
function updateVolume(volume, audio, volume_icon) {
  const normalizedVolume = volume / 100;
  audio.volume = normalizedVolume;

  if (volume_icon) {
    if (volume == 0) {
      volume_icon.src = './assets/icons/volume-level-0.svg';
      volume_icon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volume_icon.src = './assets/icons/volume-level-1.svg';
      volume_icon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volume_icon.src = './assets/icons/volume-level-2.svg';
      volume_icon.alt = 'Volume level 2';
    } else {
      volume_icon.src = './assets/icons/volume-level-3.svg';
      volume_icon.alt = 'Volume level 3';
    }
  }
  // debugging
  console.log(volume);
}
