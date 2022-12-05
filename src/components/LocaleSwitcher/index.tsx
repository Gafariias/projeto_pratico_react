import { Container } from "./styled";
import { flags } from "../../assets/assets";

function LocaleSwitcher({handleMessage}: any) {

    const locales = {
        pt: 'Olá, meu nome é Gabriel Farias e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:',
        en: 'Hello there, my name is Gabriel Farias and I am a Front-End developer, Technologies I have experience with:',
        es: 'Hola, mi nombre es Gabriel Farias y soy desarrollador Front-End, Tecnologías que tengo experiencia:'
    } 

    return(
        <Container>
            <button onClick={() => handleMessage(locales.pt)}>
                <img src={flags.br} alt="Brazilian flag" />
                <p>Português</p>
            </button>

            <button onClick={() => handleMessage(locales.en)}>
                <img src={flags.us} alt="American flag" />
                <p>English</p>
            </button>

            <button onClick={() => handleMessage(locales.es)}>
                <img src={flags.es} alt="Spanish flag" />
                <p>Spanish</p>
            </button>
        </Container>
    )
}

export default LocaleSwitcher;