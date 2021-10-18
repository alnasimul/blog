import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find(post => post.id === id)

    return <BlogPostForm initialValues={{ title: blogPost.title, content: blogPost.content}} onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())} titleLabel="Edit Title" contentLabel="Edit Content"/>
};

const styles = StyleSheet.create({
  
})

export default EditScreen;