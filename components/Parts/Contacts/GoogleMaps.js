import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const { NEXT_PUBLIC_GOOGLE_API_KEY } = process.env;

const defaultCenter = { lat: 50.0683755, lng: 18.2755449 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={defaultCenter}
            defaultOptions={defaultOptions}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '580px' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps() {
    return (
        <div className="bg-gray-100 radius-for-skewed">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-wrap justify-center">
                    <div className="mb-16 w-full text-center">
                        <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                        <h2 className=" mb-16 text-4xl lg:text-5xl font-bold font-heading">Finds us on map</h2>
                        <RegularMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${NEXT_PUBLIC_GOOGLE_API_KEY}`}
                            loadingElement={<div style={loadingElementStyle} />}
                            containerElement={<div style={containerElementStyle} />}
                            mapElement={<div style={mapElementStyle} />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}