import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 4.5rem;
    position: fixed;

    //Efeito de vidro
    background: var(--glass);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid var(--glass-bd);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageLogo = styled.img`
    width: 11.8rem;
    height: 2.5rem;
    padding: .5rem 1.2rem;
    border-radius: .5rem;
    background-color: var(--dark-400);
`;