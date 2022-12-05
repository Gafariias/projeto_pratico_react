import LocaleSwitcher from '../../components/LocaleSwitcher';
import TechsContainer from '../../components/techsContainer';
import {
    Container 
} from './styles'

function Home() {
    return(
        <Container>
            <div>
                <h1>ashdasjdfb</h1>
                <TechsContainer/>
            </div>

            <LocaleSwitcher/>
        </Container>
    )
}

export default Home;