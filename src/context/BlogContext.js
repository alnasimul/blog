// import React from "react";
import createDataContext from "./createDataContext";

// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch(action.type){

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

const addBlogPost = dispatch => {
  // setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload:{title, content} });
    if(callback){
      callback();
    }
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
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

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]);
