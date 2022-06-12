import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Header from './components/header';
import Produto from "./components/produto";
import Texto from "./components/texto";

export default function Market({ header, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Produto}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Header {...header} />
                    <View style={estilos.market}>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }} />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    market: {
        paddingVertical: 10,
        paddingHorizontal: 16
    }
});