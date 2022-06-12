import React from "react";
import Texto from "./texto";
import {TouchableOpacity, Image, StyleSheet} from "react-native";

export default function Produto({item: {nome, imagem, preco}}) {
    return <TouchableOpacity style={estilos.item} onPress={() => alert(`${nome} está sendo vendido por: ${preco}`)}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    },
    preco: {
      fontSize: 16,
      lineHeight: 26,
      paddingHorizontal: 80
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