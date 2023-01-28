/* Version 5- Using the functional component*/
import React, { useState } from 'react';
import uuid from 'react-uuid';
import Task from './Task/Task';
import Form from './Form/Form';
import './Tasks.scss';

// Tasks component that renders a list of tasks and their associated buttons
function Tasks() {
    // useState hook to manage the tasks state
    const [tasks, setTasks] = useState([
        { id: uuid(), description: 'Walk the dog', done: true },
        { id: uuid(), description: 'Wash the car', done: false },
        { id: uuid(), description: 'Finish the lab', done: false }
    ]);

    // callback function to handle when the "Clear Tasks" button is clicked
    const handleClearTasks = () => {
        setTasks([]);
    }

    // callback function to handle when the "Change Status" button is clicked
    const handleStatusChange = (id) => {
        // create a copy of the tasks array
        const updatedTasks = [...tasks];
        // update the task's status in the copied array
        updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
        // set the tasks state to the updated copied array
        setTasks(updatedTasks);
    }

    // callback function to handle when the "Remove" button is clicked
    const handleTaskRemove = (id) => {
        // filter out the task to be removed and set the tasks state to the filtered array
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    }

    // addTask function to add a new task
    const addTask = (newTask) => {
        setTasks([
            ...tasks,
            newTask
        ]);
    }

    return (
        <>
            <h2 className='title'>These are the tasks:</h2>
            {tasks.map((task, index) =>
            (<Task key={index} task={task} onStatusChange={handleStatusChange}
                onTaskRemove={handleTaskRemove} />))}

            <button className='clear-tasks-button' onClick={handleClearTasks}>Clear Tasks</button>

            <h2 className='subtitle'>Add a new Task:</h2>
            <Form
                addTask={addTask}
            />
        </>
    );
}

export default Tasks;

// /* Version 4 - Follow professor's instructions*/

// import React from 'react';
// import uuid from 'react-uuid';
// import Task from './Task/Task';
// import Form from './Form/Form';
// import './Tasks.scss';

// class Tasks extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: []
//     };
//   }

//   componentDidMount() {
//     const tasks = [
//       {
//         id: uuid(),
//         description: "Walk the dog",
//         done: true
//       },
//       {
//         id: uuid(),
//         description: "Wash the car",
//         done: false
//       },
//       {
//         id: uuid(),
//         description: "Finish the lab",
//         done: false
//       }
//     ];

//     this.setState({ tasks: tasks });
//   }

//   handleClearTasks = () => {
//     this.setState({ tasks: [] });
//   }

//   handleStatusChange = (id) => {
//     let updatedTasks = this.state.tasks;
//     for (let task of updatedTasks) {
//       if (task.id === id) {
//         task.done = !task.done;
//       }
//     }

//     this.setState({ tasks: updatedTasks });
//   }

//   handleTaskRemove = (id) => {
//     let updatedTasks = this.state.tasks.filter(
//       (task) => task.id !== id
//     );

//     this.setState({ tasks: updatedTasks });
//   }

//   addTask = (newTask) => {
//     const updatedTasks = [
//       ...this.state.tasks,
//       newTask
//     ];

//     this.setState({ tasks: updatedTasks })
//   }

//   render() {
//     return (
//       <>
//         <h2 className='title'>These are the tasks:</h2>
//         {this.state.tasks.map(
//           (task, id) => (
//             <Task
//               key={id}
//               task={task}
//               onStatusChange={this.handleStatusChange}
//               onTaskRemove={this.handleTaskRemove}
//             />
//           )
//         )}

//         <button className='clearButton' onClick={this.handleClearTasks}>Clear Tasks</button>

//         <h2 className='subtitle'>Add a new Task:</h2>
//         <Form
//           addTask={this.addTask}
//         />
//       </>
//     );
//   }
// }

// export default Tasks;


// /* Version 3 */
// import React from 'react';
// import { useState } from 'react';
// import uuid from 'react-uuid';
// import Form from './Form/Form';
// import Task from './Task/Task';
// import './Tasks.scss';

// // Tasks component that renders a list of tasks and their associated buttons
// function Tasks() {
//     // useState hook to manage the tasks state
//     const [tasks, setTasks] = useState([
//         { id: uuid(), description: 'Walk the dog', done: true },
//         { id: uuid(), description: 'Wash the car', done: false },
//         { id: uuid(), description: 'Finish the lab', done: false }
//     ]);

//     //this.setState({ tasks: tasks });

//     // callback function to handle when the "Clear Tasks" button is clicked
//     const handleClearTasks = () => {
//         setTasks([]);
//     }

//     // callback function to handle when the "Change Status" button is clicked
//     const handleStatusChange = (id) => {
//         // create a copy of the tasks array
//         const updatedTasks = [...tasks];
//         // update the task's status in the copied array
//         updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
//         // set the tasks state to the updated copied array
//         setTasks(updatedTasks);
//     }

//     // callback function to handle when the "Remove" button is clicked
//     const handleTaskRemove = (id) => {
//         // filter out the task to be removed and set the tasks state to the filtered array
//         const filteredTasks = tasks.filter((task) => task.id !== id);
//         setTasks(filteredTasks);
//     }

//     return (
//         <>
//             <h2>These are the tasks:</h2>
//             {/* map over the tasks array and render a Task component for each */}
//             {tasks.map((task, index) =>
//             (<Task key={index} task={task} onStatusChange={handleStatusChange}
//                 onTaskRemove={handleTaskRemove} />))}
//             <hr />
//             <button className="clear-tasks-button" onClick={handleClearTasks}>Clear Tasks</button>
//             <h2>Add a new task:</h2>
//             <Form />
//         </>
//     );
// }

// export default Tasks;



// /* Version 2 */
// import { useState } from 'react';
// import uuid from 'react-uuid';
// import Task from './Task/Task';
// import styled from 'styled-components';

// // creating a styled component for the tasks wrapper, TasksTitle, and ClearButton
// const TasksWrapper = styled.div`
//     position: relative;
//     text-align: center;
//     width: 100%;
//     margin: 0 auto;
//     padding-top: 50px;
//     background-color: #f1f1f1;
//     border-radius: 10px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
// `;

// const TasksTitle = styled.h2`
//     position: absolute;
//     top: 0;
//     z-index: 1;
//     font-size: 2em;
//     font-weight: bold;
//     margin: 0;
//     padding: 10px;
//     align-self: flex-start;
// `;

// const ClearButton = styled.button`
//     background-color: #e74c3c;
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     margin-top: 20px;
//     font-size: 1em;
//     align-self: center;
// `;


// // Tasks component that renders a list of tasks and their associated buttons
// function Tasks() {
//     // useState hook to manage the tasks state
//     const [tasks, setTasks] = useState([
//         { id: uuid(), description: 'Walk the dog', done: true },
//         { id: uuid(), description: 'Wash the car', done: false },
//         { id: uuid(), description: 'Finish the lab', done: false }
//     ]);

//     // callback function to handle when the "Clear Tasks" button is clicked
//     const handleClearTasks = () => {
//         setTasks([]);
//     }

//     // callback function to handle when the "Change Status" button is clicked
//     const handleStatusChange = (id) => {
//         // create a copy of the tasks array
//         const updatedTasks = [...tasks];
//         // update the task's status in the copied array
//         updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
//         // set the tasks state to the updated copied array
//         setTasks(updatedTasks);
//     }

//     // callback function to handle when the "Remove" button is clicked
//     const handleTaskRemove = (id) => {
//         // filter out the task to be removed and set the tasks state to the filtered array
//         const filteredTasks = tasks.filter((task) => task.id !== id);
//         setTasks(filteredTasks);
//     }
//     // Return the JSX for the Tasks component
//     return (
//         <TasksWrapper>
//             <TasksTitle>These are the tasks:</TasksTitle>
//             {tasks.map((task, index) =>
//             (<Task key={index} task={task} onStatusChange={handleStatusChange}
//                 onTaskRemove={handleTaskRemove} />))}
//             <ClearButton onClick={handleClearTasks}>Clear Tasks</ClearButton>
//         </TasksWrapper>
//     );
// }

// export default Tasks;

// /* Version 1 */
// import { useState } from 'react';
// import uuid from 'react-uuid';
// import Task from './Task/Task';

// // Tasks component that renders a list of tasks and their associated buttons
// function Tasks() {
//     // useState hook to manage the tasks state
//     const [tasks, setTasks] = useState([
//         { id: uuid(), description: 'Walk the dog', done: true },
//         { id: uuid(), description: 'Wash the car', done: false },
//         { id: uuid(), description: 'Finish the lab', done: false }
//     ]);

//     // callback function to handle when the "Clear Tasks" button is clicked
//     const handleClearTasks = () => {
//         setTasks([]);
//     }

//     // callback function to handle when the "Change Status" button is clicked
//     const handleStatusChange = (id) => {
//         // create a copy of the tasks array
//         const updatedTasks = [...tasks];
//         // update the task's status in the copied array
//         updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
//         // set the tasks state to the updated copied array
//         setTasks(updatedTasks);
//     }

//     // callback function to handle when the "Remove" button is clicked
//     const handleTaskRemove = (id) => {
//         // filter out the task to be removed and set the tasks state to the filtered array
//         const filteredTasks = tasks.filter((task) => task.id !== id);
//         setTasks(filteredTasks);
//     }

//     return (
//         <>
//             <h2>These are the tasks:</h2>
//             {/* map over the tasks array and render a Task component for each */}
//             {tasks.map((task, index) =>
//             (<Task key={index} task={task} onStatusChange={handleStatusChange}
//                 onTaskRemove={handleTaskRemove} />))}
//             <hr />
//             <button onClick={handleClearTasks}>Clear Tasks</button>
//         </>
//     );
// }

// export default Tasks;