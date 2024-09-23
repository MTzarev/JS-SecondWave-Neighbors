function equalNeighbors (arr){
    
    let counter = 0;
    for (let i = 0; i<arr.length; i++){
        let row = arr [i];
        for (let j = 0; j<row.length; j++){
            
            if (j < row.length - 1 && row[j] === row[j + 1]) {
                counter++;
            }
            if (i < arr.length - 1 && row[j] === arr[i + 1][j]) {
                counter++;
            }   
        }
    }
    console.log(counter);
}
equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
