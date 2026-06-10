// State management
let currentMode = 'encrypt';
let shiftKey = 7;

// Inisialisasi awal saat window dimuat
window.onload = function () {
    document.getElementById('shift-key').value = shiftKey;
    document.getElementById('shift-slider').value = shiftKey;
    processText();
}
