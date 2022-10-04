import { useQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';

function App() {
  const { data } = useQuery(['getImages'], getImages);

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
