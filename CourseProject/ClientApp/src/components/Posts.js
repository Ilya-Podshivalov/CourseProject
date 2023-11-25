import React, { Component } from 'react';
import { useEffect, useState,useContext } from 'react';
import DateTimeInput from "./DateTime";
import { DateContext } from './DateTime';

const URL = '/api/posts';

const Posts = () =>{

    const[allPosts,setPosts] = useState([]);

    const getPosts = async() =>{
        const options = {
            method: 'GET',
            headers: new Headers()
        }
        const result = await fetch(URL, options);
        if(result.ok){
            const posts = await result.json();
            setPosts(posts);
            return posts;
        }
        return [];
    }

    const [selectedDate, setSelectedDate] = useState(false);
function AddPost() {

    const headerFromUser = document.querySelector('#header').value;
    const textFromUser = document.querySelector('#text').value;

    const newPost = {
        header: headerFromUser,
        text: textFromUser,
        date: selectedDate,
        progress: "In process"
    };


    const headers = new Headers();
    headers.set('Content-Type', 'application/json')
    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newPost)
    };
    const result =  fetch(URL, options);
    if(result.ok){
        const post =  result.json();
        allPosts.push(post);
        setPosts(allPosts.slice());
    }
}

const DateContext = React.createContext();

const DateTimeInput = () => {

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
    <div>
      <DateContext.Provider value={selectedDate}>
      <Datetime
          value={selectedDate}
          onChange={handleDateChange}
          inputProps={{ placeholder: 'Выберите дату и время' }}
        />   
       </DateContext.Provider>
    </div>
    );
};


export default DateTimeInput;

    const DeletePost = async (id) => {
        const options = {
            method: 'DELETE',
            headers: new Headers()
        }
        await fetch(URL + `/${id}`, options);

        setPosts(allPosts.filter(x => x.id != id));
    }

    const UpdatePost = async(oldPost) =>{

        const headerFromUser = document.querySelector('#header').value;
        const textFromUser = document.querySelector('#text').value;
        const dateFromUser = document.querySelector('#date').value;

        const newPost = {
            header: headerFromUser,
            text: textFromUser,
            date: dateFromUser
        };
    
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newPost)
        };
        const result = await fetch(URL, options);
        if(result.ok){
            const post = await result.json();
            allPosts.push(post);
            setPosts(allPosts.slice());
        }
    }

    useEffect(() => {
        getPosts();
    },[])

    return(
        <div>
            <div>
                <p>Creating post</p>
                <div style={{margin: '10px'}}>
                     <input id="header"/>
                 </div>
                 <div style={{margin: '10px'}}>
                      <textarea id="text"/>
                 </div>
                 <div>
                    <DateTimeInput/>
                 </div>
                 <button onClick = {() => AddPost()}>Add post</button>
            </div>
            <div>
                {allPosts.map(x => <PostItem key = {x.id} post = {x} deleteAction = {DeletePost}/>)}
                
            </div>
        </div>
    )
    }

export default Posts;


const PostItem = ({post, deleteAction, updateAction}) => {
    return (
        <div>
            <h2>{post.header}</h2>
            <p>{post.text}</p>
            <p>{post.DateTimeInput}</p>
            <button onClick={() => deleteAction(post.id)}>Delete</button>
        </div>
    )
}