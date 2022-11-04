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

const createData = (number, ingredient, quantity) => {
  return { number, ingredient, quantity };
};

const rows = [
  createData(1, "Beans", "4 lbs"),
  createData(2, "Rice", "21 lbs"),
  createData(3, "Fufu", "3 lbs"),
];

const DetailsPage = () => {
  return (
    <div className="detailsPage">
      <div className="detailsPage__banner">
        <img
          src="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="img"
        />
      </div>
      <div className="detailsPage__content">
        <div className="detailsPage__content--header">
        <h2>Cassava Grave</h2>
        <p>Origin: <span>AFRICA</span></p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Ingredients</h2>
        <TableContainer sx={{ maxWidth: 650, marginBottom: "1rem" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Ingredients</TableCell>
                <TableCell>Quality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.ingredient}
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam, reprehenderit blanditiis fugit alias obcaecati eaque. Incidunt illo dolores, architecto iure repellendus quis voluptatem cum, nemo rem delectus labore autem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi at iusto. Perferendis, iusto doloremque enim corrupti eligendi ducimus debitis consectetur placeat dolores ipsum fuga veritatis minus rem animi in!
          Harum modi commodi perspiciatis, non maxime maiores molestias ullam tenetur laborum iste eos enim deserunt! Porro, alias distinctio quod, eaque, earum animi perferendis quis cupiditate ad autem quisquam vitae. Aut?
          Reprehenderit est omnis sequi numquam facilis veritatis fugiat nulla blanditiis ratione! Laudantium magnam aspernatur, sunt illum eveniet sit officiis aliquam, iste, perspiciatis odit at officia quis tempora. Cum, sint sit.
          Expedita natus dolor tenetur, ea eligendi saepe praesentium perspiciatis dignissimos doloribus distinctio ullam repellat laudantium recusandae illum. Laudantium, veritatis consequatur harum excepturi eligendi iure! Aspernatur aliquam laudantium harum ipsam natus!
          Voluptatem atque officiis asperiores quidem nulla perferendis eum, aut velit sunt blanditiis unde obcaecati sapiente. Ad minus accusamus, nihil animi excepturi inventore dolores quia facilis aliquid deleniti aut soluta? Tempora?
        </p>

        <div className="detailsPage__action">
          <Button sx={{margin: ".5rem"}} variant="contained" color="error" >
            Delete
          </Button> 
          <Button  sx={{margin: ".5rem"}} variant="contained" color="success" >
            Edit
          </Button> 
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
