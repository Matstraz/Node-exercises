function oddNumber(number){
    if(number %2 !== 0){
        console.log(`Your odd number is ${number}`)
    }else if(number === 0){
        console.log(`Your number is 0`)
    }else{
        console.log(`Your even number is ${number}`)
    }
}

module.exports = oddNumber