import './listingpage.css'
import React from "react";
import Fliter from '../../component/Fliter';

const ListingPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
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
          <h2>Vegetarian Food</h2>
        </div>
      </div>

      <section className="listing-section">
        <aside className="left-side">
          <Fliter />
        </aside>

        <div className="right-side">Right Side</div>
      </section>
    </div>
  );
};

export default ListingPage;
