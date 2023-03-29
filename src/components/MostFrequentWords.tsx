import React from 'react';

interface MostFrequentWordsProps {
  wordCount: number;
  topWords: { word: string; count: number }[];
}

function MostFrequentWords({ wordCount, topWords }: MostFrequentWordsProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg py-6">
      <div className="px-4 py-5 sm:px-6">
        <h4 className="text-base font-semibold leading-6 text-gray-900">Most Frequent Words</h4>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Word Count</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{wordCount}</dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Most frequent words</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                {topWords.map((topWordElement, index) => (
                  <li key={index} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="ml-2 w-0 flex-1 truncate">{topWordElement.word}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p className="font-medium text-indigo-600 hover:text-indigo-500">{topWordElement.count}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MostFrequentWords;
