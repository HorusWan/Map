import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '../../styles/Home.module.css'


import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map(){

    const position = [49.2120, -122.9592];
    const polyline = [
        [49.28594, -123.11129], 
        [49.2856, -123.1202],
        [49.2833, -123.1218],
        [49.2788, -123.1085],
        [49.2731, -123.1003],
        [49.2626, -123.0692],
        [49.2483, -123.0559],
        [49.2440, -123.0459],
        [49.2383, -123.0317],
        [49.2298, -123.0127],
        [49.2258, -123.0039],
        [49.2198, -122.9877],
        [49.2120, -122.9592],
        [49.2000, -122.9490],
        [49.2015, -122.9126],
        [49.20476, -122.9061],
        [49.2244, -122.8896],
        [49.2333, -122.8829],
        [49.2484, -122.8970],
        [49.2533, -122.9181],
    ]

    const polyline_Second = [
        [49.20476, -122.9061],
        [49.2044, -122.8743],
        [49.1990, -122.8507],
        [49.1896, -122.8480],
        [49.1827, -122.8446],
      ]

    const expoIcon = new L.icon({
        iconUrl: "trainlogo.png",
        iconSize: [35,35],
    });

    const blueOption = { color: '#092f87' };


    return(
        <MapContainer className={styles.map} center={position} zoom={12} schrollWheelZoom={true}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[49.28594, -123.11129]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Waterfront Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2856, -123.1202]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Burrard Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2833, -123.1218]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Granville Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2788, -123.1085]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Stadium–Chinatown Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2731, -123.1003]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Main Street Science World Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2626, -123.0692]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Commercial–Broadway Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2483, -123.0559]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Nanaimo Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2440, -123.0459]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        29th Ave Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2383, -123.0317]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Joyce–Collingwood Station
                    </b>
                </Popup>
            </Marker>


            <Marker position={[49.2298, -123.0127]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Patterson Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2258, -123.0039]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Metrotown Station
                    </b>
                </Popup>
            </Marker>

            <Marker position={[49.2198, -122.9877]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Royal Oak Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2120, -122.9592]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Edmonds Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2000, -122.9490]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        22nd Street Station
                    </b>    
                </Popup>
            </Marker>
            
            <Marker position={[49.2015, -122.9126]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        New Westminster Station
                    </b>    
                </Popup>
            </Marker>
            
            <Marker position={[49.20476, -122.9061]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Columbia Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2244, -122.8896]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Sapperton Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2333, -122.8829]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Braid Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2484, -122.8970]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Lougheed Town Centre Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.2533, -122.9181]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Production Way–University Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.20476, -122.9061]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Columbia Station
                    </b>    
                </Popup>
            </Marker>
            
            <Marker position={[49.2044, -122.8743]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Scott Road Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.1990, -122.8507]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Gateway Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.1896, -122.8480]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        Surrey Central Station
                    </b>    
                </Popup>
            </Marker>

            <Marker position={[49.1827, -122.8446]} icon={expoIcon}>
                <Popup>
                    ExpoLine <br/> 
                    <b>
                        King George Station
                    </b>    
                </Popup>
            </Marker>




            <Polyline pathOptions={blueOption} positions={polyline}/>
            <Polyline pathOptions={blueOption} positions={polyline_Second}/>
        </MapContainer>
    )
}