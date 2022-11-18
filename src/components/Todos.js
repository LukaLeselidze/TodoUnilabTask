import React, { useContext, useState, useEffect } from 'react'
import { LoginContext } from './Contexts/LoginContext'
import './Todos.css'
import doneicon from '../images/done-icon.svg'
import deleteicon from '../images/delete-icon.svg'
import { Link } from 'react-router-dom'

function Todos() {
    const { name, image, setNameEntered, setisUploaded } = useContext(LoginContext);
    const [todo, setTodos] = useState('');
    const [allTodo, setAllTodo] = useState([]);
    const [counter, setCounter] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('localtodos')) {
            const storedtodo = JSON.parse(localStorage.getItem('localtodos'));
            setAllTodo(storedtodo)
        }
    }, [])

    const addTodo = (e) => {
        if (todo) {
            const newTodo = { id: new Date().getTime().toString(), title: todo, isCompleted: false }
            setAllTodo([...allTodo, newTodo])
            localStorage.setItem('localtodos', JSON.stringify([...allTodo, newTodo]))
            setTodos('')
        }
    }

    const handleDelete = (todo) => {
        const deleted = allTodo.filter((t) => t.id !== todo.id);
        setAllTodo(deleted)
        localStorage.setItem('localtodos', JSON.stringify(deleted))
    }

    const logOut = () => {
        setNameEntered(false)
        setisUploaded(false)
    }

    const handleDone = () => {
        setAllTodo(allTodo.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, isCompleted: !item.isCompleted
                };

            }
            return item
        }))
    }
    // setClicked(true)
    // setCounter(counter + 1)




    console.log(counter)
    return (
        <div className='Todos'>
            <header>
                <div className='left'>
                    <h1 className='logo'>TO DO</h1>
                    <h2>{counter} tasks</h2>
                    <Link onClick={logOut}>Log Out</Link>
                </div>
                <div className='right'>
                    <p className='name'> {name}</p>
                    <img src={image}></img>
                </div>
            </header>
            <section>
                <h1>Add Your Daily Tasks</h1>
                <div className='input-container'>
                    <input value={todo} onChange={(e) => setTodos(e.target.value)} id='todo-input' type='text' placeholder='my task'></input>
                    <button onClick={addTodo}>Add</button>
                </div>


                {allTodo.map((todo) => <React.Fragment key={todo.id}>
                    <div className='todos-list'>
                        <div className='todo'> <p>{todo.title}</p>
                            <div className='todo-right'>
                                {!clicked ? <img key={todo.id} onClick={handleDone} src={doneicon}></img> : <p>done</p>}
                                <img onClick={() => handleDelete(todo)} src={deleteicon}></img>
                            </div>
                        </div>
                    </div>
                </React.Fragment>)}
            </section>
        </div>
    )
}

export default Todos