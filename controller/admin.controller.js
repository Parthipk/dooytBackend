const DemoRequest =
    require("../modal/request");



exports.getLeads = async (req, res) => {


    try {


        const {
            status,
            page = 1,
            limit = 10
        } = req.query;



        let filter = {};


        if (status) {
            filter.status = status;
        }



        const data =
            await DemoRequest
                .find(filter)
                .skip(
                    (page - 1) * limit
                )
                .limit(Number(limit))
                .sort({
                    createdAt: -1
                });



        const total =
            await DemoRequest.countDocuments(filter);



        res.json({

            success: true,

            page: Number(page),

            total,

            data

        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}




exports.updateLeadStatus = async (req, res) => {


    try {


        const {
            status
        } = req.body;



        if (
            !["new", "contacted", "closed"]
                .includes(status)
        ) {

            return res.status(400).json({
                message: "invalid status"
            })

        }



        const lead =
            await DemoRequest.findByIdAndUpdate(

                req.params.id,

                {
                    status
                },

                {
                    new: true
                }

            );



        res.json({

            success: true,

            data: lead

        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}