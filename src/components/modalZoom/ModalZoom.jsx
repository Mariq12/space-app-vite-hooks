import Image from "../gallery/image/Image";
import styled from "styled-components";
import IconButton from "../iconButton/IconButton";
import usePhotoModal from "../../hooks/usePhotoModal";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledDialogue = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
  @media (max-width: 744px) {
    width: 100%;
    margin-left: 1rem;
  }
`;

const ModalZoom = () => {
  const { isOpenModal, selectedPhoto, closePhotoModal } = usePhotoModal();
  //const { state, dispatch } = useContext(GlobalContext);
  
  return (
    <>
      {isOpenModal && <>
          <Overlay />
          <StyledDialogue
            open={!!selectedPhoto}
            onClose={() => closePhotoModal()}>
            <Image
              photo={selectedPhoto}
              expandida={true}
            />
            <form method="dialog">
              <IconButton>
                <img src="/icons/cerrar.png" alt="Icono de cerrar" />
              </IconButton>
            </form>
          </StyledDialogue>
        </>
      }
    </>
  );
};

export default ModalZoom;
