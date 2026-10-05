import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { Internship } from "./models/internship.model.js";

dotenv.config({ path: "./.env" });

const sampleInternships = [
    {
        title: "Full Stack Web Development Intern",
        company: "TechCorp Solutions",
        location: "Work From Home",
        duration: "3 Months",
        stipend: "₹12,000 /month",
        skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        aboutCompany: "TechCorp Solutions is a fast-growing SaaS startup.",
        aboutInternship: "Developing frontend components in React and REST APIs in Express.",
        whoCanApply: ["Available for 3 months", "Knowledge of MERN stack"],
        perks: ["Certificate", "Letter of recommendation"],
        numberOfOpenings: 5,
        isWfh: true
    },
    {
        title: "UI/UX & Graphic Design Intern",
        company: "Creative Studio",
        location: "Delhi / NCR",
        duration: "6 Months",
        stipend: "₹10,000 /month",
        skills: ["Figma", "Photoshop", "Illustrator"],
        aboutCompany: "Creative Studio is a leading design agency.",
        aboutInternship: "Designing mobile app wireframes and social media banners.",
        whoCanApply: ["In-office in Delhi", "Strong Figma portfolio"],
        perks: ["Certificate", "Free snacks"],
        numberOfOpenings: 2,
        isWfh: false
    },
    {
        title: "Backend Engineering Intern",
        company: "DataEngine Innovations",
        location: "Bangalore",
        duration: "2 Months",
        stipend: "₹15,000 /month",
        skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
        aboutCompany: "DataEngine builds high-scale data pipelines.",
        aboutInternship: "Building RESTful microservices.",
        whoCanApply: ["Knowledge of REST APIs", "Available in Bangalore"],
        perks: ["Certificate", "PPO offer"],
        numberOfOpenings: 3,
        isWfh: false
    }
];

const seedData = async () => {
    try {
        await connectDB();
        await Internship.deleteMany(); 
        await Internship.insertMany(sampleInternships);
        console.log("✅ Dummy Internships Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
};

seedData();