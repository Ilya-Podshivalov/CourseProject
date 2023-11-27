import React, { Component } from 'react';
import { useEffect, useState, useContext } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import MyTable from './MyTable';
import { Form, Button } from 'react-bootstrap';


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

const DateContext = React.createContext();



const InputForm = () => {

const [headerValue, setHeaderValue] = useState('');
const [descriptionValue, setDescriptionValue] = useState('');
const [dateValue, setdateValue] = useState(null);

     const headerInputChange = (e) => {
         setHeaderValue(e.target.value);
      }

    const descriptionInputChange = (e) => {
        setDescriptionValue(e.target.value);
    }

    const dateInputChange = (e) => {
        setdateValue(e);
    }
    const handleSubmit = (e) => {
        const post = {
            header: headerValue,
            text: descriptionValue,
            date: dateValue,
            progress: "In process"
        };
       AddPost(post);
    }
    return (
        <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="headeForm">
          <Form.Label>Название:</Form.Label>
          <Form.Control type="text" placeholder="Название" value={headerValue} onChange={headerInputChange} />
        </Form.Group>
        <Form.Group controlId="descriptiopForm">
          <Form.Label>Задача:</Form.Label>
          <Form.Control type="text" placeholder="Задача" value={descriptionValue} onChange={descriptionInputChange} />
        </Form.Group>
        <Form.Group controlId="dateForm">
           <Form.Label>Дата:</Form.Label>
           <Datetime value={dateValue} onChange={dateInputChange} inputProps={{ id: 'date_input' }} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
      </div>
    );
  }    
  
const AddPost = async (newPost) => {

  /* const newPost = {
        header: inputValue,
        text: textFromUser,
        date: selectedDate,
        progress: "In process"
    };*/


    const headers = new Headers();
    headers.set('Content-Type', 'application/json')

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


    const DeletePost = async (id) => {
        const options = {
            method: 'DELETE',
            headers: new Headers()
        }
        await fetch(URL + `/${id}`, options);
        setPosts(allPosts.filter(x => x.id != id));
    }

    const UpdatePost = async(oldPost) =>{

        const newPost = {
            header: oldPost.header,
            text: oldPost.text,
            date: oldPost.date,
            progress: "Выполнено"
        }
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        const options = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(newPost)
        };
        const result = await fetch(URL, options);
        if(result.ok){
           
            const updatedPost = allPosts.findIndex(x => x.id === oldPost.id);
            allPosts[updatedPost] = newPost;
            setPosts(allPosts.slice());
        }
    }



  return(
        <div>
            <div>
                <h4>
                <InputForm/>
                </h4>
            </div>
            <div>
                <MyTable objects={allPosts} handleEdit={UpdatePost} handleDelete={DeletePost}/>
            </div>
        </div>
    )
    }

export default Posts;

