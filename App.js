import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps/lib/MapView';
//import MapboxGL from "@rnmapbox/maps";

//MapboxGL.setAccessToken("pk.eyJ1Ijoiby1yYWZhZWxkYXZpZCIsImEiOiJjbG80M3h5bTYyZjUwMmttY25wN3E0ajB0In0.kCSu_q-sfxc7UIU_v22wrw");


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MapboxGL.MapView style={styles.mapa} /> */}
      <MapView style={styles.mapa}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
