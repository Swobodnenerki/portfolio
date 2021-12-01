import joyfinder1 from "../../Photos/JoyFinder1.PNG"
import joyfinder6 from "../../Photos/joyfinderm6.PNG"
import carfinder1 from "../../Photos/CARFINDER1.PNG"
import taskmanager1 from "../../Photos/taskmanager3.PNG"
import mediary1 from "../../Photos/Mediary1.PNG"
import portfolio from "../../Photos/portfolio.PNG"
const data = [
    {
        photo: joyfinder1,
        title: 'JOYFINDER',
        description: 'Web and mobile app for searching, hosting and attending events in your neighbourhood. You are provided with many types of search tools to never be bored again! Web part of app is hosted on heroku',
        technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React - Google Maps' }],
        difficulty: 3.5,
        contributors: [{ contributor: 'Filip Kozak' }, { contributor: 'Paweł Owczarek' }, { contributor: 'Wojciech Nokielski' }],
        buttonMessage: 'Find on Github',
        buttonLink: 'https://github.com/ITermiTI/JoyFinder'
      },
      {
        title: 'JOYFINDER MOBILE',
        description: 'Mobile version of "JoyFinder". It has the same capabilities as the web one, but it is more accessible.  Now you can search and create events wherever you are!',
        photo: joyfinder6,
        technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React Native' }],
        difficulty: 3.5,
        contributors: [{ contributor: 'Filip Kozak' }, { contributor: 'Paweł Owczarek' }, { contributor: 'Wojciech Nokielski' }],
        buttonMessage: 'Find on Github',
        buttonLink: 'https://github.com/ITermiTI/JoyFinder'
      },
      {
        title: 'CARFINDER',
        description: 'Web app for searching for new cars from trusted dealers. Buying a new car has never been this easy! Simply configure the car the way you like, get offers from approved local and national dealers and compare the price.',
        photo: carfinder1,
        technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React' }],
        difficulty: 2.5,
        contributors: [{ contributor: 'Filip Kozak' }],
        buttonMessage: 'Find on Github',
        buttonLink: 'https://github.com/Swobodnenerki/CarFinder'
      },
      {
        title: 'TASK MANAGER',
        description: 'Mobile application for Android and iOS users designed to help you plan, manage and track all your\'s team tasks. Task manager is an efficient task organizer that enables you to keep track of your projects, assignments, and goals from a single easy to use mobile interface. Application developed for the company client XEVA.',
        photo: taskmanager1,
        technologies: [{ technology: 'Google Firebase - Dart - Flutter' }],
        difficulty: 4,
        contributors: [{ contributor: 'Aleksandra Ziobrowska'}, { contributor: 'Katarzyna Półtorak'}, { contributor: 'Filip Kozak'}, { contributor: 'Paweł Owczarek'},  { contributor: 'Mariusz Makuch'}, { contributor: 'Mariusz Wiśniewski'}],
        buttonMessage: 'Soon on Github',
        buttonLink: 'https://github.com/Swobodnenerki'
      },
      {
        title: 'MEDIARY',
        description: 'Web application, designed to be the ultimate healthcare tool. Your new solution for collecting all of your medical data, tests, and doctor visits in one place. MEdiary replaces paper records or various systems that hold only bits and pieces of your\'s medical history. It is capable of reminding you about future appointments and can showcase your medical record using graphs and other statistics.',
        photo: mediary1,
        technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React - Redux' }],
        difficulty: 4,
        contributors: [{ contributor: 'Backend: Filip Kozak, Wojciech Nokielski, Katarzyna Półtorak'}, { contributor: 'Frontend: Jan Miszczyk, Dawid Marczak, Katarzyna Półtorak' }],
        buttonMessage: 'Find on Github',
        buttonLink: 'https://github.com/wnokielski/MediaryAPI'
      },
      {
        title: 'PORTFOLIO',
        description: 'The simple website you are currently on, designed to highlight myself, showcase my skills and tell you something about myself. As you may know, it\'s not easy to write about yourself, so go easy on me. Feel free to play around with it. ',
        photo: portfolio,
        technologies: [{ technology: 'Frontend: JavaScript - React' }],
        difficulty: 2,
        contributors: [{ contributor: 'Filip Kozak' }],
        buttonMessage: 'Find on Github',
        buttonLink: 'https://github.com/Swobodnenerki/portfolio'
      },
    
    
]
export default data;