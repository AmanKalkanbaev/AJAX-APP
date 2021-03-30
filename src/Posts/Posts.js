import axios from 'axios';
import { useEffect, useState } from 'react';
import  classes from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts]=useState([
    {id:1,title: "Example post",body: "Lorem bla bal bla  jkdvnjkdnsdjn jjkn."},
    {id:2,title: "Another post",body: "Lorem bla bal bla  jkdvnjkdnsdjn jjkn."},
    {id:3,title: "Third post",body: "Lorem bla bal bla  jkdvnjkdnsdjn jjkn ."}
  ])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
        setPosts(data.slice(0, 5));
    })
  }, [])
  

  const result = posts.map((apps) => 
  <article key={apps.id}>
    <h1>{apps.title}</h1>
    <p>{apps.body}</p>
  </article> );

  return (
    <div className={classes.Posts}>
      {result}
    </div>
  );
}



export default Posts;