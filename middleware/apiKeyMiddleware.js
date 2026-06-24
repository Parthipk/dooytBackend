
const API_KEY = process.env.API_KEY;


module.exports = (req, res, next) => {


    const key = req.headers["x-api-key"];


    if (!key) {

        return res.status(401).json({
            message: "X-Api-Key required"
        });

    }


    if (key !== API_KEY) {

        return res.status(403).json({
            message: "Invalid API key"
        });

    }


    next();

};