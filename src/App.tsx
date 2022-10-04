import { useQuery } from '@tanstack/react-query';
import { http } from 'utils/http';

function App() {
  const { data } = useQuery(['getImages'], () => http.get('/v2/search/image'));

  console.log('data', data);
  return (
    <div className="App">
      <header className="App-header">
        <p>is_end</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
