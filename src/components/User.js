import React from 'react';
import {connect} from "react-redux";

class User extends React.Component {




    render() {



        if(!this.props.user){
            return null;
        }

        return <div className="header">{this.props.user.name}</div>
   }
}

const mapStateToProps =(state,ownProps)=>{
    //console.log(state);
    const user = state.users.find(user=>user.id ===ownProps.userId);
    //console.log(user);
    return {user:user};
};

export default connect(mapStateToProps)(User);