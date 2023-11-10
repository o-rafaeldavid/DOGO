import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicG9nb2RvZ28iLCJhIjoiY2xvZGR3OW83MDdrODJrbzJ1ZmczNDlteiJ9.2O0m3G9QWWF0fR55T3vYEw');

export default function MapaTeste(){
  return (
    <View style={styles.page}>
        {/*
          ===== MAPBOX START=====
        */}
        <View style={styles.container}>
          <MapboxGL.MapView
            style={styles.map}
            styleURL='mapbox://styles/pogodogo/clodh7eoq000l01phfasz7nwg'
            /* zoomEnabled={true} */
            rotateEnabled={true}
          >
            <MapboxGL.Camera
                zoomLevel={18}
                centerCoordinate={[-8.41612, 40.18660]}
                pitch={60}
                animationMode='flyTo'
                animationDuration={6000}
            />
            {/* =============================== */}
            <MapboxGL.PointAnnotation
                id="marker"
                coordinate={[-8.41612, 40.18660]}
            >
              <View/>
            </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
        </View>
        {/*
          ===== MAPBOX END =====
        */}
      </View>
  );
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
    },
    map: {
      flex: 1
    }
  });