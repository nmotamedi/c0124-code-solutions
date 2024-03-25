import { useState } from 'react';
import './SearchableList.css';

type SearchableListProps = {
  list: string[];
};

type ListProps = {
  list: string[];
};

type SearchProps = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function SearchableList({ list }: SearchableListProps) {
  const [query, setQuery] = useState('');
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const filteredList = list.filter((item: string) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <SearchBar onSearch={handleSearch} value={query} />
      <List list={filteredList} />
    </>
  );
}

function SearchBar({ onSearch, value }: SearchProps) {
  return (
    <div>
      <img src={'./search-solid.svg'} alt="magnifying glass" />
      <input
        value={value}
        onChange={onSearch}
        type="text"
        placeholder="search"
      />
    </div>
  );
}

function List({ list }: ListProps) {
  const listItems: JSX.Element[] = [];
  for (let i = 0; i < list.length; i++) {
    const lItem = <li key={i}>{list[i]}</li>;
    listItems.push(lItem);
  }
  return (
    <ul>{list.length === 0 ? <p>No Items Found</p> : <>{listItems}</>}</ul>
  );
}
