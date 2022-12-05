import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 10.8rem;
    border: 2px solid var(--glass-bd);
    border-radius: .5rem;
    padding: 1.3rem 5rem;

    //Efeito de vidro
    background: var(--glass);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        margin-right: .5rem;
        
        li {
            margin-bottom: .3rem;
        }
    }
    
    @media only screen and (max-width: 600px) {
        align-items: center;
        height: auto;
        columns: 2;
    }
`;