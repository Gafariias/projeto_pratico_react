import logo from '../../assets/images/logo.svg';
import {
    Container, ImageLogo
} from './styles'

function Header() {
    return(
        <Container>
            <ImageLogo src={logo}/>
        </Container>
    )
}

export default Header;