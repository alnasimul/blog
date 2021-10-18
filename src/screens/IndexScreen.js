import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return (
       <View>
           <Text style={styles.text}>Index Screen </Text>
           <Button title='Add Post' onPress={addBlogPost}/>
           <FlatList 
                data={state} 
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item: {title}}) => {
                    return <Text style={styles.blogtext}>{title}</Text>
                }}
           />
       </View>
    );
};
const styles = StyleSheet.create({
    text: {
        borderBottomWidth: 1,
        borderColor: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10
    },
    blogtext: {
        
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10
    }
});
export default IndexScreen;