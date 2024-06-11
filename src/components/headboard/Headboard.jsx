import styled from "styled-components";
import TextField from "../textField/TextField";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 30vw;
        max-width: 212px;
        margin-bottom: 20px;
    }
    @media (max-width: 1024px) {
        img {
            margin-left: 1.5rem;
        }
    }
    @media (min-width: 744px) {
        flex-direction: row;
        justify-content: space-between;
        img {
            margin-bottom: 0;
        }
    }
    @media (min-width: 360px) and (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        order: 2;
        img {
            margin-bottom: 1rem;
            margin-right: 1rem;
        }
    }
`;

const Headboard = () => {
    const { setFilter } = useContext(GlobalContext);
    return (
        <StylizedHeader>
            <img src="img/logo.png" alt="Logo de Space App" />
            <TextField setFilter={setFilter} />   
        </StylizedHeader>
    );
}

export default Headboard;
