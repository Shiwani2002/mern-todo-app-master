import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <div className=' flex-grow'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-white rounded-lg shadow-2xl'>
                    <li>
                        <NavLink to="/">All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;