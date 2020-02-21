import React from "react";
import { Text, View } from "react-native";

import Logo from "../../components/Logo";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Logo />
      </View>
    </View>
  );
};

export default Home;
