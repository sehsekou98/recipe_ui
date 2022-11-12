import "./detailsPage.css";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  //delete dialog functions
  const queryClient = useQueryClient();
  const deleteRecipe = async () => {
    const { data } = await axios.delete(`/recipe/delete/${id}`);
    return data;
  };

  const { mutate } = useMutation(deleteRecipe, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["recipes"]);
      handleClose();
      navigate(-1);
    },
  });

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = () => {
    mutate();
  };

  const goToEditPage = () => {
    navigate(`/edit-recipe/${id}`);
  };

  //retrive recipe

  const getSingleRecipe = async () => {
    const response = await axios.get(`/recipe/getRecipe/${id}`);
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["recipes-single"],
    queryFn: getSingleRecipe,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }

  return (
    <div className="detailsPage">
      <div className="detailsPage__banner">
        <img src={data?.imageUrl} alt="img" />
      </div>
      <Button
        sx={{ margin: ".5rem" }}
        variant="contained"
        color="success"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
      <div className="detailsPage__content">
        <div className="detailsPage__content--header">
          <h2>{data?.className}</h2>
          <p>
            Origin: <span>{data?.recipeOrigin}</span>
          </p>
        </div>
        <p>{data?.description}</p>

        <h2>Ingredients</h2>
        <TableContainer
          sx={{ maxWidth: 650, marginBottom: "1rem" }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Ingredients</TableCell>
                <TableCell>Quality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.ingredients.map((row, i) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2>Instruction</h2>
        <p>{data?.instruction}</p>

        <div className="detailsPage__action">
          <Button
            sx={{ margin: ".5rem" }}
            variant="contained"
            color="error"
            onClick={() => {
              setOpenDeleteDialog(true);
            }}
          >
            Delete
          </Button>
          <Button
            onClick={goToEditPage}
            sx={{ margin: ".5rem" }}
            variant="contained"
            color="success"
          >
            Edit
          </Button>
        </div>
      </div>

      <div>
        <Dialog
          open={openDeleteDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Recipe?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You are about to delete this recipe. Remember that this action is
              irreversible.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No, Cancel</Button>
            <Button onClick={handleDelete} autoFocus>
              Yes, Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default DetailsPage;
