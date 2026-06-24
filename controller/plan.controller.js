const Plan = require("../modal/plan");


exports.getPlans = async (req, res) => {


    try {


        const { type } = req.query;


        let plans = await Plan.find();



        if (type === "annual") {

            plans = plans.map(plan => ({

                ...plan._doc,

                monthlyPrice:
                    Math.round(plan.monthlyPrice * 12 * 0.85),

                billing: "annual"

            }))

        }


        res.json({
            success: true,
            data: plans
        })


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}