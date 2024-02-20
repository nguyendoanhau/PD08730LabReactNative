import{useState} from 'react';
import { Text, TouchableOpacity, View, TextInput } from "react-native";

import { styles } from "./styles";

const AddUser = () =>{
const [name, setName]=useState('');
const [birthday, setBirthDay] =useState('');

const saveData = async()=>{
    const url='http://10.0.2.2:3000/users';
    let result = await fetch(url, {
        method: 'POST', 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name, birthday}),
    });
    result =await result.json();
    if(result){
        console.warn("Add success");
    }
} 
    return(
    <View style={styles.modelContent}>
        <TextInput 
        style= {styles.input} 
        placeholder="Enter name"
        value={name} 
        onChangeText={text=>setName(text)}
        />
        <TextInput 
        style= {styles.input} 
        placeholder="Enter birthday"
        value={birthday} 
        onChangeText={text=>setBirthDay(text)}
        />
        <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={saveData}>
                <Text style={styles.buttonText}>Save</Text>

            </TouchableOpacity>
        </View>
    </View>
    );
};
export default AddUser;