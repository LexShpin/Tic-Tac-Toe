const gameFields = document.querySelectorAll('.board-cell')

const gameBoard = (function() {
    let _board = []

    gameFields.forEach(field => field.addEventListener('click', (e) => {
        if (field.textContent != '') {
            return
        }
        field.textContent = 'X'
        _board.push('X')
        console.log(_board)
    }))

    return {}
})()

const displayController = (function() {
    

    return {}
})()

const Player = option => {
    this.option = option

    const getOption = () => {
        return option
    }

    return {getOption}
}