import React, { useRef, useState } from 'react'
import { Box, Button, Card, Container, Grid2, TextField, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = () => {
    let [data, setdata] = useState("")
    let [dataArray, setDataArray] = useState([])
    let inputRef = useRef()

    console.log(data);
    console.log(dataArray);
    return (
        <>
            <Container >
                <Box sx={{ bgcolor: '#fce4ec', height: '600px', marginTop: "70px", width: "700px", marginLeft: "210px", borderRadius:"10px" }} >
                    <Typography
                        variant='h2'
                        sx={{ fontSize: "md", marginLeft: "210px", color: "#e91e63", fontWeight: "800px" }}
                    >Todo App</Typography>
                    <br></br>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        <TextField
                            inputRef={inputRef}
                            label="Enter the task"
                            variant="outlined"
                            sx={{ width: "500px", color: "#e91e63" }}
                            onChange={(e) => {
                                setdata(e.target.value)
                            }}

                        />
                        <Button
                            variant="contained"
                            onClick={() => {
                                setDataArray([...dataArray, data])
                            }}
                            sx={{ bgcolor: "#e91e63" }}>Enter</Button>
                    </div>
                    {
                        dataArray.map((ele, id) => {

                            return <Box component="section" sx={{ p: 2, m: 3, bgcolor: "#f8bbd0", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "350px" }}>
                                    <div>
                                        <Typography
                                            variant='h5'
                                            sx={{ fontSize: "md", p: 0, }}
                                        >{ele}</Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "5px" }}>
                                        <Button variant="contained" startIcon={<DeleteIcon />} sx={{ bgcolor: "#e91e63" }}
                                            onClick={() => {
                                                dataArray.splice(id, 1)
                                                setDataArray([...dataArray])

                                            }}>
                                            Delete
                                        </Button>
                                        <Button variant="contained" startIcon={<EditIcon />} sx={{ bgcolor: "#e91e63" }}
                                            onClick={() => {
                                                console.log(inputRef.current);
                                                if (inputRef.current) {
                                                    inputRef.current.value = dataArray[id]
                                                    inputRef.current.focus();
                                                    dataArray.splice(id, 1)
                                                    setDataArray([...dataArray])
                                                }
                                            }}>
                                            Edit
                                        </Button>
                                    </div>
                                </div>

                            </Box>
                        })
                    }

                </Box>
            </Container>

        </>
    )
}

export default Todo