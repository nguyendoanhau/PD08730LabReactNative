import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkkbox";
import Button from "../../../components/Button";

const SignUp = () => {
    return (
        <View>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeolder="Example Jonh"/>
            <Input label="Email" placeolder="example@gmail.com"/>
            <Input isPassword label="Password" placeolder="************"/>
            <View style={styles.checkRow}>
                <Checkbox checked={checked}onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button}title="Sign Up"></Button>
        </View>
    );
};
export default SignUp;