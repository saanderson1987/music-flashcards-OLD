const socket = io();
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

// const context = new AudioContext();
// const oscillators = {};
// let midi, data;
//
// if (navigator.requestMIDIAccess) {
//   navigator.requestMIDIAccess({
//     sysex: false
//   }).then(onMIDISuccess, onMIDIFailure);
// } else {
//   console.warn("No MIDI support in your browser");
// }
//
// function onMIDISuccess(midiData) {
//   console.log(midiData);
//   midi = midiData;
//   const allInputs = midi.inputs.values();
//   for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
//     input.value.onmidimessage = onMIDImessage;
//   }
// }
//
// function onMIDIFailure() {
//   console.warn("Not finding a MIDI controller");
// }
//
// function onMIDImessage(messageData) {
//   var newItem = document.createElement('li');
//   newItem.appendChild(document.createTextNode(messageData.data));
//   newItem.className = 'user-midi';
//   document.getElementById('midi-data').prepend(newItem);
//   socket.emit('midi', messageData.data);
// }

document.addEventListener('keydown', (e) => {
  // console.log(e.key);
  socket.emit('keydown', e.key);
});

socket.on('responseToKey', function (data) {
  console.log(data);
});
