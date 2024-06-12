import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


function usePhotoModal() {
  const { state, dispatch } = useContext(GlobalContext);

  const openPhotoModal = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo })
  };

  const closePhotoModal = () => {
    dispatch ({ type: "SET_SELECTED_PHOTO", payload: null})
  };

  const selectedPhoto = state.selectedPhoto;
  const isOpenModal = state.modalOpen;
  return {selectedPhoto, isOpenModal, openPhotoModal, closePhotoModal};
}

export default usePhotoModal;