const Checker = async (req, res, next) => {
  const { email } = req.body;

  let data = await userModel.find({ email: email });

  if (data.length > 0) {
    return res.status(400).send("User Already registered");
  }

  next();
};

module.exports = Checker;
