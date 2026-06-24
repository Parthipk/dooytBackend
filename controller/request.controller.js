const DemoRequest = require("../modal/request");


exports.createDemo = async (req,res)=>{

    try {

        const lead = await DemoRequest.create(req.body);


        res.status(201).json({
            success:true,
            message:"demo request created",
            data:lead
        })


    } catch(error){

        res.status(500).json({
            message:error.message
        })
    }
}