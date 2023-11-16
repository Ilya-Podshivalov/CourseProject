import React, { Component } from 'react';
import { useEffect, useState } from 'react';

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


const addPost = async() =>{

    const headerFromUser = document.querySelector('#header').value;
    const textFromUser = document.querySelector('#text').value;

    const newPost = {
        header: headerFromUser,
        text: textFromUser
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

    const deletePost = async (id) => {
        const options = {
            method: 'DELETE',
            headers: new Headers()
        }
        await fetch(URL + `/${id}`, options);

        setPosts(allPosts.filter(x => x.id != id));
    }

    const updatePost = async(oldPost) =>{

        const headerFromUser = document.querySelector('#header').value;
        const textFromUser = document.querySelector('#text').value;
    
        const newPost = {
            header: headerFromUser,
            text: textFromUser
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
                 <button onClick = {() => addPost()}>Add post</button>
            </div>
            <div>
                {allPosts.map(x => <PostItem key = {x.id} post = {x} deleteAction = {deletePost} updateAction={}/>)}
                
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
            <button onClick={() => deleteAction(post.id)}>Delete</button>
        </div>
    )
}