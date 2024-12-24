'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">測試頁面</h1>
        
        <div className="space-y-4">
          <p className="text-center">
            計數器: <span className="font-bold">{count}</span>
          </p>
          
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            增加
          </button>
          
          <button
            onClick={() => setCount(0)}
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            重置
          </button>

          <Link 
            href="/" 
            className="block w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-center"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
} 