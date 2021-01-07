import './App.css';
import React,{useState, useReducer} from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';


export const ACTIONS = {
  ADD_TODO:'add-todo',
  TOGGLE_TODO:'toggle-todo',
    
}



function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo,complete:!todo.complete}
        }
      })
    case ACTIONS.DELETE:
      return todos.filter(todo =>todo.id !== action.payload.id)
  }

}

function newTodo(name) {
  return {id:uuidv4(), name:name, complete:false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')


 function handleSubmit(e){
   e.preventDefault()
   dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
   setName('')

 }


 console.log(todos)

  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </form>


        {
          todos.map(todo=>{
            console.log(todo.id)
            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
          })
        }
    </>
  );
}

export default App;










// import logo from './logo.svg';
// import './App.css';
// import React,{useState, useReducer} from 'react'

// const ACTIONS = {
//   INCREMENT:'increment',
//   DECREMENT:'decrement'
// }

// function reducer(state,action){
//   switch(action.type){
//     case ACTIONS.INCREMENT:
//       return {count: state.count+1}
//     case ACTIONS.DECREMENT:
//       return {count: state.count-1}
//     default:
//       return state
//   }

// }


// function App() {
//   const [state, dispatch] = useReducer(reducer, {count:0})


//   function decrement(){
//     dispatch({type:ACTIONS.DECREMENT})
//   }

//   function increment(){
//     dispatch({type:ACTIONS.INCREMENT})

//   }

 


//   return (
//     <div className="App">
//         <button onClick={decrement}>-</button>
//         <span>{state.count}</span>
//         <button onClick={increment}>+</button>
//     </div>
//   );
// }

// export default App;
