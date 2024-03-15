var num1 = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var num2 =  [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var newNum = []
for (var i = 0; i < num1.length; i++){
    for (var j = 0; j < num2.length; j++){
        if (num1[i] === num2[j]){
            newNum.push(num1[i])
        }
    }
}
console.log(newNum)

let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1','div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let array = {}
for (let i of tags) {
    if (array[tags]) {
        array[tags] += 1
    } else {
        array[i] = 1
    }
}
console.log(array)



function avarageOfNumbers (arr){
    let sum = 0
    let count = 0
    for ( let i = 0; i< arr.length; i++ ){
        if( arr[i] > 0){
            sum += arr[i]
            count++
        }

    }
    if (count === 0){
        return 'no'
    }
    return sum/count
}

var numbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(avarageOfNumbers((numbers)))


function words (item) {
    var filteredWords =[]
    for (var word in words.length){
        if(word. toLowerCase.includes('t') && word.toLowerCase.includes('a')){
            filteredWords.push(word)


        }
    }
    return filteredWords

}
var things = ['text', 'frontend', 'apple', 'melon']

console.log(filteredwords)