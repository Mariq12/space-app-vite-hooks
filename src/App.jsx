import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Headboard from "./components/headboard/Headboard";
import Sidebar from "./components/sidebar/Sidebar";
import Banner from "./components/banner/Banner";
import banner from "./assets/banner.png";
import Gallery from "./components/gallery/Gallery";
import photos from "./photos.json";
import ModalZoom from "./components/modalZoom/ModalZoom";
import { useState } from "react";
import Footer from "./components/footer/Footer";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  @media (min-width: 360px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [filter, setFilter] = useState('');
  const [photosGallery, setPhotosGallery] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
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
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Headboard 
            setFilter={setFilter}
          />
          <MainContainer>
            <Sidebar />
            <GalleryContent>
              <Banner texto="¡Bienvenidos a la galería más completa de fotos!" backgroundImage={banner} />
              <Gallery 
                selectPhoto={photo => setSelectedPhoto(photo)} 
                photos={photosGallery} 
                toggleFavorite={toggleFavorite}
                filter={filter}
              />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          photo={selectedPhoto} 
          close={() => setSelectedPhoto(null)} 
          toggleFavorite={toggleFavorite} 
        />
      </FondoGradiente>
      <Footer />
    </>
  );
}

export default App;
