import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Add your API key here
const API_KEY = 'XwMs1Mk+87v+uwW4qz3Jpg==qP5nBz9GWzSif1F6';
const API_URL = 'https://api.api-ninjas.com/v1/randomword';

const TrackingScreen = () => {
  const location = useLocation(); // Hook to get query parameters
  const [quote, setQuote] = useState('');
  const [speed, setSpeed] = useState(1);

  // Function to get query parameter values
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      speed: params.get('speed') || 1
    };
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setQuote(data.word);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote(); // Fetch the first quote immediately
    const interval = setInterval(fetchQuote, 5000); // Fetch a new quote every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const { speed: initialSpeed } = getQueryParams();
    setSpeed(Number(initialSpeed));
  }, [location.search]); // Update speed when query parameters change

  const handleShare = () => {
    const url = `${window.location.origin}/tracking_screen?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <div className="mb-10">
        <AnalogClock speed={speed} />
      </div>
      <div className="mb-4 w-full max-w-sm">
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleShare}
          className="px-4 py-2 bg-custom-yellow text-white rounded-md"
        >
          Share
        </button>
      </div>
      <div className="mt-4 p-4 bg-white rounded-md shadow-md text-center">
        {quote ? (
          <p>{quote}</p>
        ) : (
          <p>Loading quote...</p>
        )}
      </div>
    </div>
  );
};

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="relative w-48 h-48 border-4 border-gray-300 rounded-full flex items-center justify-center pb-[92px] mt-16 mb-10">
      <div
        className="absolute bg-gray-600 flex origin-bottom"
        style={{
          width: '3px',
          height: '30%',
          transform: `rotate(${hours * -30}deg)`,
        }}
      />
      <div
        className="absolute bg-gray-500 origin-bottom"
        style={{
          width: '2px',
          height: '40%',
          transform: `rotate(${minutes * -6}deg)`,
        }}
      />
      <div
        className="absolute bg-red-500 origin-bottom"
        style={{
          width: '1.5px',
          height: '50%',
          transform: `rotate(${seconds * -6}deg)`,
        }}
      />
    </div>
  );
};

export default TrackingScreen;
