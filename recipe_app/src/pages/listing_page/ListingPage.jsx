import "./listingpage.css";
import React from "react";
import Fliter from "../../component/Fliter";
import RecipeCard from "../../component/RecipeCard/RecipeCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";

const ListingPage = () => {
  const getRecipes = async () => {
    const response = await axios.get("/recipe/getAll");
    return response.data;
  };
  //query
  // const { data, isLoading, isError } = useQuery("recipes", getRecipes, {
  //   refetchOnWindowFocus: false,
  // });

  const { isLoading, error, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    refetchOnWindowFocus: false,
  });

  const { type } = useParams();
  const vegBgImage =
    "url('https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
  const nonVegBgImage =
    "url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlnZXJpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";

  const bg = type === "vegetarian" ? vegBgImage : nonVegBgImage;
  return (
    <div>
      <div
        style={{
          backgroundImage: `${bg}`,
          height: "25rem",
          width: "100%",
          position: "relative",
        }}
      >
        {/* <img src={'https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} /> */}
        <div
          style={{
            position: "absolute",
            backgroundColor: "#ffffff",
            padding: "1rem",
            width: "60%",
            bottom: "1rem",
            opacity: ".7",
            color: "#044D37",
            fontSize: "1.2rem",
            text: "bold",
          }}
        >
          <h2>
            {type === "vegetarian" ? "Vegetarian Food" : "Non Vegetarian Food"}
          </h2>
        </div>
      </div>

      <section className="listing-section">
        <aside className="left-side">
          <Fliter />
        </aside>

        <div className="right-side">
          {isLoading ? (
            <LinearProgress />
          ) : data.length === 0 ? (
            <p>No Data currently Available </p>
          ) : (
            <div className="recipe__list">
              {data.map((r, i) => (
                <RecipeCard
                  key={i}
                  name={r.name}
                  id={r.id}
                  imgSrc={r.imageUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ListingPage;
