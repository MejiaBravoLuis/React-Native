import { Button, FlatList, StatusBar } from "react-native-web";
import { FlatList, StyleSheet, Text, View, Image, Dimensions} from "react-native";

const ProductDetailsScreen = ({route, navigation}) =>{
    const {product} = route.params
    return(
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
            <Button
            title="View Details"
            onPress={()=>navigation.navigate('Cart', {product})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image:{
        width:width*0.05,
        height:width*0.5,
        //borderRadius: 50,
        marginBottom:10,
        borderWidth:1,
        borderColor: '#ddd',
        padding:10,
        backgroundColor:"#fff",
        shadowColor:'#000',
        shadowOffset: {width:10,height:2},
        shadowOpacity:0.2,
        borderRadius: 20
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
        textAlign: "center"
    },
    name: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        textAlign: "center"
    },
    pprice: {
        fontSize: 20,
        color: "#000",
        marginBottom: 10,
        textAlign: "center"
    }
})

export default ProductDetailsScreen;