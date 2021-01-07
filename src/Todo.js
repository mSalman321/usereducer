import React from 'react'
import {ACTIONS} from './App'

export default function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color:todo.complete?'red':'blue'}}>{todo.name}</span>
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>Toggle</button>
            <button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:{id:todo.id}})}>Delete</button>
        </div>
    )
}
