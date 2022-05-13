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

    let activePlayer = 'player_1'

    gameFields.forEach(field => field.addEventListener('click', (e) => {
        if (field.textContent != '') {
            return
        }

        if (activePlayer == 'player_1') {
            field.textContent = _player1.getOption()
            _board.push(_player1.getOption())
            activePlayer = 'player_2'
        } else if (activePlayer == 'player_2') {
            field.textContent = _player2.getOption()
            _board.push(_player2.getOption())
            activePlayer = 'player_1'
        }

        console.log(_board)
    }))

    return {}
})()

const displayController = (function() {
    

    return {}
})()

