import Loading from './../loading/loading';
import { useState } from 'react';

const ModalForm = ({ allSteps, current, addNewSample, sendType }) => {

    const [taskData, setTaskData] = useState({});
    const [sampleType, setSampleType] = useState("")

    const handleChange = (e) => {
        // let taskData = selectedTitle;
        if(e.target.name === "sample_type") {
            setSampleType(e.target.value);
        } else {
            taskData[e.target.name] = e.target.value
        }
        

        setTaskData(taskData);
        // console.log(taskData)

    }

    
    const renderInput = () => {

        if (taskData['task_name'] === 'other') {
            return <div><label htmlFor="user-title" className="mt-3 font-weight-bold">Enter a task title</label><input type='text' id="user-title" className='form-control' onChange={handleChange} name="task_title" /></div>

        }
    }
    const renderTaskTitles = (steps) => {

        const checkIndex = (s) => (s.index <= current) && (s.tasks.length > 0);

        if (steps) {

            let doneSteps = steps.filter(checkIndex);

            return doneSteps.map((step) => {

                return step.tasks.map((task) => {
                    return <option value={task.title}>{task.title}</option>
                })
            })
        }
        return <Loading />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendType(sampleType);
        addNewSample(taskData);
        // console.log("TASK DATA", taskData);
        
    }
    // console.log("options", allSteps);
    return (
        // < !--Modal -- >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>

                    <div class="modal-body">
                        <label htmlFor="title" className="mt-3 font-weight-bold">Task Title</label>
                        <select class="custom-select" onChange={handleChange} name="task_title">
                            <option selected>select a a task from this menu</option>
                            {renderTaskTitles(allSteps)}
                            <option value='other' >other</option>
                        </select>

                        {renderInput()}

                        <div className="form-check mt-3">
                            <input className="form-check-input" type="radio" name="sample_type" id="project-sample" onChange={handleChange}/>
                            <label className="form-check-label font-weight-bold" htmlFor="project-sample">
                                Project
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input className="form-check-input" type="radio" name="sample_type" id="task-sample" checked onChange={handleChange}/>
                            <label className="form-check-label font-weight-bold" htmlFor="task-sample">
                                Task
                            </label>
                        </div>
                                <label htmlFor="description" className="mt-3 font-weight-bold">Task Details</label>
                                <textarea id="description" className="form-control" name="task_details" onChange={handleChange}></textarea>

                                <label htmlFor="customFile" className="mt-3 font-weight-bold">Upload a sample screenshot for your task</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" name="task_img" onChange={handleChange} />
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>

                                <label htmlFor="link" className="mt-3 font-weight-bold">A Link for Your Task Demo</label>
                                <input type="text" class="form-control" id="link" name="demo_link" onChange={handleChange} />


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <input type="submit" class="btn submit-btn" value='Save changes' />
                            </div>
                </form>
                    </div>
        </div>

    )
}

export default ModalForm;