const twoSum = (arr, target) => {
    if (arr.length < 2)
        return []
    let complements = {};
  
    for(let i=0; i<arr.length; i++) {
        const curr = arr[i];
        const diff = target - curr;
        
        if (complements[curr] !== undefined) {
            return [complements[curr], i];
        } else {
            complements[diff] = i;
        }
    }
    return [];
}
module.exports = twoSum