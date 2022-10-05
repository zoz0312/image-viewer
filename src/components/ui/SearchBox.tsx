import styled from 'styled-components';
import SearchIcon from 'assets/Icon/searchIcon.svg';
import { ChangeEventHandler, KeyboardEvent, MouseEventHandler } from 'react';

const SearchBoxWrap = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  background-color: #d0d0d0;
  border-radius: 5px;
  border: 1px solid #181824;

  & > input {
    flex-grow: 1;
    box-sizing: border-box;
    width: inherit;
    max-width: inherit;
    height: 100%;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 0;
  }

  & > button {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
  }
`;

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SearchBox({ onChange, onClick }: Props) {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(e as any);
    }
  };
  return (
    <SearchBoxWrap>
      <input type="text" placeholder="검색어를 입력하세요" onChange={onChange} onKeyDown={onKeyPress} />
      <button onClick={onClick}>
        <img src={SearchIcon} />
      </button>
    </SearchBoxWrap>
  );
}
