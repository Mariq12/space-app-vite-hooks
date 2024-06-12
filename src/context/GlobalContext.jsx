import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

const initialState = {
    filter: '',
    photosGallery: [],
    selectedPhoto: null,
    modalOpen: false,
    selectedTag: null
}

const reducer = (state, action) => {
    switch(action.type) {
    case 'SET_FILTER':
        return { ...state, filter: action.payload };
    case 'SET_PHOTOS_GALLERY':
        return { ...state, photosGallery: action.payload };
    case 'SET_SELECTED_PHOTO':
        return { 
            ...state, 
            selectedPhoto: action.payload,
            modalOpen: action.payload !== null ? true : false
        };
        case 'TOGGLE_FAVORITE': {
            const photosGallery = state.photosGallery.map(photoGallery => {
                return {
                    ...photoGallery,
                    favorite: photoGallery.id === action.payload.id ? !action.payload.favorite : photoGallery.favorite
                };
            } );
            if (action.payload.id === state.selectedPhoto?.id){
                return {
                    ...state,
                    photosGallery: photosGallery,
                    selectedPhoto: { 
                        ...state.selectedPhoto, favorite: !state.selectedPhoto.favorite
                    }
                } 
            } else {
                return {
                    ...state, photosGallery: photosGallery
                }
            }
        }
        case 'SET_SELECTED_TAG':
            console.log("Tag seleccionado:", action.payload);
            return { ...state, selectedTag: action.payload };
        default:
            return state;
    }
    };

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    //const [filter, setFilter] = useState('');
    //const [photosGallery, setPhotosGallery] = useState([]);
    //const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://api-space-app-vite-hooks.vercel.app/api/fotos")
            const data = await res.json();
            console.log("Datos de la API:", data); // Log para depuración
            dispatch({ type: 'SET_PHOTOS_GALLERY', payload: data });
            //setPhotosGallery([...data]);
            //setLoading(false);
        }

        setTimeout(() => getData(), 5000);
    }, []);

    /*const toggleFavorite = (photo) => {
        if (photo.id === selectedPhoto?.id) {
            setSelectedPhoto({
                ...selectedPhoto,
                favorite: !photo.favorite
            });
        }

        setPhotosGallery(photosGallery.map(photoGallery => {
            return {
                ...photoGallery,
                favorite: photoGallery.id === photo.id ? !photo.favorite : photoGallery.favorite
            };
        }));
    };*/
    
    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
}

GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default GlobalContextProvider;