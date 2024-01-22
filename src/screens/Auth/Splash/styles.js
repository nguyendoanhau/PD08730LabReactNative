import  {StyleSheet} from 'react-native';
export const styles=StyleSheet.create({
    container:{
        padding:24,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        height: '100%',
        borderWidth: 1,
    },
    img: {
        with: '100%',
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
    },
    innerTitle: {
        collor: '#FCA34D',
        textDecorationLine: 'underline',
    },
    titleContainer: {
        marginVertical: 54,
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    },
});