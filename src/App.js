import './App.css';
import styled from 'styled-components';
import sun from './images/icon-sun.svg';
import check from './images/icon-check.svg';
import moon from './images/icon-moon.svg';
import darkimg from './images/bg-desktop-dark.jpg';
import lightimg from './images/bg-desktop-light.jpg';
import Input from './Input';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
width:50%;
margin:0 auto;
@media(max-width:600px){
  width:90%;
}
`

const HeaderFlexing = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
h3{
color:#fff;
font-size:2.1rem;
letter-spacing:12px;
@media(max-width:600px){
font-size:1.1rem;
}
}
`

const TodoFlexing = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.9rem 0.2rem;
@media(max-width:600px){
padding:0.4rem 0.1rem;
}
h3{
color:hsl(236, 9%, 61%);
font-size:0.9rem;
font-weight:700;
@media(max-width:600px){
font-size:0.6rem;
}
}
`

function App() {

  const [dark,setDark] = useState(false);

  const [todo,setTodo] = useState([{
    id:1,
    name:"Do this",
    did:false,
  },{
    id:2,
    name:"Do that",
    did:false,
  },{
    id:3,
    name:"You need to go to",
    did:true,
  },{
    id:4,
    name:"Get that BAC",
    did:true,
  }
    ])


  return (
    <div className="App" style={{backgroundColor: dark ? `hsl(233, 11%, 84%)` : `hsl(235, 21%, 11%)`}}>
       <header className="header" style={{backgroundImage: dark ? `url(${lightimg})` : `url(${darkimg})`}}>
         <Container>
             <HeaderFlexing>
               <h3>TODO</h3>
               <a href='#' onClick={(() => setDark(!dark))}><img src={dark ? moon : sun} /></a>
             </HeaderFlexing>
             <Input todo={todo} setTodo={setTodo} dark={dark} setDark={setDark} check={check} />
          </Container>
       </header>
       <div className="todo-list">
         <Container>
         {todo.length > 0 ? (
            <TodoItem
            todo={todo}
            setTodo={setTodo}
            dark={dark}
            setDark={setDark}
            />
           ) : <h3 className="text-center">No todo's to display :(</h3> }
         </Container>
        </div>
          <Container>
          <div className="todo-checking" style={{backgroundColor: dark ? `hsl(0, 0%, 98%)` : `hsl(235, 24%, 19%)`}}>
            <TodoFlexing>
            {todo.length > 0 ? ( todo.filter(todo => !todo.did).length > 0 ? <h3>{todo.filter(todo => !todo.did).length} tasks left</h3>  : <h3>Good job for today , you did it !</h3> ) : ( <h3>Also.. no todos to display :(</h3>) }
            {todo.length > 0 ? (  
            <div className="todo-btns">
                <button type="button" onClick={(() => setTodo(todo.filter((todo) => todo.did === true && todo.did === false)))} >All</button>
                <>
                <button type="button" onClick={() => setTodo(todo.filter((todo) => todo.did === true))}>Finished</button> 
                <button type="button" onClick={() => setTodo(todo.filter((todo) => todo.did === false))}>Still in progress</button>
                </>
              </div> ) : ( <h3>What should I filter ? refresh it !</h3>)}
            </TodoFlexing>
          </div>
          </Container>
    </div>
  );
}

export default App;
