import { Button, FlatList, StatusBar } from "react-native-web";
import { FlatList, StyleSheet, Text, View, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

const products = [
    {id: '1', name: 'Prodcut 1', price: 100, image:'https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo'},
    {id: '2', name: 'Prodcut 2', price: 100, image:'https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo'},
    {id: '3', name: 'Prodcut 3', price: 100, image:'https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo'}
]

const HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item)=>item.id}
                renderItem={({ item })=>(
                    <View style={styles.itemContainer}>
                        <Image source={{uri: item.image}} style={styles.image}/>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>$ {item.price}</Text>

                        <Button
                        title="View Details"
                        onPress={()=>navigation.navigate('ProductDetails', {product: item})}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        felx: 1,
        padding: 10,
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#000',
        shadowOffset: {width: 10, height: 2},
        shadowOpacity: 0.2,
    },
    image:{
        width:width*0.05,
        height:width*0.5,
        borderRadius: 50,
        marginBottom:10,
        borderWidth:1,
        borderColor: '#ddd',
        padding:10,
        backgroundColor:"#fff",
        shadowColor:'#000',
        shadowOffset: {width:10,height:2},
        shadowOpacity:0.2,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
        textAlign: "center"
    }
})


export default HomeScreen;