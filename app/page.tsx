"use client";

import { useEffect, useState } from "react";

type Quote = {
  id: number;
  quote: string;
  author: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <main className="quote-page">
      <div className="background"></div>
      <div className="overlay"></div>

      <div className="content">
        <h1>Random Quote</h1>

        {quote && (
          <div className="quote-box">
            <p className="quote">
              "{quote.quote}"
            </p>

            <p className="author">
              — {quote.author}
            </p>

            <button onClick={getQuote}>
              Random Quote
            </button>
          </div>
        )}
      </div>
    </main>
  );
}