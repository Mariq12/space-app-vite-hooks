import { useEffect, useState } from 'react';
import { createContext } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('');
    const [photosGallery, setPhotosGallery] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://api-space-app-vite-hooks.vercel.app/api/fotos")
            const data = await res.json();
            setPhotosGallery([...data]);
            //setLoading(false);
        }

        setTimeout(() => getData(), 5000);
    }, [])

    const toggleFavorite = (photo) => {
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
    };

    return (
        <GlobalContext.Provider value={{ filter, 
                                        setFilter, 
                                        photosGallery, 
                                        selectedPhoto,
                                        setSelectedPhoto,
                                        toggleFavorite
                                        }}>
            {children}
        </GlobalContext.Provider>
    );
}

GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default GlobalContextProvider;