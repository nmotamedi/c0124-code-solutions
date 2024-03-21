type Props = {
  list: { number: string; name: string }[];
};

export function PokemonList({ list }: Props) {
  const listItems = list.map((pokemon) => {
    return <li key={pokemon.number}>{pokemon.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
