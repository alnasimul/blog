import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const {state} = useContext(Context);

    const blogPost = state.find(post => post.id === id);
    const {title, content} = blogPost;
    return (
        <View>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation: { navigate, getParam }}) => {
    return {
        headerRight: () => ( <TouchableOpacity onPress={() => navigate('Edit', {id: getParam('id')})}>
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity> )
    }
}

const styles = StyleSheet.create({

})

export default ShowScreen;