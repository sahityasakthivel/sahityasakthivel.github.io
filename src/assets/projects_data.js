import s1 from "./simulation.png"
import s2 from "./personalised_feedback_framework.png"
import s3 from "./gfc.png"
import s4 from "./tfl.png"
import s5 from "./fun.png"

import s6 from "./java.png"
import s7 from "./scala.png"
import s8 from "./python.png"
import s9 from "./javascript.png"
import s10 from "./html.png"
import s11 from "./django.png"

const Projects_Data = [
    {
        s_no:"0",
        s_name:"Predator Prey Simulation",
        s_desc:"Explore the complex dynamics of nature with the Predator-Prey Simulation app, where you can simulate the intricate relationships between predators and prey under varying environmental conditions. This app lets you manipulate factors like infections to understand how these elements impact the life cycle of species within an ecosystem.",
        s_img: s1, 
        s_lang: "Java",
        s_readmore: ["Worked in a pair in order to create this application.", "Each animal is given a colour and can breed and catch infection stimulating the behaviour of animals in the wildlife. ", "Users can change weather probability, breeding probability and litter size to see how this would effect the population", "The animals and hunter’s percentages of finding prey are determined by the weather where if it is sunny, they have a higher chance of finding prey and a lower chance of finding prey if it is foggy. Grass is also influenced by the weather and will die if certain conditions are not met.", "All animals can move, eat, breed & die from old age, disease, or lack of food. Plants can grow & die from lack of sunlight, water, or old age. Both animals & plants have a growth rate based on their age so their food value when other animals eat them increases." ],
        s_lang_icons: [s6],
        s_functionality: [
            "🦊 Simulate predator-prey population dynamics over time using visual graphs and animated ecosystems.",
            "🌿 Adjust environmental variables such as food availability and temperature to see their effects on species interactions.",
            "🧪 Introduce infection or disease outbreaks to observe their impact on predator and prey survival rates.",
            "⏱️ Control simulation speed and duration to analyze short-term behaviors or long-term evolutionary trends.",
            "🔁 Reset or repeat simulations with different parameters to compare outcomes and refine hypotheses.",
            "🧬 Model species-specific traits, like reproduction rate, hunting efficiency, or resistance to infection."
        ]
       
    },
    
    {
        s_no:"1",
        s_name:"Personalised Feedback Framework",
        s_desc: "This project is designed to enhance student learning by providing tailored feedback. As students complete quizzes, the system tracks their performance and identifies areas of weakness.When a student answers a question incorrectly, the framework dynamically generates personalized resources—such as tutorials, practice exercises, or explanations—focused on the specific topics they struggled with.",
        s_img: s2, 
        s_lang: "Python",
        s_readmore: ["This program loads the screens and the movies it plays at different times from a csv file." ,"Movies are also displayed from a csv file which contains the name of the movie and the price per ticket. It then displays the movies based on the time.", "The users can switch through screens and select a movie they want to watch and the seat they would like to sit in.", "The seats are colour coded based on availability where red is booked, yellow is pending and green is available. A seat will be pending if the user hasn't pressed the confirm button.", "Once the confirm button is pressed, a ticket is loaded which contains information about the price, and the seat they have selected.", "They can refresh the screen by pressing the refresh button which checks the current time and determines which movie should be displayed.( It ensures it doesn't display a movie which has already started or finished)" ],
        s_lang_icons: [s8],
        s_functionality: [
            "🧠 Tracks individual student quiz performance to monitor learning progress.",
            "❌ Detects incorrect answers and identifies specific topics where the student is struggling.",
            "📚 Generates personalized learning resources (e.g., tutorials, explanations, practice questions) tailored to each student’s weak areas.",
            "🎯 Focuses remediation on specific concepts, not just broad subjects, to maximize learning efficiency.",
            "🔔 Notifies students of suggested learning actions based on their quiz results."
            ]
    },

    {
        s_no:"2",
        s_name:"Greggor Financial Companion",
        s_desc:"Take control of your finances with our Financial Tracking Application, designed to help you monitor your spending, set financial goals, and build better spending habits. Whether you're trying to save for a big purchase, get out of debt, or simply improve your financial health, this app gives you the tools to track, analyze, and optimize your spending habits.",
        s_img: s3, 
        s_lang: "Python, Django Framework, JavaScript",
        s_readmore: ["Worked in a team of 8 to create a website that allows a user to track their financial expenses.","Utilised a Trello board and GitHub to monitor our team’s progress.", "Worked on backend by creating different models, adding different functionalities to the system, and connecting different parts of the system together.", "Also worked on frontend to make the website more visually appealing." ,"Users can input their spendings and can also categorise those expenses. They can set a target for their spending to ensure they stay on track.",  "There is also a gamification element, where users compete with their friends by meeting as many targets as possible, which motivates the user to save money where possible." ],
        s_lang_icons: [s8, s9, s11],
        s_functionality: [
            "💸 Track daily, weekly, and monthly expenses across categories like groceries, bills, entertainment, and savings.",
            "🎯 Set personalized financial goals (e.g., save for a trip, pay off debt) and track progress visually.",
            "📊 Analyze spending habits with smart dashboards and trend insights to identify where your money goes.",
            "👥 Compete with friends or family to reach savings or budgeting goals and stay motivated together.",
            "📰 Receive personalized spending newsletters with tips and category summaries"
        ]

        
    },

    {
        s_no:"3",
        s_name:"London Tube Crowd Tracker",
        s_desc:"This interactive website provides real-time crowding data for London’s Underground stations, helping you navigate the Tube with ease. Whether you’re a daily commuter, a tourist, or just planning your journey, you can check crowd levels at different stations throughout the day to make informed decisions on the best times to travel.",
        s_img: s4, 
        s_lang: "JavaScript, HTML",
        s_readmore: ["Users can filter through various tube stations and days in order to identify the best times to travel.", "Utilised a TFL API through an asynchronous AJAX call."],
        s_lang_icons: [s9, s10],
        s_functionality: [
            "🚇 View real-time crowding data for London Underground stations to make informed travel decisions.",
            "🕒 Check crowd levels throughout the day with up-to-date information on busy and quiet times at each station.",
            "📍 Search for specific stations and see their current crowding status, helping you avoid overcrowded trains.",
            "🌍 Access data for all Underground lines and stations to get a comprehensive view of the Tube system's crowd levels.",
            "⏰ Plan your journey based on crowd trends, with data showing the best times to travel for a more comfortable ride."
        ]
    
    },

    {
        s_no:"4",
        s_name:"FUN Language: Lexer, Parser and Compiler",
        s_desc:"The FUN Language Compiler is a powerful toolchain designed to transform code written in FUN, a statically-typed programming language, into LLVM , enabling seamless execution on a variety of platforms. The compiler consists of three essential components: Lexer, Parser, and Compiler, each playing a crucial role in turning your FUN code into optimized machine code.",
        s_img: s5, 
        s_lang: "Scala, LLVM-IR",
        s_readmore: ["FUN Language is a self defined typed language.", "Created a lexer that reads the input program and creates tokens.", "Created a parser that uses these tokens in order to generate an abstract sytax tree.", "Created a compiler that uses the AST to generate machine code."],
        s_lang_icons: [s7],
        s_functionality: [
            "🖥️ Transforms FUN code into LLVM for cross-platform execution, enabling smooth performance across various systems.",
            "🔤 Lexer: Analyzes FUN code and breaks it down into tokens, ensuring the syntax is correctly understood for further processing.",
            "📚 Parser: Converts the tokenized FUN code into an Abstract Syntax Tree (AST), which is essential for compiling and optimizing the code.",
            "⚙️ Compiler: Takes the AST and generates highly optimized machine code using LLVM, improving execution speed and platform compatibility.",
            "💡 Statically-typed language support ensures early error detection and type safety during compilation."
        ]
    
    },

   

] 
 
export default Projects_Data;