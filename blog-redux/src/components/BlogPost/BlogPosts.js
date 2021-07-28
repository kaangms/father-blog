import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import Posts from "../posts/Posts";

/**
 * @author
 * @class Dashboard
 **/

class BlogPost extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
           
          <Col xs="3">
              <CategoryList></CategoryList>
          </Col>
          <Col xs="9">
              <Posts></Posts>
          </Col>
        </Row>
      </div>
    );
  }
}

BlogPost.propTypes = {};
export default BlogPost;
