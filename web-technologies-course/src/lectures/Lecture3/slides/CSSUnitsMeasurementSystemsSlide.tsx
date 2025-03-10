import React, { useState } from 'react';

const CSSUnitsSlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'absolute' | 'relative' | 'viewport' | 'bestPractices'>('absolute');
  const [showExample, setShowExample] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Системи вимірювання в CSS</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Вибір правильної одиниці вимірювання в CSS має критичне значення для створення адаптивних, доступних і масштабованих дизайнів. Різні одиниці мають свої переваги та недоліки залежно від контексту.</p>
      </div>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'absolute' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('absolute')}
        >
          Абсолютні одиниці
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'relative' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('relative')}
        >
          Відносні одиниці
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'viewport' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('viewport')}
        >
          Viewport одиниці
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'bestPractices' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('bestPractices')}
        >
          Найкращі практики
        </button>
      </div>
      
      {activeSection === 'absolute' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Абсолютні одиниці вимірювання</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке абсолютні одиниці?</h4>
                <p>Абсолютні одиниці мають фіксований розмір і не змінюються залежно від контексту або пристрою. Вони визначають точні фізичні розміри.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Точні та передбачувані</li>
                  <li>Не адаптуються до різних умов відображення</li>
                  <li>Корисні, коли фізичний розмір важливий</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Основні абсолютні одиниці</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-yellow-200">
                        <th className="border border-yellow-300 p-2 text-left">Одиниця</th>
                        <th className="border border-yellow-300 p-2 text-left">Опис</th>
                        <th className="border border-yellow-300 p-2 text-left">Використання</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>px</code></td>
                        <td className="border border-yellow-300 p-2">Піксель</td>
                        <td className="border border-yellow-300 p-2">Найпоширеніша абсолютна одиниця для веб</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>pt</code></td>
                        <td className="border border-yellow-300 p-2">Пункт (1/72 дюйма)</td>
                        <td className="border border-yellow-300 p-2">Традиційно для друку; рідко використовується у веб</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>pc</code></td>
                        <td className="border border-yellow-300 p-2">Піка (12 пунктів)</td>
                        <td className="border border-yellow-300 p-2">Друк; дуже рідко використовується</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>mm</code></td>
                        <td className="border border-yellow-300 p-2">Міліметр</td>
                        <td className="border border-yellow-300 p-2">Друк; рідко для веб</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>cm</code></td>
                        <td className="border border-yellow-300 p-2">Сантиметр</td>
                        <td className="border border-yellow-300 p-2">Друк; рідко для веб</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>in</code></td>
                        <td className="border border-yellow-300 p-2">Дюйм</td>
                        <td className="border border-yellow-300 p-2">Друк; рідко для веб</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Приклади використання</h4>
                </div>
                <div className="p-4">
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-3">
{`/* Розміри з використанням px */
.element {
  width: 300px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
}

/* Друкарські стилі з різними одиницями */
@media print {
  .document {
    margin: 2cm;
    font-size: 12pt;
    line-height: 1pc;
  }
  
  .page-break {
    height: 1mm;
  }
}
`}
                  </pre>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">Відображення елементів з абсолютними розмірами:</h5>
                    <div className="flex flex-wrap gap-2">
                      <div className="w-[50px] h-[50px] bg-blue-500 flex items-center justify-center text-white text-xs">
                        50px
                      </div>
                      <div className="w-[100px] h-[50px] bg-green-500 flex items-center justify-center text-white text-xs">
                        100px × 50px
                      </div>
                      <div className="w-[150px] h-[50px] bg-red-500 flex items-center justify-center text-white text-xs">
                        150px × 50px
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Важливо про піксель (px):</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>CSS піксель не завжди дорівнює фізичному пікселю пристрою</li>
                      <li>На дисплеях з високою щільністю 1 CSS px може складатися з кількох фізичних пікселів</li>
                      <li>Піксель є відносним до кута огляду, а не абсолютною одиницею в фізичному світі</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Обмеження абсолютних одиниць</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Не адаптуються</strong> до різних розмірів екрану</li>
                  <li><strong>Проблеми доступності</strong> - не масштабуються, коли користувач змінює базовий розмір шрифту</li>
                  <li><strong>Незручні для мобільних пристроїв</strong> - фіксовані розміри можуть спричинити горизонтальну прокрутку</li>
                  <li><strong>Неточні для друку</strong> - px не відповідає реальним фізичним одиницям</li>
                  <li><strong>Складнощі з підтримкою</strong> - вимагають більше правок при зміні дизайну</li>
                </ul>
                <p className="mt-2 text-red-700 font-semibold">⚠️ Уникайте px для шрифтів та загальних розмірів контейнерів у адаптивному дизайні!</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'relative' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Відносні одиниці вимірювання</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке відносні одиниці?</h4>
                <p>Відносні одиниці визначають розмір відносно іншого значення, наприклад, розміру шрифту батьківського елемента, розміру шрифту кореневого елемента або розміру символу.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Масштабуються відповідно до контексту</li>
                  <li>Забезпечують кращу доступність і адаптивність</li>
                  <li>Полегшують підтримку та оновлення стилів</li>
                </ul>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Основні відносні одиниці</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-200">
                        <th className="border border-green-300 p-2 text-left">Одиниця</th>
                        <th className="border border-green-300 p-2 text-left">Опис</th>
                        <th className="border border-green-300 p-2 text-left">Відносно до</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-green-300 p-2"><code>em</code></td>
                        <td className="border border-green-300 p-2">Ем</td>
                        <td className="border border-green-300 p-2">Розмір шрифту поточного елемента</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>rem</code></td>
                        <td className="border border-green-300 p-2">Root em</td>
                        <td className="border border-green-300 p-2">Розмір шрифту кореневого елемента (html)</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>%</code></td>
                        <td className="border border-green-300 p-2">Відсоток</td>
                        <td className="border border-green-300 p-2">Значення батьківського елемента</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>ex</code></td>
                        <td className="border border-green-300 p-2">Висота x</td>
                        <td className="border border-green-300 p-2">Висота малої літери "x" поточного шрифту</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>ch</code></td>
                        <td className="border border-green-300 p-2">Ширина "0"</td>
                        <td className="border border-green-300 p-2">Ширина символу "0" поточного шрифту</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>lh</code></td>
                        <td className="border border-green-300 p-2">Line height</td>
                        <td className="border border-green-300 p-2">Висота рядка поточного елемента</td>
                      </tr>
                      <tr>
                        <td className="border border-green-300 p-2"><code>rlh</code></td>
                        <td className="border border-green-300 p-2">Root line height</td>
                        <td className="border border-green-300 p-2">Висота рядка кореневого елемента</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">em vs rem vs %</h4>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">em - відносно до батьківського елемента:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`.parent {
  font-size: 16px;
}

.child {
  /* 1.5 * 16px = 24px */
  font-size: 1.5em;
}

.grandchild {
  /* 1.5 * 24px = 36px - розміри множаться! */
  font-size: 1.5em;
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">rem - завжди відносно до кореневого елемента:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`:root {
  font-size: 16px;
}

.parent {
  font-size: 1.5rem;   /* 1.5 * 16px = 24px */
}

.child {
  font-size: 1.5rem;   /* 1.5 * 16px = 24px - не множиться */
}

.grandchild {
  font-size: 1.5rem;   /* 1.5 * 16px = 24px - не множиться */
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">% - залежить від контексту:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`/* Для ширини і висоти: відносно батьківського розміру */
.parent {
  width: 500px;
}

.child {
  width: 50%;  /* 500px * 50% = 250px */
}

/* Для шрифтів: подібно до em */
.parent {
  font-size: 16px;
}

.child {
  font-size: 150%;  /* 16px * 150% = 24px */
}

/* Для відступів (padding/margin): 
   % залежить від ширини батька! */
.box {
  width: 300px;
  padding: 10%; /* 300px * 10% = 30px для всіх боків */
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Спеціалізовані відносні одиниці</h4>
                <p className="mb-2">Ці одиниці корисні в конкретних сценаріях:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* ch - для оптимальної довжини рядка тексту */
.paragraph {
  /* Ідеальна довжина рядка: 45-75 символів */
  max-width: 60ch;
}

/* ex - для вертикального вирівнювання */
.superscript {
  vertical-align: 1ex;
}

/* lh - для горизонтальних ліній пропорційно до тексту */
.line {
  height: 0.1lh;
  margin: 1lh 0;
}`}
                </pre>
                <div className="mt-3">
                  <h5 className="font-semibold text-sm mb-1">Приклад довжини рядка з ch:</h5>
                  <div className="bg-white p-3 rounded">
                    <p className="max-w-[60ch] text-sm">
                      Цей параграф має максимальну ширину 60ch, що робить його оптимальним для читання. 
                      Дослідження показують, що рядки з 60-70 символами найкраще сприймаються читачами.
                    </p>
                  </div>
                </div>
              </div>
              
              <button
                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowExample(!showExample)}
              >
                {showExample ? 'Сховати приклад' : 'Показати приклад вкладеності em'}
              </button>
              
              {showExample && (
                <div className="mt-3 bg-gray-100 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Демонстрація вкладеності em:</h5>
                  <div className="bg-gray-200 p-3 rounded" style={{ fontSize: '16px' }}>
                    Parent: 16px
                    <div className="bg-blue-200 p-3 rounded mt-2" style={{ fontSize: '1.5em' }}>
                      Child: 1.5em = 24px
                      <div className="bg-green-200 p-3 rounded mt-2" style={{ fontSize: '1.5em' }}>
                        Grandchild: 1.5em = 36px
                        <div className="bg-yellow-200 p-3 rounded mt-2" style={{ fontSize: '1.5em' }}>
                          Great-grandchild: 1.5em = 54px
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Переваги відносних одиниць</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Переваги для адаптивного дизайну:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Автоматичне масштабування елементів при зміні розміру вікна</li>
                  <li>Забезпечення пропорційності компонентів інтерфейсу</li>
                  <li>Спрощення media-запитів (менше брейкпоінтів)</li>
                  <li>Підтримка різних розмірів екранів з меншою кількістю коду</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Переваги для доступності:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Відповідне масштабування при зміні розміру шрифту браузера</li>
                  <li>Кращий користувацький досвід для людей з порушеннями зору</li>
                  <li>Сумісність з налаштуваннями спеціальних можливостей</li>
                  <li>Підтримка zoom-функцій браузера без "ламання" дизайну</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'viewport' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Viewport одиниці вимірювання</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке viewport одиниці?</h4>
                <p>Viewport одиниці вимірювання визначають розмір елементів відносно розмірів вікна браузера (viewport). Це дозволяє створювати елементи, які адаптуються до розміру екрану.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Ідеальні для повноекранних елементів</li>
                  <li>Реагують на зміну розміру вікна</li>
                  <li>Корисні для адаптивної типографіки</li>
                </ul>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Основні viewport одиниці</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-200">
                        <th className="border border-purple-300 p-2 text-left">Одиниця</th>
                        <th className="border border-purple-300 p-2 text-left">Опис</th>
                        <th className="border border-purple-300 p-2 text-left">Відносно до</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-purple-300 p-2"><code>vw</code></td>
                        <td className="border border-purple-300 p-2">Viewport width</td>
                        <td className="border border-purple-300 p-2">1% ширини вікна браузера</td>
                      </tr>
                      <tr>
                        <td className="border border-purple-300 p-2"><code>vh</code></td>
                        <td className="border border-purple-300 p-2">Viewport height</td>
                        <td className="border border-purple-300 p-2">1% висоти вікна браузера</td>
                      </tr>
                      <tr>
                        <td className="border border-purple-300 p-2"><code>vmin</code></td>
                        <td className="border border-purple-300 p-2">Viewport minimum</td>
                        <td className="border border-purple-300 p-2">1% від меншого виміру (ширини або висоти)</td>
                      </tr>
                      <tr>
                        <td className="border border-purple-300 p-2"><code>vmax</code></td>
                        <td className="border border-purple-300 p-2">Viewport maximum</td>
                        <td className="border border-purple-300 p-2">1% від більшого виміру (ширини або висоти)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm">Приклад: для вікна розміром 1200px × 800px, 1vw = 12px, 1vh = 8px, 1vmin = 8px, 1vmax = 12px</p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold mb-2">Нові viewport одиниці (CSS Level 4)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-blue-300 p-2 text-left">Одиниця</th>
                        <th className="border border-blue-300 p-2 text-left">Опис</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-300 p-2"><code>svw, svh, svmin, svmax</code></td>
                        <td className="border border-blue-300 p-2">Small viewport - найменший можливий розмір (коли елементи керування браузера показані)</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 p-2"><code>lvw, lvh, lvmin, lvmax</code></td>
                        <td className="border border-blue-300 p-2">Large viewport - найбільший можливий розмір (коли елементи керування браузера приховані)</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 p-2"><code>dvw, dvh, dvmin, dvmax</code></td>
                        <td className="border border-blue-300 p-2">Dynamic viewport - адаптується до зміни розміру елементів керування браузера</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm">Ці нові одиниці особливо корисні для мобільних пристроїв, де висота видимої області може змінюватись (наприклад, коли з'являється/зникає URL-рядок)</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Практичне застосування viewport одиниць</h4>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">Повноекранні секції:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
                    {`.hero-section {
  height: 100vh;
  width: 100vw;
}

.split-screen {
  height: 50vh;
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">Адаптивна типографіка:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`h1 {
  /* Розмір шрифту масштабується з розміром вікна */
  font-size: 5vw;
}

.responsive-title {
  /* Розмір між 24px і 64px, залежно від розміру вікна */
  font-size: clamp(1.5rem, 4vw, 4rem);
}

p {
  /* Базовий розмір + додатковий на основі ширини */
  font-size: calc(16px + 0.5vw);
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">Центрування елементів:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`.centered {
  /* Розмістити елемент по центру вікна */
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}

.modal {
  /* Модальне вікно, яке масштабується, але не перевищує певні межі */
  width: min(80vw, 600px);
  height: min(80vh, 400px);
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-sm mb-1">Використання vmin і vmax:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Квадратний елемент, який масштабується з вікном */
.square {
  width: 50vmin;
  height: 50vmin;
}

/* Елемент, який заповнює більший вимір вікна */
.banner {
  width: 100%;
  height: 25vmax;
}

/* Шрифт, який масштабується з меншим виміром (для збереження пропорцій) */
.scaling-text {
  font-size: 5vmin;
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Проблеми та обмеження viewport одиниць</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Мобільні браузери:</strong> інтерфейс браузера (URL-рядок) може з'являтись/зникати, змінюючи розмір viewport</li>
                  <li><strong>Екранна клавіатура:</strong> зменшує видиму область на мобільних пристроях</li>
                  <li><strong>Проблема з 100vh:</strong> на мобільних може виходити за межі екрану</li>
                  <li><strong>Занадто динамічне масштабування</strong> може дезорієнтувати користувачів</li>
                  <li><strong>Екстремальні розміри екрану</strong> можуть спричинити надто великі або малі елементи</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Рішення для проблем:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Безпечний 100vh на мобільних */
.full-height {
  height: 100vh; /* Fallback */
  height: 100dvh; /* Dynamic viewport height */
}

/* Обмеження мінімальних/максимальних розмірів */
.responsive-element {
  width: 50vw;
  min-width: 200px;
  max-width: 600px;
}

/* Гібридні підходи для гнучкості та стабільності */
.hybrid {
  font-size: clamp(1rem, 2vw, 2rem);
  padding: clamp(10px, 3vh, 50px);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Комбінування viewport одиниць з іншими одиницями</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Функції CSS для комбінування:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* calc(): комбінування різних одиниць */
.element {
  /* Базовий розмір + відносний до viewport */
  margin: calc(1rem + 2vw);
  
  /* Відступи, які залежать від розміру viewport */
  padding: calc(5vh / 2) calc(5vw * 2);
  
  /* Позиціонування на основі відносних одиниць */
  left: calc(50vw - 10rem);
}

/* min() / max(): для адаптивних обмежень */
.container {
  /* Буде використовувати менше значення з двох */
  width: min(90%, 1200px);
  
  /* Буде використовувати більше значення з двох */
  font-size: max(16px, 1vw);
}

/* clamp(): для адаптивних діапазонів */
.adaptive {
  /* мін, бажане, макс */
  font-size: clamp(1rem, 2vw + 1rem, 2.5rem);
  width: clamp(300px, 50%, 800px);
}`}
                </pre>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Ефективні стратегії:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>Fluid Typography:</strong> шрифти, які плавно масштабуються з розміром вікна</li>
                  <li><strong>Адаптивні контейнери:</strong> елементи з відносною шириною і фіксованими межами</li>
                  <li><strong>Гібридні макети:</strong> поєднання фіксованих і гнучких компонентів</li>
                  <li><strong>Responsive spacing:</strong> відступи, які змінюються пропорційно до розміру екрану</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Приклад fluid типографіки:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`:root {
  /* Базовий розмір для екранів від 320px до 1200px */
  --fluid-min-width: 320;
  --fluid-max-width: 1200;
  
  --fluid-min-size: 16;  /* мін. розмір шрифту (px) */
  --fluid-max-size: 24;  /* макс. розмір шрифту (px) */
  
  /* Формула для плавного масштабування */
  --fluid-size: calc(
    (var(--fluid-min-size) * 1px) +
    (var(--fluid-max-size) - var(--fluid-min-size)) *
    (100vw - (var(--fluid-min-width) * 1px)) /
    (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

body {
  font-size: clamp(
    (var(--fluid-min-size) * 1px),
    var(--fluid-size),
    (var(--fluid-max-size) * 1px)
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'bestPractices' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Найкращі практики вибору одиниць вимірювання</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Коли використовувати різні одиниці</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2 text-left">Тип властивості</th>
                        <th className="border border-gray-300 p-2 text-left">Рекомендовані одиниці</th>
                        <th className="border border-gray-300 p-2 text-left">Чому?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Розмір шрифту (font-size)</td>
                        <td className="border border-gray-300 p-2">rem, em, clamp()</td>
                        <td className="border border-gray-300 p-2">Доступність, відповідність налаштуванням користувача</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Висота рядка (line-height)</td>
                        <td className="border border-gray-300 p-2">безрозмірні (1.5), rem</td>
                        <td className="border border-gray-300 p-2">Масштабується пропорційно розміру шрифту</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Ширина контейнерів</td>
                        <td className="border border-gray-300 p-2">%, max-width: px, rem</td>
                        <td className="border border-gray-300 p-2">Адаптивність з контрольованими обмеженнями</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Відступи, поля (padding, margin)</td>
                        <td className="border border-gray-300 p-2">rem, em, calc()</td>
                        <td className="border border-gray-300 p-2">Узгодженість з розміром контенту</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Межі (border-width)</td>
                        <td className="border border-gray-300 p-2">px (для тонких), rem (для товстіших)</td>
                        <td className="border border-gray-300 p-2">Контроль над тонкими лініями vs. масштабованість</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Радіуси (border-radius)</td>
                        <td className="border border-gray-300 p-2">px (для малих), rem, % (для адаптивних)</td>
                        <td className="border border-gray-300 p-2">Контроль або адаптивність залежно від потреб</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Повноекранні елементи</td>
                        <td className="border border-gray-300 p-2">vh, dvh, % + min-height</td>
                        <td className="border border-gray-300 p-2">Заповнення viewport з урахуванням мобільних пристроїв</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Довжина тексту</td>
                        <td className="border border-gray-300 p-2">ch, max-width: rem</td>
                        <td className="border border-gray-300 p-2">Оптимальна читабельність</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Адаптивна типографіка</td>
                        <td className="border border-gray-300 p-2">clamp(), calc(rem + vw)</td>
                        <td className="border border-gray-300 p-2">Плавне масштабування з обмеженнями</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Медіа-контент</td>
                        <td className="border border-gray-300 p-2">%, max-width, object-fit</td>
                        <td className="border border-gray-300 p-2">Адаптивність зі збереженням пропорцій</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Неправильні підходи (антипатерни)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>px для розмірів шрифту:</strong> обмежує доступність і можливості масштабування</li>
                  <li><strong>Вкладені em:</strong> створює складний каскад і непередбачувані розміри</li>
                  <li><strong>Надмірне використання vh/vw:</strong> проблеми на екстремальних розмірах екрана</li>
                  <li><strong>Змішування різних одиниць без причини:</strong> ускладнює підтримку</li>
                  <li><strong>Використання % для висоти без контролю:</strong> може створювати неочікувані результати</li>
                  <li><strong>Фіксовані розміри (px) для адаптивних елементів:</strong> не масштабуються належним чином</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <h5 className="font-semibold text-sm mb-1">Приклади антипатернів:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* ❌ Погано: фіксований розмір шрифту */
body {
  font-size: 16px;
}

/* ✅ Краще: відносний розмір шрифту */
body {
  font-size: 1rem;
}

/* ❌ Погано: надмірна вкладеність em */
.parent {
  font-size: 1.2em;
}
.child {
  font-size: 1.2em; /* Важко передбачити кінцевий розмір */
}

/* ✅ Краще: використовувати rem для уникнення вкладеності */
.parent {
  font-size: 1.2rem;
}
.child {
  font-size: 1.2rem;
}

/* ❌ Погано: фіксовані розміри контейнерів */
.container {
  width: 1200px;
}

/* ✅ Краще: адаптивні контейнери з обмеженнями */
.container {
  width: 90%;
  max-width: 1200px;
}`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Стратегія вибору одиниць для різних проектів</h4>
                <div className="mb-3">
                  <h5 className="font-semibold text-sm mb-1">Для корпоративних сайтів:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Базові розміри: rem для консистентності</li>
                    <li>Контейнери: % з max-width для адаптивності</li>
                    <li>Шрифти: rem з медіа-запитами для основних брейкпоінтів</li>
                    <li>Відступи: rem для систематичних відступів</li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h5 className="font-semibold text-sm mb-1">Для творчих/портфоліо проектів:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Шрифти: fluid typography з clamp() і vw для плавного масштабування</li>
                    <li>Макети: vh/vw для імерсивних досвідів</li>
                    <li>Позиціонування: % та vh/vw з transform для динамічних ефектів</li>
                    <li>Пропорції: vmin/vmax для збереження пропорцій дизайну</li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h5 className="font-semibold text-sm mb-1">Для додатків (веб-застосунків):</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Базова система: px для дизайн-системи, rem для реалізації</li>
                    <li>UI-компоненти: rem для підтримки доступності</li>
                    <li>Сітки: fr (у CSS Grid) та % для гнучких макетів</li>
                    <li>Відступи: чітка система на основі rem</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-1">Для eCommerce:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Шрифти: rem для читабельності</li>
                    <li>Картки товарів: % з мінімальною шириною в rem</li>
                    <li>Зображення: % з aspect-ratio для стабільного макету</li>
                    <li>Межі та відокремлення: px для тонких декоративних елементів</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Системний підхід до одиниць вимірювання</h4>
                <p className="mb-2">Створення масштабованої системи одиниць:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`:root {
  /* Базова система розмірів */
  --size-1: 0.25rem;  /* 4px при базовому розмірі 16px */
  --size-2: 0.5rem;   /* 8px */
  --size-3: 0.75rem;  /* 12px */
  --size-4: 1rem;     /* 16px */
  --size-5: 1.5rem;   /* 24px */
  --size-6: 2rem;     /* 32px */
  --size-7: 3rem;     /* 48px */
  --size-8: 4rem;     /* 64px */
  
  /* Система шрифтів */
  --font-xs: 0.75rem;     /* 12px */
  --font-sm: 0.875rem;    /* 14px */
  --font-base: 1rem;      /* 16px */
  --font-lg: 1.125rem;    /* 18px */
  --font-xl: 1.25rem;     /* 20px */
  --font-2xl: 1.5rem;     /* 24px */
  --font-3xl: 2rem;       /* 32px */
  
  /* Адаптивна типографіка */
  --font-fluid-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --font-fluid-base: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --font-fluid-lg: clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem);
  --font-fluid-xl: clamp(1.5rem, 1.3rem + 1.1vw, 2rem);
  --font-fluid-2xl: clamp(2rem, 1.8rem + 1.5vw, 3rem);
  
  /* Ширини контейнерів */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  
  /* Радіуси */
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
  
  /* Адаптивні відступи */
  --space-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --space-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1rem);
  --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  --space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --space-xl: clamp(2rem, 1.6rem + 2vw, 3rem);
}

/* Приклад застосування */
.button {
  font-size: var(--font-base);
  padding: var(--size-2) var(--size-4);
  border-radius: var(--radius-md);
}

.card {
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-lg);
}`}
                </pre>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-semibold text-sm mb-1">Ключові принципи системи одиниць:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Консистентність:</strong> використовуйте одні й ті ж одиниці для споріднених елементів</li>
                    <li><strong>Ієрархія:</strong> встановіть чітку ієрархію розмірів для візуальної організації</li>
                    <li><strong>Масштабованість:</strong> система має легко масштабуватись з проектом</li>
                    <li><strong>Адаптивність:</strong> враховуйте різні розміри екранів і потреби користувачів</li>
                    <li><strong>Документація:</strong> задокументуйте систему одиниць для команди</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Сучасні підходи (2023-2024)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Container Queries + cqw/cqh:</strong> адаптивні компоненти на основі розміру контейнера</li>
                  <li><strong>Style Queries:</strong> адаптація на основі стилів, а не розмірів</li>
                  <li><strong>Logical properties:</strong> margin-block, padding-inline з відповідними одиницями</li>
                  <li><strong>Селективне використання viewport units:</strong> dvh/lvh/svh для різних сценаріїв</li>
                  <li><strong>Новий CSS math:</strong> функції round(), mod() з підтримкою різних одиниць</li>
                </ul>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-3">
{`/* Container queries з cqw */
@container (min-width: 400px) {
  .card-title {
    font-size: 5cqw; /* 5% ширини контейнера */
  }
}

/* Логічні властивості */
.element {
  margin-block-start: 1rem;
  padding-inline: 2rem;
}

/* Нові функції CSS */
.scaled {
  width: round(calc(100% / 3), 0.25rem);
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Підсумок: Рекомендації вибору одиниць вимірювання</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Найкраще використовувати:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>rem</strong> для основних розмірів шрифтів, відступів і загальних розмірів</li>
                  <li><strong>em</strong> для локальних масштабувань (напр., padding кнопок відносно їх тексту)</li>
                  <li><strong>%</strong> для ширини контейнерів, разом з max-width</li>
                  <li><strong>px</strong> для тонких ліній, тіней та інших дрібних деталей</li>
                  <li><strong>clamp()</strong> для адаптивної типографіки з обмеженнями</li>
                  <li><strong>vh/vw</strong> для повноекранних секцій і адаптивних елементів</li>
                  <li><strong>ch</strong> для оптимальної ширини тексту</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Уникайте:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>px</strong> для розмірів шрифту і загальних відступів</li>
                  <li>Надмірно вкладених <strong>em</strong>, які створюють непередбачувані результати</li>
                  <li>Використання <strong>vw</strong> для шрифтів без обмежень (min/max)</li>
                  <li>Використання фіксованих одиниць для елементів, які повинні бути адаптивними</li>
                  <li>Змішування різних одиниць без системного підходу</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Загальний підхід:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Розробіть <strong>систему масштабування</strong> з CSS змінними</li>
                  <li>Використовуйте <strong>функції CSS math</strong> для комбінування одиниць (calc, min, max)</li>
                  <li>Враховуйте <strong>доступність</strong> в першу чергу при виборі одиниць</li>
                  <li>Тестуйте на <strong>різних розмірах екранів</strong> і налаштуваннях браузера</li>
                  <li>Створіть <strong>документацію</strong> для системи одиниць у проекті</li>
                  <li>Дотримуйтесь <strong>послідовності</strong> у використанні одиниць вимірювання</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSUnitsSlide;