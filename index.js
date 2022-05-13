const gameFields = document.querySelectorAll('.board-cell')

const Player = option => {
    this.option = option

    const getOption = () => {
        return option
    }

    return {getOption}
}

const gameBoard = (function() {
    const board = ['X', 'O']
    const _player1 = Player('X')
    const _player2 = Player('O')

    let _activePlayer = 'player_1'

    board.forEach(option => {
        for (let i = 0; i < gameFields.length; i++) {
            gameFields[i].textContent = option
        }
    })

    gameFields.forEach(field => field.addEventListener('click', (e) => {
        if (field.textContent != '') {
            return
        }

        if (_activePlayer == 'player_1') {
            field.textContent = _player1.getOption()
            board.push(_player1.getOption())
            _activePlayer = 'player_2'
        } else if (_activePlayer == 'player_2') {
            field.textContent = _player2.getOption()
            board.push(_player2.getOption())
            _activePlayer = 'player_1'
        }
    }))

    console.log(board)

    return {board}
})()

const displayController = (function() {
    const _playAgainBtn = document.querySelector('.play-again-btn')

    _playAgainBtn.addEventListener('click', () => {
        gameFields.forEach(field => field.textContent = '')
        gameBoard.board = []
    })

    return {}
})()

