import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';

const queryClient = new QueryClient();

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/matches" element={<Matches />} />
                </Routes>
            </QueryClientProvider>
        </>
    );
};

export default App;
