module.exports =  (error, request, response, next) => {
    console.log(error.message)
    switch (error.name) {
        case "ValidationError":
            response.status(400).send({error: error.message})
            break
        case "Error":
            response.status(400).send({error: "Por favor, rellene todos los datos"})
            break
        case "TypeError":
            response.status(400).send({error: "Incorrecta contraseña o usuario"})
            break
        case "CastError":
            response.status(404).send({error: "No se ha podido borrar su cuenta"})
    }
}