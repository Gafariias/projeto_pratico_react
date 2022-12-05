import { useState } from 'react';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import TechsContainer from '../../components/techsContainer';
import {
    Container 
} from './styles'

function Home() {

    const [ message, setMessage ] = useState('Olá, meu nome é Gabriel Farias e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:');

    function handleMessage(msg: string) {
        setMessage(msg)
    }

    return(
        <Container>
            <div>
                <h1>{message}</h1>
                <TechsContainer/>
            </div>

            <LocaleSwitcher handleMessage={handleMessage}/>
        </Container>
    )
}

export default Home;