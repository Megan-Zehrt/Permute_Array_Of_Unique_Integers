var arr = [1,2,3]

function get_permutations(arr) {
    
    let results = []
    
    function helper(arr, i){
        if(i >= arr.length){
            return results.push([...arr])   // base case
        }
        
        for(let j = i; j < arr.length; j++){    // Loop through elements starting from index i to the end of the array to generate permutations.
            swap(arr, j, i)      // Swap elements at indexes j and i
            helper(arr, i + 1)  // Recursive call with incremented i
            swap(arr, j , i)   // Restore the array back to original state after recursion
        }
    }
    
    helper(arr, 0)  // Start the recursion with initial index 0
    
    return results; // Return the permutations array
}


function swap(arr, indexA, indexB){
    let temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
}

console.log(get_permutations(arr))