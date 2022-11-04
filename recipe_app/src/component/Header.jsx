import './header.css';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const gotToAddRecipePage = ()=>{
    navigate("/add-recipe")
  }

  const gotToHomePage = ()=>{
    navigate("/")
  }
  
  return (
    <div className="header">
      <h1 onClick={gotToHomePage}>Recipe - App</h1>
      
      <Button
        sx={{
          backgroundColor: '#6ABBA2',
          height: '2rem',
          '&:hover': { backgroundColor: '#6ABBA2' },
        }}
        variant="contained"
        onClick={gotToAddRecipePage}
        size="medium"
      >
        Add Recipe
      </Button>
    </div>
  )
}

export default Header
