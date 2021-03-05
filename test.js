function getEvenNumber(){
    let num = [];
    for(let i =1; i <51; i++){
        if(i%2==0){
            num.push(i);
        }
    }

    return num
}

console.log(getEvenNumber());