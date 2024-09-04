
import s4 from "./rwba.png"
import s5 from "./kcl.png"

const Educations_Data = [
    {
        s_no:"0",
        s_name:"Kings College London",
        s_time:"Mar 2024 - Mar 2024",
        s_desc:"BSc Computer Science at King's College London",
        s_img: s5, 
        // s_readmore: ["Worked in a team of 5 to create a productivity tracking application.", "Utilised agile methodology to complete tasks.", "Utilised various programming skills to work on the frontend and backend of the application." ],
        s_awards: [["Florence Hughes Exhibition Award","Awarded to the student in the Natural, Mathematical and Engineering Sciences Faculty, who has achieved the highest standard of work in the second year of her course."]],
        s_year:[["First Year", "85.9%",[["Elementary Logic and Applications","95%"], ["Programming Practice and Applications", "92%"], ["Data Structures", "88%"]]], ["Second Year", "88%",[["Foundations of Computing II","97.5%"], ["Practical Experience and Programming", "95%"], ["Introduction to Artificial Intelligence", "94%"]]], ["Third Year", "85%",[["Compilers and Formal Language","97%"], ["Information Security", "91%"], ["Optimisation Methods", "90%"]]]]
    },

    {
        s_no:"1",
        s_name:"Royal Wootton Bassett Academy",
        s_time:"Sept 2017 - Sept 2021",
        s_desc:"Secondary School and Sixth Form at Royal Wootton Bassett Academy",
        s_img: s4, 
        s_year:[["A-Levels", "A* A* A*",[["Mathematics","A*"], ["Chemistry", "A*"], ["Physics", "A*"]]], ["GCSE's", "9 9 9 9 9 8 8 8 8 6",[["Mathematics","9"], ["German", "9"], ["Computer Science", "8"], ["English Literature", "8"]]]]
    }
   

] 
 
export default Educations_Data;
