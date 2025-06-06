const params = new URLSearchParams(window.location.search);
const saldo = params.get('saldo') || '0';
document.querySelector('.saldo').innerText = `${saldo} puntos`;

