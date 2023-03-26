function Validator(req,res,next){
    const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).send("Enter all details first");
  }
   next()
}

module.exports=Validator