import React from 'react'
import '../newGoals/newgoals.css'
function Newgoal(props) {
    const addnewgoal = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new goal'
        }
        props.addGoal(newGoal);
        console.log(newGoal, "newGoal")
    }
    return (
        <form className="new_goal" onSubmit={addnewgoal}>
            <input type="text" />
            <button type="submit">AddGoal</button>
        </form>
    );
}
export default Newgoal