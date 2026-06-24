const Industry = require("../modal/industry");


exports.getIndustries = async (req, res) => {

    try {

        const data = await Industry.find();


        res.json({
            success: true,
            data
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }

}