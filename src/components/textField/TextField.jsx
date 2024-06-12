import { useContext, useRef} from "react";
import { styled } from "styled-components"
import search from '../../assets/icons/search.png'
import { GlobalContext } from "../../context/GlobalContext";

const StylizedContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 566px;

    @media (max-width: 1024px) {
        margin-right: 2.2rem;
    }
    @media (max-width: 744px) {
        max-width: 80%; 
        display: flex;
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;

const StyledTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;

    @media (max-width: 744px) {
        font-size: 16px; 
        padding: 10px 14px;
        width: 426px;
    }
    @media (min-width: 360px) and (max-width: 480px) {
        font-size: 18px; 
        width: 450px;
        margin-left: 0;
    }
`;

const IconMagnifier = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;

    @media (max-width: 768px) {
        top: 9px;
        right: 9px;
        width: 100%;
    }
`;

const TextField = () => {
    const filterBox = useRef(null);
    const { dispatch } = useContext(GlobalContext);

    return (
        <StylizedContainer>
            <StyledTextField 
                ref={filterBox}
                type="text" 
                placeholder="¿Qué estás buscando?" 
            />
            <IconMagnifier 
                src={search} 
                alt="ícono de lupa" 
                onClick={() => {
                    dispatch({ type: 'SET_FILTER', payload: filterBox.current.value });
                }}
            />
        </StylizedContainer>
    )
}

export default TextField
