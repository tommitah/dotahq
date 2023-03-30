import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            Hello world! {count}
            <button onClick={() => setCount(count + 1)}>count!</button>
        </div>
    );
}

export default App;
