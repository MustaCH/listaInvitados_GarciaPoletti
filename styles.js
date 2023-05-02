import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "whitesmoke",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginTop: 50,
    color: "black",
  },

  input: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#52528C",
    marginTop: 5,
    marginBottom: 25,
    height: 50,
  },

  itemListContainer: {
    marginTop: 20,
    width: "90%",
  },

  itemContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    marginTop: 10,
    borderRadius: 8,
  },

  item: {
    color: "white",
    fontSize: 18,
    paddingVertical: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  modalContainer: {
    alignItems: "center",
    paddingVertical: 50,
  },

  modalGuestName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  modalMessegeContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  modalMessege: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginTop: 15,
  },
});
