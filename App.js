import { StatusBar } from "expo-status-bar";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./Components/Task";
import React,{useState} from "react";

export default function App() {
  const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([])
  const handleAddTask=()=>{
    Keyboard.dismiss();
   setTaskItems([...taskItems,task])
   setTask(null);
  }
  const CompleteTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  };

  return (
    <View style={styles.container}>
      {/* Todays  Tasks */}
      <View style={styles.taskWarper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={() => CompleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS==='android'?"padding":"height"}
      style={styles.writeTaskWrapper}
      >

<TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>
<TouchableOpacity onPress={()=>handleAddTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWarper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:10
  },
  input: {
    padding: 15,
    // paddingVertical:15,
    // paddingHorizontal:15,
    width: 250,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize:30,
  },
});
