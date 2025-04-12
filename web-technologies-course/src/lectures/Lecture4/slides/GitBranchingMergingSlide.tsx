import { useState } from 'react';

const GitBranchingMergingSlide = () => {
  const [activeSection, setActiveSection] = useState('branching');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Гілки та Злиття в Git</h1>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'branching' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('branching')}
        >
          Гілки
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'merging' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('merging')}
        >
          Злиття
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'workflows' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('workflows')}
        >
          Робочі процеси
        </button>
      </div>
      
      {activeSection === 'branching' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Робота з гілками в Git</h2>
            
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200 max-w-2xl w-full">
                <svg viewBox="0 0 800 200" className="w-full">
                  {/* Основна гілка master */}
                  <circle cx="100" cy="100" r="15" fill="#4299e1" />
                  <circle cx="200" cy="100" r="15" fill="#4299e1" />
                  <circle cx="300" cy="100" r="15" fill="#4299e1" />
                  <circle cx="400" cy="100" r="15" fill="#4299e1" />
                  <circle cx="700" cy="100" r="15" fill="#4299e1" />
                  
                  {/* Гілка feature */}
                  <circle cx="400" cy="50" r="15" fill="#f6ad55" />
                  <circle cx="500" cy="50" r="15" fill="#f6ad55" />
                  <circle cx="600" cy="50" r="15" fill="#f6ad55" />
                  
                  {/* Гілка bugfix */}
                  <circle cx="300" cy="150" r="15" fill="#48bb78" />
                  <circle cx="400" cy="150" r="15" fill="#48bb78" />
                  <circle cx="500" cy="150" r="15" fill="#48bb78" />
                  <circle cx="600" cy="150" r="15" fill="#48bb78" />
                  
                  {/* Лінії між комітами */}
                  <line x1="115" y1="100" x2="185" y2="100" stroke="#4299e1" strokeWidth="3" />
                  <line x1="215" y1="100" x2="285" y2="100" stroke="#4299e1" strokeWidth="3" />
                  <line x1="315" y1="100" x2="385" y2="100" stroke="#4299e1" strokeWidth="3" />
                  <line x1="415" y1="100" x2="685" y2="100" stroke="#4299e1" strokeWidth="3" strokeDasharray="5,5" />
                  
                  {/* Лінії для feature гілки */}
                  <line x1="400" y1="100" x2="400" y2="65" stroke="#f6ad55" strokeWidth="3" />
                  <line x1="415" y1="50" x2="485" y2="50" stroke="#f6ad55" strokeWidth="3" />
                  <line x1="515" y1="50" x2="585" y2="50" stroke="#f6ad55" strokeWidth="3" />
                  <line x1="600" y1="50" x2="650" y2="75" stroke="#f6ad55" strokeWidth="3" />
                  <line x1="650" y1="75" x2="685" y2="90" stroke="#f6ad55" strokeWidth="3" />
                  
                  {/* Лінії для bugfix гілки */}
                  <line x1="300" y1="100" x2="300" y2="135" stroke="#48bb78" strokeWidth="3" />
                  <line x1="315" y1="150" x2="385" y2="150" stroke="#48bb78" strokeWidth="3" />
                  <line x1="415" y1="150" x2="485" y2="150" stroke="#48bb78" strokeWidth="3" />
                  <line x1="515" y1="150" x2="585" y2="150" stroke="#48bb78" strokeWidth="3" />
                  <line x1="600" y1="150" x2="650" y2="125" stroke="#48bb78" strokeWidth="3" />
                  <line x1="650" y1="125" x2="685" y2="110" stroke="#48bb78" strokeWidth="3" />
                  
                  {/* Підписи */}
                  <text x="100" y="130" textAnchor="middle" fontSize="14" fontWeight="bold">A</text>
                  <text x="200" y="130" textAnchor="middle" fontSize="14" fontWeight="bold">B</text>
                  <text x="300" y="130" textAnchor="middle" fontSize="14" fontWeight="bold">C</text>
                  <text x="400" y="130" textAnchor="middle" fontSize="14" fontWeight="bold">D</text>
                  <text x="700" y="130" textAnchor="middle" fontSize="14" fontWeight="bold">G</text>
                  
                  <text x="400" y="40" textAnchor="middle" fontSize="14" fontWeight="bold">E1</text>
                  <text x="500" y="40" textAnchor="middle" fontSize="14" fontWeight="bold">E2</text>
                  <text x="600" y="40" textAnchor="middle" fontSize="14" fontWeight="bold">E3</text>
                  
                  <text x="300" y="170" textAnchor="middle" fontSize="14" fontWeight="bold">F1</text>
                  <text x="400" y="170" textAnchor="middle" fontSize="14" fontWeight="bold">F2</text>
                  <text x="500" y="170" textAnchor="middle" fontSize="14" fontWeight="bold">F3</text>
                  <text x="600" y="170" textAnchor="middle" fontSize="14" fontWeight="bold">F4</text>
                  
                  {/* Назви гілок */}
                  <text x="750" y="100" fontSize="14" fontWeight="bold" fill="#4299e1">master</text>
                  <text x="630" y="30" fontSize="14" fontWeight="bold" fill="#f6ad55">feature</text>
                  <text x="630" y="170" fontSize="14" fontWeight="bold" fill="#48bb78">bugfix</text>
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Основні команди роботи з гілками</h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white p-1 rounded mr-2 w-28 text-center">Створення</div>
                    <code>git branch feature</code>
                  </div>
                  <div className="flex items-center p-2 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white p-1 rounded mr-2 w-28 text-center">Переключення</div>
                    <code>git checkout feature</code>
                  </div>
                  <div className="flex items-center p-2 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white p-1 rounded mr-2 w-28 text-center">Створення + перехід</div>
                    <code>git checkout -b bugfix</code>
                  </div>
                  <div className="flex items-center p-2 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white p-1 rounded mr-2 w-28 text-center">Перегляд гілок</div>
                    <code>git branch</code>
                  </div>
                  <div className="flex items-center p-2 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white p-1 rounded mr-2 w-28 text-center">Видалення</div>
                    <code>git branch -d feature</code>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Навіщо потрібні гілки?</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <span className="font-semibold">Командна робота</span>
                    <p className="text-sm mt-1">Розробка різних функцій одночасно</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <polyline points="17 1 21 5 17 9"></polyline>
                        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                        <polyline points="7 23 3 19 7 15"></polyline>
                        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                      </svg>
                    </div>
                    <span className="font-semibold">Ізоляція змін</span>
                    <p className="text-sm mt-1">Розробка без впливу на основний код</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                      </svg>
                    </div>
                    <span className="font-semibold">Експерименти</span>
                    <p className="text-sm mt-1">Тестування нових ідей без ризику</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <span className="font-semibold">Стабільність</span>
                    <p className="text-sm mt-1">Підтримка стабільної основної гілки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'merging' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Злиття гілок</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Процес злиття</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-3">1</div>
                    <div>
                      <p className="font-semibold">Переключіться на цільову гілку</p>
                      <code className="block bg-gray-100 p-1 rounded mt-1 text-sm">git checkout master</code>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-3">2</div>
                    <div>
                      <p className="font-semibold">Злийте зміни з іншої гілки</p>
                      <code className="block bg-gray-100 p-1 rounded mt-1 text-sm">git merge feature</code>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-3">3</div>
                    <div>
                      <p className="font-semibold">Вирішіть конфлікти, якщо є</p>
                      <code className="block bg-gray-100 p-1 rounded mt-1 text-sm">git merge --continue</code>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-3">4</div>
                    <div>
                      <p className="font-semibold">Видаліть вихідну гілку (опційно)</p>
                      <code className="block bg-gray-100 p-1 rounded mt-1 text-sm">git branch -d feature</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Види злиття</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <h4 className="font-semibold">Fast-forward злиття</h4>
                    </div>
                    <div className="flex justify-center my-2">
                      <svg viewBox="0 0 300 80" className="w-full max-w-xs">
                        <circle cx="50" cy="40" r="10" fill="#4299e1" />
                        <circle cx="100" cy="40" r="10" fill="#4299e1" />
                        <circle cx="150" cy="40" r="10" fill="#4299e1" />
                        <circle cx="200" cy="40" r="10" fill="#48bb78" />
                        <circle cx="250" cy="40" r="10" fill="#48bb78" />
                        
                        <line x1="60" y1="40" x2="90" y2="40" stroke="#4299e1" strokeWidth="2" />
                        <line x1="110" y1="40" x2="140" y2="40" stroke="#4299e1" strokeWidth="2" />
                        <line x1="160" y1="40" x2="190" y2="40" stroke="#48bb78" strokeWidth="2" />
                        <line x1="210" y1="40" x2="240" y2="40" stroke="#48bb78" strokeWidth="2" />
                        
                        <text x="50" y="65" textAnchor="middle" fontSize="12">A</text>
                        <text x="100" y="65" textAnchor="middle" fontSize="12">B</text>
                        <text x="150" y="65" textAnchor="middle" fontSize="12">C</text>
                        <text x="200" y="65" textAnchor="middle" fontSize="12">D</text>
                        <text x="250" y="65" textAnchor="middle" fontSize="12">E</text>
                        
                        <text x="50" y="20" textAnchor="middle" fontSize="10" fill="#4299e1">master</text>
                        <text x="250" y="20" textAnchor="middle" fontSize="10" fill="#48bb78">feature</text>
                      </svg>
                    </div>
                    <p className="text-xs">Лінійне переміщення вказівника гілки, коли гілки не розходяться.</p>
                  </div>
                  
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <h4 className="font-semibold">Рекурсивне злиття (з комітом злиття)</h4>
                    </div>
                    <div className="flex justify-center my-2">
                      <svg viewBox="0 0 300 100" className="w-full max-w-xs">
                        <circle cx="50" cy="50" r="10" fill="#4299e1" />
                        <circle cx="100" cy="50" r="10" fill="#4299e1" />
                        <circle cx="150" cy="50" r="10" fill="#4299e1" />
                        <circle cx="250" cy="50" r="10" fill="#4299e1" />
                        
                        <circle cx="200" cy="20" r="10" fill="#48bb78" />
                        <circle cx="250" cy="20" r="10" fill="#48bb78" />
                        
                        <circle cx="200" cy="80" r="10" fill="#f6ad55" />
                        
                        <line x1="60" y1="50" x2="90" y2="50" stroke="#4299e1" strokeWidth="2" />
                        <line x1="110" y1="50" x2="140" y2="50" stroke="#4299e1" strokeWidth="2" />
                        <line x1="160" y1="50" x2="190" y2="35" stroke="#48bb78" strokeWidth="2" />
                        <line x1="160" y1="50" x2="190" y2="65" stroke="#f6ad55" strokeWidth="2" />
                        <line x1="210" y1="20" x2="240" y2="20" stroke="#48bb78" strokeWidth="2" />
                        <line x1="210" y1="80" x2="240" y2="65" stroke="#f6ad55" strokeWidth="2" />
                        <line x1="250" y1="35" x2="250" y2="40" stroke="#4299e1" strokeWidth="2" />
                        
                        <text x="50" y="75" textAnchor="middle" fontSize="12">A</text>
                        <text x="100" y="75" textAnchor="middle" fontSize="12">B</text>
                        <text x="150" y="75" textAnchor="middle" fontSize="12">C</text>
                        <text x="250" y="75" textAnchor="middle" fontSize="12">F</text>
                        <text x="200" y="10" textAnchor="middle" fontSize="12">D1</text>
                        <text x="250" y="10" textAnchor="middle" fontSize="12">D2</text>
                        <text x="200" y="95" textAnchor="middle" fontSize="12">E1</text>
                      </svg>
                    </div>
                    <p className="text-xs">Створює новий коміт злиття, який поєднує зміни обох гілок.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3">Конфлікти злиття</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <h4 className="font-semibold mb-2">Коли виникають конфлікти?</h4>
                  <p className="text-sm">Конфлікти виникають, коли зміни в різних гілках зачіпають одні й ті самі рядки в одних і тих же файлах.</p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <h4 className="font-semibold mb-2">Вигляд конфлікту</h4>
                  <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
{`<<<<<<< HEAD
Рядок в поточній гілці
=======
Рядок в гілці, яку зливаємо
>>>>>>> feature`}
                  </pre>
                </div>
                
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <h4 className="font-semibold mb-2">Вирішення конфліктів</h4>
                  <ol className="text-sm list-decimal pl-4">
                    <li>Відредагуйте файли, щоб видалити маркери та залишити потрібний код</li>
                    <li>Додайте виправлені файли до індексу: <code>git add file.txt</code></li>
                    <li>Завершіть злиття: <code>git merge --continue</code></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'workflows' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Робочі процеси Git</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Git Flow</h3>
                <div className="flex justify-center mb-3">
                  <svg viewBox="0 0 500 200" className="w-full max-w-md">
                    {/* master branch */}
                    <circle cx="50" cy="150" r="8" fill="#4299e1" />
                    <circle cx="150" cy="150" r="8" fill="#4299e1" />
                    <circle cx="250" cy="150" r="8" fill="#4299e1" />
                    <circle cx="350" cy="150" r="8" fill="#4299e1" />
                    <circle cx="450" cy="150" r="8" fill="#4299e1" />
                    
                    {/* develop branch */}
                    <circle cx="50" cy="100" r="8" fill="#48bb78" />
                    <circle cx="100" cy="100" r="8" fill="#48bb78" />
                    <circle cx="150" cy="100" r="8" fill="#48bb78" />
                    <circle cx="200" cy="100" r="8" fill="#48bb78" />
                    <circle cx="250" cy="100" r="8" fill="#48bb78" />
                    <circle cx="300" cy="100" r="8" fill="#48bb78" />
                    <circle cx="350" cy="100" r="8" fill="#48bb78" />
                    <circle cx="400" cy="100" r="8" fill="#48bb78" />
                    <circle cx="450" cy="100" r="8" fill="#48bb78" />
                    
                    {/* feature branch */}
                    <circle cx="150" cy="50" r="8" fill="#f6ad55" />
                    <circle cx="200" cy="50" r="8" fill="#f6ad55" />
                    <circle cx="250" cy="50" r="8" fill="#f6ad55" />
                    
                    {/* release branch */}
                    <circle cx="300" cy="75" r="8" fill="#9f7aea" />
                    <circle cx="350" cy="75" r="8" fill="#9f7aea" />
                    
                    {/* hotfix branch */}
                    <circle cx="350" cy="175" r="8" fill="#f56565" />
                    <circle cx="400" cy="175" r="8" fill="#f56565" />
                    
{/* Lines */}
<line x1="58" y1="150" x2="142" y2="150" stroke="#4299e1" strokeWidth="2" />
<line x1="158" y1="150" x2="242" y2="150" stroke="#4299e1" strokeWidth="2" />
<line x1="258" y1="150" x2="342" y2="150" stroke="#4299e1" strokeWidth="2" />
<line x1="358" y1="150" x2="442" y2="150" stroke="#4299e1" strokeWidth="2" />

<line x1="58" y1="100" x2="92" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="108" y1="100" x2="142" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="158" y1="100" x2="192" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="208" y1="100" x2="242" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="258" y1="100" x2="292" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="308" y1="100" x2="342" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="358" y1="100" x2="392" y2="100" stroke="#48bb78" strokeWidth="2" />
<line x1="408" y1="100" x2="442" y2="100" stroke="#48bb78" strokeWidth="2" />

<line x1="150" y1="100" x2="150" y2="65" stroke="#f6ad55" strokeWidth="2" />
<line x1="158" y1="50" x2="192" y2="50" stroke="#f6ad55" strokeWidth="2" />
<line x1="208" y1="50" x2="242" y2="50" stroke="#f6ad55" strokeWidth="2" />
<line x1="250" y1="50" x2="250" y2="85" stroke="#f6ad55" strokeWidth="2" />

<line x1="300" y1="100" x2="300" y2="83" stroke="#9f7aea" strokeWidth="2" />
<line x1="308" y1="75" x2="342" y2="75" stroke="#9f7aea" strokeWidth="2" />
<line x1="350" y1="75" x2="350" y2="92" stroke="#9f7aea" strokeWidth="2" />
<line x1="350" y1="75" x2="350" y2="135" stroke="#9f7aea" strokeWidth="2" />

<line x1="350" y1="150" x2="350" y2="167" stroke="#f56565" strokeWidth="2" />
<line x1="358" y1="175" x2="392" y2="175" stroke="#f56565" strokeWidth="2" />
<line x1="400" y1="175" x2="400" y2="108" stroke="#f56565" strokeWidth="2" />
<line x1="400" y1="175" x2="430" y2="158" stroke="#f56565" strokeWidth="2" />

{/* Branch labels */}
<text x="460" y="150" fontSize="12" fontWeight="bold" fill="#4299e1">master</text>
<text x="460" y="100" fontSize="12" fontWeight="bold" fill="#48bb78">develop</text>
<text x="250" y="35" fontSize="12" fontWeight="bold" fill="#f6ad55">feature</text>
<text x="325" y="60" fontSize="12" fontWeight="bold" fill="#9f7aea">release</text>
<text x="375" y="190" fontSize="12" fontWeight="bold" fill="#f56565">hotfix</text>
                  </svg>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <div><strong>master</strong>: Стабільний продакшн-код</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <div><strong>develop</strong>: Основна гілка розробки</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <div><strong>feature/*</strong>: Нова функціональність</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                    <div><strong>release/*</strong>: Підготовка релізу</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div><strong>hotfix/*</strong>: Екстрені виправлення</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">GitHub Flow</h3>
                <div className="flex justify-center mb-3">
                  <svg viewBox="0 0 500 150" className="w-full max-w-md">
                    {/* main branch */}
                    <circle cx="50" cy="100" r="8" fill="#4299e1" />
                    <circle cx="100" cy="100" r="8" fill="#4299e1" />
                    <circle cx="200" cy="100" r="8" fill="#4299e1" />
                    <circle cx="300" cy="100" r="8" fill="#4299e1" />
                    <circle cx="400" cy="100" r="8" fill="#4299e1" />
                    <circle cx="450" cy="100" r="8" fill="#4299e1" />
                    
                    {/* feature branches */}
                    <circle cx="100" cy="50" r="8" fill="#f6ad55" />
                    <circle cx="150" cy="50" r="8" fill="#f6ad55" />
                    
                    <circle cx="200" cy="50" r="8" fill="#48bb78" />
                    <circle cx="250" cy="50" r="8" fill="#48bb78" />
                    
                    <circle cx="300" cy="50" r="8" fill="#9f7aea" />
                    <circle cx="350" cy="50" r="8" fill="#9f7aea" />
                    
                    {/* Lines */}
                    <line x1="58" y1="100" x2="92" y2="100" stroke="#4299e1" strokeWidth="2" />
                    <line x1="108" y1="100" x2="192" y2="100" stroke="#4299e1" strokeWidth="2" />
                    <line x1="208" y1="100" x2="292" y2="100" stroke="#4299e1" strokeWidth="2" />
                    <line x1="308" y1="100" x2="392" y2="100" stroke="#4299e1" strokeWidth="2" />
                    <line x1="408" y1="100" x2="442" y2="100" stroke="#4299e1" strokeWidth="2" />
                    
                    <line x1="100" y1="100" x2="100" y2="58" stroke="#f6ad55" strokeWidth="2" />
                    <line x1="108" y1="50" x2="142" y2="50" stroke="#f6ad55" strokeWidth="2" />
                    <line x1="150" y1="50" x2="175" y2="75" stroke="#f6ad55" strokeWidth="2" />
                    <line x1="175" y1="75" x2="192" y2="92" stroke="#f6ad55" strokeWidth="2" />
                    
                    <line x1="200" y1="100" x2="200" y2="58" stroke="#48bb78" strokeWidth="2" />
                    <line x1="208" y1="50" x2="242" y2="50" stroke="#48bb78" strokeWidth="2" />
                    <line x1="250" y1="50" x2="275" y2="75" stroke="#48bb78" strokeWidth="2" />
                    <line x1="275" y1="75" x2="292" y2="92" stroke="#48bb78" strokeWidth="2" />
                    
                    <line x1="300" y1="100" x2="300" y2="58" stroke="#9f7aea" strokeWidth="2" />
                    <line x1="308" y1="50" x2="342" y2="50" stroke="#9f7aea" strokeWidth="2" />
                    <line x1="350" y1="50" x2="375" y2="75" stroke="#9f7aea" strokeWidth="2" />
                    <line x1="375" y1="75" x2="392" y2="92" stroke="#9f7aea" strokeWidth="2" />
                    
                    {/* Branch labels */}
                    <text x="460" y="100" fontSize="12" fontWeight="bold" fill="#4299e1">main</text>
                    <text x="125" y="35" fontSize="12" fontWeight="bold" fill="#f6ad55">feature/A</text>
                    <text x="225" y="35" fontSize="12" fontWeight="bold" fill="#48bb78">feature/B</text>
                    <text x="325" y="35" fontSize="12" fontWeight="bold" fill="#9f7aea">feature/C</text>
                  </svg>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <div><strong>main</strong>: Завжди готовий до розгортання</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <div><strong>feature/*</strong>: Будь-які зміни (функції або виправлення)</div>
                  </div>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>Створіть гілку з main</li>
                    <li>Внесіть зміни та зробіть коміти</li>
                    <li>Відкрийте Pull Request</li>
                    <li>Обговоріть і перегляньте код</li>
                    <li>Розгорніть і протестуйте</li>
                    <li>Об'єднайте та видаліть гілку</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Trunk-Based Development</h3>
                <div className="flex justify-center mb-3">
                  <svg viewBox="0 0 500 130" className="w-full max-w-md">
                    {/* main branch */}
                    <circle cx="50" cy="80" r="8" fill="#4299e1" />
                    <circle cx="100" cy="80" r="8" fill="#4299e1" />
                    <circle cx="150" cy="80" r="8" fill="#4299e1" />
                    <circle cx="200" cy="80" r="8" fill="#4299e1" />
                    <circle cx="250" cy="80" r="8" fill="#4299e1" />
                    <circle cx="300" cy="80" r="8" fill="#4299e1" />
                    <circle cx="350" cy="80" r="8" fill="#4299e1" />
                    <circle cx="400" cy="80" r="8" fill="#4299e1" />
                    <circle cx="450" cy="80" r="8" fill="#4299e1" />
                    
                    {/* short-lived feature branches */}
                    <circle cx="100" cy="40" r="8" fill="#f6ad55" />
                    
                    <circle cx="200" cy="40" r="8" fill="#48bb78" />
                    <circle cx="250" cy="40" r="8" fill="#48bb78" />
                    
                    <circle cx="350" cy="40" r="8" fill="#9f7aea" />
                    
                    {/* release branches */}
                    <circle cx="200" cy="120" r="8" fill="#f56565" />
                    <circle cx="400" cy="120" r="8" fill="#f56565" />
                    
                    {/* Lines */}
                    <line x1="58" y1="80" x2="92" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="108" y1="80" x2="142" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="158" y1="80" x2="192" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="208" y1="80" x2="242" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="258" y1="80" x2="292" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="308" y1="80" x2="342" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="358" y1="80" x2="392" y2="80" stroke="#4299e1" strokeWidth="2" />
                    <line x1="408" y1="80" x2="442" y2="80" stroke="#4299e1" strokeWidth="2" />
                    
                    <line x1="100" y1="80" x2="100" y2="48" stroke="#f6ad55" strokeWidth="2" />
                    <line x1="100" y1="40" x2="130" y2="60" stroke="#f6ad55" strokeWidth="2" />
                    <line x1="130" y1="60" x2="150" y2="72" stroke="#f6ad55" strokeWidth="2" />
                    
                    <line x1="200" y1="80" x2="200" y2="48" stroke="#48bb78" strokeWidth="2" />
                    <line x1="208" y1="40" x2="242" y2="40" stroke="#48bb78" strokeWidth="2" />
                    <line x1="250" y1="40" x2="250" y2="72" stroke="#48bb78" strokeWidth="2" />
                    
                    <line x1="350" y1="80" x2="350" y2="48" stroke="#9f7aea" strokeWidth="2" />
                    <line x1="350" y1="40" x2="370" y2="60" stroke="#9f7aea" strokeWidth="2" />
                    <line x1="370" y1="60" x2="380" y2="72" stroke="#9f7aea" strokeWidth="2" />
                    
                    <line x1="200" y1="80" x2="200" y2="112" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    <line x1="400" y1="80" x2="400" y2="112" stroke="#f56565" strokeWidth="2" strokeDasharray="5,3" />
                    
                    {/* Branch labels */}
                    <text x="460" y="80" fontSize="12" fontWeight="bold" fill="#4299e1">trunk</text>
                    <text x="100" y="25" fontSize="12" fontWeight="bold" fill="#f6ad55">branch A</text>
                    <text x="225" y="25" fontSize="12" fontWeight="bold" fill="#48bb78">branch B</text>
                    <text x="350" y="25" fontSize="12" fontWeight="bold" fill="#9f7aea">branch C</text>
                    <text x="200" y="135" fontSize="12" fontWeight="bold" fill="#f56565">release 1.0</text>
                    <text x="400" y="135" fontSize="12" fontWeight="bold" fill="#f56565">release 2.0</text>
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <div><strong>trunk</strong> (main): Основна гілка розробки</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                      <div><strong>feature</strong>: Короткоживучі гілки (1-2 дні)</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      <div><strong>release</strong>: Тільки для виправлення бугів</div>
                    </div>
                  </div>
                  <p>Основні принципи:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Регулярно комітьте в основну гілку (щонайменше щодня)</li>
                    <li>Використовуйте feature flags для незавершеної функціональності</li>
                    <li>Автоматизоване тестування має критичне значення</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3">Порівняння робочих процесів</h3>
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border border-gray-300"></th>
                      <th className="p-2 border border-gray-300">Git Flow</th>
                      <th className="p-2 border border-gray-300">GitHub Flow</th>
                      <th className="p-2 border border-gray-300">Trunk-Based</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-gray-300 font-semibold">Складність</td>
                      <td className="p-2 border border-gray-300">
                        <div className="flex">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
                        </div>
                      </td>
                      <td className="p-2 border border-gray-300">
                        <div className="flex">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                        </div>
                      </td>
                      <td className="p-2 border border-gray-300">
                        <div className="flex">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300 font-semibold">Розмір команди</td>
                      <td className="p-2 border border-gray-300">Великі</td>
                      <td className="p-2 border border-gray-300">Малі-середні</td>
                      <td className="p-2 border border-gray-300">Всі розміри</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300 font-semibold">Частота випусків</td>
                      <td className="p-2 border border-gray-300">Рідко</td>
                      <td className="p-2 border border-gray-300">Часто</td>
                      <td className="p-2 border border-gray-300">Дуже часто</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300 font-semibold">Структурованість</td>
                      <td className="p-2 border border-gray-300">Висока</td>
                      <td className="p-2 border border-gray-300">Середня</td>
                      <td className="p-2 border border-gray-300">Низька</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300 font-semibold">Підходить для</td>
                      <td className="p-2 border border-gray-300">Підтримка кількох версій</td>
                      <td className="p-2 border border-gray-300">Вебпроекти з CI/CD</td>
                      <td className="p-2 border border-gray-300">DevOps, швидка розробка</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-blue-50 p-3 rounded mt-3 text-sm">
                  <p className="font-semibold">Рекомендація:</p>
                  <p>Виберіть робочий процес на основі розміру команди, типу проекту та частоти випуску. Будьте готові адаптувати процес до потреб вашого проекту.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitBranchingMergingSlide;