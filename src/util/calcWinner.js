const winningMatrix = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[7,6],[2,5],[0,4]]
};

export const calcWinner = (cellValue, cellIndex) => {

    const winingRanges = winningMatrix[cellIndex];
    for (let i=0; i < winingRanges.length; i++){
        const currentValue = cellValue[cellIndex];
        const firstOptions = cellValue[winingRanges[i][0]];
        const secondOptions = cellValue[winingRanges[i][1]];

        if (currentValue === firstOptions && firstOptions === secondOptions){
            return {
                hasResult : true,
                winner : currentValue,
                winningCombination: [cellIndex, winingRanges[i][0], winingRanges[i][1]]
            }
        }
    }
    return {
        hasResult : false,
        winner : undefined,
        winningCombination : []
    }
} 