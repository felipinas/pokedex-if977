import { NavLink } from "react-router-dom";
import { Container } from './styles';

export const Header = () => {
  return (
      <Container>
          <nav>
            <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? { color: 'black' } : undefined
                            }
                        >
                            Pokemons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-pokemons"
                            style={({ isActive }) =>
                                isActive ? { color: 'black' } : undefined
                            }
                        >
                            My Pokemons
                        </NavLink>
                    </li>
            </ul>
          </nav>
      </Container>
  );
}
