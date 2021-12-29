module.exports =  (error, request, response, next) => {
    console.log(error._message)
    switch (error.name) {
        case "ValidationError":
            response.status(400).send({error: "Some data is misspelled or does not exist"})
    }
}