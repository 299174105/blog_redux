import React from 'react';
import {connect} from 'react-redux';
import {getPostsAnduser} from '../actions'
import User from './User';

class PostsList extends React.Component{

    componentDidMount() {

        this.props.getPostsAnduser();
    }

    renderList =()=>{

      return this.props.posts.map(post=>{
            return (
                <div className="item" key={post.id}>
                    <i className="user icon"/>
                    <div className="content">
                        <div className="description">
                        <h4 className="header">{post.title}</h4>
                        <p> {post.body}</p>
                        </div>
                        <User userId={post.userId}/>
                    </div>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="ui relaxed list divided">
                {this.renderList()}
            </div>
        );
    }

}

const mapStateToProps = (state)=>{

    return {posts:state.posts};
};

export default connect(mapStateToProps,{getPostsAnduser})(PostsList);