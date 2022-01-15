import code from "../Media/code.jpg"
import covid from "../Media/covid.png"
import crop from "../Media/crop.png"
import ig from "../Media/ig.png"
import notes from "../Media/Notes.png"
import kfc from "../Media/kfc.png"

export const Project_List = [
    {
        id : 0,
        title : "KFC Clone",
        desc : "A clone of the Menu of KFC restaurant at Palakkad, Kerala, India",
        tools : "React JS",
        image : kfc
    },
    {
        id : 1,
        title : "Covid Vaccine Slot Alert System (Script)",
        desc : "A script that runs in the background of your machine and produces a beep sound if any hospitals in the user provided list has a free vaccine slot.",
        tools : "Python, CoWin API",
        image : code
    },
    {
        id : 2,
        title : "Covid Vaccine Slot Search (Web App)",
        desc : "A web app designed to search for vaccine centres in a given pincode",
        tools : "React JS, CoWin API",
        image : covid
    },
    {
        id : 3,
        title : "Crop Prediction System",
        desc : "A web app powered by an ML based backend that predicts the ideal crop for the soil and weather conditions provided by the user.",
        tools : "Python, Numpy, Sklearn, React JS",
        image : crop
    },
    {
        id : 4,
        title : "Instagram Clone",
        desc : "A clone front end of instagram with backend as a service where a user can share like and comment on photos and videos.",
        tools : "React JS, Firebase, Material UI",
        image : ig 
    },
    {
        id : 5,
        title : "Notes App",
        desc : "A Web App that allows you to create, read, update, delete, and categorise notes with user account support. \n Note: This project was done with collaboration",
        tools : "React JS, Mongo DB, Node JS",
        image : notes
    }
    
    
]