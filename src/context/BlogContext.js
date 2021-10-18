// import React from "react";
import createDataContext from "./createDataContext";

// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch(action.type){
    case 'delete_blogpost':
      return state.filter((post) => post.id !== action.payload)
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
    callback();
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
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

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]);
