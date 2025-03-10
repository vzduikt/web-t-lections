import React, { useState } from 'react';

const CSSBasicsSlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'connecting' | 'reset' | 'structure'>('connecting');
  
  const externalCSSExample = `/* styles.css */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background-color: #f5f5f5;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}`;

  const internalCSSExample = `<head>
  <title>Моя сторінка</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
  </style>
</head>`;

  const inlineCSSExample = `<h1 style="color: blue; font-size: 24px; margin-bottom: 10px;">
  Заголовок сторінки
</h1>

<p style="color: #666; line-height: 1.5;">
  Текст параграфа
</p>`;

  const cssResetExample = `/* Спрощений CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, address, cite, code, img, 
ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}`;

  const cssNormalizeExample = `/* Фрагмент normalize.css */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}`;

  const cssStructureExample = `/* 1. Базові налаштування */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --background-color: #f9f9f9;
}

/* 2. Скидання стилів */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 3. Загальні стилі та типографіка */
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: 1rem;
}

/* 4. Компоненти інтерфейсу */
.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

/* 5. Структура макета */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

/* 6. Утиліти та допоміжні класи */
.text-center { text-align: center; }
.mt-2 { margin-top: 0.5rem; }
.mb-2 { margin-bottom: 0.5rem; }`;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Основи роботи з CSS</h2>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'connecting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('connecting')}
        >
          Підключення CSS
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'reset' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('reset')}
        >
          Reset і Normalize CSS
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'structure' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('structure')}
        >
          Структура CSS-коду
        </button>
      </div>
      
      {activeSection === 'connecting' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Способи підключення CSS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">1. Зовнішній CSS-файл</h4>
              <p className="text-sm mb-3">Стилі зберігаються в окремому файлі .css та підключаються за допомогою тегу link.</p>
              
              <div className="bg-gray-100 p-3 rounded-lg mb-2">
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
                </pre>
                
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                  {externalCSSExample}
                </pre>
              </div>
              
              <div className="bg-green-100 p-2 rounded text-sm">
                <strong>Переваги:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Повне розділення HTML та CSS</li>
                  <li>Легше підтримувати і оновлювати</li>
                  <li>Файл кешується браузером</li>
                  <li>Один файл для багатьох сторінок</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2. Внутрішні стилі</h4>
              <p className="text-sm mb-3">Стилі безпосередньо в HTML-документі всередині тегу style в блоці head.</p>
              
              <div className="bg-gray-100 p-3 rounded-lg mb-2">
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                  {internalCSSExample}
                </pre>
              </div>
              
              <div className="bg-yellow-100 p-2 rounded text-sm">
                <strong>Переваги та недоліки:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Не потрібно завантажувати додаткові файли</li>
                  <li>Підходить для невеликих, унікальних сторінок</li>
                  <li>Недолік: Змішує HTML і CSS</li>
                  <li>Недолік: Не кешується окремо</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3. Вбудовані (inline) стилі</h4>
              <p className="text-sm mb-3">Стилі застосовуються безпосередньо до елемента через атрибут style.</p>
              
              <div className="bg-gray-100 p-3 rounded-lg mb-2">
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                  {inlineCSSExample}
                </pre>
              </div>
              
              <div className="bg-red-100 p-2 rounded text-sm">
                <strong>Використання:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Для швидкого прототипування</li>
                  <li>Коли потрібно перевизначити наявні стилі</li>
                  <li>У динамічно згенерованому контенті</li>
                  <li>В електронній пошті</li>
                  <li>Недолік: Найгірша практика для підтримки</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Додаткові способи підключення CSS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">4. Імпорт CSS-файлів</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`/* У CSS-файлі */
@import url('typography.css');
@import url('colors.css');

/* Або з інтернету */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`}
                </pre>
                <p className="text-sm">Недолік: Блокує рендеринг сторінки до завантаження імпортованих файлів.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">5. Динамічне додавання через JavaScript</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`// Створення нового елемента link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles.css';

// Додавання до head документа
document.head.appendChild(link);`}
                </pre>
                <p className="text-sm">Використовується для умовного завантаження стилів або в JavaScript-застосунках.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'reset' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Reset CSS і Normalize CSS</h3>
          
          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <p>Різні браузери мають власні стилі за замовчуванням для HTML-елементів, що може призвести до непослідовного відображення. <strong>Reset</strong> та <strong>Normalize</strong> CSS допомагають забезпечити однакову базу для стилізації сторінки в усіх браузерах.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Reset CSS</h4>
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="mb-2"><strong>Що таке:</strong> Стилі, які обнуляють всі значення за замовчуванням у браузерах.</p>
                <p className="mb-2"><strong>Мета:</strong> Повністю скинути всі стилі браузера, щоб почати з "чистого аркуша".</p>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <h5 className="font-semibold mb-1">Основні особливості:</h5>
                <ul className="list-disc pl-5 text-sm">
                  <li>Видаляє всі відступи (margin, padding)</li>
                  <li>Нормалізує розмір шрифту</li>
                  <li>Скидає стилі списків</li>
                  <li>Усуває різницю між браузерами</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg">
                <h5 className="font-semibold mb-1">Приклад CSS Reset:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                  {cssResetExample}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Normalize CSS</h4>
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="mb-2"><strong>Що таке:</strong> Стилі, які нормалізують відображення елементів між браузерами, зберігаючи корисні значення за замовчуванням.</p>
                <p className="mb-2"><strong>Мета:</strong> Зробити рендеринг більш послідовним, зберігаючи корисні стилі браузера.</p>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <h5 className="font-semibold mb-1">Основні особливості:</h5>
                <ul className="list-disc pl-5 text-sm">
                  <li>Зберігає деякі корисні стилі за замовчуванням</li>
                  <li>Виправляє помилки та невідповідності браузерів</li>
                  <li>Покращує зручність використання</li>
                  <li>Пояснює, що робить код за допомогою коментарів</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg">
                <h5 className="font-semibold mb-1">Приклад Normalize CSS:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                  {cssNormalizeExample}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Популярні бібліотеки</h4>
              <ul className="list-disc pl-5">
                <li><a href="https://meyerweb.com/eric/tools/css/reset/" className="text-blue-600 hover:underline">Eric Meyer's Reset CSS</a> - класичний і широко використовуваний CSS Reset</li>
                <li><a href="https://necolas.github.io/normalize.css/" className="text-blue-600 hover:underline">Normalize.css</a> - найпопулярніша бібліотека нормалізації</li>
                <li><a href="https://github.com/jgthms/minireset.css" className="text-blue-600 hover:underline">MiniReset.css</a> - мінімалістичний підхід до скидання стилів</li>
                <li><a href="https://meyerweb.com/eric/tools/css/reset/" className="text-blue-600 hover:underline">Reboot</a> - частина Bootstrap, комбінує рестарт і нормалізацію</li>
              </ul>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Порівняння підходів</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2"></th>
                      <th className="border border-gray-300 p-2">Reset CSS</th>
                      <th className="border border-gray-300 p-2">Normalize CSS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2"><strong>Підхід</strong></td>
                      <td className="border border-gray-300 p-2">Обнуляє все</td>
                      <td className="border border-gray-300 p-2">Зберігає корисне, виправляє помилки</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2"><strong>Розмір</strong></td>
                      <td className="border border-gray-300 p-2">Зазвичай менший</td>
                      <td className="border border-gray-300 p-2">Трохи більший</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2"><strong>Необхідні додаткові стилі</strong></td>
                      <td className="border border-gray-300 p-2">Багато (все з нуля)</td>
                      <td className="border border-gray-300 p-2">Менше</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2"><strong>Підходить для</strong></td>
                      <td className="border border-gray-300 p-2">Повний кастомний дизайн</td>
                      <td className="border border-gray-300 p-2">Більшість проектів</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Як використовувати:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">1. CDN посилання:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`<!-- Normalize.css з CDN -->
<link rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

<!-- Або Reset CSS з CDN -->
<link rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">`}
                </pre>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">2. Завантаження та підключення:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`<!-- Завантажити та підключити як локальний файл -->
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="styles.css">

/* АБО імпортувати в ваш основний CSS-файл */
@import 'normalize.css';

/* Потім ваші власні стилі */
body {
  font-family: 'Arial', sans-serif;
}`}
                </pre>
                <p className="text-sm">Завжди підключайте Reset/Normalize <strong>перед</strong> вашими власними стилями!</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'structure' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Структура CSS-коду</h3>
          
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <p className="mb-2">Добре організований CSS-код - ключ до ефективної розробки та підтримки стилів. Організація коду повинна бути логічною та послідовною.</p>
            <p><strong>Загальний принцип:</strong> Розміщуйте стилі від загальних до конкретних, від базових до декоративних.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border rounded-lg shadow-sm">
              <div className="bg-gray-100 p-3 border-b">
                <h4 className="font-bold">Рекомендована структура CSS-файлу</h4>
              </div>
              <div className="p-4">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Загальні налаштування та змінні</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>CSS-змінні (custom properties)</li>
                      <li>Імпорти шрифтів</li>
                      <li>Базові налаштування</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Reset або Normalize CSS</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Скидання стилів браузера</li>
                      <li>Налаштування box-sizing</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Базові елементи</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Стилі для html, body</li>
                      <li>Типографіка (h1-h6, p, a, etc.)</li>
                      <li>Таблиці, списки, форми</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Компоненти інтерфейсу</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Кнопки, картки, панелі</li>
                      <li>Навігація, форми, модальні вікна</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Структурні елементи</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Хедер, футер, сайдбар</li>
                      <li>Макет сторінки</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Утиліти та допоміжні класи</strong>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Вирівнювання, відступи, кольори</li>
                      <li>Допоміжні класи</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Приклад організації CSS-файлу:</h4>
              <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto h-96">
                {cssStructureExample}
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Найкращі практики</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Починайте з Reset або Normalize CSS</li>
                <li>Використовуйте CSS-змінні для гнучкості</li>
                <li>Групуйте пов'язані стилі разом</li>
                <li>Використовуйте коментарі для поділу розділів</li>
                <li>Дотримуйтесь послідовного іменування класів</li>
                <li>Мінімізуйте специфічність селекторів</li>
                <li>Використовуйте логічний порядок властивостей</li>
              </ul>
            </div>
            
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Структура властивостей</h4>
              <p className="mb-2 text-sm">Дотримуйтесь логічного порядку CSS-властивостей в рамках селектора:</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li><strong>Позиціонування:</strong> position, top, left, z-index</li>
                <li><strong>Блокова модель:</strong> display, width, height, margin, padding</li>
                <li><strong>Типографіка:</strong> font, line-height, text-align, color</li>
                <li><strong>Візуальні стилі:</strong> background, border, border-radius</li>
                <li><strong>Трансформації та анімації:</strong> transform, transition, animation</li>
                <li><strong>Інше:</strong> cursor, overflow, etc.</li>
              </ol>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Коментарі в CSS</h4>
              <p className="mb-2 text-sm">Коментарі допомагають структурувати код і покращують його читабельність:</p>
              <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* ==========================================================================
   Головна навігація
   ========================================================================== */

/* Контейнер навігації */
.main-nav {
  background-color: #333;
}

/* Елементи навігації */
.main-nav-item {
  display: inline-block;
  margin-right: 1em;
} 

/* Активний елемент 
   (виділений стан) */
.main-nav-item.active {
  font-weight: bold;
}`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Методології організації CSS-коду</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">BEM (Block Element Modifier)</h5>
                <p className="text-sm mb-2">Методологія іменування класів для створення модульного CSS.</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`/* Блок */
.card { }

/* Елемент (частина блоку) */
.card__title { }
.card__image { }

/* Модифікатор (варіант) */
.card--featured { }
.card__title--large { }`}
                </pre>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">SMACSS / OOCSS / ITCSS</h5>
                <p className="text-sm mb-2">Альтернативні підходи для організації стилів:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>SMACSS:</strong> Поділ CSS на категорії (Base, Layout, Module, State, Theme)</li>
                  <li><strong>OOCSS:</strong> Відокремлення структури від оформлення, абстрагування повторюваних патернів</li>
                  <li><strong>ITCSS:</strong> Інвертована трикутна архітектура CSS, організація від загального до конкретного</li>
                  <li><strong>Atomic CSS:</strong> Малі, однофункціональні класи з одним призначенням</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg mt-4">
            <h4 className="font-bold mb-2">З чого почати писати CSS?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Загальний підхід:</h5>
                <ol className="list-decimal pl-5 text-sm space-y-1">
                  <li>Підключіть Reset або Normalize CSS</li>
                  <li>Налаштуйте загальні стилі та змінні</li>
                  <li>Пропишіть базові стилі для типографіки</li>
                  <li>Створіть сітку/макет сторінки</li>
                  <li>Додайте стилі для компонентів</li>
                  <li>Налаштуйте різні стани елементів</li>
                  <li>Створіть медіа-запити для адаптивності</li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Корисні початкові стилі:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Початкові глобальні налаштування */
*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --primary-color: #3498db;
  --text-color: #333;
  --background-color: #fff;
  --font-family: 'Arial', sans-serif;
}

body {
  font-family: var(--font-family);
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSBasicsSlide;