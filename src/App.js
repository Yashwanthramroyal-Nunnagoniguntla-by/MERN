import React, { useState } from 'react'
import './App.css';
import Goallist from './components/goalList.js'
import Newgoal from './newGoals/newgoal.js'
function App() {
  const [CourseGoals, setCourseGoals] = useState([
    { id: "1", text: "First we need to finesh the course" },
    { id: "2", text: "We have to lear all the topics in the course" },
    { id: "3", text: "we need to help other students about this course Q&A" },
  ]);


  const addnewGoalTocomponent = (newGoal) => {
    setCourseGoals(CourseGoals.concat(newGoal))
  }
  return (
    <div className="course_goals">
      <h2>Course Goles</h2>
      <Newgoal addGoal={addnewGoalTocomponent} />
      <Goallist goals={CourseGoals} />
    </div>
  );
}

export default App;
