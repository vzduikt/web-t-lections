import React, { useState } from 'react';

const CSSFontsTypographySlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'connecting' | 'baseStyles' | 'bestPractices'>('connecting');
  const [showFontExample, setShowFontExample] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Підключення шрифтів в CSS та базові стилі тексту</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Правильне підключення шрифтів та налаштування типографіки є фундаментальними для створення якісного та зручного дизайну. Ці елементи суттєво впливають на читабельність і сприйняття контенту.</p>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'connecting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('connecting')}
        >
          Підключення шрифтів
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'baseStyles' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('baseStyles')}
        >
          Базові стилі тексту
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'bestPractices' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('bestPractices')}
        >
          Найкращі практики
        </button>
      </div>
      
      {activeSection === 'connecting' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Підключення шрифтів в CSS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Способи підключення шрифтів</h4>
                <p>Існує кілька способів підключити шрифти до вашого веб-сайту:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Використання системних шрифтів</li>
                  <li>Використання веб-шрифтів (@font-face)</li>
                  <li>Підключення через Google Fonts</li>
                  <li>Використання сервісів шрифтів (Adobe Fonts, Fonts.com)</li>
                  <li>Використання шрифтових іконок</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Системні шрифти</h4>
                <p className="mb-2">Системні шрифти — це шрифти, встановлені на пристрої користувача. Вони завантажуються найшвидше і не потребують додаткових запитів.</p>
                
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-2">
{`/* Сучасний системний стек шрифтів */
font-family: -apple-system, BlinkMacSystemFont, 
  "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, 
  Cantarell, "Helvetica Neue", sans-serif;

/* Моноширинний системний стек */
font-family: SFMono-Regular, Menlo, Monaco, 
  Consolas, "Liberation Mono", 
  "Courier New", monospace;`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">@font-face</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">Правило <code>@font-face</code> дозволяє завантажувати власні шрифти:</p>
                  
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/mycustomfont.woff2') format('woff2'),
       url('fonts/mycustomfont.woff') format('woff'),
       url('fonts/mycustomfont.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Використання */
body {
  font-family: 'MyCustomFont', sans-serif;
}`}
                  </pre>
                  
                  <div className="bg-blue-100 p-2 rounded text-sm">
                    <h5 className="font-bold mb-1">Важливі властивості @font-face:</h5>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><code>font-display</code>: контролює, як шрифт відображається під час завантаження</li>
                      <li><code>unicode-range</code>: дозволяє вказати діапазон символів</li>
                      <li><code>font-weight</code> і <code>font-style</code>: вказують варіації шрифту</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Google Fonts</h4>
                <p className="mb-2">Простий спосіб використання веб-шрифтів через CDN:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`<!-- HTML -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

/* CSS */
body {
  font-family: 'Roboto', sans-serif;
}

/* Альтернативний спосіб через @import в CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Формати шрифтів</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Сучасні формати:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>WOFF2</strong> - найкраще стиснення і продуктивність</li>
                  <li><strong>WOFF</strong> - хороша підтримка, сумісність</li>
                  <li><strong>TTF/OTF</strong> - для старіших браузерів</li>
                  <li><strong>Variable fonts</strong> - один файл з багатьма варіаціями</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Використання змінних шрифтів:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`@font-face {
  font-family: 'MyVariableFont';
  src: url('fonts/variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-stretch: 75% 125%;
}

/* Використання */
.heading {
  font-weight: 750;
  font-stretch: 110%;
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Продуктивність при завантаженні шрифтів</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Проблеми продуктивності:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Збільшення розміру сторінки</li>
                  <li>Додаткові HTTP-запити</li>
                  <li>Flash of Unstyled Text (FOUT)</li>
                  <li>Flash of Invisible Text (FOIT)</li>
                  <li>Затримка до першого змістовного рендерингу</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Стратегії оптимізації:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Використовуйте <code>font-display: swap</code></li>
                  <li>Завантажуйте тільки необхідні символи</li>
                  <li>Preload критичних шрифтів</li>
                  <li>Вбудовуйте критичні шрифти за допомогою data URI</li>
                  <li>Використовуйте підмножини шрифтів для різних мов</li>
                  <li>Використовуйте локальні версії шрифтів, якщо доступні</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'baseStyles' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Базові стилі тексту</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Основні властивості тексту</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>font-family</code>: шрифт або сімейство шрифтів</li>
                  <li><code>font-size</code>: розмір шрифту</li>
                  <li><code>font-weight</code>: товщина шрифту</li>
                  <li><code>line-height</code>: висота рядка</li>
                  <li><code>letter-spacing</code>: відстань між символами</li>
                  <li><code>word-spacing</code>: відстань між словами</li>
                  <li><code>text-align</code>: вирівнювання тексту</li>
                  <li><code>text-transform</code>: трансформація тексту</li>
                  <li><code>text-decoration</code>: декорування тексту</li>
                  <li><code>color</code>: колір тексту</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Налаштування розміру тексту</h4>
                <div className="mb-3">
                  <h5 className="font-semibold mb-1">Одиниці вимірювання:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><strong>px</strong>: фіксований розмір у пікселях</li>
                    <li><strong>em</strong>: відносно розміру шрифту батьківського елемента</li>
                    <li><strong>rem</strong>: відносно розміру шрифту кореневого елемента</li>
                    <li><strong>%</strong>: відсоток від батьківського розміру</li>
                    <li><strong>vw</strong>: відсоток від ширини вікна</li>
                    <li><strong>ch</strong>: ширина символу "0" у поточному шрифті</li>
                  </ul>
                </div>
                
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`html {
  font-size: 16px; /* Базовий розмір для rem */
}

h1 {
  font-size: 2rem;        /* 32px */
}

.intro {
  font-size: 1.125rem;    /* 18px */
}

.responsive-text {
  font-size: calc(1rem + 1vw);  /* Адаптивний розмір */
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Налаштування інтервалів</h4>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <h5 className="font-semibold mb-1">Базові інтервали:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li><code>line-height</code>: міжрядковий інтервал</li>
                      <li><code>letter-spacing</code>: міжсимвольний інтервал</li>
                      <li><code>word-spacing</code>: інтервал між словами</li>
                      <li><code>text-indent</code>: відступ першого рядка</li>
                    </ul>
                  </div>
                  
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`body {
  line-height: 1.5;     /* Рекомендоване значення для тексту */
  letter-spacing: 0.01em;   /* Незначний міжсимвольний інтервал */
}

h1, h2, h3 {
  line-height: 1.2;     /* Щільніші заголовки */
}

.all-caps {
  text-transform: uppercase;
  letter-spacing: 0.05em;  /* Більший інтервал для великих літер */
}

.quote {
  text-indent: 2em;     /* Відступ першого рядка цитати */
}

.narrow {
  letter-spacing: -0.01em; /* Від'ємний інтервал для щільнішого тексту */
}`}
                  </pre>
                  
                  <button
                    className="mb-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    onClick={() => setShowFontExample(!showFontExample)}
                  >
                    {showFontExample ? 'Сховати приклад' : 'Показати приклад типографіки'}
                  </button>
                  
                  {showFontExample && (
                    <div className="bg-white border p-4 rounded">
                      <h1 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.5rem' }}>Заголовок першого рівня</h1>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '0.5rem' }}>Заголовок другого рівня</h2>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '0.5rem' }}>Заголовок третього рівня</h3>
                      <p style={{ fontSize: '1rem', lineHeight: 1.5, marginBottom: '1rem' }}>Звичайний параграф тексту з нормальним міжрядковим інтервалом. Використовуйте розмір тексту і інтервали, які забезпечують хорошу читабельність на різних пристроях.</p>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#6b7280' }}>Менший текст для примітки або другорядної інформації.</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Вирівнювання тексту</h4>
                <p className="mb-2">Вирівнювання суттєво впливає на читабельність і сприйняття тексту:</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white p-2 rounded border">
                    <p className="text-center mb-1"><code>text-align: left;</code></p>
                    <p className="text-left text-sm">Цей текст вирівняний ліворуч. Це найбільш читабельний варіант для довгих текстів.</p>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <p className="text-center mb-1"><code>text-align: right;</code></p>
                    <p className="text-right text-sm">Цей текст вирівняний праворуч. Корисно для дат або окремих елементів.</p>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <p className="text-center mb-1"><code>text-align: center;</code></p>
                    <p className="text-center text-sm">Цей текст вирівняний по центру. Добре для заголовків.</p>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <p className="text-center mb-1"><code>text-align: justify;</code></p>
                    <p className="text-justify text-sm">Цей текст вирівняний по ширині. Може бути проблематичним для веб-сторінок.</p>
                  </div>
                </div>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.article {
  text-align: left;  /* Для основного тексту */
}

.article-header {
  text-align: center;  /* Для заголовків */
}

/* Уникайте вирівнювання по ширині без гіпенації */
.article p {
  text-align: justify;
  hyphens: auto;
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Трансформації та декорування тексту</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Трансформації тексту:</h5>
                <div className="bg-white p-3 rounded border mb-2">
                  <p><code>text-transform: none;</code> - <span>Звичайний текст</span></p>
                  <p><code>text-transform: uppercase;</code> - <span style={{ textTransform: 'uppercase' }}>ВСЕМИ ВЕЛИКИМИ</span></p>
                  <p><code>text-transform: lowercase;</code> - <span style={{ textTransform: 'lowercase' }}>всеми малими</span></p>
                  <p><code>text-transform: capitalize;</code> - <span style={{ textTransform: 'capitalize' }}>Перші Літери Великі</span></p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Декорування тексту:</h5>
                <div className="bg-white p-3 rounded border mb-2">
                  <p><code>text-decoration: none;</code> - <span>Без декорування</span></p>
                  <p><code>text-decoration: underline;</code> - <span style={{ textDecoration: 'underline' }}>Підкреслений текст</span></p>
                  <p><code>text-decoration: line-through;</code> - <span style={{ textDecoration: 'line-through' }}>Перекреслений текст</span></p>
                  <p><code>text-decoration: overline;</code> - <span style={{ textDecoration: 'overline' }}>Лінія зверху</span></p>
                </div>
                <p className="text-sm">Сучасний CSS дозволяє детально налаштувати лінії декорування:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.custom-underline {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  text-decoration-style: wavy;
  text-underline-offset: 3px;
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Додаткові можливості CSS для тексту</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Тіні та обводки:</h5>
                <div className="bg-white p-3 rounded border mb-2">
                  <p className="mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    <code>text-shadow</code>: Текст з тінню
                  </p>
                  <p style={{ WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>
                    <code>-webkit-text-stroke</code>: Текст з обводкою
                  </p>
                </div>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.text-outline {
  -webkit-text-stroke: 1px black;
  color: white;
}`}
                </pre>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Керування переносами:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><code>white-space</code>: контроль обробки пробілів</li>
                  <li><code>word-break</code>: контроль переносів слів</li>
                  <li><code>overflow-wrap</code>: перенос при переповненні</li>
                  <li><code>hyphens</code>: автоматичний перенос з дефісами</li>
                </ul>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-2">
{`.no-wrap {
  white-space: nowrap;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.break-anywhere {
  overflow-wrap: break-word;
  word-break: break-all;
}

.hyphenate {
  hyphens: auto;
  /* Потрібно вказати мову в HTML: lang="uk" */
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'bestPractices' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Найкращі практики типографіки</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Основні принципи типографіки</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Забезпечення <strong>читабельності</strong> (легкість читання)</li>
                  <li>Забезпечення <strong>розбірливості</strong> (чіткість символів)</li>
                  <li>Створення <strong>ієрархії</strong> інформації</li>
                  <li>Дотримання <strong>консистентності</strong> стилів</li>
                  <li>Забезпечення <strong>доступності</strong> тексту</li>
                  <li>Врахування <strong>адаптивності</strong> для різних пристроїв</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Базові налаштування типографіки</h4>
                <p className="mb-2">Починайте з надійної бази, яку можна потім налаштовувати:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Базові налаштування типографіки */
:root {
  --font-primary: system-ui, -apple-system, sans-serif;
  --font-secondary: Georgia, serif;
  --font-mono: monospace;
  
  --text-base-size: 1rem;      /* 16px */
  --text-scale-ratio: 1.25;    /* Major Third */
  
  --text-xs: calc(var(--text-base-size) / var(--text-scale-ratio));
  --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
  --text-md: calc(var(--text-sm) * var(--text-scale-ratio));
  --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
  --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
  --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
  
  --line-height-body: 1.5;
  --line-height-heading: 1.2;
  
  --font-weight-normal: 400;
  --font-weight-bold: 700;
}

/* Застосування змінних */
body {
  font-family: var(--font-primary);
  font-size: var(--text-base-size);
  line-height: var(--line-height-body);
}

h1 {
  font-size: var(--text-xxl);
  line-height: var(--line-height-heading);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: var(--text-xl);
  line-height: var(--line-height-heading);
}

small {
  font-size: var(--text-xs);
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Типографічна шкала</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">Типографічна шкала допомагає створити гармонійну ієрархію розмірів тексту:</p>
                  
                  <div className="bg-white border p-3 rounded mb-3">
                    <h1 style={{ fontSize: 'calc(1rem * 3)', lineHeight: 1.1, marginBottom: '0.25em' }}>Заголовок 1</h1>
                    <h2 style={{ fontSize: 'calc(1rem * 2.5)', lineHeight: 1.2, marginBottom: '0.25em' }}>Заголовок 2</h2>
                    <h1 style={{ fontSize: 'calc(1rem * 3)', lineHeight: 1.1, marginBottom: '0.25em' }}>Заголовок 1</h1>
<h2 style={{ fontSize: 'calc(1rem * 2.5)', lineHeight: 1.2, marginBottom: '0.25em' }}>Заголовок 2</h2>
<h3 style={{ fontSize: 'calc(1rem * 2)', lineHeight: 1.2, marginBottom: '0.25em' }}>Заголовок 3</h3>
<h4 style={{ fontSize: 'calc(1rem * 1.5)', lineHeight: 1.3, marginBottom: '0.25em' }}>Заголовок 4</h4>
<h5 style={{ fontSize: 'calc(1rem * 1.25)', lineHeight: 1.4, marginBottom: '0.25em' }}>Заголовок 5</h5>
<p style={{ fontSize: '1rem', lineHeight: 1.5, marginBottom: '0.5em' }}>Основний текст (16px)</p>
<p style={{ fontSize: 'calc(1rem * 0.875)', lineHeight: 1.5, marginBottom: '0.5em' }}>Малий текст (14px)</p>
<p style={{ fontSize: 'calc(1rem * 0.75)', lineHeight: 1.5 }}>Дуже малий текст (12px)</p>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">Типи типографічних шкал:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li><strong>Major Third (1.25)</strong> - класична шкала для веб</li>
                      <li><strong>Perfect Fourth (1.333)</strong> - більш виражена ієрархія</li>
                      <li><strong>Golden Ratio (1.618)</strong> - контрастна шкала</li>
                      <li><strong>Custom</strong> - підлаштована під проект</li>
                    </ul>
                  </div>
                  
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Типографічна шкала з Perfect Fourth (1.333) */
:root {
  --ratio: 1.333;
  --s-5: calc(var(--s-4) / var(--ratio));
  --s-4: calc(var(--s-3) / var(--ratio));
  --s-3: calc(var(--s-2) / var(--ratio));
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: 1rem;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));
}

h1 { font-size: var(--s5); }
h2 { font-size: var(--s4); }
h3 { font-size: var(--s3); }
h4 { font-size: var(--s2); }
h5 { font-size: var(--s1); }
p  { font-size: var(--s0); }
small { font-size: var(--s-1); }`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Вибір шрифтів</h4>
                <p className="mb-2">Рекомендації щодо вибору шрифтів для вашого проекту:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Зазвичай обмежтесь 2-3 шрифтами на проект</li>
                  <li>Обирайте шрифти з хорошою читабельністю для основного тексту</li>
                  <li>Перевіряйте читабельність на різних розмірах екрану</li>
                  <li>Враховуйте підтримку різних мов та символів</li>
                  <li>Звертайте увагу на ліцензії шрифтів</li>
                  <li>Обирайте шрифти, які мають кілька варіацій ваги та стилю</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Найкращі практики для читабельності</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Оптимальні налаштування:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Розмір основного тексту: 16-20px</li>
                  <li>Висота рядка: 1.5-1.6 для основного тексту</li>
                  <li>Довжина рядка: 45-75 символів (включаючи пробіли)</li>
                  <li>Контраст: співвідношення не менше 4.5:1 (AA стандарт)</li>
                  <li>Міжабзацний відступ: більший за міжрядковий</li>
                  <li>Відступи між абзацами замість відступу першого рядка для веб</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Практичне застосування:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Базові налаштування для максимальної читабельності */
.article {
  font-size: clamp(1rem, 0.8rem + 0.8vw, 1.25rem);
  line-height: 1.6;
  max-width: 70ch;  /* Приблизно 70 символів у рядку */
  
  /* Простір для читання */
  padding: 1rem;
  margin: 0 auto;
  
  /* Відступи між абзацами */
  & p + p {
    margin-top: 1.5em;
  }
}

/* Зміни для темної теми */
@media (prefers-color-scheme: dark) {
  .article {
    color: rgba(255, 255, 255, 0.87);
    line-height: 1.7;  /* Трохи більший міжрядковий інтервал для темного фону */
  }
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Адаптивна типографіка</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Підходи до адаптивності:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Використання fluid typography з <code>clamp()</code></li>
                  <li>Використання view units (vw) з обмеженнями</li>
                  <li>Застосування різних розмірів для різних брейкпоінтів</li>
                  <li>Використання CSS змінних для централізованих змін</li>
                  <li>Збільшення читабельності на малих екранах</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Приклад адаптивної типографіки:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Адаптивна типографіка з мінімальним та максимальним розміром */
:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1200;
  
  --fluid-min-size: 16;
  --fluid-max-size: 20;
  --fluid-min-header: 24;
  --fluid-max-header: 60;
}

body {
  /* мінімальне значення + значення яке змінюється від vw + максимальне значення */
  font-size: clamp(
    var(--fluid-min-size) * 1px,
    calc(var(--fluid-min-size) * 1px + (var(--fluid-max-size) - var(--fluid-min-size)) * 
      ((100vw - (var(--fluid-min-width) * 1px)) / 
        (var(--fluid-max-width) - var(--fluid-min-width)))),
    var(--fluid-max-size) * 1px
  );
}

h1 {
  font-size: clamp(
    var(--fluid-min-header) * 1px,
    calc(var(--fluid-min-header) * 1px + (var(--fluid-max-header) - var(--fluid-min-header)) * 
      ((100vw - (var(--fluid-min-width) * 1px)) / 
        (var(--fluid-max-width) - var(--fluid-min-width)))),
    var(--fluid-max-header) * 1px
  );
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Доступність тексту</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Основні рекомендації:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Достатній контраст тексту (WCAG AA: 4.5:1, AAA: 7:1)</li>
                  <li>Не використовуйте тільки колір для передачі інформації</li>
                  <li>Мінімальний розмір тексту 16px для читабельності</li>
                  <li>Не використовуйте justify для вирівнювання без гіпенації</li>
                  <li>Використовуйте розумні співвідношення розмірів заголовків</li>
                  <li>Забезпечте достатній простір між рядками і абзацами</li>
                  <li>Враховуйте масштабування тексту користувачем</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Технічні рекомендації:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`/* Базові налаштування для доступності */
body {
  /* Мінімальний розмір для читабельності */
  font-size: 1rem;
  
  /* Достатній інтервал */
  line-height: 1.5;
  
  /* Дозволити користувачеві масштабувати текст */
  -webkit-text-size-adjust: 100%;
  
  /* Високий контраст за замовчуванням */
  color: #222;
  background-color: #fff;
}

/* Чітка ієрархія заголовків */
h1 { font-size: 2.5rem; margin-bottom: 0.5em; }
h2 { font-size: 2rem; margin-bottom: 0.5em; }
h3 { font-size: 1.75rem; margin-bottom: 0.5em; }
h4 { font-size: 1.5rem; margin-bottom: 0.5em; }
h5 { font-size: 1.25rem; margin-bottom: 0.5em; }
h6 { font-size: 1.1rem; margin-bottom: 0.5em; }

/* Режим високої контрастності */
@media (prefers-contrast: high) {
  body {
    color: #000;
    background-color: #fff;
  }
  
  a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}`}
                </pre>
                <p className="text-sm font-semibold">Перевіряйте контраст за допомогою інструментів, таких як WebAIM Contrast Checker, та тестуйте сайт з використанням екранних читачів.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSFontsTypographySlide;