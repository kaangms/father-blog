import React, { Component } from "react";
//import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as blogPostActions from "../../redux/actions/blogPostActions";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

/**
 * @author
 * @class CategoryList
 **/
class CategoryList extends Component {
  state = {};
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getBlogPosts(category.id);
  };


  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Categories</Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
            // className="list-group-item list-group-item-action list-group-item-light"
           
              active={category.id === this.props.currentCategory.id}
              
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.Name}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h5>Seçili Kategori:{this.props.currentCategory.categoryName}</h5> */}
     
      </div>
    );
  }
}

// CategoryList.propTypes = {
// // your expected props
// }

// CategoryList.defaultProps = {
// // your default props
// }

// function mapStateToProps  (state)  {
//  // your redux state
//  return {
//    currentCategory:state.changeCategoryReducer
//  }

// }
const mapStateToProps = (state) => {
  // your redux state
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  // your redux action
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getBlogPosts: bindActionCreators(blogPostActions.getBlogPosts, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
//10.106.190.74
