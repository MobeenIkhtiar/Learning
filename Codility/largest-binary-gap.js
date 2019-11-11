function largestBinaryGap(number) {
    var binary = Math.abs(number).toString(2),
    largestGap = 0, currentmaxGap;

    for(var i=0;i<binary.length;){
        if(binary[i]=='1' ){
            currentmaxGap = 0; i++;

            while(binary[i]=='0'){i++ && currentmaxGap++;}

            if(binary[i]=='1' && currentmaxGap > 0){
             largestGap = Math.max(largestGap,currentmaxGap); ++i;}

        }else{i++;}
    }

return largestGap; }

console.log(largestBinaryGap(1)); // 1 //=> 0
console.log(largestBinaryGap(5)); // 101 //=> 1
console.log(largestBinaryGap(6)); // 110 //=> 0
console.log(largestBinaryGap(19)); // 10011 //=> 2
console.log(largestBinaryGap(1041)); // 10000010001 //=> 5
console.log(largestBinaryGap(6291457)); // 11000000000000000000001 //=> 20
console.log(largestBinaryGap(1376796946)); // 1010010000100000100000100010010 //=> 5
console.log(largestBinaryGap(1610612737)); // 1100000000000000000000000000001 //=> 28