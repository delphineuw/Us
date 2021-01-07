const selectAll = (req, res, next) => {
  const {id} = req.params 
  let message = "A get req has been made "
  console.log(message)
  res.status(500).json('error')
}

const saveUser = (req, res, next) => {
  console.log(req.body)
  console.log(`A ${req.method} has been made`)
  res.status(500).json('error')
}

const selectOne = (req, res, next) => {
  const {id} = req.params
  console.log(`A ${req.method} has been made with ID ${req.params.id}`)
  res.status(500).json('error')
}

const deleteUser = (req, res, next) => {
  const {id} = req.params
  console.log(`A ${req.method} has been made with ID ${req.params.id}`)
  res.status(500).json('error')
}

module.exports = {
  deleteUser,
  selectAll,
  selectOne,
  saveUser
}











