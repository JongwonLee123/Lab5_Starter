// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voice_select = document.getElementById('voice-select');
  const text_area = document.getElementById('text-to-speak');
  const talk_button = document.querySelector('button');
  const face_image = document.querySelector('img');
  const synth = window.speechSynthesis;

  function populateVoiceList() {
    const voices = synth.getVoices();
    voice_select.innerHTML = '';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voice_select.appendChild(option);
    });
  }
  populateVoiceList();
  if(synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  talk_button.addEventListener('click', () => {
    const text = text_area.value;
    const selectedVoiceName = voice_select.value;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    const voices = synth.getVoices();
    const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Change face to open-mouthed while speaking
    utterance.onstart = () => {
      face_image.src = './assets/images/smiling-open.png';
    };

    // Change face back to smiling after speaking
    utterance.onend = () => {
      face_image.src = './assets/images/smiling.png';
    };

    // Speak the text
    synth.speak(utterance);
  });
}

