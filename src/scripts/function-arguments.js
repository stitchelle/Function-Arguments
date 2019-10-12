let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0){
            console.log(buildMeUp += `${theWordArray[i]}${punctuation} `)
        } else {
            console.log(buildMeUp += `${theWordArray[i]} `)
        }
        
    }

}

addExcitement(sentence, "?")