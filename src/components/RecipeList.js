import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
import { recipe } from "../setup-files-react-recipe-project/tempDetails";

export default class RecipeList extends Component {
  render() {
    console.log(this.props.recipes);
    const {
      recipes,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <div className='container my-5'>
          {/* title */}
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 text-uppercase text-center mb-3'>
              <h1 className='text-slanted'>recipe list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className='row'>
            {recipes.map(item => {
              return (
                <Recipe
                  key={item.recipe_id}
                  recipes={item}
                  handleDetails={() => {
                    handleDetails(0, recipe.recipe_id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
