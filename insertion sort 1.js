function insertionSort1(n, arr) {
    // Write your code here
    let temp = arr[arr.length-1];
    for(let i=arr.length-2; i>=0; i--){
        if(arr[i]>temp){
            arr[i+1]=arr[i];
            if(i===0){
                console.log(arr.join(" "));
                arr[i]=temp;
            }
            console.log(arr.join(" "));
        }else{
            arr[i+1]=temp;
            console.log(arr.join(" "));
            return;
        }
    }
    return;
}
