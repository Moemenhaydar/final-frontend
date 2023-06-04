import React,{useEffect} from "react";
import "../products/productvisitor.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ProductVisitor = () => {

  const [category, setCategory] = React.useState('');
  const[listCat, setList] = React.useState([])
  const [data, setData] = React.useState([]);
  const handleChange = (event) => {
    setCategory(event.target.value );
  };
   const cardsData = [
    {
      id: 1,
      imageUrl: "https://unsplash.it/500/500/",
      title: "Diligord",
      owner:"gallery Haydar",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 2,
      imageUrl: "https://unsplash.it/511/511/",
      title: "Rocogged",
      owner:"gallery Haydar",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 3,
      imageUrl: "https://unsplash.it/500/500/",
      title: "Diligord",
      owner:"gallery Haydar",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 4,
      imageUrl: "https://unsplash.it/511/511/",
      title: "Rocogged",
      owner:"gallery Haydar",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
  ];
 const fetchData =()=>{
  axios.get(`http://localhost:5000/product/?cat=${category}`).then(
    (res)=>{
      console.log(res);
      setData(res.data.message);
    }
  ).catch((err)=>{
    console.log(err);
  })
 }

 const fetchCategory =()=>{
  axios.get('http://localhost:5000/category/').then(
    (res)=>{
      console.log(res);
      setList(res.data.message);
    }
  ).catch((err)=>{
    console.log(err);
  })
 }
  const toggleHover = (event) => {
    event.currentTarget.classList.toggle('hover');
  };
  useEffect(()=>{
    fetchCategory();
    },[])
    
    useEffect(()=>{
      fetchData();
      },[category])
  return (
    <div className="wrapper">
      <h1 className="product-h1">Products</h1>
      <Box sx={{ Width: '10px' }}>
      <FormControl fullWidth style={{ width: '50%' ,borderColor: 'red' }}>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">----</MenuItem>
          {listCat.map((category)=>(
              <MenuItem value={category._id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <div className="cols">
  {data.length === 0 ? (
    <p>No Product for this Category</p>
  ) : (
    data.map((card) => (
      <div className="col" key={card._id} onTouchStart={toggleHover}>
        <div className="container">
          <div className="front" style={{ backgroundImage: `url(http://localhost:5000/${card.image})` }}>
            <div className="inner">
              <p className="product-p">{card.title}</p>
              <span className="product-span">{card.owner}</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p className="product-p">{card.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>

    </div>
  );
};

export default ProductVisitor;
