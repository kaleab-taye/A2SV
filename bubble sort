function countSwaps(a) {
    // Write your code here
    var count=0;
    for (let i = 1; i < a.length; i++) {
       
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // swap(a[j], a[j + 1]);
                a[j]=[a[j+1], a[j+1]=a[j]][0]
                count+=1;
            }
        }
        
    }
    
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
    return;

}
