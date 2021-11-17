import joyfinder1 from "../../Photos/JoyFinder1.PNG"
import joyfinder2 from "../../Photos/JoyFinder2.PNG"
import joyfinder3 from "../../Photos/JoyFinder3.PNG"
import joyfinder4 from "../../Photos/JoyFinder4.png"
import joyfinder5 from "../../Photos/JoyfinderM3.png"
import joyfinder6 from "../../Photos/JoyfinderM4.png"
import myphoto2 from '../../Photos/p453781.jpg'
import myphoto from '../../Photos/29913.jpg'
import carfinder1 from "../../Photos/CARFINDER1.PNG"
import carfinder2 from "../../Photos/CARFINDER2.PNG"
import carfinder3 from "../../Photos/CARFINDER3.PNG"
import carfinder4 from "../../Photos/CARFINDER4.PNG"
import carfinder5 from "../../Photos/CARFINDER5.PNG"
import taskmanager1 from "../../Photos/Taskmanager1.PNG"
import taskmanager2 from "../../Photos/Taskmanager2.PNG"
import mediary1 from "../../Photos/Mediary1.PNG"
import mediary2 from "../../Photos/Mediary2.PNG"
import mediary3 from "../../Photos/Mediary3.PNG"
import mediary4 from "../../Photos/Mediary4.PNG"
const data = [
    {
      photos: [{ photo: joyfinder1 }, { photo: joyfinder2 }, { photo: joyfinder3 }, { photo: joyfinder4 }],
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
      photos: [{ photo: joyfinder6 }, { photo: joyfinder5 }],
      technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React Native' }],
      difficulty: 3.5,
      contributors: [{ contributor: 'Filip Kozak' }, { contributor: 'Paweł Owczarek' }, { contributor: 'Wojciech Nokielski' }],
      buttonMessage: 'Find on Github',
      buttonLink: 'https://github.com/ITermiTI/JoyFinder'
    },
    {
      title: 'CARFINDER',
      description: 'Web app for searching for new cars from trusted dealers. Buying a new car has never been this easy! Simply configure the car the way you like, get offers from approved local and national dealers and compare the price.',
      photos: [{ photo: carfinder1 }, { photo: carfinder2 }, { photo: carfinder3 }, { photo: carfinder4 }, { photo: carfinder5 }],
      technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React' }],
      difficulty: 2.5,
      contributors: [{ contributor: 'Filip Kozak' }],
      buttonMessage: 'Find on Github',
      buttonLink: 'https://github.com/Swobodnenerki/CarFinder'
    },
    {
      title: 'TASK MANAGER',
      description: 'Mobile application for Android and iOS users designed to help you plan, manage and track all your\'s team tasks. Task manager is an efficient task organizer that enables you to keep track of your projects, assignments, and goals from a single easy to use mobile interface. Application developed for the company client XEVA.',
      photos: [{ photo: taskmanager1 }, { photo: taskmanager2 }],
      technologies: [{ technology: 'Google Firebase - Dart - Flutter' }],
      difficulty: 4,
      contributors: [{ contributor: 'Aleksandra Ziobrowska'}, { contributor: 'Katarzyna Półtorak'}, { contributor: 'Filip Kozak'}, { contributor: 'Paweł Owczarek'},  { contributor: 'Mariusz Makuch'}, { contributor: 'Mariusz Wiśniewski'}],
      buttonMessage: 'Soon on Github',
      buttonLink: 'https://github.com/Swobodnenerki'
    },
    {
      title: 'MEDIARY',
      description: 'Web application, designed to be the ultimate healthcare tool. Your new solution for collecting all of your medical data, tests, and doctor visits in one place. MEdiary replaces paper records or various systems that hold only bits and pieces of your\'s medical history. It is capable of reminding you about future appointments and can showcase your medical record using graphs and other statistics.',
      photos: [{ photo: mediary1 }, { photo: mediary2 }, { photo: mediary3 }, { photo: mediary4 }],
      technologies: [{ technology: 'Backend: Java - PostgreSQL - SpringData - Spring' }, { technology: 'Frontend: JavaScript - React - Redux' }],
      difficulty: 4,
      contributors: [{ contributor: 'Backend: Filip Kozak, Wojciech Nokielski, Katarzyna Półtorak'}, { contributor: 'Frontend: Jan Miszczyk, Dawid Marczak, Katarzyna Półtorak' }],
      buttonMessage: 'Find on Github',
      buttonLink: 'https://github.com/wnokielski/MediaryAPI'
    },
    {
      title: 'PORTFOLIO',
      description: 'The simple website you are currently on, designed to highlight me, showcase my skills and tell you something about myself. As you may know, it\'s not easy to write about yourself, so go easy on me. Feel free to play around with it. ',
      photos: [{ photo: carfinder1 }, { photo: carfinder2 }, { photo: carfinder3 }, { photo: carfinder4 }, { photo: carfinder5 }],
      technologies: [{ technology: 'Frontend: JavaScript - React' }],
      difficulty: 2,
      contributors: [{ contributor: 'Filip Kozak' }],
      buttonMessage: 'Find on Github',
      buttonLink: 'https://github.com/Swobodnenerki/portfolio'
    },
    
  ];
  export default data;