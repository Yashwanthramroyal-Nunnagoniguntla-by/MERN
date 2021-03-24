import React,{useState} from 'react'
import '../newGoals/newgoals.css'
function Newgoal(props) {
    const [enteredText, setEnteredText] = useState('');
    const enterNewText = event => {
        setEnteredText(event.target.value);
    }
    const addnewgoal = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }
        if(enteredText.length>0)
        {
            props.addGoal(newGoal);
        }
        setEnteredText('');
        console.log(newGoal, "newGoal")
    }
    

    return (
        <form className="new_goal" onSubmit={addnewgoal}>
            <input type="text" value={enteredText} onChange={enterNewText}/>
            <button type="submit">AddGoal</button>
        </form>
    );
}
export default Newgoal