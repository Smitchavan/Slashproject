// const router = require("express").Router();
// const accountSid = 'AC1ebc5d2616fc8d1a9a54676c8006bf72';
// const authToken = 'cede7db08a5536e795295cd8369b0002';

// router.get("/call", (req, res) => {
//     try {
//         const {phone}=req.body;
//         const client = require('twilio')(accountSid, authToken);

//         client.calls
//               .create({
//                  twiml: '<Response><Say>Hii,How Can I Help You  </Say></Response>',
//                  to: `+91${phone}`,
//                  from: '+17205839650'
//                })
//               .then(call => res.status(200).send(call.sid));

//               //res.send("Success call with Id",call.sid)

//     } catch (error) {
//       console.log(error);     
//     }
//   });

  


// module.exports = router;