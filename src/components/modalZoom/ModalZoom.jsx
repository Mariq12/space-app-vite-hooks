import Image from "../gallery/image/Image";
import styled from "styled-components";
import IconButton from "../iconButton/IconButton";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

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
    const { state, dispatch } = useContext(GlobalContext);
    return (
        <>
            {state.selectedPhoto && 
                <>
                    <Overlay />
                    <StyledDialogue
                        open={!!state.selectedPhoto}
                        onClose={() => dispatch ({ type: "SET_SELECTED_PHOTO", payload: null})}
                    >
                        <Image
                            photo={state.selectedPhoto}
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
