for(let numberRange = 1; numberRange <= 100; numberRange++){
    if(numberRange % 3 === 0 && numberRange % 5 === 0) {
        console.log('fizzBuzz');
    }else if(numberRange % 3 === 0){
        console.log('fizz');
    }else if(numberRange % 5 === 0){
        console.log('buzz')
        ;
    }else {
        console.log(numberRange);
    }
}