import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Header = () => {
  return (
      <Container>
          <ul>
                <li>
                    <Link to="/">Pokemons</Link>
                </li>
                <li>
                    <Link to="/my-pokemons">My Pokemons</Link>
                </li>
          </ul>
      </Container>
  );
}
