import task1 from '../../assets/tasks/task-1.webp';

import { DeleteOutlined, LinkOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';



const TaskCard = () => {

    const [display, setDisplay] = useState("hidden overlay");
    console.log(display);
    return (

        <div className="card-layout">
            <div className="card-top" onMouseEnter={() => setDisplay("active overlay")} onMouseLeave={() => setDisplay('hidden overlay')} >

                <img src={task1} alt="task-1" />
                <div className={display}>
                    <p className="task-title">Html</p>
                    <p>The Lorem ipsum text is bonorum et malorum Classical Library edition of De finibus</p>
                </div>
            </div>
            <div className="card-bottom">
                
                <EditOutlined key="edit"  style={{fontSize: '18px', color: 'black', cursor: 'pointer'}}/>
                
                <DeleteOutlined key="delete"  style={{fontSize: '18px', color: 'black', cursor: 'pointer'}}/>
                
                <a href=' '><LinkOutlined key="link" style={{fontSize: '18px', color: 'black', cursor: 'pointer'}}/></a>
            </div>

        </div>
    )


}

export default TaskCard;