import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles.js";

export default function App() {
  const [text, setText] = useState("");
  const [guests, setGuest] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const onAddGuest = () => {
    if (text.length > 0) {
      setGuest([
        ...guests,
        {
          id: Math.random().toString(),
          value: text,
        },
      ]);
    }
    setText("");
  };

  const onHandlerGuest = (id) => {
    setModalVisible(true);
    const selectedGuest = guests.find((guest) => guest.id == id);
    setSelectedGuest(selectedGuest);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedGuest(null);
  };

  const onHanlderDeleteGuest = (id) => {
    setGuest(guests.filter((guest) => guest.id !== id));
    setModalVisible(!modalVisible);
  };

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onHandlerGuest(item.id)}
      >
        <Text style={styles.item}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea tu lista de invitados</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del invitado"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button style={styles.button} title="Agregar" onPress={onAddGuest} />

      <View style={styles.itemListContainer}>
        <FlatList
          renderItem={renderItems}
          data={guests}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalGuestName}>{selectedGuest?.value}</Text>
          <View style={styles.modalMessegeContainer}>
            <Text style={styles.modalMessege}>
              Seguro quieres eliminar éste invitado?
            </Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Cancelar"
              color={"darkgray"}
              onPress={() => onHandlerCancelModal()}
            />
            <Button
              title="Eliminar"
              color={"red"}
              onPress={() => onHanlderDeleteGuest(selectedGuest.id)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
