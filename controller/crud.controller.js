const Module = require("../modal/module");
const Plan = require("../modal/plan");
const Testimonial = require("../modal/testimonial");
const FAQ = require("../modal/faq");


const models = {
    modules: Module,
    plans: Plan,
    testimonials: Testimonial,
    faqs: FAQ
};



exports.create = async (req, res) => {

    try {

        const Model = models[req.params.type];


        const data = await Model.create(req.body);


        res.status(201).json({
            success: true,
            data
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}



exports.update = async (req, res) => {


    try {


        const Model = models[req.params.type];


        const data =
            await Model.findOneAndUpdate(
                {
                    _id: req.params.id
                },
                req.body,
                {
                    new: true
                }
            );


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




exports.remove = async (req, res) => {


    try {


        const Model = models[req.params.type];


        await Model.findOneAndDelete({
            _id: req.params.id
        });


        res.json({
            success: true,
            message: "deleted"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}