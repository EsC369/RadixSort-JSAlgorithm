// NOTE ONLY WORKS WITH NUMBERS
// This never makes comparisons between elements!
// It exploits the fact that information about the size of a number, it utilizes the data encoded in the number.

// Generally accepted notation: --
// TIME COMPLEXITY: O(nk)
// SPACE COMPLEXITY O(n + K)
// IF the digit 10ths place is low, likd single digits, the sort will be O(n log n)
//----------

// HELPER FUNCTIONS: ----
// Digit Count Function: - count how many digit each number is:
function digitCount(num) {
    // Edgecase: This if check is to make sure 0 isnt entered, otherwise the result will be -Infinity.
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Digit Count Function - Grab what 10ths place the digit is:
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// Most Digits Function: - Determine which number has the most digits in it.
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits
}
//----

// Radix Sort Function: - Utilize all functions to complete a radix sort:
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for(let k=0;k<maxDigitCount;k++) {
        // Create 10 Empty digit buckets, aka 10 empty arrays.
        let digitBuckets = Array.from({length: 10}, () => [])
        
        // Loop over each number and determine which digit bucket it goes into:
        for(let i=0;i<nums.length;i++) {
            // get the 10ths place of the number
            let digit = getDigit(nums[i], k);

            // grab the desired digit and push the digit from the array bucket into the sorted position of nums:
            digitBuckets[digit].push(nums[i]);
        }
        // Concat all arrays "digit buckets" together into 1 array:
        nums = [].concat(...digitBuckets);
    }
    // Return sorted numbers:
    return nums;
}

let arrayOfNums = [23,345,5467,12,2345,9852];

// radixSort(arrayOfNums)
console.log(radixSort(arrayOfNums));
