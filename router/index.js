const express = require("express")
const router = express.Router()

const validate = require("../middleware/validate")
const apiKey = require("../middleware/apiKeyMiddleware")


const { getModules } = require("../controller/module.controller")
const { getIndustries } = require("../controller/industry.controller")
const { getTestimonials } = require("../controller/testimonial.controller")
const { getFaqs } = require("../controller/faq.controller")
const { createDemo } = require("../controller/request.controller")

const { requestZodSchema } = require("../validator/request.validator")


const {
    create,
    update,
    remove
} = require("../controller/crud.controller")


const {
    getLeads,
    updateLeadStatus
} = require("../controller/admin.controller")
const { getPlans } = require("../controller/plan.controller")
const { contactZodSchema } = require("../validator/contact.validator") 
const { createContact } = require("../controller/contact.controller")



/*
PUBLIC APIS
*/


router.get('/modules', getModules)

router.get('/industries', getIndustries)

router.get('/testimonials', getTestimonials)

router.get('/plans', getPlans)


router.get('/faqs', getFaqs)

router.post("/request", validate(requestZodSchema), createDemo)

router.post("/contact", validate(contactZodSchema), createContact)




/*
PROTECTED CRUD APIS
X-Api-Key Required
*/


router.post("/:type", apiKey, create)


router.put("/:type/:id", apiKey, update)


router.delete("/:type/:id", apiKey, remove)



/*
ADMIN APIS
*/


router.get("/admin/demo-requests", getLeads)


router.patch("/admin/demo-requests/:id", updateLeadStatus)



module.exports = router