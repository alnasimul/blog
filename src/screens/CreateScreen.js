import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation: {navigate}}) => {
    const {addBlogPost} = useContext(Context)

    return <BlogPostForm onSubmit={(title, content) => addBlogPost(title, content, () => navigate('Index'))} titleLabel="Enter Title" contentLabel="Enter Content"/>
};

const styles = StyleSheet.create({
  
})

export default CreateScreen;