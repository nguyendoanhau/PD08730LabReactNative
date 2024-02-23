import { Pressable } from "react-native";
import { Image, View } from "react-native-reanimated/lib/typescript/Animated";

const Header =({ title, onBackPress, onLogout, showLogout, showSearch, key, showBack}) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchClick = () => {
        setShowSearchInput (s => !s)
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {shoeBack ? (
                    <Pressable  hitSlop={20}onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/Back Container.png')}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/search_white.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
                <Text style={styles.title}>{title}</Text>
                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require( '../../assets/logOut.png' )} />
                    </Pressable>
                ) :<View style={styles.space} />}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} valua={keyword} placeholder="Type your keyword..."/>
            ): null}
        </View>
    )
}
export default React.memo(Header);