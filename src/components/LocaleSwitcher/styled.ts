import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        color: white;
        width: 8.3rem;
        height: 3.1rem;
        border-radius: .5rem;
        cursor: pointer;
        animation: all .1s ease-in-out;
        margin: 0 1rem;
        border: 2px solid var(--dark-300);

        //Efeito de vidro
        background: rgba(24, 65, 140, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            filter: brightness(.8);
        }

        img {
            margin-right: .3rem;
        }

        p {
            font-size: 1rem;
            font-weight: 600;
        }
    }
`;