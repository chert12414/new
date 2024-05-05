function loadSolanaPrice() {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT')
    .then(response => response.json())
    .then(data => {
        const solPrice = parseFloat(data.price);
        document.getElementById('sol-price').textContent = `Цена Solana: $${solPrice.toFixed(2)}`;
    })
    .catch(error => {
        console.error('Ошибка при загрузке цены Solana:', error);
        document.getElementById('sol-price').textContent = 'Ошибка при загрузке цены';
    });
}

window.onload = loadSolanaPrice;