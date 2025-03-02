let items = [];
let players = [];

function addItem()
{
    const itemInput = document.getElementById('item-input');
    const item = itemInput.value.trim();
    if (item)
    {
        items.push(item);
        updateItemList();
        itemInput.value = '';
    }
}

function updateItemList()
{
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = items.map(item => `<li>${item}</li>`).join(''); 
}

function startPlayerInput()
{
    document.getElementById('setup').style.display = 'none';
    document.getElementById('players').style.display = 'block';
}

function addPlayer()
{
    const playerInput = document.getElementById('player-input');
    const player = playerInput.value.trim();
    if (player)
    {
        players.push(player);
        updatePlayerList();
        playerInput.value = '';
    }
}

function updatePlayerList()
{
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = players.map(player => `<li>${player}</li>`).join('');
}

function startGame()
{
    if (players.length < 3 || items.length < 1)
    {
        alert('Mindestens 3 Spieler und 1 Begriff erforderlich!');
        return;
    }

    const imposterIndex = Math.floor(Math.random() * players.length);
    const word = items[Math.floor(Math.random() * items.length)];

    const resultList = document.getElementById('result-list');
    resultList.innerHTML = players.map((player, index) => 
    {
        return `<li>${player}: ${index === imposterIndex ? 'Imposter' : word}</li>`;
    }).join('');
    
    document.getElementById('players').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
