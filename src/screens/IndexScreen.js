import React, { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({ navigation: { navigate, addListener } }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

   const listener =  addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, [])

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item: { title, id } }) => {
          return (
            <TouchableOpacity onPress={() => navigate('Show', { id })}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {title} - {id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation : {navigate}}) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigate('Create') }> 
        <Feather name="plus" size={30}/>
    </TouchableOpacity> 
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
export default IndexScreen;
