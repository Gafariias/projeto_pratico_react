import {
    Container
} from './styles'

function TechsContainer() {
    const techs = [
        'HTML', 
        'SASS', 
        'JavaScript', 
        'TypeScript', 
        'React', 
        'Styled-Components', 
        'Java', 
        'Spring', 
        'VueJs', 
        'Tailwind', 
        'Bootstrap', 
        'Angular', 
        'Python'
    ];

    return(
        <Container>
            <ul>
                {
                    techs.map((tech, i) => <li key={i}>{tech}</li>)
                }
            </ul>
        </Container>
    )
}

export default TechsContainer;