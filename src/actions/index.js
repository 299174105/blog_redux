import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const getPosts =()=>async dispatch=>{

    const response = await jsonPlaceHolder.get('/posts');

    dispatch({type:'GET_POSTS',payload:response.data});
};

export const getUser =id => async dispatch=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({type:'GET_USER',payload: response.data})
};

export const getPostsAnduser = ()=> async (dispatch,getState)=>{

    await dispatch(getPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=>dispatch(getUser(id)))
        .value();
};