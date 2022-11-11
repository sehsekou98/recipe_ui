import "./fliter.css";
import React from "react";
import { Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Fliter = ({ type }) => {
  const [all, setAll] = useState(true);
  const [filter, setFilter] = useState({
    african: !all,
    asian: !all,
    northAmerican: !all,
    southAmerican: !all,
    european: !all,
    antartica: !all,
    australian: !all,
  });

  const handleOnChange = (e) => {
    if (e.target.name === "all") {
      setAll(e.target.checked);
      setFilter({
        african: !all,
        asian: !all,
        northAmerican: !all,
        southAmerican: !all,
        european: !all,
        antartica: !all,
        australian: !all,
      });
    } else {
      setAll(false);

      setFilter({
        ...filter,
        [e.target.name]: e.target.checked,
      });
    }
  };

  //retrive recipe
  const getRecipes = async () => {
    const response = await axios.get(
      `/recipe/getAll?recipeType=${type.toUpperCase()}&african=${
        filter.african
      }&asian=${filter.asian}&european=${filter.european}&northAmerican=${
        filter.northAmerican
      }&southAmerican=${filter.southAmerican}&australian=${
        filter.australian
      }&antartica=${filter.antartica}`
    );
    return response.data;
  };

  const { refetch } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleFilter = () => {
    refetch();
    console.log(filter);
  };

  return (
    <div className="fliter">
      <h3>Fliter Recipes By Origin:</h3>
      <div className="filter_checkbox">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="all"
                checked={all}
                onChange={handleOnChange}
              />
            }
            label="All "
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="african"
                checked={filter.african}
                onChange={handleOnChange}
              />
            }
            label="African"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="asian"
                checked={filter.asian}
                onChange={handleOnChange}
              />
            }
            label="Asian"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="northAmerican"
                checked={filter.northAmerican}
                onChange={handleOnChange}
              />
            }
            label="North America"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="southAmerican"
                checked={filter.southAmerican}
                onChange={handleOnChange}
              />
            }
            label="South America"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="european"
                checked={filter.european}
                onChange={handleOnChange}
              />
            }
            label="European"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="antartica"
                checked={filter.antartica}
                onChange={handleOnChange}
              />
            }
            label="Antartica"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                name="australian"
                checked={filter.australian}
                onChange={handleOnChange}
              />
            }
            label="Australian"
          />
        </FormGroup>

        <div className="filterAction">
          {/* <Button variant="contained" sx={{backgroundColor: "gray"}} onClick={handleFilter}>
          Clear
        </Button> */}
          <Button variant="contained" color="success" onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fliter;
