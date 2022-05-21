// function average(){
//     var sum=0;
// var a = [1,2,3,4,5,6,7,8,9]
//     for(var i=1; i<=a.length; i++)
//       {
//         sum=sum+a[i];
//       }
//         // console.log(sum);
// if(average=sum/a.length)
// {
//   console.log(average);
//   }
// // average(3,656,7,8,9,0,0,8,7,);
// }


// function average(...nums) 
// {
//     let total = 0;
//     for(const num of nums) {
//     total += num/nums.length;
//     }
//     return total;
// }
// console.log(average(24, 88, 12, 4));


// function ArrayAvg(myArray) {
//     var i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
// }
//     return summ / ArrayLen;
// }
// var myArray = [1, 5, 2, 3, 7];
// var a = ArrayAvg(myArray);
// console.log(a)




// var swapCase = function(letters){
//     for(var i = 0; i<letters.length; i++){
//         if(letters[i] === letters[i].toLowerCase()){
//             letters[i] = letters[i].toUpperCase();
//         }else {
//             letters[i] = letters[i].toLowerCase();
//         }
//     }
//    console.log(letters);
// }

// var text = 'So, today we have REALLY good day';

// swapCase(text);


var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

var text = 'Test';

var swappedText = swapCase(text); // 