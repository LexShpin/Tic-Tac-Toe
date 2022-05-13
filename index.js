const gameFields = document.querySelectorAll('.board-cell')

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

    const updateBoard = () => {
        for (let i = 0; i < gameFields.length; i++) {
            gameFields[i].textContent = _board[i]
        }
    }

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

    const resetActivePlayer = () => {
        _activePlayer = 'player_1'
    }

    const resetBoard = () => {
        _board.length = 0
    }

    return {updateBoard, resetActivePlayer, resetBoard}
})()

const displayController = (function() {
    const _playAgainBtn = document.querySelector('.play-again-btn')

    _playAgainBtn.addEventListener('click', () => {
        gameBoard.resetBoard()
        gameBoard.updateBoard()
        gameBoard.resetActivePlayer()
    })

    return {}
})()

