import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Texto from "./texto";
import logo from '../../../assets/logo.jpg';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 300;
const valor = altura / largura * width;

export default function Header({ titulo }) {
    return <>
        <Image source={logo} style={estilos.header} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const estilos = StyleSheet.create({
    header: {
        width: '100%',
        height: valor,
    },
    titulo: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: 'gray',
        fontWeight: 'bold',
        padding: 6
    }
})