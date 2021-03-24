import React from 'react'
import '../components/goalList.css'
function goalList(props) {
    console.log(props.goals)
    return (
        <ul className="gole_list">
            {
                props.goals.map((goal) => {
                    return <li className="goal_list_li" key={goal.id}>{goal.text}</li>
                })
            }
        </ul>
    );
}

export default goalList