import { Container } from "./styled";
import { flags } from "../../assets/assets";

function LocaleSwitcher() {
    return(
        <Container>
            <button onClick={() => console.log('PT')}>
                <img src={flags.br} alt="Brazilian flag" />
                <p>Português</p>
            </button>

            <button onClick={() => console.log('EN')}>
                <img src={flags.us} alt="American flag" />
                <p>English</p>
            </button>

            <button onClick={() => console.log('ES')}>
                <img src={flags.es} alt="Spanish flag" />
                <p>Spanish</p>
            </button>
        </Container>
    )
}

export default LocaleSwitcher;