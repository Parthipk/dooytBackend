const Testimonial = require("../modal/testimonial");


exports.getTestimonials = async (req, res) => {


    try {


        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 3;


        const skip = (page - 1) * limit;


        const data =
            await Testimonial
                .find()
                .skip(skip)
                .limit(limit);



        const total =
            await Testimonial.countDocuments();



        res.json({

            success: true,

            page,

            total,

            data

        })


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}