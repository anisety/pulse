import React, { useState } from 'react';

const Dashboard = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleExtract = async () => {
        try {
            const response = await fetch('http://localhost:8000/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setResults(data);
            setError(null);
        } catch (e) {
            setError(e.message);
            setResults(null);
        }
    };

    return (
        <div>
            <h2>Keyword Extraction</h2>
            <textarea 
                rows="10" 
                cols="50" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to analyze..."
            ></textarea>
            <br />
            <button onClick={handleExtract}>Extract Keywords</button>

            {error && <div style={{color: 'red'}}>Error: {error}</div>}

            {results && (
                <div>
                    <h3>Results</h3>
                    <h4>Keywords</h4>
                    <ul>
                        {results.keywords.map((kw, index) => <li key={index}>{kw}</li>)}
                    </ul>
                    <h4>Entities</h4>
                    <ul>
                        {results.entities.map((ent, index) => <li key={index}>{ent[0]} ({ent[1]})</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
