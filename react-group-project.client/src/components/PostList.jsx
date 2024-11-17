import React from 'react';
import PostItem from "./PostItem.jsx";
import './styles.css'

class PostList extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      const itemsNumber = 10;
      this.items = Array.from({ length: itemsNumber }, (_, index) => (
        <React.Fragment key={index}>
          <PostItem />
          {index < itemsNumber - 1 && <hr className="separator" />}
        </React.Fragment>
      ));
  
      return <div className="post-list">{this.items}</div>;
    }
  }
  
  
  export default PostList;