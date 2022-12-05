import styled from "styled-components";

export const Container = styled.div`
    max-width: 49.3rem;
    min-width: 18.5rem;
    height: 100vh;
    
    padding-top: 7rem;
    padding-bottom: 1rem;
    margin: auto;
    display: flex; 

    justify-content: space-between;
    flex-direction: column;
    align-items: center; 

    div {
        width: 100%;
    }

    h1 {
        font-weight: 400;
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`;