import { useQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';
import { GET_ITEM_SIZE } from 'constants/common';

function App() {
  const { data } = useQuery(['getImages'], () => {
    return getImages({ query: 'kia', size: GET_ITEM_SIZE, sort: 'accuracy' });
  });

  console.log('data', data?.data);
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{data?.data}</p> */}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
