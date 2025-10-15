import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";

export const resumeTemplates = [
    {
        id: "01",
        thumbnailImg: TEMPLATE_ONE_IMG,
        colorPaletteCode: 'themeOne',
    },
    {
        id: "02",
        thumbnailImg: TEMPLATE_TWO_IMG,
        colorPaletteCode: 'themeTwo',
    },
    {
        id: "03",
        thumbnailImg: TEMPLATE_THREE_IMG,
        colorPaletteCode: 'themeThree',
    },    
]

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

        ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
        ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
        ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
        ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
        ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

        ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
        ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
        ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
        ["#FFFDF6", "#FFF4DF", "#FFE7A0", "#FFD000", "#57534E"],
        ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

        ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
        ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
    ],
};

export const DUMMY_RESUME_DATA = {
    profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "Foba Gedeon",
        designation: "Senior Software Engeneer",
        summary: 
            "Creative and detail-oriented product designer with 4+ years of experience creating engaging UI/UX using figma. Adapt at turning ideas into high fidelity prototypes. Colaborating with developpers, and maintaining design systems for scalable products"
    },
    contactInfo: {
        email: "fobadefo@gmail.com",
        phone: "+237 693427529",
        location: "Douala, Cameroon",
        linkedin: "https://linkedin/in/gedeon",
        github: "https://github/in/gedeon",
        website: "https://Resume-builder.vercel.app",
    },
    workExperience: [
        {
            company: "Genie Building",
            role: "Seinoir Frontend Engineer",
            startDate: "2022-02",
            endDate: "2025-04",
            description: 
                "designed end-to-end flows for B2C mobile apps using Figma. Maintained a scalable component library and led weekly design reviews with developers and PMs.",
        },
        {
            company: "Coding Building",
            role: "Seinoir Fullstack Engineer",
            startDate: "2022-02",
            endDate: "2025-04",
            description: 
                "designed end-to-end flows for B2C mobile apps using Figma. Maintained a scalable component library and led weekly design reviews with developers and PMs.",
        },
    ],
    education: [
        {
            degree: "DUT Software Engineering",
            institution: "IUT Douala Cameroon",
            startDate: "2023-09",
            endDate: "2025-07",
        }
    ],
    skills: [
        { name: "Javascript", progress: 95 },
        { name: "PHP", progress: 85 },
        { name: "NodeJs", progress: 50 },
        { name: "ReactJS", progress: 100 },
        { name: "Python", progress: 40 },
    ],
    projects: [
        {
            title: "Find and Post jobs App",
            description: 
                "A good project done in MERN stack fully operational helping thousands aof youngs every year creating their professional resumes for professional needs",
            liveDemo: "https://students-glory.vercel.app/",
        },
        {
            title: "Resume Builder App",
            description: 
                "A good project done in MERN stack fully operational helping thousands aof youngs every year creating their professional resumes for professional needs",
            liveDemo: "https://resume-builder.vercel.app/",
        },
    ],
    certifications: [
        {
            title: "FullStack web Developper",
            issuer: "Google",
            year: "2022",
        },
    ],
    languages: [
        { name: "English", progress: 100 },
        { name: "French", progress: 90 },
    ],
    interests: ["Reading", "Open source Contribution", "Football"],
}