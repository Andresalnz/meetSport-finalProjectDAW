module.exports =  (error, request, response, next) => {
  console.log(error.message)
  switch (error.name) {
    case "ValidationError":
        response.status(400).send({error: error.message})
        break
    case "Error":
        response.status(400).send({error: error.message})
        break
    case "TypeError":
        response.status(400).send({error: error.message})
        break
    case "CastError":
        response.status(404).send({error: error.message})
        break
    case "JsonWebTokenError":
        response.status(401).send({error:error.message})
        break
    case "TokenExpireError":
        response.status(401).send({errror:error.message})
  }
}