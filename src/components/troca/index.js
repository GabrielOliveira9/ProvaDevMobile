import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Item(props){
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{uri: props.uri}} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.desc}>Nome: {props.nome}</Text>
                <Text style={styles.desc}>Atributos: {props.atributos}</Text>
                <Text style={styles.desc}>Passiva: {props.passiva}</Text>
                <Text style={styles.desc}>Jogo: {props.jogo}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <Button style={styles.botao} title="Equipar" color="#AB00FF"></Button>
            </View>
        </View>
    )
}