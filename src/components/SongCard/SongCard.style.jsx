import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50

    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center', 
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    artist: {

    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold'          
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 4,
        borderRadius: 5
    },
    soldout_title: {
        color: 'red'         
    },
    content_container: {
        flexDirection: 'row'
    }

});