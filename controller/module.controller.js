const Module = require("../modal/module");


exports.getModules = async (req, res) => {

    try {

        const { search, category } = req.query;


        let filter = {};


        if (search) {
            filter.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
        }


        if (category) {
            filter.category = category;
        }


        const modules = await Module.find(filter);


        res.json({
            success: true,
            data: modules
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}