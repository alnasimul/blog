import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues, titleLabel, contentLabel}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>{titleLabel}: </Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>{contentLabel}: </Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button title="Save Blog Post" onPress={ () => {
                onSubmit(title, content)
            }}/>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm;