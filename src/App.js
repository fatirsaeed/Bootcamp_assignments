import React,{useState} from 'react';
import './App.css';
import data from './record.json'


import {Select,
   MenuItem,
  FormControl,
  InputLabel,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  formControl:{
    minWidth:100
  }
}))

function App() {

  console.log(data)
  const classes = useStyles();
  const [value,setValue] = useState("");

  const handleChange = e =>{
    setValue(e.target.value)

    let getValue = e.target.value

    const filteredData = data.hh.filter((value)=>{
      return value.url === getValue
    })

    console.log(filteredData)
  }

  return (
    <div className='App'>
    <h1>Hello From Fatir</h1>

    <FormControl className={classes.formControl}>
      <InputLabel>Numbers</InputLabel>
    <Select onChange={handleChange}>
      {
        data.hh.map((value) => {
          return (
            <MenuItem key={value.id} value={value.id}>{value.id}</MenuItem>
          )
        })
      }
    </Select>
    </FormControl>
    <p>You Selected: {value}</p>
    </div>
  );
}

export default App;
