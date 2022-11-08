import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal as NewModal,
} from "react-native";
import React from "react";

const Modal = (props) => {
  const { isVisible, actionDeleteItem, actionDoneItem } = props;

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modal} >
          <Text style={styles.title}>
            Desea eliminar o marcar como 
            </Text>
            <Text style={styles.title}>
            hecha la tarea?
          </Text>

          <View>
          <Pressable
              onPress={() => actionDoneItem()}
              style={styles.pressable2}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                Tarea realizada
              </Text>
            </Pressable>

            <Pressable
              onPress={() => actionDeleteItem()}
              style={styles.pressable}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                Eliminar tarea
              </Text>
            </Pressable>
          
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    textAlign: "center",
    backgroundColor: "#6f0000",
    padding: 20,
    borderRadius: 15,
    
  },
  pressable2: {
    textAlign: "center",
    backgroundColor: "#2f6f00",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: "white"
  },
  modal: {
    textAlign: "center",
    backgroundColor: "#424242",
    padding: 20,
    borderRadius: 5,
  }
});
