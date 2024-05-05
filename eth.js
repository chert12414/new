function loadEthereumPrice() {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT')
    .then(response => response.json())
    .then(data => {
        const ethPrice = parseFloat(data.price);
        document.getElementById('eth-price').textContent = `Цена Ethereum: $${ethPrice.toFixed(2)}`;
    })
    .catch(error => {
        console.error('Ошибка при загрузке цены Ethereum:', error);
        document.getElementById('eth-price').textContent = 'Ошибка при загрузке цены';
    });
}
window.onload = loadEthereumPrice;