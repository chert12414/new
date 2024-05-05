function loadBitcoinPrice() {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
    .then(response => response.json())
    .then(data => {
        const btcPrice = parseFloat(data.price);
        document.getElementById('btc-price').textContent = `Цена Bitcoin: $${btcPrice.toFixed(2)}`;
    })
    .catch(error => {
        console.error('Ошибка при загрузке цены Bitcoin:', error);
        document.getElementById('btc-price').textContent = 'Ошибка при загрузке цены';
    });
}

window.onload = loadBitcoinPrice;
