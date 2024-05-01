import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const Cmp2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const [boxes, setBoxes] = useState([]);

  const options = [
    { label: "H", value: "H" },
    { label: "T", value: "T" },
  ];

  const handleSubmit = () => {
    if (currentValue === "H") {
      setBoxes([...boxes, "H"]);
    } else if (currentValue === "T") {
      setBoxes([...boxes, "T"]);
    }
    // console.log(boxes);
  };

  const handleReset = () => {
    setCurrentValue("");
    setBoxes([]);
  };

  const print = () => {
    const inputArray = boxes;
    const outputArray = [];

    let currentSubArray = [];
    for (let i = 0; i < inputArray.length; i++) {
      const currentElement = inputArray[i];
      const nextElement = inputArray[i + 1];
      currentSubArray.push(currentElement);

      if (currentElement !== nextElement) {
        outputArray.push(currentSubArray);
        currentSubArray = [];
      }
    }
    return (
      <View style={styles.Container}>
        {outputArray.map((subArray, index) => (
          <View key={index}>{<Text>{`${subArray.join("\n")}`}</Text>}</View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <View>
        <View>
          <DropDownPicker
            items={options}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
          />
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Reset" onPress={handleReset} />
        </View>
      </View>
      {print()}
    </View>
  );
};

export default Cmp2;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
