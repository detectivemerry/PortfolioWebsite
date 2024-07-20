import reactLogo from "../assets/reactLogo.png"
import CsharpLogo from "../assets/csharp.png"
import cssLogo from "../assets/css.png"
import dockerLogo from "../assets/docker.png"
import htmlLogo from "../assets/html.png"
import javascriptLogo from "../assets/javascript.png"
import jenkinsLogo from "../assets/jenkins.png"
import nodeJSLogo from "../assets/nodeJS.png"
import gitLogo from "../assets/gitLogo.png"
import expressJSLogo from "../assets/expressJSLogo.png"
import firebaseLogo from "../assets/firebaseLogo.png"
import centerPointPic from "../assets/centerPointPic.png"
import studybuddyPic from "../assets/studybuddyPic.png"
import secondLovePic from "../assets/secondLovePic.png"
import gitHubLogo from "../assets/github.png"
import pythonLogo from "../assets/pythonLogo.png"
import javaLogo from "../assets/javaLogo.png"
import ASPNETCore from "../assets/ASPNETCore.png"
import OdinShoppingERD from "../assets/OdinShopping_ERD.png"

const developmentSkills = [
    {name : "PROGRAMMING LANGUAGES", technologies : [{imgUrl: javascriptLogo, name : "Javascript"}, {imgUrl: CsharpLogo, name : "C#"}, {imgUrl: pythonLogo, name : "Python"}, {imgUrl: javaLogo, name : "Java"}]},
    {name : "FRONT-END DEVELOPMENT", technologies : [{imgUrl: htmlLogo, name : "HTML"}, {imgUrl: javascriptLogo, name : "Javascript"}, {imgUrl: cssLogo, name : "CSS"}, {imgUrl: reactLogo, name: "ReactJS"}]},
    {name : "BACK-END DEVELOPMENT", technologies : [{imgUrl: javascriptLogo, name : "Javascript"},{imgUrl: nodeJSLogo, name: "NodeJS"}, {imgUrl : ASPNETCore, name : "ASP.NET Core Web API"}, {imgUrl : expressJSLogo , name : "ExpressJS"} ,{imgUrl : firebaseLogo , name : "Firestore"}]},
    {name : "OTHER TECHNOLOGIES", technologies : [{imgUrl:gitLogo, name: "Git"}, {imgUrl:gitHubLogo, name: "GitHub"}, {imgUrl:firebaseLogo, name: "Firebase"}, {imgUrl:jenkinsLogo, name: "Jenkins"}, {imgUrl:dockerLogo, name: "Docker"}]}, 
]

const data = {
    aboutDescription : "Full stack web developer and a recent computer science graduate from Nanyang Technological University (NTU). I enjoy bringing good ideas to life through full-stack development. I've developed several full-stack web applications in Javascript (using FERN stack) for school projects. I am currently going through the Odin Project course, brushing up my full-stack development fundamentals. (Check my github for all the interesting mini projects I have done in the Odin Project!) \n",
    aboutDevelopmentSkill: developmentSkills,
    aboutDevelopmentSkillDescription: "My toolkit primarily includes the following technologies, but is always expanding:",
    aboutWorkExperience : "I am currently a software engineer at IT&M (SG). I am currently developing a front-end administrative dashboard for a Virtual Private Network (VPN) solution using React and Next.js.\n Before my full time work, I have done two internships – \n Anacle Systems in 2022, as a software engineering intern, where I collaborated on a research and design project to optimize loading time for a ASP.NET web application by modifying the loading strategy implemented, resulting in a significant average speed improvement of 49%. The software product was an ASP .NET web application. \n Autodesk in 2023, as a software engineering intern, developed an automation tool to retrieve information from various dashboards in Python for Site Reliability Engineering (SRE) reviews, incorporating a Jenkins pipeline to automate the document generation process",
    aboutInterest: "I am passionate about getting better at my craft as a software engineer and everything technology related. I also like to learn things from other fields, such as the Immune system and world history, with the help of the internet and its interesting infographics (shoutout to Kurzgesagt and Crash Course!). My other hobbies include exercising, gaming and watching a wide variety of YouTube videos.",
    iconImgs : [{filePath : htmlLogo}, {filePath : cssLogo}, {filePath : javascriptLogo}, {filePath : CsharpLogo},{filePath : reactLogo},{filePath : nodeJSLogo},{filePath : dockerLogo}, {filePath : jenkinsLogo}],
    projects : [{projectTitle : "Odin Shopping API", projectDescription: "Backend API for OdinShopping web application. These APIs were built using ASP .NET Core 6 Web API and Entity Framework Core. The features include browsing product, adding items to cart, payment for users and printing payments and modifying items for admin.", projectImgUrl : OdinShoppingERD, liveDemoLink : "", githubLink: "https://github.com/detectivemerry/odin-shopping-cart-API", tags : ["ASP.NET", "Web API", "C#", "Entity Framework Core"]},
        {projectTitle : "CenterPoint", projectDescription: "Collaborated in a team and constructed a web application that suggests meet up locations for group travel, according to everybody’s distance and interest. Users can also visualize the suggested routes to the meet up location. Shortlisted as the top 5 out of 89 teams in Google Start-up Hackathon 2022.", projectImgUrl : centerPointPic, liveDemoLink : "", githubLink: "https://github.com/detectivemerry/centerpoint_google_startup", tags : ["ReactJS", "Flask", "Google Map API"]},
    {projectTitle : "StudyBuddy", projectDescription: "Developed a web application forum with designated sub-forums for different modules to provide a sustainable platform for knowledge and materials sharing among the students in Nanyang Technological University.", projectImgUrl : studybuddyPic, liveDemoLink : "https://cz3002-5e843.web.app", githubLink: "https://github.com/detectivemerry/cz3002", tags : ["ReactJS", , "Express.js", "Node.js", "Firestore", "Cloud Function"]},
    {projectTitle : "SecondLove", projectDescription: "Created a web application as part of the Singapore Smart Nation Initiative 2021 to showcase second hand goods and streamline the exchange process between donors and recipients through recycling centers.", projectImgUrl : secondLovePic, liveDemoLink : "", githubLink: "https://github.com/detectivemerry/SecondLove_App", tags : ["ReactJS", "Redux", "Firebase SDK"]},
    ]
}

export default data