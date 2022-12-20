let suffixCipher = function(str,cb) {
    let test=[];
    let value='';
   
    let arr=str.split(" ");
    console.log(cb);
    let newArr=Object.keys(cb);
    console.log(newArr);
    for(let i=0;i<arr.length;i++){
       
       console.log(newArr);
       for(let j=0;j<newArr.length;j++){
     
       if (arr[i].endsWith(newArr[j])){
        console.log(arr[i]+"......."+newArr[j]);

            value=newArr[j];
            console.log(value);
            //console.log(value(arr[i]));
            test.push(cb[value]);
        }
       }
    }
    if(test.length>0){
        return test.join(" ");
    } else{
        return test;
    }
    
};
let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));