"use client"

import React, { useState } from "react";
import { extractData } from "./actions";

export default function Home() {
  // State to store the extracted data result
  const [result, setResult] = useState<null | object>();
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  // Handler for the extraction button click
  async function handleExtract() {
    setIsLoading(true);
    const txt = await extractData(inputText);
    setResult(txt);
    setIsLoading(false);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen gap-6 bg-gray-900">
      <h1 className="text-6xl mb-5 font-bold text-purple-600 shadow-xl">Product Add Extractor</h1>
      <p className="text-white text-lg mb-5">Describe your product below, specifying the name, price and features.</p>
      <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} className="h-50 w-150 border rounded-2xl border-gray-500 p-4 text-white" placeholder="Write your research here..." />
      <button onClick={() => handleExtract()} disabled={isLoading} className="bg-purple-900 text-white rounded py-2 px-6 cursor-pointer disabled:opacity-50">{isLoading ? 'Analyse...' : 'Extract'}</button>
      {result && <pre className="text-white">{JSON.stringify(result, null, 2)}</pre>}
    </main>
  );
}
