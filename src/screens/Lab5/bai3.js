import { ImageBackground, StatusBar, View } from "react-native"

const Bai3 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

            <ImageBackground
                source={require('../../assets/image/free-photo-of-du-khach.jpeg')}
                style={stylesb3.image}>
            </ImageBackground>
            <View style={stylesb3.contentContainer}>
                <Text style={stylesb3.text}>
                    <Text style={stylesb3.firtLine}>Discover{'/n'}</Text>
                    <Text style={stylesb3.secondLine}>wourd with us</Text>
                </Text>
                <Text style={stylesb3.textStyle}>Discoer world with us</Text>
                <TouchableOpacity style={stylesb3.button}>
                    <Text style={stylesb3.buttonText}>Get Stated</Text>
                </TouchableOpacity>
            </View>
            <View style={stylesb3.footer}>

            </View>


        </View>

    );
};
export default Bai3;