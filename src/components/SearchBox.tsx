import styled from 'styled-components';
import SearchIcon from 'assets/Icon/searchIcon.svg';

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

export function SearchBox() {
  return (
    <SearchBoxWrap>
      <input type="text" placeholder="검색어를 입력하세요" />
      <button>
        <img src={SearchIcon} />
      </button>
    </SearchBoxWrap>
  );
}
