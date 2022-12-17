const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const JoiSchema = Joi.object({
    name: Joi.string().required().min(4),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  });

  const user = {
    name: name,  
    email: email,
    password: password,
  };

  const result = JoiSchema.validate(user);
  if (result.error) {
    res.json(result.error.details[0].message);
  } else {
    // res.json("data validated")
    const Userexists = await User.findOne({ email });
    if (Userexists)
      return res
        .status(400)
        .json({ error: `A User with Email ${Userexists.email} Already Exists` });

    const hashedpassword = await bcrypt.hash(password, 8);
    //res.json(hashedpassword);
    const newUser = new User({ name, email, password: hashedpassword });
    const result = await newUser.save();

    result._doc.password = undefined;
    return res.status(201).json({ ...result._doc });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const JoiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  });

  const user = {
    email: email,
    password: password,
  };
  const result = JoiSchema.validate(user);
  if (result.error) {
    res.json(result.error.details[0].message);
  } else {
    const Userexists = await User.findOne({ email });
    if (!Userexists)
      return res.status(400).json({
        error: `A User with this Email does not Exists`,
      });
    const doespasswordmatch = await bcrypt.compare(
      password,
      Userexists.password
    );

    if (!doespasswordmatch)
      return res.status(500).json({ error: `Invalid Password` });

    const payload = { _id: Userexists._id };
    const token = jwt.sign(payload, "Mysecret_key_HI", { expiresIn: "1h" });

    const user = { ...Userexists._doc, password: undefined };
    return res.status(200).json({ token, user });
  }
});

router.get("/me", auth, (req, res) => {
  try {
    return res.status(200).json({ ...req.user._doc });
  } catch (error) {}
});

module.exports = router;
