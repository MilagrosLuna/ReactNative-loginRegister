import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {Firebase_AUTH} from '../../FirebaseConfig';
import {Button} from 'react-native';
interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
const List = ({navigation}: RouterProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Abrir Detalles"
        onPress={() => navigation.navigate('Details')}></Button>
      <Button
        title="Cerrar Sesión"
        onPress={() => Firebase_AUTH.signOut()} color='red'></Button>
    </View>
  );
};
export default List;
