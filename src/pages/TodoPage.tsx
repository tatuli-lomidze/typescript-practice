import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

interface Task {
  name: string;
  isCompleted: boolean;
  id: string;
}

const API_KEY = 'VBPTF5md7wVeCj37uPio8lhr6NN0LBwreFFD-EGGEwrlRRb7LQ';

const TodoPage: React.FC = () => {



  const [taskList, setTaskList] = useState<Task[]>([])

  useEffect(() => {
    fetch('/api/v1/users', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => {
      if (!res.ok) throw new Error("Response failed")
      return res.json()
    })
    .then(data => setTaskList(data.items.map((i: any) => ({
      name: i.name,
      isCompleted: i.isCompleted,
      id: i._uuid
    }))))
    .catch(err => console.log(err))
  }, [])

  const onFormSubmit = (name: string, isCompleted: boolean) => {
    fetch("/api/v1/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{ name, isCompleted }])
    })
    .then(res => {
      if (!res.ok) throw new Error("Response failed");
      return res.json()
    })
    .then(data => setTaskList(prev => [{
      name: data.items[0].name,
      isCompleted: data.items[0].isCompleted,
      id: data.items[0]._uuid
    }, ...prev]))
    .catch(err => console.log(err))
  }



  return (
    <div>
      <Link to="/" style={{ marginRight: "10px" }}>todo</Link>
      <Link to="/users" >users</Link>

      <UserForm onFormSubmit={onFormSubmit} />
      
      {/* <button onClick={() => setTaskList([])}>clear list</button> */}

      {taskList.map((i) => (
        <div key={i.id}>
          <h2>{i.name}</h2>
          <h4>{i.isCompleted ? "Task Is Completed" : "Task Is Not Completed"}</h4>
        </div>
      ))}
    </div>
  )
}

export default TodoPage
