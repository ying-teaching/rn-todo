import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Mutation } from "@apollo/react-components";

import styles from "./styles";
import { GET_USER, ADD_TODO } from "../constants";

export default () => {
  const [text, setText] = useState("");
  return (
    <Mutation
      mutation={ADD_TODO}
      refetchQueries={[{ query: GET_USER, variables: { userId: "me" } }]}
    >
      {(addTodo) => (
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.textInput}
            placeholder="What needs to be done?"
            onChangeText={(text1) => setText(text1)}
            value={text}
          />
          <Button
            title="Add Todo"
            onPress={() => {
              if (text) {
                addTodo({ variables: { text } });
                setText("");
              }
            }}
          />
        </View>
      )}
    </Mutation>
  );
};
