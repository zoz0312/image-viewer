import { SortType } from 'apis/remotes';
import { useCallback, useState } from 'react';
import { SearchBox } from 'components/ui/SearchBox';
import RoundButton from 'components/ui/RoundButton';
import Spacing from 'components/ui/Spacing';
import ImageViewer from 'components/ImageViewer';

function App() {
  const [sort, setSort] = useState<SortType>('accuracy');
  const [isSearched, setIsSearched] = useState(false);
  const [inputQuery, setInputQuery] = useState(''); // input 상태
  const [query, setQuery] = useState('');

  const onFilterClick = (e: any) => {
    setSort(e.target.value as SortType);
  };

  const onQueryChange = useCallback(
    (e: any) => {
      setInputQuery(e.target.value);
    },
    [setInputQuery]
  );

  const onSearchClick = () => {
    setQuery(inputQuery);
    setIsSearched(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <header>
        <SearchBox onChange={onQueryChange} onClick={onSearchClick} />
        <Spacing size={10} />
        <RoundButton className={sort === 'accuracy' ? 'active' : ''} value="accuracy" onClick={onFilterClick}>
          정확도순
        </RoundButton>
        <RoundButton
          className={sort === 'recency' ? 'active' : ''}
          style={{ marginLeft: '2px' }}
          value="recency"
          onClick={onFilterClick}
        >
          최신순
        </RoundButton>
      </header>
      <Spacing size={20} />
      <main>{isSearched && <ImageViewer query={query} sort={sort} />}</main>
    </div>
  );
}

export default App;
