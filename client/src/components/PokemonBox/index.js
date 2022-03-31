import { Container, TypeBox } from './styles';

function PokemonBox({name, order, image, types}) {
  return (
      <Container>
        <img src={image} alt={name} />
        <span>Nº{order}</span>
        <h1>{name}</h1>

        <div>
          {
            types.map(({type}) => (
              <TypeBox
                key={type.name}
                type={type.name}
              >
                {type.name}
              </TypeBox>
            ))
          }
        </div>
      </Container>
  );
}

export default PokemonBox;