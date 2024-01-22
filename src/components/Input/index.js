import React,{useState} from "react";
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const Input=({label, placeolder, isPassword})=>{
   const [isPasswordvisible, setIsPasswordvisible]=useState(false);

   const onEyePress = () => {
    setIsPasswordvisible(!isPasswordvisible);
   };
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                secureTextEntry={isPassword && !isPasswordvisible}
                placeholder={placeolder} 
                style={styles.Input}
                />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                        style={styles.eye}
                        source={
                            isPasswordvisible
                            ? require('../../assets/eye.png')
                            : require('../../assets/eye_closed.png')
                        }
                        />
                    </Pressable>
                    ) : null}
            </View>
        </View>
    );
};
export default Input;