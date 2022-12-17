// const router = require("express").Router();
// const User = require("../model/User");
// const bcrypt = require("bcrypt");
// const Joi = require("joi");
// const jwt = require("jsonwebtoken");
// const auth = require("../middlewares/auth");
// const Contact = require("../model/Contact");
// const { route } = require("./auth");
// const { default: mongoose } = require("mongoose");

// router.post("/contact", async (req, res) => {
//   try {
//     const { name, address, email, phone } = req.body;
//     const Joischema = Joi.object({
//       name: Joi.string().min(4).max(50).required(),
//       address: Joi.string().min(4).max(100).required(),
//       email: Joi.string().email().required(),
//       phone: Joi.number().min(9).max(100000000000).required(),
//     });
//     const contact = {
//       name: name,
//       address: address,
//       email: email,
//       phone: phone,
//     };

//     const result = Joischema.validate(contact);
//     if (result.error) {
//       return result.status(400).json({ error: error.details[0].message });
//     } else {
//       const newContact = new Contact({ name, address, email, phone });
//       const result = await newContact.save();
//       return res.status(201).json({ ...result._doc });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get("/contacts", async(req, res) => {
//   const filter = {};
//   const all = await Contact.find(filter);
//   return res.status(200).json({all});
// });



// router.get("/getcontactid", async(req, res) => {
//   const {id}=req.body;
//   const contact=await Contact.findOne({_id:id});
//   return res.status(200).json({...contact._doc});
// });

// router.put("/contactUpdate", async(req, res) => { 
//   const {id}=req.body;
//   if(!id) return res.status(400).json({error:"no id Specified"});
//   if(!mongoose.isValidObjectId(id))
//   return res.status(400).json({error:"please enter a valid id"});
// try {
//   const contact=await Contact.findOne({_id:id});
//   // if(req.User._id.toString() !== Contact.postedBy._id.toString())
//   // return res.status(401).json({error:"You cannot edit others people contacts"});
// const updatedData={...req.body,id:undefined};
// const result=await Contact.findByIdAndUpdate(id,updatedData,{new:true})

// return res.status(200).json({...result._doc});
// } catch (error) {
//   console.log(error)
// }


// });
// router.delete("/contactDelete/:id",async (req, res) => {
//   const {id}=req.params;
//   if(!id) return res.status(400).json({error:"no id Specified"});
//   if(!mongoose.isValidObjectId(id))
//   return res.status(400).json({error:"please enter a valid id"});
// try {
//   const contact=await Contact.findOne({_id:id});
//   // if(req.User._id.toString() !== Contact.postedBy._id.toString())
//   // return res.status(401).json({error:"You cannot Delete others people contacts"});
//  const ContactDEL= await Contact.deleteOne({ _id: id });
// return res.status(200).json({...contact._doc})
// } catch (error) {
//   console.log(error);
// }



// });







// module.exports = router;
