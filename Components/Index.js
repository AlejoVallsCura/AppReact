import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Modal from "./Modal";

export const Index = () => {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    if (textItem.length < 3 )  return alert("La tarea debe ser mas larga...");
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    console.log("ITEM AGREGADO");
  };

  const selectedItem = (id) => {
    console.log(id);
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
    console.log("ITEM ELIMINADO");
  };

  const doneItem = () => {
    console.log("tachar");
    setModalVisible(false);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text> ➞ {item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <Text style={styles.title}> Tareas de hoy! 💪</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Tareas para recordar"
            style={styles.add}
            value={textItem}
            onChangeText={onHandleChange}
          />
          <TouchableOpacity onPress={addItem} style={styles.botAgregar}>
            <Text style={{ color: "white", fontSize: 17 }}> Agregar </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={list}
            style={styles.listaTareas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionDoneItem={doneItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: "#4559",
  },
  container: {
    padding: 30,
  },
  add: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    outlineStyle: "none",
    fontSize: 20,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  listaTareas: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15
  },
  styleItemList: {
    color: "black",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
  },
  botAgregar: {
    backgroundColor: "#A8A89E",
    borderRadius: 30,
    padding: 15,
    border: "1Q solid"
  },
});
