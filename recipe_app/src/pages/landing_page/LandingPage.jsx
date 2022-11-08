import "./LandingPage.css";
import React from "react";
import Category from "../../component/Category/Category";

const LandingPage = () => {
  return (
    <div>
      <section className="landing_page_section-title">
        <h1>PICK One of the Listed Categories to view recipes</h1>
      </section>
      <section className="landing_page_section-catetory">
        <Category
          imageUrl="https://images.unsplash.com/photo-1510629954389-c1e0da47d414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Vegetarian Food"
          type="VEGETARIAN"
        />

        <Category
          imageUrl="https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5vbiUyMHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Non Vegetarian Food"
          type="NON_VEGETARIAN"
        />
      </section>
    </div>
  );
};

export default LandingPage;
