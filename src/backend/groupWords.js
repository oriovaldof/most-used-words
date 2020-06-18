module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            const groupWords = words
                .reduce((obj, word) => {
                    if (obj[word]) {
                        obj[word] = obj[word] + 1
                    } else {
                        obj[word] = 1
                    }
                    return obj
                }, {})

            const groupWordsArray = Object
                .keys(groupWords)
                .map(key => ({ name: key, amount: groupWords[key] }))
                .sort((w1, w2) => w2.amount - w2.amount)

            resolve(groupWordsArray)
        } catch (error) {
            reject(error)
        }
    })
}
