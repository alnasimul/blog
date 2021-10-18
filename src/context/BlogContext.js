// import React from "react";
import createDataContext from "./createDataContext";

// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch(action.type){
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;  
  }
};

const addBlogPost = dispatch => {
  // setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
  return () => {
    dispatch({ type: 'add_blogpost' });
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

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost }, []);
