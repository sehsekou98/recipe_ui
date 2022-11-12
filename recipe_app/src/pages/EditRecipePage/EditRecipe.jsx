import "./editRecipe.css";
import React from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  Button,
  IconButton,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useNavigate, useParams } from "react-router-dom";

const style = {
  textfieldStyles: {
    marginBottom: ".5rem",
    "&:focus": {
      borderColor: "green",
    },
  },
  previewImageStyle: {
    width: "10rem",
    height: "10rem",
    marginLeft: "1rem",
  },
  actionStyles: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "1rem",
  },
};
const EditRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [],
    description: "",
    imageUrl: "",
    instruction: "",
    recipeOrigin: "AFRICAN",
    recipeType: "VEGETARIAN",
  });

  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: "",
  });

  const handleNewRecipeOnChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientOnChange = (e) => {
    setIngredient({
      ...ingredient,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddIngredient = () => {
    if (ingredient.name === "" || ingredient.quantity === "") {
      alert("No Ingredient added...");
      return;
    }

    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, ingredient],
    });

    setIngredient({
      name: "",
      quantity: "",
    });
  };

  const handleRemoveIngredient = (i) => {
    setNewRecipe({
      ...newRecipe,
      ingredients: newRecipe.ingredients.filter(
        (item) => newRecipe.ingredients.indexOf(item) !== i
      ),
    });
  };

  const handleReset = () => {
    navigate(-1);
  };

  const queryClient = useQueryClient();

  const editRecipe = async (dto) => {
    const { data } = await axios.put("recipe/update", dto);
    return data;
  };

  const { mutate } = useMutation(editRecipe, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["recipes"]);
      handleReset();
      // console.log(data)
    },
  });

  const handleEditRecipe = () => {
    if (newRecipe.name === "") {
      alert("Recipe Name missing.");
      return;
    }

    if (newRecipe.instruction === "") {
      alert("Recipe Instruction missing.");
      return;
    }

    if (newRecipe.description === "") {
      alert("Recipe Description missing.");
      return;
    }

    if (newRecipe.imageUrl === "") {
      alert("Recipe Image Url Missing.");
      return;
    }

    if (newRecipe.ingredients === []) {
      alert("Recipe Name missing.");
      return;
    }
    mutate(newRecipe);
  };

  //retrive recipe

  const getSingleRecipe = async () => {
    const response = await axios.get(`/recipe/getRecipe/${id}`);
    return response.data;
  };

  const { isLoading } = useQuery({
    queryKey: ["recipes-single"],
    queryFn: getSingleRecipe,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setNewRecipe(data);
    },
  });

  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }
  return (
    <div classname="addRecipe">
      <div className="addRecipeTitle">
        <h2>Edit Your Recipe </h2>
      </div>

      <div className="addRecipe-form">
        <TextField
          name="name"
          value={newRecipe.name}
          onChange={handleNewRecipeOnChange}
          label="Recipe Name"
          variant="outlined"
          fullWidth
          sx={{ ...style.textfieldStyles }}
        />

        <TextField
          name="description"
          value={newRecipe.description}
          onChange={handleNewRecipeOnChange}
          label="Recipe Description"
          variant="outlined"
          fullWidth
          sx={{ ...style.textfieldStyles }}
        />

        <div>
          <h2
            style={{ color: "#68BBA2", fontSize: "1rem", fontWeight: "normal" }}
          >
            {" "}
            Ingredients:{" "}
          </h2>
          <TextField
            name="name"
            value={ingredient.name}
            onChange={handleIngredientOnChange}
            label="name"
            variant="outlined"
            // fullWidth
            sx={{
              ...style.textfieldStyles,
              width: "7rem",
              marginRight: ".5rem",
            }}
          />
          <TextField
            name="quantity"
            value={ingredient.quantity}
            onChange={handleIngredientOnChange}
            label="Qty"
            variant="outlined"
            type="text"
            // fullWidth
            sx={{ ...style.textfieldStyles, width: "5rem" }}
          />
          <IconButton onClick={handleAddIngredient}>
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </div>

        <div>
          {newRecipe.ingredients.at.apply.length > 0 && (
            <ul>
              {newRecipe.ingredients.map((i, k) => (
                <li key={k}>
                  {i.name} ------ {i.quantity}{" "}
                  <IconButton
                    onClick={() => {
                      handleRemoveIngredient(k);
                    }}
                  >
                    <CancelPresentationIcon fontSize="medium" />
                  </IconButton>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            name="imageUrl"
            value={newRecipe.imageUrl}
            onChange={handleNewRecipeOnChange}
            label="Recipe Image Link"
            variant="outlined"
            // fullWidth
            type="url"
            sx={{ ...style.textfieldStyles }}
          />

          <img
            style={style.previewImageStyle}
            src={
              newRecipe.imageUrl !== ""
                ? newRecipe.imageUrl
                : "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
            }
            alt="recipe-image-preview"
          />
        </div>
        <div>
          <br />
          <TextField
            name="instruction"
            value={newRecipe.instruction}
            onChange={handleNewRecipeOnChange}
            label="Instruction"
            variant="outlined"
            fullWidth
            sx={{ ...style.textfieldStyles }}
          />
          <InputLabel id="demo-simple-select-label">Recipe Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="recipeType"
            value={newRecipe.recipeType}
            label="Recipe Origin"
            onChange={handleNewRecipeOnChange}
            sx={{ width: "70%" }}
          >
            <MenuItem value="VEGETARIAN">Vegetarian</MenuItem>
            <MenuItem value="NON_VEGETARIAN">Non-Vegetarian</MenuItem>
          </Select>

          <br />

          <InputLabel id="demo-simple-select-label">Recipe Origin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="recipeOrigin"
            value={newRecipe.recipeOrigin}
            label="Recipe Origin"
            onChange={handleNewRecipeOnChange}
            sx={{ width: "70%" }}
          >
            <MenuItem value="AFRICAN">African</MenuItem>
            <MenuItem value="EUROPEAN">European</MenuItem>
            <MenuItem value="ASIAN">Asian</MenuItem>
          </Select>
        </div>
        <div style={style.actionStyles}>
          <Button
            onClick={handleReset}
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: " #F991CC",
              "&:hover": {
                backgroundColor: "#E2AFDE",
                color: " #fff",
              },
            }}
          >
            {" "}
            Cancel
          </Button>

          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: " #98A8F8",
              "&:hover": {
                backgroundColor: "#BCCEF8",
                color: " #FAF7F0",
              },
            }}
            onClick={handleEditRecipe}
            disabled={isLoading}
          >
            {" "}
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
