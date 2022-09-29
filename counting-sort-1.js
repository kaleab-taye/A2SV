function countingSort(arr) {
    // Write your code here
    let freq = new Array(100).fill(0);
    arr.map((e)=>{
        freq[e] += 1;
    })
    
    return freq;

}
