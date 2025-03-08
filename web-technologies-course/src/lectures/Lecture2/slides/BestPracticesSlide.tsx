import React, { useState } from 'react';

const BestPracticesSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lists' | 'tables'>('lists');
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Найкращі практики роботи з таблицями та списками</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Дотримання цих рекомендацій допоможе створювати семантично правильні, доступні та адаптивні таблиці та списки, які будуть працювати на всіх пристроях і для всіх користувачів.</p>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded-t ${activeTab === 'lists' ? 'bg-white border border-gray-300 border-b-0' : 'bg-gray-100'}`}
          onClick={() => setActiveTab('lists')}
        >
          Списки
        </button>
        <button
          className={`px-4 py-2 rounded-t ${activeTab === 'tables' ? 'bg-white border border-gray-300 border-b-0' : 'bg-gray-100'}`}
          onClick={() => setActiveTab('tables')}
        >
          Таблиці
        </button>
      </div>
      
      <div className="bg-white border border-gray-300 rounded-b p-6">
        {activeTab === 'lists' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Найкращі практики роботи зі списками</h3>
            
            <div className="space-y-6">
              {/* Практика 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">1. Використовуйте правильний тип списку</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li><strong>UL</strong> - для невпорядкованих елементів, де порядок не має значення</li>
                    <li><strong>OL</strong> - для впорядкованих елементів, де послідовність важлива</li>
                    <li><strong>DL</strong> - для пар "термін-визначення"</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Невпорядкований список для меню -->
<ul>
  <li><a href="#">Головна</a></li>
  <li><a href="#">Про нас</a></li>
</ul>

<!-- Впорядкований список для інструкцій -->
<ol>
  <li>Підготуйте інгредієнти</li>
  <li>Змішайте у великій мисці</li>
</ol>

<!-- Список визначень для глосарію -->
<dl>
  <dt>HTML</dt>
  <dd>Мова розмітки гіпертексту</dd>
</dl>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">2. Правильно вкладайте списки</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Вкладайте списки тільки всередині елементів <code>&lt;li&gt;</code></li>
                    <li>Не порушуйте структуру списків іншими елементами</li>
                    <li>Дотримуйтесь логіки вкладеності для ієрархічних даних</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Правильно: -->
<ul>
  <li>Фрукти
    <ul>
      <li>Яблука</li>
      <li>Банани</li>
    </ul>
  </li>
  <li>Овочі</li>
</ul>

<!-- Неправильно: -->
<ul>
  <li>Фрукти</li>
  <ul>
    <li>Яблука</li>
    <li>Банани</li>
  </ul>
  <li>Овочі</li>
</ul>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">3. Додавайте ARIA-атрибути для складних списків</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Додавайте <code>role="list"</code> і <code>role="listitem"</code>, якщо CSS змінює структуру</li>
                    <li>Використовуйте <code>aria-expanded</code> для розкривних пунктів</li>
                    <li>Додавайте <code>aria-current</code> для позначення активного пункту</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Навігаційне меню з підменю -->
<ul role="menubar">
  <li role="none">
    <a role="menuitem" href="#">Головна</a>
  </li>
  <li role="none">
    <a role="menuitem" 
       aria-haspopup="true" 
       aria-expanded="false">
      Товари
    </a>
    <ul role="menu" aria-label="Підменю товарів">
      <li role="none">
        <a role="menuitem" href="#">Електроніка</a>
      </li>
    </ul>
  </li>
</ul>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">4. Забезпечуйте адаптивність списків</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Використовуйте відносні розміри (<code>em</code>, <code>rem</code>)</li>
                    <li>Додавайте перенесення тексту для довгих елементів</li>
                    <li>Змінюйте орієнтацію списків для малих екранів (з горизонтальних на вертикальні)</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`/* Адаптивне навігаційне меню */
.main-nav ul {
  display: flex;
  flex-wrap: wrap;
}

.main-nav li {
  margin: 0.5rem;
}

/* На малих екранах */
@media (max-width: 767px) {
  .main-nav ul {
    flex-direction: column;
  }
  
  .main-nav li {
    margin: 0.25rem 0;
    width: 100%;
  }
}`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">5. Інтерактивні списки: доступність для клавіатури</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Забезпечте фокусування всіх інтерактивних елементів</li>
                    <li>Додайте підтримку клавіш стрілок для навігації по елементах</li>
                    <li>Використовуйте <code>tabindex</code> для правильного порядку фокусування</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Для вкладок (tabs) -->
<ul role="tablist">
  <li role="presentation">
    <button 
      role="tab" 
      id="tab1"
      aria-selected="true" 
      aria-controls="panel1"
      tabindex="0">
      Вкладка 1
    </button>
  </li>
  <li role="presentation">
    <button 
      role="tab" 
      id="tab2"
      aria-selected="false" 
      aria-controls="panel2"
      tabindex="-1">
      Вкладка 2
    </button>
  </li>
</ul>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'tables' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Найкращі практики роботи з таблицями</h3>
            
            <div className="space-y-6">
              {/* Практика 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">1. Використовуйте правильну семантичну структуру</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Додавайте <code>&lt;caption&gt;</code> для опису таблиці</li>
                    <li>Використовуйте <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> і <code>&lt;tfoot&gt;</code></li>
                    <li>Застосовуйте <code>&lt;th&gt;</code> для всіх заголовків замість <code>&lt;td&gt;</code></li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<table>
  <caption>Фінансовий звіт за 2023 рік</caption>
  <thead>
    <tr>
      <th scope="col">Місяць</th>
      <th scope="col">Дохід</th>
      <th scope="col">Витрати</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Січень</th>
      <td>10000</td>
      <td>7000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Всього</th>
      <td>120000</td>
      <td>90000</td>
    </tr>
  </tfoot>
</table>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">2. Використовуйте атрибути для покращення доступності</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Додавайте <code>scope="col"</code> для заголовків стовпців</li>
                    <li>Додавайте <code>scope="row"</code> для заголовків рядків</li>
                    <li>Використовуйте <code>id</code> і <code>headers</code> для складних таблиць</li>
                    <li>Додавайте <code>aria-sort</code> для сортованих стовпців</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Для простих таблиць: -->
<th scope="col">Назва</th>
<th scope="row">Перший квартал</th>

<!-- Для складних таблиць: -->
<th id="name">Назва</th>
<th id="q1">Q1</th>
<th id="q2">Q2</th>

<tr>
  <th id="product1" scope="row">Продукт A</th>
  <td headers="product1 q1">10000</td>
  <td headers="product1 q2">12000</td>
</tr>

<!-- Для сортування: -->
<th aria-sort="ascending">Дата</th>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">3. Правильно об'єднуйте комірки таблиці</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Використовуйте <code>colspan</code> і <code>rowspan</code> лише за потреби</li>
                    <li>Підтримуйте логічну структуру даних при об'єднанні</li>
                    <li>Забезпечте доступність при складних об'єднаннях</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<table>
  <tr>
    <th colspan="3" scope="colgroup">
      Фінансові показники
    </th>
  </tr>
  <tr>
    <th scope="col">Квартал</th>
    <th scope="col">Дохід</th>
    <th scope="col">Витрати</th>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup">
      2023
    </th>
    <th scope="row">Q1</th>
    <td>10000</td>
    <td>8000</td>
  </tr>
  <tr>
    <th scope="row">Q2</th>
    <td>12000</td>
    <td>9000</td>
  </tr>
</table>`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">4. Забезпечуйте адаптивність таблиць</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Використовуйте горизонтальну прокрутку для широких таблиць</li>
                    <li>Застосовуйте стекінг комірок на малих екранах</li>
                    <li>Приховуйте менш важливі стовпці відповідно до розміру екрану</li>
                    <li>Додавайте <code>data-label</code> атрибути для стекінгу</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- HTML -->
<td data-label="Назва">Продукт A</td>
<td data-label="Ціна">1000</td>

/* CSS для адаптивних таблиць */
@media (max-width: 767px) {
  /* Стекінг комірок */
  table, thead, tbody, tr, th, td {
    display: block;
  }
  
  thead {
    position: absolute;
    left: -9999px;
  }
  
  tr {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
  }
  
  td {
    position: relative;
    padding-left: 50%;
  }
  
  td:before {
    content: attr(data-label);
    position: absolute;
    left: 0.5rem;
    width: 45%;
    font-weight: bold;
  }
}`}
                  </pre>
                </div>
              </div>
              
              {/* Практика 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-lg mb-2">5. Уникайте поширених помилок</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Не використовуйте таблиці для розмітки сторінки</li>
                    <li>Не створюйте надто складні та великі таблиці</li>
                    <li>Не забувайте про заголовки таблиці</li>
                    <li>Не використовуйте пусті комірки для візуального оформлення</li>
                    <li>Не зловживайте об'єднанням комірок</li>
                  </ul>
                </div>
                <div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-full">
{`<!-- Неправильно: таблиця для макету -->
<table>
  <tr>
    <td>Логотип</td>
    <td>Меню</td>
  </tr>
  <tr>
    <td>Бічна панель</td>
    <td>Основний вміст</td>
  </tr>
</table>

<!-- Правильно: семантичні елементи -->
<header>Логотип і меню</header>
<main>
  <aside>Бічна панель</aside>
  <article>Основний вміст</article>
</main>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">Загальні поради:</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Тестуйте на різних пристроях</strong> - переконайтеся, що ваші таблиці та списки працюють на всіх розмірах екранів</li>
          <li><strong>Перевіряйте доступність</strong> - використовуйте програми зчитування з екрану та інструменти перевірки доступності</li>
          <li><strong>Оптимізуйте продуктивність</strong> - великі таблиці можуть сповільнювати роботу сторінки, особливо на мобільних пристроях</li>
          <li><strong>Документуйте складні структури</strong> - залишайте коментарі для складних таблиць і списків</li>
          <li><strong>Дбайте про UX</strong> - забезпечте зрозумілий і зручний інтерфейс для всіх користувачів</li>
        </ul>
      </div>
    </div>
  );
};

export default BestPracticesSlide;