

import { Picker } from "react-native-dropdown-picker";
import Cmp2 from "./Cmp2"
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Pattern = () => {
  const [inputText, setInputText] = useState("");
  const [randomNum, setRandomNum] = useState([]);
  const [maxNum, setMaxNum] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const noRepeat = (number, array) => {
    return array.every(subArray => !subArray.includes(number));
  };

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handler = () => {
    // console.log("hello");
    const num = parseInt(inputText);
    const array = [];
    for (let i = 0; i < num; i++) {
      let j = [];
      for (let index = 0; index <= i; index++) {
        const randomNumber = generateRandomNum(0,1000)

        if (!j.includes(randomNumber) && noRepeat(randomNum,array)) {
          j.push(randomNumber);
        }
      }
      array.push(j);
    }
    setRandomNum(array);

    let maxiNum = array[0][0];
    for (let i = 0; i < array.length; i++) {
      {
        for (let j = 0; j <= array[i].length; j++) {
          if (array[i][j] > maxiNum) {
            maxiNum = array[i][j];
          }
        }
      }
    }

    setMaxNum(maxiNum);
  };
  return (
    <View>
      <TextInput
        placeholder="Enter number"
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Button title="Submit" onPress={handler} />
      <Text>
        {randomNum.length > 0
          ? randomNum.map((j, index) => <Text key={index}>{`${j} \n`}</Text>)
          : ""}
      </Text>
      <Text>
        max number:
        {maxNum}
      </Text>
    </View>
  );
};

// const Q2 = () => {
//   return(
//     <Cmp2/>
//   )
// };

export default function App() {
  const [cmp1, setCmp1] = useState(false);
  const [cmp2, setCmp2] = useState(false);

  const handler = () => {
    setCmp1(true);
  };
  const handler2 = () => {
    setCmp2(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handler}>
        <Text>h1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handler2} style={{marginTop:"35px"}}>
        <Text>h2</Text>
      </TouchableOpacity>

      {cmp1 && <Pattern />}
      {cmp2 && <Cmp2 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
