import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Users.module.css";

const Users = () => {
    const [users, setUsers]=useState([
        {id:1,
            name: "Another post",
            username: "Pekar",
            email: "YaKuki"
        }
    ])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            setUsers(data.slice(0, 5));
        });
    })

    const result = users.map((apps)=>
        <article key={apps.id}>
            <h3>{apps.name}</h3>
            <title>{apps.username}</title>
            <strong>{apps.email}</strong>
        </article>
    )
    return ( 
        <div className={classes.Users}>
            {result}
        </div>
    );
}
 
export default Users;