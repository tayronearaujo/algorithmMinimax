const initialBoard = [
    ['','',''],
    ['','',''],
    ['','',''],
]

const teste = [
    [["x","",""],["","",""],["","",""]],
    [["","x",""],["","",""],["","",""]],
    [["","","x"],["","",""],["","",""]],
    [["","",""],["x","",""],["","",""]],
    [["","",""],["","x",""],["","",""]],
    [["","",""],["","","x"],["","",""]],
    [["","",""],["","",""],["x","",""]],
    [["","",""],["","",""],["","x",""]],
    [["","",""],["","",""],["","","x"]]
]


const teste1 = [
    ["x","",""],
    ["","f",""],
    ["","","g"]
] 

for(let i = 0; i < teste1.length; i++){
   
    console.log(teste1[0][i][i] )
     
}
// function possiblesplays(board, player) {
//     const allPositions = []
//     for(let i = 0; i < board.length; i++){
//         for(let j = 0; j < board.length; j++){
//             const newBoard = JSON.parse(JSON.stringify(board))
//             newBoard[i][i][j] = player

//             console.log(newBoard)

//             allPositions.push(newBoard)
//         }   
//     }
//     return allPositions
// }   

//possiblesplays(teste, 'o')



function min(board, player){
    const possibleMin = possiblesplays(board, player)
    console.log('chamou min')
    console.log (JSON.stringify( possibleMin))
    
    
    
    max(possibleMin,player)
}


function max(board, player){
    const possibleMax = possiblesplays(board, player)
    console.log('chamou max')

    console.log (JSON.stringify( possibleMax))

    console.log('\n')
    console.log('\n')
    console.log('\n')
    console.log('\n')
    console.log('\n')


    min(possibleMax, 'o')
}

//max(initialBoard,'x')

