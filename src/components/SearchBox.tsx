import styled from 'styled-components';
import SearchIcon from 'assets/Icon/searchIcon.svg';
import { ChangeEventHandler, KeyboardEvent, MouseEventHandler, useRef, useState, useEffect, useCallback } from 'react';
import useOutsideClick from 'hooks/useOutSideClick';
import { clearQueryHistory, getQueryHistory } from 'utils/common';
import RoundButton from 'components/ui/RoundButton';
import Spacing from 'components/ui/Spacing';
import { nanoid } from 'nanoid';

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

const FloatDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  background-color: #fefefe;
  border: 1px solid #d0d0d0;
`;

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SearchBox({ onChange, onClick }: Props) {
  const ref = useRef<any>();
  const [queryHistoryData, setQueryHistoryData] = useState([]);
  const [isShowHistory, setIsShowHistory] = useState(false);

  useOutsideClick({
    ref,
    handler: () => {
      setIsShowHistory(false);
    },
  });

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(e as any);
      setIsShowHistory(false);
    }
  };

  useEffect(() => {
    if (isShowHistory) {
      setQueryHistoryData(getQueryHistory());
    }
  }, [isShowHistory]);

  const clearHistory = useCallback(() => {
    clearQueryHistory();
    setQueryHistoryData([]);
  }, [setQueryHistoryData]);

  return (
    <>
      <SearchBoxWrap>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          onKeyDown={onKeyPress}
          onClick={() => setIsShowHistory(true)}
        />
        <button onClick={onClick}>
          <img src={SearchIcon} />
        </button>
      </SearchBoxWrap>

      {isShowHistory && (
        <FloatDiv ref={ref}>
          {queryHistoryData.map(item => (
            <button key={nanoid()} style={{ width: '100%', textAlign: 'left' }}>
              {item}
            </button>
          ))}
          <Spacing size={20} />
          <RoundButton style={{ width: '100%' }} onClick={() => clearHistory()}>
            최근검색어 전체 삭제
          </RoundButton>
        </FloatDiv>
      )}
    </>
  );
}
