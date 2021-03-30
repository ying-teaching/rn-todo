import React from "react";
import { View } from "react-native";

import Todo from "./Todo";

export default ({ user }) => {
  return (
    <View>
      {user.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </View>
  );
};
