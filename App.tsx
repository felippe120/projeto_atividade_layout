import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (

  <View>
    {/* Inicio menu do cabeçalho.  */}
    <View style={estilo.menu}>

      <Text style={estilo.search}>
        Search
        </Text>
      
      <Image source={require("./assets/menu.png")} style={estilo.icone}/>
      {/* Fim do cabeçalho */}

      {/* Imagem de destaque */}
      <Image source={{ uri:"https://thumbs.dreamstime.com/b/teacher-books-helping-student-online-lesson-laptop-screen-tutor-demand-homework-help-english-concept-pinkish-coral-162327294.jpg"}} style={estilo.image}/>
      {/* Fim imagem destaque */}

      {/* Começo da area de usuario */}
      <View style={estilo.fundo}>

        <Image source={require('./assets/user.png')} style={estilo.user}/>

        <View style={estilo.texto}>
            <Text style={estilo.textuser}>
              Paulo anotonio
            </Text>

            <Text style={estilo.textuser2}>
              São Paulo
            </Text>
        </View>

        <View style={estilo.avaliacao}>

          <Image source={{uri:""}} style={estilo.estrela}/>
          <Text style={estilo.valor}>
              $ 230/h
          </Text>

        </View>
      </View>
   

      </View>
  </View>
  );
}



