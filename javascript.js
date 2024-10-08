const svg = document.getElementById('board');
let count = 100;

// Tambahkan event listener untuk setup jumlah pemain
document.getElementById('start-game').addEventListener('click', function() {
    const numPlayers = parseInt(document.getElementById('num-players').value);

    // Inisialisasi pemain sesuai jumlah yang dipilih
    players = [];
    const colors = ['red', 'blue', 'green', 'orange'];  // Warna untuk 4 pemain

    for (let i = 0; i < numPlayers; i++) {
        players.push({
            name: `Player ${i + 1}`,
            position: 1,
            color: colors[i]
        });
    }

    // Sembunyikan setup dan tampilkan game
    document.getElementById('player-setup').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

 
});

let players = [];
let currentPlayer = 0;

let snakes = {
    99: 62,
    93: 75,
    73: 54,
    68: 52,
    56: 38,
    46: 12,
    35: 17
};

let ladders = {
    61: 81,
    78: 85,
    58: 65,
    32: 48,
    21: 39,
    15: 27
};


for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        let x = (row % 2 === 0) ? col * 120 : (9 - col) * 120;
        let y = row * 56;

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", "120");
        rect.setAttribute("height", "56");
        rect.setAttribute("stroke", "black");

        if ([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97].includes(count)) {
            rect.setAttribute("fill", "aqua");
        } else if ([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98].includes(count)) {
            rect.setAttribute("fill", "turquoise");
        } else if ([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99].includes(count)) {
            rect.setAttribute("fill", "yellow");
        } else if ([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100].includes(count)) {
            rect.setAttribute("fill", "pink");
        } else {
            rect.setAttribute("fill", "none");
        }

        svg.appendChild(rect);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x + 60);
        text.setAttribute("y", y + 30);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("font-family", "Poppins");
        text.setAttribute("font-size", "22");
        text.setAttribute("font-weight", "900");
        text.textContent = count;
        svg.appendChild(text);

        function addSnakeOrLadder(imgUrl, x, y, width, height, rotation = 0) {
            const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img.setAttributeNS(null, "href", imgUrl);
            img.setAttribute("x", x);
            img.setAttribute("y", y);
            img.setAttribute("width", width);
            img.setAttribute("height", height);

            if (rotation !== 0) {
                const centerX = x + width / 2;
                const centerY = y + height / 2;
                img.setAttribute("transform", `rotate(${rotation}, ${centerX}, ${centerY})`);
            }

            svg.appendChild(img);
        }

        // Ular
        addSnakeOrLadder("Images/Blue-Snake.png", 85, 10, 180, 180, 5); // 99 -> 62
        addSnakeOrLadder("Images/Green-Snake.png", 700, -15, 175, 175, 25); // 93 -> 75
        addSnakeOrLadder("Images/Grey-Snake.png", 705, 97, 200, 200, 45); // 73 -> 54
        addSnakeOrLadder("Images/Yellow-Snake.png", 907, 150, 125, 125, 335); // 68 -> 52
        addSnakeOrLadder("Images/Blue-Snake-2.png", 315, 210, 200, 200, 25); // 56 -> 38
        addSnakeOrLadder("Images/Purple-Snake.png", 660, 215, 350, 350, 310); // 46 -> 12
        addSnakeOrLadder("Images/Green-Snake.png", 450, 325, 175, 175, 25); // 35 -> 17

        // Tangga
        addSnakeOrLadder("Images/Long-Ladder.png", 15, 40, 180, 180); // 61 -> 81
        addSnakeOrLadder("Images/Long-Ladder.png", 315, 10, 230, 230, 72); // 78 -> 85
        addSnakeOrLadder("Images/Mid-Ladder.png", 165, 127, 180, 180, 180); // 58 -> 65
        addSnakeOrLadder("Images/Mid-Ladder.png", 860, 240, 180, 180, 145); // 32 -> 48
        addSnakeOrLadder("Images/Small-Ladder.png", 40, 305, 180, 180, 45); // 21 -> 39
        addSnakeOrLadder("Images/Small-Ladder.png", 625, 350, 180, 180, 225); // 15 -> 27

        count--;
    }
}

// Fungsi untuk menggambar ulang papan, ular, tangga, dan pemain
function drawBoardAndPlayers() {
    svg.innerHTML = '';  // Kosongkan papan sebelum menggambar ulang

    let count = 100;
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            let x = (row % 2 === 0) ? col * 120 : (9 - col) * 120;
            let y = row * 56;

            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", "120");
            rect.setAttribute("height", "56");
            rect.setAttribute("stroke", "black");

            // Warna kotak sesuai dengan kode Anda
            if ([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97].includes(count)) {
                rect.setAttribute("fill", "aqua");
            } else if ([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98].includes(count)) {
                rect.setAttribute("fill", "turquoise");
            } else if ([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99].includes(count)) {
                rect.setAttribute("fill", "yellow");
            } else if ([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100].includes(count)) {
                rect.setAttribute("fill", "pink");
            } else {
                rect.setAttribute("fill", "none");
            }

            svg.appendChild(rect);

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", x + 60);
            text.setAttribute("y", y + 30);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("font-family", "Poppins");
            text.setAttribute("font-size", "22");
            text.setAttribute("font-weight", "900");
            text.textContent = count;
            svg.appendChild(text);

            count--;
        }
    }

    // Gambar ulang ular dan tangga
    addSnakeOrLadder("Images/Blue-Snake.png", 85, 10, 180, 180, 5); // 99 -> 62
    addSnakeOrLadder("Images/Green-Snake.png", 700, -15, 175, 175, 25); // 93 -> 75
    addSnakeOrLadder("Images/Grey-Snake.png", 705, 97, 200, 200, 45); // 73 -> 54
    addSnakeOrLadder("Images/Yellow-Snake.png", 907, 150, 125, 125, 335); // 68 -> 52
    addSnakeOrLadder("Images/Blue-Snake-2.png", 315, 210, 200, 200, 25); // 56 -> 38
    addSnakeOrLadder("Images/Purple-Snake.png", 660, 215, 350, 350, 310); // 46 -> 12
    addSnakeOrLadder("Images/Green-Snake.png", 450, 325, 175, 175, 25); // 35 -> 17
    addSnakeOrLadder("Images/Long-Ladder.png", 15, 40, 180, 180); // 61 -> 81
    addSnakeOrLadder("Images/Long-Ladder.png", 315, 10, 230, 230, 72); // 78 -> 85
    addSnakeOrLadder("Images/Mid-Ladder.png", 165, 127, 180, 180, 180); // 58 -> 65
    addSnakeOrLadder("Images/Mid-Ladder.png", 860, 240, 180, 180, 145); // 32 -> 48
    addSnakeOrLadder("Images/Small-Ladder.png", 40, 305, 180, 180, 45); // 21 -> 39
    addSnakeOrLadder("Images/Small-Ladder.png", 625, 350, 180, 180, 225); // 15 -> 27

    // Gambarkan pemain di papan
    drawPlayers();
}

// Fungsi untuk menggambar pemain
function drawPlayers() {
    players.forEach(player => {
        let pos = getPosition(player.position);
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", pos.x + 60);
        circle.setAttribute("cy", pos.y + 30);
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", player.color);
        svg.appendChild(circle);
    });
}

// Fungsi untuk mendapatkan posisi berdasarkan nomor kotak
function getPosition(square) {
    let row = Math.floor((square - 1) / 10);  // Menentukan baris berdasarkan nomor kotak
    let col = (square - 1) % 10;  // Menentukan kolom

    // Untuk baris ganjil, kolom tetap dari kiri ke kanan
    if (row % 2 === 0) {
        col = col;  // Tidak berubah untuk baris ganjil (dari kiri ke kanan)
    } else {
        col = 9 - col;  // Balik urutan untuk baris genap (dari kanan ke kiri)
    }

    let x = col * 120;  // Posisi x berdasarkan kolom
    let y = (9 - row) * 56;  // Posisi y, dibalik untuk memulai dari baris paling bawah
    return { x, y };
}

function checkSnakeOrLadder(player) {
    let messageElement = document.getElementById('message');

    if (snakes[player.position]) {
        player.position = snakes[player.position];  // Pindah ke ekor ular
        document.getElementById('message').textContent = `${player.name} terkena ular! Turun ke kotak ${player.position}`;
    } else if (ladders[player.position]) {
        player.position = ladders[player.position];  // Pindah ke puncak tangga
        document.getElementById('message').textContent = `${player.name} naik tangga! Naik ke kotak ${player.position}`;
    }

    // Hapus pesan setelah 3 detik
    setTimeout(() => {
        messageElement.textContent = '';
    }, 9000);
}

// Fungsi untuk melempar dadu dan menggerakkan pemain
document.getElementById('roll-dice').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').textContent = `Dadu: ${dice}`;
    
    // Gerakkan pemain
    let player = players[currentPlayer];
    player.position += dice;

    // Batasi agar tidak lebih dari kotak 100
    if (player.position > 100) player.position = 100;

    // Periksa apakah pemain berada di ular atau tangga
    checkSnakeOrLadder(player);

    // Gambar ulang papan dan pemain
    drawBoardAndPlayers();

    // Ganti giliran pemain
    currentPlayer = (currentPlayer + 1) % players.length;
    document.getElementById('player-turn').textContent = `Giliran Pemain: ${currentPlayer + 1}`;
});

// Fungsi untuk menambahkan gambar ular dan tangga
function addSnakeOrLadder(imgUrl, x, y, width, height, rotation = 0) {
    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.setAttributeNS(null, "href", imgUrl);
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    img.setAttribute("width", width);
    img.setAttribute("height", height);

    if (rotation !== 0) {
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        img.setAttribute("transform", `rotate(${rotation}, ${centerX}, ${centerY})`);
    }

    svg.appendChild(img);
}

// Menggambar papan dan pemain untuk pertama kali
drawBoardAndPlayers();
