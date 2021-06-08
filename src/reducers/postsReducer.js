const postsReducer = (posts=[],action)=>{

    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        default:
            return posts;
    }

};

export  default postsReducer;