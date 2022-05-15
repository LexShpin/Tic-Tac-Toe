const gameFields = document.querySelectorAll('.board-cell')
const winner = document.querySelector('.winner')

const Player = option => {
    this.option = option

    const getOption = () => {
        return option
    }

    return {getOption}
}

const gameBoard = (function() {
    let _board = []
    const _player1 = Player('X')
    const _player2 = Player('O')
    let _activePlayer = 'player_1'

    // Update the board in the HTML
    const updateBoard = () => {
        for (let i = 0; i < gameFields.length; i++) {
            gameFields[i].textContent = _board[i]
        }

        displayController.checkForWinner(_board)
    }

    // Players go in turns
    gameFields.forEach(field => field.addEventListener('click', (e) => {
        if (field.textContent != '') {
            return
        }

        let currentKey = e.target.getAttribute('data-number')

        if (_activePlayer == 'player_1') {
            _board[currentKey - 1] = _player1.getOption()
            updateBoard()
            _activePlayer = 'player_2'
        } else if (_activePlayer == 'player_2') {
            _board[currentKey - 1] = _player2.getOption()
            updateBoard()
            _activePlayer = 'player_1'
        }
    }))

    // Reset the active player to player_1
    const resetActivePlayer = () => {
        _activePlayer = 'player_1'
    }

    // Reset the board
    const resetBoard = () => {
        _board.length = 0
    }

    const getBoard = () => {
        return _board
    }

    return {updateBoard, resetActivePlayer, resetBoard, getBoard}
})()

const displayController = (function() {
    const _playAgainBtn = document.querySelector('.play-again-btn')

    // Resetting the game
    _playAgainBtn.addEventListener('click', () => {
        gameBoard.resetBoard()
        gameBoard.updateBoard()
        gameBoard.resetActivePlayer()
        winner.textContent = ''
    })

    // Defining a winner
    const checkForWinner = board => {

        // // Horizontal player X
        if (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }
        if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }
        if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }

        // Vertical player X
        if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }
        if (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }
        if (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }

        // Diagonal player X
        if (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }
        if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
            winner.textContent = 'Player 1 wins!'
        }

         // // Horizontal player O
         if (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }
        if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }
        if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }

        // Vertical player O
        if (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }
        if (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }
        if (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }

        // Diagonal player O
        if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }
        if (board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
            winner.textContent = 'Player 2 wins!'
        }

        // Check for draw
        if (board.length == 9 && winner.textContent == '') {
            winner.textContent = 'Draw!'
        }
    }

    return {checkForWinner}
})()

