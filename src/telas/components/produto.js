import React from "react";
import Texto from "./texto";
import {TouchableOpacity, Image, StyleSheet} from "react-native";

export default function Produto({item: {nome, imagem}}) {
    return <TouchableOpacity style={estilos.item} onPress={() => { }}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    },
    imagem: {
        width: 46,
        height: 46
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    }
})