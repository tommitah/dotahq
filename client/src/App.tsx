import { QueryClient, QueryClientProvider } from 'react-query';
import { PlayerFeed } from './components/PlayerFeed';

const queryClient = new QueryClient();

// NOTE: <Router> here
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <PlayerFeed></PlayerFeed>
            </div>
        </QueryClientProvider>
    );
}

export default App;
