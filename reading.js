const { readFile, writeFile } = require('fs');

readFile('./sorted/mail.txt', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    const mail = res
    readFile('./sorted/hello.txt', (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        const hello = res

        writeFile(
            './sorted/result-async.txt',
             `Here is the result :${mail} ,${hello} `, 
             (err, res)=>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log(res)
            }
    )

    })
})