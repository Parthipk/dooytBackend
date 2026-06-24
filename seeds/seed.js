const mongoose = require("mongoose");
const Module = require("../modal/Module");
const Industry = require("../modal/Industry");
const Plan = require("../modal/Plan");
const Testimonial = require("../modal/Testimonial");
const faq = require("../modal/faq");
require("dotenv").config();
 

const data = {
    modules: [
        { id: "crm", name: "CRM", category: "sales", icon: "users", description: "Manage and improve interactions with current and potential customers, build stronger relationships, and drive sustainable growth." },
        { id: "task-management", name: "Task Management", category: "operations", icon: "check-square", description: "Plan, assign, and track tasks across teams with deadlines, priorities, and real-time status." },
        { id: "hrms", name: "HRMS", category: "people", icon: "user-cog", description: "Handle employee records, attendance, payroll, and leave from a single people-management hub." },
        { id: "project-management", name: "Project Management", category: "operations", icon: "kanban", description: "Plan projects, allocate resources, track milestones, and deliver on time." },
        { id: "accounting", name: "Accounting", category: "finance", icon: "calculator", description: "Track income, expenses, invoices, and financial reports to keep your books accurate." },
        { id: "ecommerce", name: "E-commerce", category: "sales", icon: "shopping-cart", description: "Sync inventory, orders, and customer data for smooth online store management." },
        { id: "marketing-automation", name: "Marketing Automation", category: "marketing", icon: "megaphone", description: "Automate campaigns, nurture leads, and measure marketing performance." },
        { id: "inventory", name: "Inventory", category: "operations", icon: "boxes", description: "Track stock levels, movements, and reordering across warehouses in real time." }
    ],

    industries: [
        { id:"solar", name:"Solar", description:"Customizable ERP that simplifies daily solar operations with better project control, real-time insights, and faster workflows." },
        { id:"it-saas", name:"IT and SaaS", description:"Scalable ERP for IT and SaaS to manage projects, resources, and optimize financial performance." },
        { id:"construction", name:"Construction", description:"Reduce costs, improve efficiency, and ensure projects are completed on time." },
        { id:"education", name:"Education", description:"Automate administrative processes for schools and institutions." },
        { id:"manufacturing", name:"Manufacturing", description:"Integrate every aspect of business on a single database." },
        { id:"ecommerce", name:"E-commerce", description:"Sync inventory, orders, and customer data." },
        { id:"logistics", name:"Logistics", description:"Automate logistics processes and control costs." },
        { id:"digital-marketing", name:"Digital Marketing", description:"Simplify tasks and improve client service." }
    ],

    plans: [
        {
            id:"starter",
            name:"Starter Plan",
            tagline:"Great for small businesses.",
            monthlyPrice:799,
            currency:"INR",
            isPopular:false,
            features:[
                "Core modules: Finance, HR, CRM",
                "Up to 10 users",
                "Standard reports & analytics",
                "Email support"
            ]
        },
        {
            id:"pro",
            name:"Pro Plan",
            tagline:"For growing teams managing multiple operations.",
            monthlyPrice:1499,
            currency:"INR",
            isPopular:true,
            features:[
                "Includes all Starter modules",
                "Project Management, Sales & Inventory",
                "Advanced dashboards",
                "Role based access control",
                "Priority support"
            ]
        },
        {
            id:"enterprise",
            name:"Enterprise Plan",
            tagline:"For large organizations.",
            monthlyPrice:2999,
            currency:"INR",
            isPopular:false,
            features:[
                "All ERP modules included",
                "API integrations",
                "Dedicated account manager",
                "24/7 premium support"
            ]
        }
    ],

    testimonials:[
        {
            id:"t1",
            name:"Guy Hawkins",
            role:"CEO & Founder",
            rating:5,
            quote:"Dooyt has made managing our business so much easier!"
        },
        {
            id:"t2",
            name:"Jane Cooper",
            role:"Operations Lead",
            rating:5,
            quote:"Switching to Dooyt replaced four separate tools for us."
        },
        {
            id:"t3",
            name:"Wade Warren",
            role:"Managing Director",
            rating:5,
            quote:"The dashboards give me instant visibility across departments."
        }
    ],

    faqs:[
        {
            id:"f1",
            order:1,
            question:"What is Dooyt?",
            answer:"Dooyt is an easy-to-use ERP software designed to help businesses manage projects, clients, and tasks efficiently."
        },
        {
            id:"f2",
            order:2,
            question:"Do you provide customer support?",
            answer:"Yes. Every plan includes support."
        },
        {
            id:"f3",
            order:3,
            question:"Is my data safe with Dooyt?",
            answer:"Yes. Data is encrypted and protected with backups."
        },
        {
            id:"f4",
            order:4,
            question:"Can I change plans easily?",
            answer:"Yes, you can upgrade or downgrade anytime."
        },
        {
            id:"f5",
            order:5,
            question:"Is Dooyt easy to use?",
            answer:"Yes, it has an intuitive dashboard interface."
        },
        {
            id:"f6",
            order:6,
            question:"Can I access Dooyt from mobile?",
            answer:"Yes, web and mobile apps are supported."
        }
    ]
};


async function seed(){

    try{

        await mongoose.connect(process.env.MONGO_URL);

        await Module.deleteMany();
        await Industry.deleteMany();
        await Plan.deleteMany();
        await Testimonial.deleteMany();
        await faq.deleteMany();


        await Module.insertMany(data.modules);
        await Industry.insertMany(data.industries);
        await Plan.insertMany(data.plans);
        await Testimonial.insertMany(data.testimonials);
        await faq.insertMany(data.faqs);


        console.log("database seeded");

        process.exit();

    }catch(error){
        console.log(error);
        process.exit(1);
    }

}


seed();