import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {
    const [todo, setTodo] = useState('Enter the data');
    const [db, setDb] = useState([]);
    function dataPost() {
        alert("data has been posted")
        axios.post("http://localhost:3000/posts", { todo })
            .then(() => {
                alert("data has been posted")
                setTodo('')
                
            })
            .catch(() => {
                alert("Data has not been posted")
            })
    }
    function getData() {
        axios.get("http://localhost:3000/posts", {  })
            .then((res) => {
                setDb(res.data)
                alert("data has revired")
            })
            .catch(() => {
                alert("data not get")
            })
    }
    function setDel(id, con) {
        if (con == "yes") {
            deletedData(id);
        }
        else {
            dataPost();
        }


    }
    function updateData(id, data) {
        axios.put(`http://localhost:3000/posts/${id}`, { todo: data })
            .then(() => {
                console.log("updated data");
                getData();
            })
    }
    function newData(id) {
        const data = prompt("enter the new data")
        updateData(id, data)

    }
    function newDelete(id) {
        const con = prompt("Are you sure do you want to delete")
        setDel(id, con)
    }
    function deletedData(id, data) {
        
        axios.delete(`http://localhost:3000/posts/${id}`,{})
            .then(() => {
                console.log("data deleted");
                getData();
            })
    }
    console.log(db)
    return (
        <div>
            <p>
                {
                    todo
                }
            </p>
            

            <TextField
                id="outlined-basic" label="Todo" variant="outlined"
                value={todo}
                onChange={(ref) => setTodo(ref.target.value)}
            /> <br />
            
            <br />
            <Button variant="contained" onClick={dataPost}>Post</Button>
            <Button variant="contained" onClick={getData}>Get</Button>
            <div>
                <ul>
                    {
                        db.map((item) => (
                            <li key={item.id}>{item.todo}<Button onClick={() => newData(item.id)}>Edit</Button></li>

                        ))
                    }
                </ul>
                <ul>
                    {
                        db.map((item) => (
                            <li key={item.id}><Button onClick={() => newDelete(item.id)}>Delete</Button></li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default Todolist
