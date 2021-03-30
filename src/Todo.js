import React from "react";
import { Text, View, Switch } from "react-native";
import { Mutation } from "@apollo/react-components";

import styles from "./styles";
import { CHANGE_TODO_STATUS, GET_USER } from "../constants";

const completeStyleMap = new Map([
  [true, { textDecorationLine: "line-through" }],
  [false, {}],
]);

export default ({ todo }) => {
  const { id, text, complete } = todo;
  return (
    <Mutation
      mutation={CHANGE_TODO_STATUS}
      refetchQueries={[{ query: GET_USER, variables: { userId: "me" } }]}
    >
      {(changeTodoStatus) => (
        <View style={styles.todoItem}>
          <Switch
            value={complete}
            onValueChange={(value) =>
              changeTodoStatus({ variables: { id, complete: value } })
            }
          />
          <Text style={completeStyleMap.get(complete)}>{text}</Text>
        </View>
      )}
    </Mutation>
  );
};
