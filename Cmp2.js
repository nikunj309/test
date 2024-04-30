import { Button, StyleSheet, Text, View } from "react-native";
import React, {  useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const Cmp2 = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [ans, setAns] = useState([]);

  const items = [
    { label: "H", value: "H" },
    { label: "T", value: "T" },
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  const handleSubmit = () => {
    console.log(selectedValue._index);
    let array = [];
    if (selectedValue._index == 0) {
      array.push(selectedValue.value);
      console.log([...selectedValue.value, selectedValue.value]);
    }
    setAns(array);
  };

  return (
    <View>
      <Text>Select option:</Text> 
      <Dropdown
        data={items}
        labelField="label"
        valueField="value"
        placeholder="Select"
        value={selectedValue}
        onChange={handleValueChange}
        style={[styles.dropdown, selectedValue && styles.dropdownSelected]} // Optional custom styles
      />
      <View style={{ marginTop: "25%" }}>
        <Button title="Submit" onPress={handleSubmit} />
        <Button
          title="Reset"
          onPress={() => {
            setSelectedValue([]);
            setAns([]);
          }}
        />
      </View>
      <View>
        <Text>{ans}</Text>
      </View>
    </View>
  );
};

export default Cmp2;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 1,
    borderRadius: 5,
  },
  dropdownSelected: {
    backgroundColor: "#eee",
  },
});
