import React, { useState } from 'react';

const GitRemoteCollaborationSlide = () => {
  const [activeSection, setActiveSection] = useState('remote-repos');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Віддалені репозиторії та співпраця в Git</h1>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'remote-repos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('remote-repos')}
        >
          Віддалені репозиторії
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'push-pull' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('push-pull')}
        >
          Push/Pull
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'collaboration' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('collaboration')}
        >
          Моделі співпраці
        </button>
      </div>
      
      {activeSection === 'remote-repos' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Робота з віддаленими репозиторіями</h2>
            
            <div className="bg-white p-5 rounded-lg border border-blue-200 mb-6">
              <h3 className="font-bold text-lg mb-3 text-center">Структура віддалених репозиторіїв</h3>
              <div className="flex justify-center">
                <svg viewBox="0 0 800 320" className="w-full max-w-3xl">
                  {/* Локальний репозиторій */}
                  <rect x="50" y="50" width="280" height="220" rx="10" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                  <text x="190" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Локальний репозиторій</text>
                  
                  {/* Локальна робоча директорія */}
                  <rect x="70" y="70" width="240" height="80" rx="5" fill="#fff" stroke="#4299e1" strokeWidth="1" />
                  <text x="190" y="100" textAnchor="middle" fontSize="14" fontWeight="bold">Робоча директорія</text>
                  <text x="190" y="130" textAnchor="middle" fontSize="12">(Файли проекту)</text>
                  
                  {/* Локальний репо з гілками */}
                  <rect x="70" y="170" width="110" height="80" rx="5" fill="#fff" stroke="#4299e1" strokeWidth="1" />
                  <text x="125" y="200" textAnchor="middle" fontSize="14" fontWeight="bold">Локальні гілки</text>
                  <text x="125" y="225" textAnchor="middle" fontSize="12" fill="#4299e1">main</text>
                  <text x="125" y="245" textAnchor="middle" fontSize="12" fill="#48bb78">feature/login</text>
                  
                  {/* Віддалені гілки */}
                  <rect x="200" y="170" width="110" height="80" rx="5" fill="#fff" stroke="#4299e1" strokeWidth="1" />
                  <text x="255" y="200" textAnchor="middle" fontSize="14" fontWeight="bold">Віддалені гілки</text>
                  <text x="255" y="225" textAnchor="middle" fontSize="12" fill="#4299e1">origin/main</text>
                  <text x="255" y="245" textAnchor="middle" fontSize="12" fill="#48bb78">origin/feature</text>
                  
                  {/* Віддалений репозиторій */}
                  <rect x="470" y="50" width="280" height="220" rx="10" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                  <text x="610" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Віддалений репозиторій</text>
                  
                  <rect x="490" y="70" width="240" height="80" rx="5" fill="#fff" stroke="#48bb78" strokeWidth="1" />
                  <text x="610" y="100" textAnchor="middle" fontSize="14" fontWeight="bold">GitHub / GitLab / Bitbucket</text>
                  <text x="610" y="130" textAnchor="middle" fontSize="12">(Центральний сервер)</text>
                  
                  <rect x="490" y="170" width="240" height="80" rx="5" fill="#fff" stroke="#48bb78" strokeWidth="1" />
                  <text x="610" y="200" textAnchor="middle" fontSize="14" fontWeight="bold">Гілки</text>
                  <text x="610" y="225" textAnchor="middle" fontSize="12" fill="#4299e1">main</text>
                  <text x="610" y="245" textAnchor="middle" fontSize="12" fill="#48bb78">feature/login</text>
                  
                  {/* Стрілки для git push/pull */}
                  <line x1="340" y1="120" x2="460" y2="120" stroke="#4299e1" strokeWidth="2" strokeDasharray="5,3" />
                  <polygon points="460,120 450,115 450,125" fill="#4299e1" />
                  <text x="400" y="110" textAnchor="middle" fontSize="12" fill="#4299e1">git push</text>
                  
                  <line x1="460" y1="150" x2="340" y2="150" stroke="#48bb78" strokeWidth="2" strokeDasharray="5,3" />
                  <polygon points="340,150 350,145 350,155" fill="#48bb78" />
                  <text x="400" y="170" textAnchor="middle" fontSize="12" fill="#48bb78">git pull / fetch</text>
                  
                  {/* Підказки для клонування */}
                  <line x1="525" y1="290" x2="400" y2="290" stroke="#f56565" strokeWidth="2" />
                  <line x1="400" y1="290" x2="400" y2="220" stroke="#f56565" strokeWidth="2" />
                  <line x1="400" y1="220" x2="330" y2="220" stroke="#f56565" strokeWidth="2" />
                  <polygon points="330,220 340,215 340,225" fill="#f56565" />
                  <text x="470" y="310" textAnchor="middle" fontSize="12" fill="#f56565">git clone</text>
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Ключові команди</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Додати віддалений репозиторій</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git remote add origin https://github.com/user/repo.git</code>
                  </div>
                  
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Перегляд віддалених репозиторіїв</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git remote -v</code>
                  </div>
                  
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Перейменування віддаленого репозиторію</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git remote rename origin upstream</code>
                  </div>
                  
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Видалення віддаленого репозиторію</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git remote remove origin</code>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Що таке origin?</h3>
                <div className="flex justify-center mb-3">
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 max-w-md">
                    <div className="text-center mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm">origin</span>
                    </div>
                    <p className="text-center">
                      <span className="font-semibold">origin</span> - це просто умовна назва за замовчуванням,
                      яка вказує на віддалений репозиторій, з якого ви клонували проект. 
                    </p>
                    <div className="flex justify-center mt-3">
                      <svg viewBox="0 0 200 100" className="w-80">
                        <rect x="10" y="30" width="80" height="40" rx="5" fill="#fff" stroke="#4299e1" strokeWidth="1" />
                        <text x="50" y="55" textAnchor="middle" fontSize="14">Локальний</text>
                        
                        <rect x="110" y="30" width="80" height="40" rx="5" fill="#fff" stroke="#48bb78" strokeWidth="1" />
                        <text x="150" y="55" textAnchor="middle" fontSize="14">Віддалений</text>
                        
                        <line x1="90" y1="50" x2="110" y2="50" stroke="#4299e1" strokeWidth="1" strokeDasharray="3,2" />
                        <text x="100" y="40" textAnchor="middle" fontSize="6">origin</text>
                      </svg>
                    </div>
                    <p className="text-center text-sm mt-2">
                      Ви можете мати кілька віддалених репозиторіїв з власними іменами.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Приклад кількох віддалених репозиторіїв</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <code className="bg-white px-2 py-1 rounded">origin</code>
                      <span className="ml-2">Ваш форк проекту</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <code className="bg-white px-2 py-1 rounded">upstream</code>
                      <span className="ml-2">Оригінальний проект</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <code className="bg-white px-2 py-1 rounded">staging</code>
                      <span className="ml-2">Тестовий сервер</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <code className="bg-white px-2 py-1 rounded">production</code>
                      <span className="ml-2">Бойовий сервер</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'push-pull' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Синхронізація з віддаленим репозиторієм</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-center">Push - відправка змін</h3>
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 300 200" className="w-full max-w-md">
                    {/* Локальний репозиторій */}
                    <rect x="20" y="60" width="100" height="80" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="70" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">Локальний</text>
                    
                    {/* Локальні коміти */}
                    <circle cx="40" cy="100" r="10" fill="#4299e1" />
                    <circle cx="70" cy="100" r="10" fill="#4299e1" />
                    <circle cx="100" cy="100" r="10" fill="#4299e1" />
                    
                    <line x1="50" y1="100" x2="60" y2="100" stroke="#4299e1" strokeWidth="2" />
                    <line x1="80" y1="100" x2="90" y2="100" stroke="#4299e1" strokeWidth="2" />
                    
                    {/* Віддалений репозиторій - до */}
                    <rect x="180" y="20" width="100" height="80" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                    <text x="230" y="112" textAnchor="middle" fontSize="14" fontWeight="bold">До push</text>
                    
                    {/* Коміти у віддаленому - до */}
                    <circle cx="210" cy="60" r="10" fill="#48bb78" />
                    <circle cx="240" cy="60" r="10" fill="#48bb78" />
                    <line x1="220" y1="60" x2="230" y2="60" stroke="#48bb78" strokeWidth="2" />
                    
                    {/* Віддалений репозиторій - після */}
                    <rect x="180" y="120" width="100" height="80" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                    <text x="230" y="210" textAnchor="middle" fontSize="14" fontWeight="bold">Після push</text>
                    
                    {/* Коміти у віддаленому - після */}
                    <circle cx="200" cy="160" r="10" fill="#48bb78" />
                    <circle cx="230" cy="160" r="10" fill="#48bb78" />
                    <circle cx="260" cy="160" r="10" fill="#48bb78" />
                    <line x1="210" y1="160" x2="220" y2="160" stroke="#48bb78" strokeWidth="2" />
                    <line x1="240" y1="160" x2="250" y2="160" stroke="#48bb78" strokeWidth="2" />
                    
                    {/* Стрілка push */}
                    <line x1="120" y1="100" x2="180" y2="160" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    <text x="150" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f56565">git push</text>
                  </svg>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Стандартний push</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git push origin main</code>
                  </div>
                  
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Push усіх гілок</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git push --all origin</code>
                  </div>
                  
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-semibold">Встановлення upstream гілки</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git push -u origin feature</code>
                  </div>
                  
                  <div className="bg-red-50 p-2 rounded">
                    <div className="font-semibold">Примусовий push (обережно!)</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git push --force origin main</code>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-center">Pull/Fetch - отримання змін</h3>
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 300 200" className="w-full max-w-md">
                    {/* Віддалений репозиторій */}
                    <rect x="20" y="60" width="100" height="80" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                    <text x="70" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">Віддалений</text>
                    
                    {/* Віддалені коміти */}
                    <circle cx="40" cy="100" r="10" fill="#48bb78" />
                    <circle cx="70" cy="100" r="10" fill="#48bb78" />
                    <circle cx="100" cy="100" r="10" fill="#48bb78" />
                    
                    <line x1="50" y1="100" x2="60" y2="100" stroke="#48bb78" strokeWidth="2" />
                    <line x1="80" y1="100" x2="90" y2="100" stroke="#48bb78" strokeWidth="2" />
                    
                    {/* Локальний репозиторій - до */}
                    <rect x="180" y="20" width="100" height="80" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="230" y="112" textAnchor="middle" fontSize="14" fontWeight="bold">До pull</text>
                    
                    {/* Коміти в локальному - до */}
                    <circle cx="210" cy="60" r="10" fill="#4299e1" />
                    <circle cx="240" cy="60" r="10" fill="#4299e1" />
                    <line x1="220" y1="60" x2="230" y2="60" stroke="#4299e1" strokeWidth="2" />
                    
                    {/* Локальний репозиторій - після */}
                    <rect x="180" y="120" width="100" height="80" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="230" y="210" textAnchor="middle" fontSize="14" fontWeight="bold">Після pull</text>
                    
                    {/* Коміти в локальному - після */}
                    <circle cx="200" cy="160" r="10" fill="#4299e1" />
                    <circle cx="230" cy="160" r="10" fill="#4299e1" />
                    <circle cx="260" cy="160" r="10" fill="#4299e1" />
                    <line x1="210" y1="160" x2="220" y2="160" stroke="#4299e1" strokeWidth="2" />
                    <line x1="240" y1="160" x2="250" y2="160" stroke="#4299e1" strokeWidth="2" />
                    
                    {/* Стрілка pull */}
                    <line x1="120" y1="100" x2="180" y2="160" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                    <text x="150" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9f7aea">git pull</text>
                  </svg>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-purple-50 p-2 rounded">
                    <div className="font-semibold">Pull (fetch + merge)</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git pull origin main</code>
                  </div>
                  
                  <div className="bg-purple-50 p-2 rounded">
                    <div className="font-semibold">Pull з перебазуванням</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git pull --rebase origin main</code>
                  </div>
                  
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-semibold">Fetch (без автоматичного злиття)</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git fetch origin</code>
                  </div>
                  
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-semibold">Fetch з усіх віддалених репозиторіїв</div>
                    <code className="block bg-gray-800 text-white p-2 rounded mt-1 text-sm">git fetch --all</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center">Fetch vs Pull: в чому різниця?</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 600 200" className="w-full max-w-2xl">
                  {/* Заголовки */}
                  <text x="150" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">git fetch</text>
                  <text x="450" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">git pull</text>
                  
                  {/* Fetch діаграма */}
                  <rect x="50" y="50" width="80" height="60" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                  <text x="90" y="85" textAnchor="middle" fontSize="12">Локальний</text>
                  
                  <rect x="170" y="50" width="80" height="60" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                  <text x="210" y="85" textAnchor="middle" fontSize="12">Віддалений</text>
                  
                  <rect x="50" y="130" width="80" height="60" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                  <text x="90" y="165" textAnchor="middle" fontSize="12">Локальний</text>
                  
                  <rect x="170" y="130" width="80" height="60" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="2" />
                  <text x="210" y="165" textAnchor="middle" fontSize="12">origin/main</text>
                  
                  <line x1="170" y1="80" x2="130" y2="140" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                  <text x="150" y="80" textAnchor="middle" fontSize="10" fill="#9f7aea">fetch</text>
                  
                  {/* Pull діаграма */}
                  <rect x="350" y="50" width="80" height="60" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                  <text x="390" y="85" textAnchor="middle" fontSize="12">Локальний</text>
                  
                  <rect x="470" y="50" width="80" height="60" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                  <text x="510" y="85" textAnchor="middle" fontSize="12">Віддалений</text>
                  
                  <rect x="350" y="130" width="80" height="60" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                  <text x="390" y="165" textAnchor="middle" fontSize="12">Локальний</text>
                  
                  <line x1="470" y1="80" x2="430" y2="140" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                  <text x="450" y="80" textAnchor="middle" fontSize="10" fill="#9f7aea">pull</text>
                  
                  {/* Вертикальна розділювальна лінія */}
                  <line x1="300" y1="40" x2="300" y2="190" stroke="#cbd5e0" strokeWidth="1" strokeDasharray="5,3" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold">git fetch:</h4>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Завантажує зміни з віддаленого репозиторію</li>
                    <li>Оновлює віддалені гілки (наприклад, origin/main)</li>
                    <li>Не змінює вашу робочу директорію</li>
                    <li>Не зливає зміни автоматично</li>
                    <li>Безпечна операція, не створює конфліктів</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold">git pull:</h4>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Виконує fetch і одразу merge/rebase</li>
                    <li>Оновлює ваші локальні гілки</li>
                    <li>Змінює вашу робочу директорію</li>
                    <li>Може викликати конфлікти злиття</li>
                    <li>По суті, еквівалент <code>git fetch</code> + <code>git merge</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'collaboration' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Моделі співпраці в Git</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-center">Централізована модель (Shared Repository)</h3>
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 500 280" className="w-full max-w-xl">
                    {/* Центральний репозиторій */}
                    <rect x="200" y="20" width="100" height="60" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                    <text x="250" y="50" textAnchor="middle" fontSize="14" fontWeight="bold">Центральний</text>
                    <text x="250" y="70" textAnchor="middle" fontSize="12">репозиторій</text>
                    
                    {/* Розробники */}
                    <rect x="80" y="140" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="120" y="170" textAnchor="middle" fontSize="12">Розробник 1</text>
                    
                    <rect x="210" y="140" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="250" y="170" textAnchor="middle" fontSize="12">Розробник 2</text>
                    
                    <rect x="340" y="140" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="380" y="170" textAnchor="middle" fontSize="12">Розробник 3</text>
                    
                    {/* Стрілки */}
                    <line x1="120" y1="140" x2="200" y2="80" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    <line x1="250" y1="140" x2="250" y2="80" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    <line x1="380" y1="140" x2="300" y2="80" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    
                    <line x1="200" y1="60" x2="120" y2="140" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                    <line x1="250" y1="80" x2="250" y2="140" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                    <line x1="300" y1="60" x2="380" y2="140" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                    
                    {/* Процес роботи */}
                    <rect x="40" y="220" width="420" height="40" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="1" />
                    <text x="250" y="245" textAnchor="middle" fontSize="12">clone → pull → commit → push → pull request → review → merge</text>
                  </svg>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Особливості:</h4>
                    <ul className="list-disc pl-5">
                      <li>Один спільний репозиторій для всіх розробників</li>
                      <li>Усі мають права на запис у головний репозиторій</li>
                      <li>Простіша модель для невеликих команд</li>
                      <li>Потребує чітких правил використання гілок</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Найкраще підходить для:</h4>
                    <ul className="list-disc pl-5">
                      <li>Малих команд з високою довірою</li>
                      <li>Внутрішніх проектів компанії</li>
                      <li>Команд, що працюють в одному офісі</li>
                      <li>Проектів з чіткими правилами коміту</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-center">Модель форків (Fork & Pull)</h3>
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 500 300" className="w-full max-w-xl">
                    {/* Оригінальний репозиторій */}
                    <rect x="200" y="20" width="100" height="60" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                    <text x="250" y="50" textAnchor="middle" fontSize="14" fontWeight="bold">Оригінальний</text>
                    <text x="250" y="70" textAnchor="middle" fontSize="12">репозиторій</text>
                    
                    {/* Форки */}
                    <rect x="80" y="120" width="80" height="50" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="2" />
                    <text x="120" y="145" textAnchor="middle" fontSize="12" fontWeight="bold">Форк 1</text>
                    <text x="120" y="160" textAnchor="middle" fontSize="10">(віддалений)</text>
                    
                    <rect x="210" y="120" width="80" height="50" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="2" />
                    <text x="250" y="145" textAnchor="middle" fontSize="12" fontWeight="bold">Форк 2</text>
                    <text x="250" y="160" textAnchor="middle" fontSize="10">(віддалений)</text>
                    
                    <rect x="340" y="120" width="80" height="50" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="2" />
                    <text x="380" y="145" textAnchor="middle" fontSize="12" fontWeight="bold">Форк 3</text>
                    <text x="380" y="160" textAnchor="middle" fontSize="10">(віддалений)</text>
                    
                    {/* Локальні репозиторії */}
                    <rect x="80" y="200" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="120" y="225" textAnchor="middle" fontSize="12">Локальний 1</text>
                    
                    <rect x="210" y="200" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="250" y="225" textAnchor="middle" fontSize="12">Локальний 2</text>
                    
                    <rect x="340" y="200" width="80" height="50" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                    <text x="380" y="225" textAnchor="middle" fontSize="12">Локальний 3</text>
                    
                    {/* Стрілки між форками і оригінальним репо */}
                    <line x1="140" y1="120" x2="210" y2="70" stroke="#9f7aea" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="250" y1="120" x2="250" y2="80" stroke="#9f7aea" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="360" y1="120" x2="290" y2="70" stroke="#9f7aea" strokeWidth="1" strokeDasharray="3,2" />
                    
                    {/* Стрілки fork -> original (pull request) */}
                    <line x1="145" y1="125" x2="215" y2="75" stroke="#f56565" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="255" y1="125" x2="255" y2="85" stroke="#f56565" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="365" y1="125" x2="295" y2="75" stroke="#f56565" strokeWidth="1" strokeDasharray="3,2" />
                    
                    {/* Стрілки між локальними і форками */}
                    <line x1="120" y1="200" x2="120" y2="170" stroke="#4299e1" strokeWidth="1" />
                    <line x1="250" y1="200" x2="250" y2="170" stroke="#4299e1" strokeWidth="1" />
                    <line x1="380" y1="200" x2="380" y2="170" stroke="#4299e1" strokeWidth="1" />
                    <text x="105" y="185" textAnchor="middle" fontSize="10">push/pull</text>
                    <text x="235" y="185" textAnchor="middle" fontSize="10">push/pull</text>
                    <text x="365" y="185" textAnchor="middle" fontSize="10">push/pull</text>
                    
                  </svg>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Особливості:</h4>
                    <ul className="list-disc pl-5">
                      <li>Кожен розробник має власну копію репозиторію (форк)</li>
                      <li>Зміни спочатку потрапляють у форк розробника</li>
                      <li>Pull request використовуються для пропозиції змін</li>
                      <li>Контрибутори не мають права запису в основний репозиторій</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Найкраще підходить для:</h4>
                    <ul className="list-disc pl-5">
                      <li>Проектів з відкритим вихідним кодом</li>
                      <li>Великих команд з різними рівнями доступу</li>
                      <li>Публічних проектів з багатьма контрибуторами</li>
                      <li>Проектів, що вимагають перевірки коду</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-3">Процес Pull Request</h3>
                  <div className="flex justify-center mb-3">
                    <svg viewBox="0 0 300 180" className="w-full max-w-xs">
                      {/* Блок-схема Pull Request */}
                      <rect x="20" y="20" width="120" height="40" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                      <text x="80" y="45" textAnchor="middle" fontSize="12">Створення гілки</text>
                      
                      <line x1="80" y1="60" x2="80" y2="80" stroke="#4299e1" strokeWidth="2" />
                      <polygon points="80,80 75,70 85,70" fill="#4299e1" />
                      
                      <rect x="20" y="80" width="120" height="40" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                      <text x="80" y="105" textAnchor="middle" fontSize="12">Внесення змін</text>
                      
                      <line x1="80" y1="120" x2="80" y2="140" stroke="#4299e1" strokeWidth="2" />
                      <polygon points="80,140 75,130 85,130" fill="#4299e1" />
                      
                      <rect x="20" y="140" width="120" height="40" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                      <text x="80" y="165" textAnchor="middle" fontSize="12">Push гілки у форк</text>
                      
                      <line x1="140" y1="160" x2="160" y2="160" stroke="#4299e1" strokeWidth="2" />
                      <polygon points="160,160 150,155 150,165" fill="#4299e1" />
                      
                      <rect x="160" y="140" width="120" height="40" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                      <text x="220" y="165" textAnchor="middle" fontSize="12">Створення PR</text>
                      
                      <line x1="220" y1="140" x2="220" y2="120" stroke="#48bb78" strokeWidth="2" />
                      <polygon points="220,120 215,130 225,130" fill="#48bb78" />
                      
                      <rect x="160" y="80" width="120" height="40" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                      <text x="220" y="105" textAnchor="middle" fontSize="12">Перевірка коду</text>
                      
                      <line x1="220" y1="80" x2="220" y2="60" stroke="#48bb78" strokeWidth="2" />
                      <polygon points="220,60 215,70 225,70" fill="#48bb78" />
                      
                      <rect x="160" y="20" width="120" height="40" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                      <text x="220" y="45" textAnchor="middle" fontSize="12">Злиття у master</text>
                    </svg>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <h4 className="font-semibold">Типовий процес Pull Request:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Створення нової гілки (feature або bugfix)</li>
                      <li>Внесення та коміт змін у гілку</li>
                      <li>Push гілки до вашого форку</li>
                      <li>Створення Pull Request на GitHub/GitLab</li>
                      <li>Код ревю та обговорення</li>
                      <li>Внесення змін за необхідності</li>
                      <li>Затвердження та злиття PR</li>
                    </ol>
                    
                    <div className="bg-yellow-50 p-2 rounded mt-2">
                      <p className="font-semibold">Порада:</p>
                      <p>Використовуйте описові назви гілок і PR, які відображають їх призначення.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-3">Синхронізація форків</h3>
                  <div className="flex justify-center mb-4">
                    <svg viewBox="0 0 300 180" className="w-full max-w-xs">
                      {/* Діаграма синхронізації форку */}
                      <rect x="90" y="20" width="120" height="40" rx="5" fill="#ebfff2" stroke="#48bb78" strokeWidth="2" />
                      <text x="150" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">upstream</text>
                      
                      <rect x="20" y="100" width="120" height="40" rx="5" fill="#fff3da" stroke="#ed8936" strokeWidth="2" />
                      <text x="80" y="125" textAnchor="middle" fontSize="14" fontWeight="bold">origin</text>
                      
                      <rect x="160" y="100" width="120" height="40" rx="5" fill="#EBF5FF" stroke="#4299e1" strokeWidth="2" />
                      <text x="220" y="125" textAnchor="middle" fontSize="14" fontWeight="bold">local</text>
                      
                      <line x1="110" y1="60" x2="80" y2="100" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                      
                      <line x1="140" y1="120" x2="160" y2="120" stroke="#f56565" strokeWidth="2" />
                      <polygon points="160,120 155,115 155,125" fill="#f56565" />
                      
                      <line x1="170" y1="100" x2="130" y2="60" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
                    </svg>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold mb-2">Команди для синхронізації:</h4>
                    <ol className="list-decimal pl-5 text-sm space-y-1">
                      <li>Додати оригінальний репозиторій як upstream:
                        <code className="block bg-gray-800 text-white p-1 rounded mt-1 text-xs">
                          git remote add upstream https://github.com/original/repo.git
                        </code>
                      </li>
                      <li>Отримати зміни з оригінального репозиторію:
                        <code className="block bg-gray-800 text-white p-1 rounded mt-1 text-xs">
                          git fetch upstream
                        </code>
                      </li>
                      <li>Переключитися на локальну main гілку:
                        <code className="block bg-gray-800 text-white p-1 rounded mt-1 text-xs">
                          git checkout main
                        </code>
                      </li>
                      <li>Злити зміни з upstream:
                        <code className="block bg-gray-800 text-white p-1 rounded mt-1 text-xs">
                          git merge upstream/main
                        </code>
                      </li>
                      <li>Відправити оновлення у ваш форк:
                        <code className="block bg-gray-800 text-white p-1 rounded mt-1 text-xs">
                          git push origin main
                        </code>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitRemoteCollaborationSlide;