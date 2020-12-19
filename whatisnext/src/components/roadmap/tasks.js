import { Button } from 'antd'
import React, { useState } from 'react';
import Loading from '../loading/loading';

const Tasks = (props) => {
    // console.log(props);
    
    const {tasks} = props;

    //define state
    
    const [visible_task_details, setVisible_task_details] = useState(false);
    const [btn_pressed, setBtn_pressed] = useState("");

    const handleClick = (e) => {

        // console.log("Pressed", e.target.id);
        setVisible_task_details(!visible_task_details);
        setBtn_pressed(e.target.id);
    }

    const renderTaskDetails = (id, task) => {
        if((btn_pressed === 'btn-' + id) && (visible_task_details === true)) { 
            // console.log("Pressed", e.target.id);

            return(
                <p className="visible">{task.description}</p>
            );
        }
    }
    const renderTasks = () => {
        if (tasks) {
            // console.log('visible_task_details',visible_task_details);
            return tasks.map((t) => {
                return (
                    <div key={t._id+5}>
                        <div className="task">
                            <button type="button" className="task-btn" onClick={handleClick} id={`btn-${t._id}`}>
                                {t.taskName}
                            </button>
                            {/* -----toggle details----- */}
                            {renderTaskDetails(t._id, t)}
                        </div>
                    </div>
                );
            })
        }
    
        return <Loading />
    }
    
    return (

        <div className='tasks-visible'>
            <div className="task-details">
                <p className="text">Well Done!</p>
                <h4>Recommended Tasks</h4>
                <div className="tasks-wrapper">
                    {renderTasks()}
                </div>

                <Button size='large' className="submit-tasks-btn">
                    Submit Your tasks
                </Button>
            </div>
        </div>
    );
}

export default Tasks;