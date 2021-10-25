// import React from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch(action.type){
    // get 

    case 'get_blogposts':
      return action.payload;

    // edit

    case 'edit_blogpost' :
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });

    // delete

    case 'delete_blogpost':
      return state.filter((post) => post.id !== action.payload);

    // create
    
    case 'add_blogpost':
        return [...state, { id: Math.floor(Math.random() * 99999),title: action.payload.title,
        content: action.payload.content  
       }];
    default:
      return state;  
  }
};

const getBlogPosts = dispatch => {
  return async () => {
   const res = await jsonServer.get('/blogposts');

   dispatch({ type: 'get_blogposts', payload: res.data})
  };
}

const addBlogPost = dispatch => {
  // setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content})
    // dispatch({ type: 'add_blogpost', payload:{title, content} });
    if(callback){
      callback();
    }
  }
}

const deleteBlogPost = dispatch => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content})

    dispatch({ type: 'edit_blogpost', payload: {id, title, content}});
    if(callback){
      callback();
    }
  }
}

// export const BlogProvider = ({ children }) => {
//   // const [blogPosts, setBlogPosts] = useState([]);

//   const [blogPosts, dispatch] = useReducer(blogReducer, []) 

 
    
//   return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//   </BlogContext.Provider>;
// };

// export default BlogContext;

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);
