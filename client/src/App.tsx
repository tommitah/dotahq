import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
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
                </Routes>
            </QueryClientProvider>
        </>
    );
};

export default App;
