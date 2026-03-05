// import feanaImage from "./assets/projectImage/Feane-project.ong"
import feanaImage from "../assets/projectImage/Feaneproject.png"
import juliaImage from "../assets/projectImage/julia-Project.png"
import coronaImage from "../assets/projectImage/corona-api-Project.png"
import WeatherImage from"../assets/projectImage/Weather-api-project.png"
import MovieImage from"../assets/projectImage/Movie-project.png"
import AdminImage from"../assets/projectImage/admin-project.png"
export const personalInfo = {
  name: "Darshik Shekhada",
  title: "Full Stack Developer",
  email: "darshikshekhada07@gmail.com",
  phone: "+91 9714920969",
  location: "Surat, India",
  bio: "Hi, I'm Darshik Shekhada, a BCA student and passionate Full Stack Developer. I build user-friendly web applications and have worked on multiple projects during my learning journey. I aim to grow as a professional developer and create impactful digital solutions.",
  social: {
    github: "https://github.com/darshik001",
    linkedin: "https://www.linkedin.com/in/darshik-shekhada-1341b7319/"
  }
};

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "MVC Architecture"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git", "Version Control", "Debugging", "Problem Solving"]
};

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Saurashtra University",
    year: "2021",
    description: "Completed BCA with focus on web development and programming fundamentals"
  }
];

export const projects = [
   {
    name: "julia-portfolio-morden",
    description: "Julia Portfolio is a clean and modern personal portfolio website designed to showcase skills, projects, and professional achievements. It features a responsive design, smooth navigation, and an elegant layout that highlights creativity and professionalism.",
    technologies: ["HTML","CSS"],
    github: "https://github.com/darshik001/FRONTEND/tree/main/PROJECT/CSS-PROJECT/PORTFOLIO-JULIA-CSS",
    live: "https://julia-portfolio-morden.netlify.app/",
    image: juliaImage
  },
  {
    name: "Fast Food Restaurant",
    description: "Speedy Spoon is a customer-focused fast food restaurant offering quick, tasty, and budget-friendly meals. Our menu includes burgers, hot dogs, fries, soft drinks, and desserts. We aim to serve high-quality food with minimal waiting time, making it the perfect choice for students, working professionals, and families.",
    technologies: ["HTML", "BOOTSTRAP"],
    github: "https://github.com/darshik001/FRONTEND/tree/main/PROJECT/BT-PROJECT/FOOD-SHOP",
    live: "https://maruti-hotel-and-booking.netlify.app/",
    image: feanaImage
  },
 
  {
    name: "COVID-19 Info",
    description: "COVID-19 Info (India) is a web-based application that allows users to enter a specific date and view COVID-19 statistics for India. The system displays confirmed cases, recoveries, and deaths based on the selected date. It provides a simple and user-friendly interface to quickly access accurate historical COVID-19 data for India.",
    technologies: ["HTML", "CSS","Bootstrap","JavaScript"],
    github: "https://github.com/darshik001/FRONTEND/tree/main/PROJECT/JS-PROJECT/corona%20api",
    live: "https://weather-demo.com",
    image: coronaImage
  },
  {
    name: "Weather Website",
    description: "Weather Website is a responsive web application that provides real-time weather updates for any city. Users can search by location to view current temperature, humidity, wind speed, and weather conditions. The website features a clean design, fast performance, and an easy-to-use interface for accurate and instant weather information.",
    technologies: ["HTML", "CSS","Bootstrap","JavaScript"],
    github: "https://github.com/darshik001/FRONTEND/tree/main/PROJECT/JS-PROJECT/weather%20api",
    live: "https://weather-city-name.netlify.app/",
    image:WeatherImage
  },
    {
    name: "Movie Wbsite",
    description: "A movie website shows information about movies like trailers, cast, ratings, and release dates. It helps users discover and stay updated with the latest films.",
    technologies: [ "Bootstrap","Rect Js","Firebase"],
    github: "https://github.com/darshik001/react-exam/tree/main/Movie%20Library",
    live: "https://cinehubmovie.netlify.app/",
    image:MovieImage
  },
   {
    name: "Admin Panel Server",
    description: "This server hosts the administrative control panel used to manage system settings, users, and application data. Authorized administrators can log in to perform management tasks such as monitoring system activity, configuring services, and maintaining database records. Login Credentials Username: john@test.in Password: 12345",
    technologies: [ "Node Js","Express Js","Mongodb"],
    github: "https://github.com/darshik001/Shreeji-Admin",
    live: "https://shreeji-admin.onrender.com",
    image:AdminImage
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development",
    organization: "Udemy",
    year: "2023",
    icon: "🚀"
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    year: "2023",
    icon: "📚"
  },
  {
    name: "React - The Complete Guide",
    organization: "Udemy",
    year: "2024",
    icon: "⚛️"
  }
];

export const interests = ["Coding", "Reading Tech Blogs", "Problem Solving", "Open Source"];