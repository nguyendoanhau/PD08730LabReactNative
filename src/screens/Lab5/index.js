import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../Auth/Splash/styles"

const Lab5 = () =>{
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground
            source={require('../../assets/image/free-photo-of-du-khach.jpeg')}
            style={styles.image}>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        <Text style={styles.firtLine}>Discover{'/n'}</Text>
                        <Text style={styles.secondLine}>wourd with us</Text>
                        </Text>
                        <Text style={styles.textStyle}>Discoer world with us</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Get Stated</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
 
export default Lab5;