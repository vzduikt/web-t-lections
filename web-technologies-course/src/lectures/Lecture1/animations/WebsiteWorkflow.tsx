import React, { useState } from 'react';

interface WebsiteWorkflowProps {
  className?: string;
}

const WebsiteWorkflow: React.FC<WebsiteWorkflowProps> = ({ className = '' }) => {
  const [animationStep, setAnimationStep] = useState(0);
  
  const nextAnimationStep = () => {
    setAnimationStep((prev) => (prev < 4 ? prev + 1 : 0));
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-3xl h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
        {/* Анімація роботи вебсайтів */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Клієнт (браузер) */}
          <div className={`absolute left-16 transition-all duration-1000 ease-in-out ${animationStep >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-32 h-24 bg-blue-200 rounded-lg border-2 border-blue-400 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#1E40AF" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-semibold">Браузер</span>
              </div>
            </div>
          </div>

          {/* Сервер */}
          <div className={`absolute right-16 transition-all duration-1000 ease-in-out ${animationStep >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-32 h-36 bg-green-200 rounded-lg border-2 border-green-400 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="16" height="20" rx="2" stroke="#047857" strokeWidth="2"/>
                  <path d="M8 6H16" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 10H16" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 14H16" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-xs font-semibold">Сервер</span>
              </div>
            </div>
          </div>

          {/* HTTP запит */}
          <div className={`absolute top-16 transform ${animationStep === 1 ? 'translate-x-0 opacity-100' : (animationStep > 1 ? 'translate-x-96 opacity-0' : 'translate-x-0 opacity-0')} transition-all duration-1000 ease-in-out`}>
            <div className="bg-yellow-100 rounded-full px-3 py-1 border border-yellow-300 flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-semibold">HTTP запит</span>
            </div>
          </div>

          {/* Відповідь сервера */}
          <div className={`absolute top-32 transform ${animationStep === 3 ? 'translate-x-0 opacity-100' : (animationStep > 3 ? 'translate-x-96 opacity-0' : 'translate-x-0 opacity-0')} transition-all duration-1000 ease-in-out`}>
            <div className="bg-purple-100 rounded-full px-3 py-1 border border-purple-300 flex items-center">
              <svg className="w-4 h-4 mr-1 transform rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-semibold">HTML, CSS, JS</span>
            </div>
          </div>

          {/* Обробка на сервері */}
          <div className={`absolute right-16 top-12 ${animationStep === 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className="bg-green-300 rounded-full px-2 py-1 text-xs animate-pulse">
              Обробка запиту...
            </div>
          </div>

          {/* Рендеринг у браузері */}
          <div className={`absolute left-16 top-12 ${animationStep === 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className="bg-blue-300 rounded-full px-2 py-1 text-xs animate-pulse">
              Рендеринг...
            </div>
          </div>
        </div>
      </div>
      <button 
        className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={nextAnimationStep}
      >
        Наступний крок анімації
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Як це працює:</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li className={animationStep >= 1 ? "text-black" : "text-gray-400"}>Користувач вводить URL-адресу у браузер</li>
            <li className={animationStep >= 2 ? "text-black" : "text-gray-400"}>Браузер надсилає HTTP-запит до сервера</li>
            <li className={animationStep >= 3 ? "text-black" : "text-gray-400"}>Сервер обробляє запит і формує відповідь</li>
            <li className={animationStep >= 4 ? "text-black" : "text-gray-400"}>Сервер надсилає HTML, CSS та JavaScript файли</li>
            <li className={animationStep >= 5 ? "text-black" : "text-gray-400"}>Браузер рендерить отримані файли у веб-сторінку</li>
          </ol>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Ключові поняття:</h3>
          <p><strong>HTML</strong> - структура сторінки</p>
          <p><strong>CSS</strong> - стилі та оформлення</p>
          <p><strong>JavaScript</strong> - інтерактивність</p>
          <p><strong>HTTP</strong> - протокол передачі даних</p>
          <p><strong>DNS</strong> - система доменних імен (перетворення домену в IP-адресу)</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteWorkflow;