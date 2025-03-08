import React, { useState } from 'react';

const ResponsiveTablesListsSlide: React.FC = () => {
  const [showResponsiveTechnique, setShowResponsiveTechnique] = useState('scroll');
  
  // Приклад даних для таблиць
  const sampleData = [
    { id: 1, name: 'Смартфон iPhone 14', category: 'Телефони', price: 37499, stock: 23, rating: 4.7 },
    { id: 2, name: 'Ноутбук Dell XPS 13', category: 'Ноутбуки', price: 42999, stock: 15, rating: 4.8 },
    { id: 3, name: 'Планшет Samsung Tab S8', category: 'Планшети', price: 24999, stock: 8, rating: 4.5 },
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Адаптивність та доступність таблиць і списків</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Адаптивний дизайн є критично важливим для забезпечення правильного відображення таблиць і списків на пристроях різного розміру. Доступність гарантує, що всі користувачі, включно з тими, хто користується асистивними технологіями, можуть ефективно працювати з вашим контентом.</p>
      </div>
      
      <h3 className="font-bold mb-3">Адаптивні таблиці</h3>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="mb-3">Таблиці особливо складно адаптувати для малих екранів через їхню горизонтальну природу. Існує кілька підходів до створення адаптивних таблиць:</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            className={`px-3 py-1 rounded text-sm border ${showResponsiveTechnique === 'scroll' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setShowResponsiveTechnique('scroll')}
          >
            Горизонтальна прокрутка
          </button>
          <button
            className={`px-3 py-1 rounded text-sm border ${showResponsiveTechnique === 'stack' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setShowResponsiveTechnique('stack')}
          >
            Стекінг комірок
          </button>
          <button
            className={`px-3 py-1 rounded text-sm border ${showResponsiveTechnique === 'collapse' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setShowResponsiveTechnique('collapse')}
          >
            Приховування стовпців
          </button>
        </div>
        
        {showResponsiveTechnique === 'scroll' && (
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">1. Горизонтальна прокрутка:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`.table-container {
  width: 100%;
  overflow-x: auto;
}

/* Опціонально: показувати індикатор прокрутки */
.table-container::after {
  content: "\\2192"; /* Стрілка вправо */
  position: absolute;
  right: 10px;
  opacity: 0.5;
}`}
            </pre>
            
            <h4 className="font-bold mt-4 mb-2">Візуальний приклад:</h4>
            <div className="border border-gray-300 rounded p-2 overflow-hidden">
              <p className="text-sm text-gray-600 mb-2">Спробуйте змінити розмір вікна браузера або подивіться на мобільному пристрої</p>
              <div className="w-full overflow-x-auto relative" style={{ maxWidth: '100%' }}>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 animate-pulse">➡️</div>
                <table className="min-w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 w-16">ID</th>
                      <th className="border border-gray-300 px-4 py-2 w-60">Назва</th>
                      <th className="border border-gray-300 px-4 py-2 w-36">Категорія</th>
                      <th className="border border-gray-300 px-4 py-2 w-36">Ціна, грн</th>
                      <th className="border border-gray-300 px-4 py-2 w-36">В наявності</th>
                      <th className="border border-gray-300 px-4 py-2 w-32">Рейтинг</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map(item => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2">Таблиця горизонтально прокручується, якщо ширина екрану менша за ширину таблиці</p>
            </div>
            
            <div className="mt-3">
              <p className="text-sm mb-2"><strong>Переваги:</strong> Простий у реалізації, зберігає оригінальну структуру таблиці</p>
              <p className="text-sm"><strong>Недоліки:</strong> Користувачу потрібно прокручувати для перегляду всіх даних</p>
            </div>
          </div>
        )}
        
        {showResponsiveTechnique === 'stack' && (
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">2. Стекінг комірок (перетворення на список):</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`/* На малих екранах */
@media (max-width: 767px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { border: 1px solid #ccc; margin-bottom: 10px; }
  
  td {
    border: none;
    position: relative;
    padding-left: 50%;
  }
  
  td:before {
    position: absolute;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    font-weight: bold;
    content: attr(data-label);
  }
}`}
            </pre>
            
            <h4 className="font-bold mt-4 mb-2">Візуальний приклад:</h4>
            <div className="border border-gray-300 rounded p-2 overflow-hidden">
              <p className="text-sm text-gray-600 mb-2">Приклад стекінгу комірок (симуляція малого екрану):</p>
              
              <div className="sm:hidden">
                {/* Стековий вигляд для малих екранів */}
                {sampleData.map(item => (
                  <div key={item.id} className="border border-gray-300 rounded mb-4 p-2 bg-white">
                    <div className="py-2 flex">
                      <span className="font-bold w-1/2">ID:</span>
                      <span className="w-1/2">{item.id}</span>
                    </div>
                    <div className="py-2 flex border-t border-gray-200">
                      <span className="font-bold w-1/2">Назва:</span>
                      <span className="w-1/2">{item.name}</span>
                    </div>
                    <div className="py-2 flex border-t border-gray-200">
                      <span className="font-bold w-1/2">Категорія:</span>
                      <span className="w-1/2">{item.category}</span>
                    </div>
                    <div className="py-2 flex border-t border-gray-200">
                      <span className="font-bold w-1/2">Ціна, грн:</span>
                      <span className="w-1/2">{item.price}</span>
                    </div>
                    <div className="py-2 flex border-t border-gray-200">
                      <span className="font-bold w-1/2">В наявності:</span>
                      <span className="w-1/2">{item.stock}</span>
                    </div>
                    <div className="py-2 flex border-t border-gray-200">
                      <span className="font-bold w-1/2">Рейтинг:</span>
                      <span className="w-1/2">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="hidden sm:block">
                {/* Звичайна таблиця для середніх та великих екранів */}
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2">ID</th>
                      <th className="border border-gray-300 px-4 py-2">Назва</th>
                      <th className="border border-gray-300 px-4 py-2">Категорія</th>
                      <th className="border border-gray-300 px-4 py-2">Ціна, грн</th>
                      <th className="border border-gray-300 px-4 py-2">В наявності</th>
                      <th className="border border-gray-300 px-4 py-2">Рейтинг</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map(item => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">На малих екранах кожен рядок перетворюється на картку з парами "ключ: значення"</p>
              </div>
            </div>
            
            <div className="mt-3">
              <p className="text-sm mb-2"><strong>HTML: додайте data-атрибути до TD елементів</strong></p>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`<td data-label="Ім'я">Іван Петренко</td>
<td data-label="Вік">25</td>`}
              </pre>
              <p className="text-sm mb-2"><strong>Переваги:</strong> Добре читається на малих екранах, не потребує прокрутки</p>
              <p className="text-sm"><strong>Недоліки:</strong> Потребує додаткових атрибутів у HTML, змінює візуальну структуру</p>
            </div>
          </div>
        )}
        
        {showResponsiveTechnique === 'collapse' && (
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">3. Приховування несуттєвих стовпців:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`@media (max-width: 767px) {
  .table-responsive .less-important {
    display: none;
  }
}

/* Або з класами на основі пріоритетності */
@media (max-width: 1024px) {
  .priority-3 { display: none; }
}

@media (max-width: 767px) {
  .priority-2 { display: none; }
}

@media (max-width: 480px) {
  .priority-1 { display: none; }
}`}
            </pre>
            
            <h4 className="font-bold mt-4 mb-2">Візуальний приклад:</h4>
            <div className="border border-gray-300 rounded p-2 overflow-hidden">
              <p className="text-sm text-gray-600 mb-2">Приклад приховування несуттєвих стовпців:</p>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2">ID</th>
                      <th className="border border-gray-300 px-4 py-2">Назва</th>
                      {/* Пріоритет 1 - приховується на дуже малих екранах */}
                      <th className="border border-gray-300 px-4 py-2 hidden xs:table-cell">Категорія</th>
                      {/* Пріоритет 2 - приховується на малих екранах */}
                      <th className="border border-gray-300 px-4 py-2 hidden sm:table-cell">Ціна, грн</th>
                      {/* Пріоритет 3 - приховується на середніх екранах */}
                      <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">В наявності</th>
                      {/* Пріоритет 4 - приховується на великих екранах */}
                      <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">Рейтинг</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map(item => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2 hidden xs:table-cell">{item.category}</td>
                        <td className="border border-gray-300 px-4 py-2 hidden sm:table-cell">{item.price}</td>
                        <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">{item.stock}</td>
                        <td className="border border-gray-300 px-4 py-2 hidden lg:table-cell">{item.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2">Стовпці зникають при зменшенні розміру екрану (змініть розмір вікна браузера для демонстрації)</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                  &lt;480px: тільки ID та Назва
                </span>
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                  &lt;768px: + Категорія
                </span>
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                  &lt;1024px: + Ціна
                </span>
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                  &gt;1024px: + В наявності та Рейтинг
                </span>
              </div>
            </div>
            
            <div className="mt-3">
              <p className="text-sm mb-2"><strong>HTML: додайте класи до TH та TD елементів</strong></p>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`<th class="priority-2">Дата реєстрації</th>
<th class="priority-3">Останній візит</th>`}
              </pre>
              <p className="text-sm mb-2"><strong>Переваги:</strong> Зберігає табличний формат, фокусується на важливій інформації</p>
              <p className="text-sm"><strong>Недоліки:</strong> Частина інформації не доступна на малих екранах</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-3">Адаптивні списки</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>Списки зазвичай легше адаптуються до малих екранів, але для складних списків також потрібні спеціальні підходи:</p>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Багаторівневі списки навігації:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-3">
{`/* Горизонтальне меню на великих екранах */
.main-nav ul {
  display: flex;
}

.main-nav li {
  position: relative;
}

.main-nav li:hover > ul {
  display: block;
}

.main-nav ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
}

/* На малих екранах - вертикальне меню */
@media (max-width: 767px) {
  .main-nav ul {
    display: block;
  }
  
  .main-nav ul ul {
    position: static;
    display: none;
  }
  
  .main-nav .toggle-submenu:checked ~ ul {
    display: block;
  }
}`}
            </pre>
            <p className="text-sm"><strong>Порада:</strong> Використовуйте чекбокси/радіо кнопки або JavaScript для переключення вкладених меню на малих екранах.</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">Доступність списків та таблиць</h3>
          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-1">Списки:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Завжди використовуйте семантичні теги (<code>ul</code>, <code>ol</code>, <code>li</code>) для списків</li>
              <li>Не порушуйте вкладеність, вставляючи не-<code>li</code> елементи безпосередньо в <code>ul</code>/<code>ol</code></li>
              <li>Для вкладених списків навігації додавайте <code>aria-expanded</code> і <code>aria-controls</code></li>
              <li>Використовуйте <code>role="list"</code> і <code>role="listitem"</code>, якщо CSS змінює стандартну поведінку</li>
              <li>Для списків визначень (<code>dl</code>) підтримуйте правильну структуру <code>dt</code>/<code>dd</code></li>
            </ul>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-bold mb-1">Таблиці:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Завжди додавайте <code>caption</code> для опису змісту таблиці</li>
              <li>Використовуйте <code>scope</code> для зв'язку заголовків і комірок</li>
              <li>В адаптивних таблицях зі стекінгом додавайте <code>role="table"/"row"/"cell"</code></li>
              <li>Додавайте <code>aria-label</code> для таблиць без видимих заголовків</li>
              <li>Для таблиць з прокруткою повідомляйте про наявність горизонтальної прокрутки</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">Тестування адаптивності та доступності:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1">Для адаптивності:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Використовуйте інструменти розробника в браузері для симуляції різних розмірів екрану</li>
              <li>Тестуйте на реальних пристроях (смартфони, планшети, різні десктопи)</li>
              <li>Перевіряйте при повороті пристрою (портретна/ландшафтна орієнтація)</li>
              <li>Перевіряйте при різних розмірах шрифту та масштабування</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Для доступності:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Використовуйте програми зчитування з екрану (NVDA, JAWS, VoiceOver)</li>
              <li>Перевіряйте навігацію клавіатурою (Tab, стрілки, Enter)</li>
              <li>Використовуйте інструменти перевірки доступності (Lighthouse, Axe)</li>
              <li>Перевіряйте контраст кольорів для тексту і границь таблиць</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Особливі випадки та corner cases:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Дуже широкі таблиці:</strong> Розгляньте розбиття на кілька пов'язаних таблиць</li>
            <li><strong>Таблиці з багатьма колонками:</strong> Пріоритизуйте стовпці та застосовуйте різні точки зупинки для кожного</li>
            <li><strong>Зміна порядку стовпців на малих екранах:</strong> Використовуйте CSS Grid для перевпорядкування вмісту</li>
            <li><strong>Приховування змісту:</strong> Переконайтеся, що критична інформація завжди доступна або є альтернативний спосіб її перегляду</li>
            <li><strong>Глибоко вкладені списки:</strong> Обмежуйте видиму глибину вкладеності на малих екранах з можливістю "розгорнути"</li>
          </ul>
        </div>
        
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Альтернативні рішення:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Бібліотеки для адаптивних таблиць:</strong> DataTables, TablePress, Bootstrap Tables</li>
            <li><strong>CSS-фреймворки:</strong> Використовуйте готові рішення з Bootstrap, Tailwind, Foundation</li>
            <li><strong>Візуалізація даних:</strong> Для складних числових даних розгляньте графіки замість таблиць на малих екранах</li>
            <li><strong>Розділення таблиць:</strong> Розбийте одну велику таблицю на кілька менших за категоріями</li>
            <li><strong>Фіксовані заголовки:</strong> Використовуйте position: sticky для заголовків у довгих таблицях</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">Найкращі практики - підсумок:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Планування:</strong> Перед створенням таблиці визначте її поведінку на всіх розмірах екрану</li>
          <li><strong>Простота:</strong> Спрощуйте таблиці, розділяйте складні дані на кілька таблиць</li>
          <li><strong>Пріоритети:</strong> Визначайте, які дані найважливіші для відображення на малих екранах</li>
          <li><strong>Тестування:</strong> Регулярно перевіряйте адаптивність та доступність під час розробки</li>
          <li><strong>Гібридний підхід:</strong> Часто найкращим рішенням є комбінація кількох технік адаптивності для різних розмірів екрану</li>
        </ol>
      </div>
    </div>
  );
};

export default ResponsiveTablesListsSlide;