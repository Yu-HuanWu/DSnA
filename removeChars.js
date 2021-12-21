// Given a string contaning only a, b and c, remove all b and ac.

function removeChars(input) {
    // your code here
    let arr= []
    for(let i = 0; i< input.length; i++){
        arr.push(input[i])
    }
    let newarr=[]
    arr.forEach((char)=>{
        if (char!=='b'){
            newarr.push(char)
        }
    });
    let flag= true;
    while (flag){
        flag= false;
        for(let i= 0; i< newarr.length-1; i++){
            let j= i+1
            if (newarr[i]=== "a" && newarr[j]==="c"){
                newarr= newarr.slice(0, i).concat(newarr.slice(j+1));
                flag= true;
            }
        }
    }
    return newarr.join("")
}


console.log(removeChars('ab')) // 'a'
removeChars('abc') // ''
console.log(removeChars('cabbaabcca')) // 'caa'


