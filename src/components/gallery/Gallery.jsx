import Title from "../title/Title";
import Tags from "./tags/Tags";
import Popular from "./popular/Popular";
import styled from 'styled-components';
import Image from "./image/Image";
import Loading from "../loading/Loading";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const GalleryContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 688px) {
        display: flex;
        justify-content:flex-start;
        align-items: flex-start;
    }
    @media (min-width: 360px) and (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const FluidSection = styled.section`
    flex-grow: 1;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 688px) {
        display: flex;
        justify-content:flex-start;
        align-items: flex-start;
    }
`
const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 24px;
    }
`

const Gallery = () => {
    //console.log("Photos in Gallery:", photos); // Log para depuración
    //const {filter, photosGallery, toggleFavorite, setSelectedPhoto} = useContext(GlobalContext);
    const {state} = useContext(GlobalContext);

    console.log("Estado global:", state); // Log para depuración

    const filteredPhotos = state.photosGallery.filter(photo => {
        const matchesFilter = state.filter === '' || photo.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.filter.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
        const matchesTag = state.selectedTag === null || state.selectedTag === 4 || photo.tagId === state.selectedTag;
        return matchesFilter && matchesTag;
    });

    console.log("Fotos filtradas:", filteredPhotos); // Log para depuración

    return (
        state.photosGallery.length == 0 ?
            <Loading></Loading> :
            <>
                <Tags />
                <GalleryContainer>
                    <FluidSection>
                        <Title>
                            Navegue por la galería
                        </Title>
                        <ImageContainer>
                            {filteredPhotos.map(photo => (
                                <Image key={photo.id} photo={photo} />
                            ))}
                        </ImageContainer>
                    </FluidSection>
                    <Popular />
                </GalleryContainer>
            </>
    );
};

export default Gallery;