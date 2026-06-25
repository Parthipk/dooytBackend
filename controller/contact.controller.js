const contact = require("../modal/contact");


exports.createContact = async (req,res)=>{

    try {

        const lead = await contact.create(req.body);


        res.status(201).json({
            success:true,
            message:"contact form submitted",
            data:lead
        })


    } catch(error){

        res.status(500).json({
            message:error.message
        })
    }
}