import "./fliter.css";
import React from "react";
import { Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const Fliter = () => {
    const [filter, setFilter] = useState({
        african: false,
        asian: false,
        northAmerican: false,
        southAmerican: false,
        european: false,
        antartica: false,
        australian: false
    })

    const handleOnChange = e=>{
        setFilter(
            {
                ...filter,
                [e.target.name]: e.target.checked
            }
        )
    }

    const handleFilter = ()=>{
        
        console.log(filter)
    }

  return (
    <div className="fliter">
      <h3>Fliter By:</h3>
      <div className="filter_checkbox">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="success" name="african" checked={filter.african} onChange={handleOnChange} />}
            label="African"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="asian" checked={filter.asian} onChange={handleOnChange} />}
            label="Asian"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="northAmerican" checked={filter.northAmerican} onChange={handleOnChange} />}
            label="North America"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="southAmerican" checked={filter.southAmerican} onChange={handleOnChange}  />}
            label="South America"
          />
          <FormControlLabel
            control={<Checkbox color="success"  name="european" checked={filter.european} onChange={handleOnChange} />}
            label="European"
          />
          <FormControlLabel
            control={<Checkbox color="success"  name="antartica" checked={filter.antartica} onChange={handleOnChange}  />}
            label="Antartica"
          />
          <FormControlLabel
            control={<Checkbox color="success"  name="australian" checked={filter.australian} onChange={handleOnChange} />}
            label="Australian"
          />
        </FormGroup>

        <Button variant="contained" color="success" onClick={handleFilter}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Fliter;
