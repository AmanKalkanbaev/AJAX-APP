import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Photos.module.css";

const Photos = () => {
    const [photos, setPhotos]=useState([
        {id:1,title: "Another post", url: "YaKuki", thumbnailUrl: "jkdvnjkdnsdjn jjkn."},
        {id:2,title: "Another post", url: "YaKuki", thumbnailUrl: "jkdvnjkdnsdjn jjkn."},
        {id:3,title: "Another post", url: "YaKuki", thumbnailUrl: "jkdvnjkdnsdjn jjkn."}
    ])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(({data})=>{
            setPhotos(data.slice(0, 5));
        });
    })

    const result = photos.map((apps)=>
        <article key={apps.id}>
            <h3>{apps.title}</h3>
            <br/>
            <img url={apps.url}></img>
            <br/>
            <a>{apps.thumbnailUrl}</a>
        </article>
    )
    return ( 
        <div className={classes.Photos}>
            {result}
        </div>
    );
}
 
export default Photos;