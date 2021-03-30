import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Comments.module.css";

const Comments = () => {
    const [comments, setComments]=useState([
        {id:1,name: "Another post", email: "YaKuki", body: "jkdvnjkdnsdjn jjkn."},
        {id:2,name: "Another post", email: "LoL Kek", body: "Lorem bla bal bla  jkdvnjkdnsdjn jjkn."},
        {id:3,name: "Another post", email: "Cheburek", body: "Lorem bla bal bla  jkdvnjkdnsdjn jjkn."}
    ])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then(({data})=>{
            setComments(data.slice(0, 5));
        });
    })

    const result = comments.map((apps)=>
        <article key={apps.id}>
            <h3>{apps.name}</h3>
            <strong>{apps.email}</strong>
            <p>{apps.body}</p>
        </article>
    )
    return ( 
        <div className={classes.Comments}>
            {result}
        </div>
    );
}
 
export default Comments;