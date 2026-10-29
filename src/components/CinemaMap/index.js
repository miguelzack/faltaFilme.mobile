import {Linking} from 'react-native';
import MapView, {Marker, UrlTile} from 'react-native-maps';
import {Attribution, MapButton, MapButtonText, Wrapper} from './styles';

export default function CinemaMap({latitude = 0, longitude = 0, title = ''}) {
    const openInOSM = () =>
        Linking.openURL(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`);

    return (
        <Wrapper>
            <MapView
                style={{flex: 1}}
                mapType="none"
                initialRegion={{latitude, longitude, latitudeDelta: 0.01, longitudeDelta: 0.01}}
                rotateEnabled={false}
                pitchEnabled={false}
            >
                <UrlTile urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maximumZ={19} flipY={false}/>
                <Marker coordinate={{latitude, longitude}} title={title}/>
            </MapView>
            <Attribution>© OpenStreetMap contributors</Attribution>
            <MapButton accessibilityRole="button" accessibilityLabel="Abrir no mapa" onPress={openInOSM}>
                <MapButtonText>Abrir no mapa</MapButtonText>
            </MapButton>
        </Wrapper>
    );
}