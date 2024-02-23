import { ScrollView } from "react-native-gesture-handler"
import { Text } from "react-native-reanimated/lib/typescript/Animated"
import { SafeAreaView } from "react-native-safe-area-context"

const Favorites = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Favorites</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default React.memo(Favorites);