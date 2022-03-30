// Ceka se na DOMContentLoaded zato sto je scrypt dodat u <head> tagu u HTML dokumentu
window.addEventListener('DOMContentLoaded', () => {

    //Konstante
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    //Promenljive
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';  // Ova me greska kostala 2 sata trazenja :(

    /*
        Indeksi na resetci (tabli)
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    /*
        Uslovi koji jedan od igraca mora da ispuni
        za pobedu, indeksi polja koji formiraju
        linije redova kolona i glavnih dijagonala.
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    function handleResultValidation(){
        let roundWon = false;
        for(let i = 0; i <= 7; i++){
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if(a === '' || b === '' || c === '')
            {
                continue;   // Preskakanje iteracije
            }
            if(a === b && b === c){
                roundWon = true;
                break;
            }
        }

        if(roundWon){
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON); // Provera koji je igrac pobedio
            isGameActive = false;   // Kraji igre
            return;
        }

        if(!board.includes('')) // Ako na tabli nema praznih polja, onde je nereseno
        announce(TIE);  // Dva ipo sata sam trazio gde je greska A NISAM DEFINISAO CONST TIE NITI SLAO KAO STRING AAAAAAAAAAAAAAAAAA!
    }

    // Ovime se 'objavljuje' koji je igrac pobedio, u slucaju da je nereseno, ispisuje se nereseno
    const announce = (type) => {
        switch(type){
            case PLAYERO_WON: announcer.innerHTML = 'Igrač <span class="playerO"><strong>O</strong></span> je pobednik!';
            break;
            case PLAYERX_WON: announcer.innerHTML = 'Igrač <span class="playerX"><strong>X</strong></span> je pobednik!';
            break;
            case TIE: announcer.innerHTML = 'Nerešeno!';
        }
        announcer.classList.remove('hide');
    };

    // Sledecom funkcijom osiguravamo da igrac moze da odigra samo ono polje koje je slobodno
    const isValidAction = (tile) => {
        if(tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    // userAction funkcija predstavlja potez igraca
    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive){    // Provera da li je koristnik pritisnuo dozvoljeno polje i da li igra traje
            tile.innerText = currentPlayer; // Postavlja se X ili O na polje koje je igrac pritisnuo
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    // Vracamo tablu onakva kakva je bila pre igre
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];   // Prazne se polja
        isGameActive = true;    // Igra postaje aktivna za novu partiju
        announcer.classList.add('hide');    // Sakriva se tekst pobednika

        if(currentPlayer === 'O'){  // Vraca se X da igra prvi
            changePlayer();
        }

        tiles.forEach(tile => { // Tekst se vraca u normalu (brisu se boje i sadrzaj)
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach((tile, index) =>{
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});

