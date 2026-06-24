const FAQ = require("../modal/faq");


exports.getFaqs = async (req, res) => {


    try {


        const data =
            await FAQ.find()
                .sort({
                    order: 1
                });



        res.json({
            success: true,
            data
        })


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}