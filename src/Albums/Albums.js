import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Albums.module.css";

const Albums = () => {
    const [albums, setAlbums]=useState([
        {id:1,title: "Another post"},
        {id:2,title: "Another post"},
        {id:3,title: "Another post"}
    ])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums').then(({data})=>{
            setAlbums(data.slice(0, 10));
        });
    })

    const result = albums.map((apps)=>
        <article key={apps.id}>
            <h4>{apps.title}</h4>
        </article>
    )
    return ( 
        <div className={classes.Albums}>
            {result}
        </div>
    );
}
 
export default Albums;