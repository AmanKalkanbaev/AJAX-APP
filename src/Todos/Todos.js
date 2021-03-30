import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Todos.module.css";

const Todos = () => {
    const [todos, setTodos]=useState([
        {id:1,title: "Another post", completed: "YaKuki"},
        {id:2,title: "Another post", completed: "YaKuki"},
        {id:3,title: "Another post", completed: "YaKuki"}
    ])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({data})=>{
            setTodos(data.slice(0, 10));
        });
    })

    const result = todos.map((apps)=>
        <article key={apps.id}>
            <h3>{apps.title}</h3>
            <p>{apps.completed}</p>
        </article>
    )
    return ( 
        <div className={classes.Todos}>
            {result}
        </div>
    );
}
 
export default Todos;