import React, { useState } from 'react';

const CSSCascadeSpecificitySlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'cascade' | 'specificity' | 'nesting'>('cascade');
  const [showSpecificityExample, setShowSpecificityExample] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Каскадність, специфічність і вкладеність в CSS</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Розуміння каскадності та специфічності є фундаментальним для ефективного використання CSS. Ці концепції визначають, які стилі застосовуються до елементів при конфліктах правил.</p>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'cascade' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('cascade')}
        >
          Каскадність
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'specificity' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('specificity')}
        >
          Специфічність
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'nesting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('nesting')}
        >
          Вкладеність селекторів
        </button>
      </div>
      
      {activeSection === 'cascade' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Каскадність в CSS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке каскад?</h4>
                <p>Каскад - це базовий принцип CSS (Cascading Style Sheets), який визначає, як комбінуються декілька джерел стилів і як вирішуються конфлікти між ними.</p>
                <p className="mt-2">Коли кілька конфліктуючих правил застосовуються до одного елемента, CSS використовує <strong>алгоритм каскаду</strong> для визначення, яке правило має пріоритет.</p>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Порядок пріоритетності в каскаді (від вищого до нижчого):</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li><strong>!important</strong> оголошення</li>
                  <li><strong>Вбудовані стилі</strong> (атрибут style)</li>
                  <li><strong>ID селектори</strong> (#header)</li>
                  <li><strong>Класи</strong> (.button), <strong>атрибути</strong> ([type="text"]), <strong>псевдокласи</strong> (:hover)</li>
                  <li><strong>Типи елементів</strong> (h1, p, div) і <strong>псевдоелементи</strong> (::before)</li>
                  <li><strong>Універсальний селектор</strong> (*)</li>
                  <li><strong>Успадковані стилі</strong> (передані від батьківських елементів)</li>
                </ol>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Приклад каскаду</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">У випадку конфлікту CSS-правил, переможе правило з вищим пріоритетом у каскаді:</p>
                  
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-3">
{`/* CSS правила */
p {
  color: blue;        /* Селектор типу */
}

.text {
  color: green;       /* Селектор класу */
}

#unique {
  color: purple;      /* Селектор ID */
}

p.text {
  color: red;         /* Комбінований селектор */
}

p[data-type="special"] {
  color: orange;      /* Селектор атрибута */
}

/* Вбудований стиль перекриває всі стилі вище */
<p style="color: pink;">Текст</p>`}
                  </pre>
                  
                  <div className="mb-3">
                    <p className="font-bold text-sm mb-1">Порядок застосування (від слабшого до сильнішого):</p>
                    <ol className="list-decimal pl-5 text-sm">
                      <li>
                        <code className="text-blue-600">p {'{'} color: blue; {'}'}</code>
                        <span className="ml-2 text-gray-500">(найнижчий пріоритет)</span>
                      </li>
                      <li>
                        <code className="text-green-600">.text {'{'} color: green; {'}'}</code>
                      </li>
                      <li>
                        <code className="text-red-600">p.text {'{'} color: red; {'}'}</code>
                      </li>
                      <li>
                        <code className="text-orange-600">p[data-type="special"] {'{'} color: orange; {'}'}</code>
                      </li>
                      <li>
                        <code className="text-purple-600">#unique {'{'} color: purple; {'}'}</code>
                      </li>
                      <li>
                        <code className="text-pink-500">&lt;p style="color: pink;"&gt;</code>
                        <span className="ml-2 text-gray-500">(найвищий пріоритет)</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold mb-2">Правило !important</h4>
                <p className="text-sm mb-2">Оголошення з ключовим словом <code>!important</code> перевизначає всі інші правила для відповідної властивості:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.element {
  color: red !important;   /* Це правило матиме пріоритет */
}

#unique {
  color: blue;             /* Буде перекрито вище */
}

/* Навіть це буде перекрито: */
<div style="color: green;">Текст</div>`}
                </pre>
                <p className="text-sm mt-2 text-red-500 font-semibold">⚠️ Використовуйте !important дуже обережно - це може ускладнити підтримку коду!</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Порядок оголошення та джерело стилів</h4>
            <p className="mb-3">Якщо правила мають однакову специфічність, застосовується останнє оголошене правило.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Порядок джерел стилів (від нижчого до вищого):</h5>
                <ol className="list-decimal pl-5 text-sm">
                  <li>Стилі браузера за замовчуванням (user agent styles)</li>
                  <li>Стилі користувача (user styles)</li>
                  <li>Стилі автора сторінки (author styles):
                    <ul className="list-disc pl-5 mt-1">
                      <li>Зовнішні таблиці стилів (external)</li>
                      <li>Вбудовані стилі в head (internal)</li>
                      <li>Вбудовані стилі в елементах (inline)</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Приклад порядку оголошення:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* style.css */
.element {
  color: red;         /* Перекрито наступним */
  color: blue;        /* Це буде застосовано */
}

/* Якщо потім в іншому файлі: */
.element {
  color: green;       /* Це перекриває попереднє */
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'specificity' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Специфічність селекторів</h3>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>Специфічність - це вага селектора, яка визначає, який стиль застосовується при конфлікті. Чим вища специфічність, тим більше значення має селектор.</p>
            <p className="mt-2">Специфічність розраховується на основі кількості ID, класів та елементів у селекторі.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Як розраховується специфічність:</h4>
              <div className="bg-white border rounded-lg p-4 mb-4">
                <p>Специфічність представляється як значення:</p>
                <p className="text-center font-bold my-2">(A, B, C, D)</p>
                <p className="mb-2">Де:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>A</strong>: Вбудовані стилі (style="...")</li>
                  <li><strong>B</strong>: Кількість ID селекторів (#id)</li>
                  <li><strong>C</strong>: Кількість класів (.class), атрибутів ([attr]) і псевдокласів (:hover)</li>
                  <li><strong>D</strong>: Кількість елементів (div) і псевдоелементів (::before)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Приклади специфічності селекторів:</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-yellow-200">
                      <th className="border border-yellow-300 p-2 text-left">Селектор</th>
                      <th className="border border-yellow-300 p-2 text-left">Специфічність</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>*</code></td>
                      <td className="border border-yellow-300 p-2">(0, 0, 0, 0)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>li</code></td>
                      <td className="border border-yellow-300 p-2">(0, 0, 0, 1)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>ul li</code></td>
                      <td className="border border-yellow-300 p-2">(0, 0, 0, 2)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>.active</code></td>
                      <td className="border border-yellow-300 p-2">(0, 0, 1, 0)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>li.active</code></td>
                      <td className="border border-yellow-300 p-2">(0, 0, 1, 1)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>#nav</code></td>
                      <td className="border border-yellow-300 p-2">(0, 1, 0, 0)</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 p-2"><code>style="..."</code></td>
                      <td className="border border-yellow-300 p-2">(1, 0, 0, 0)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Розширений приклад специфічності:</h4>
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowSpecificityExample(!showSpecificityExample)}
              >
                {showSpecificityExample ? 'Сховати інтерактивний приклад' : 'Показати інтерактивний приклад'}
              </button>
              
              {showSpecificityExample && (
                <div className="bg-white rounded-lg shadow-md border p-4 mb-4">
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">HTML:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`<article id="post-1" class="post featured">
  <h2 class="post-title">Заголовок статті</h2>
  <div class="post-content">
    <p class="intro">Це <span class="highlight">важливий</span> текст.</p>
    <p>Звичайний параграф тексту.</p>
  </div>
</article>`}
                    </pre>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">CSS правила (в порядку зростання специфічності):</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code>p</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,0,0,1) - 0001</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>article p</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,0,0,2) - 0002</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>.post p</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,0,1,1) - 0101</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>.post .post-content p</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,0,2,1) - 0201</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>#post-1 p</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,1,0,1) - 1001</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>#post-1 .post-content .intro</code>
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">(0,1,2,0) - 1200</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Важливі особливості специфічності:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Універсальний селектор (*) має нульову специфічність</li>
                  <li>Псевдокласи (:hover, :first-child) мають таку ж специфічність, як і класи</li>
                  <li>Псевдоелементи (::before, ::after) мають таку ж специфічність, як і елементи</li>
                  <li>Селектор <code>:not()</code> не додає специфічності, але його вміст додає</li>
                  <li>Вбудовані стилі мають найвищу специфічність, але можуть бути перекриті за допомогою !important</li>
                  <li>Комбіновані селектори додають специфічність кожного з компонентів</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Проблеми високої специфічності:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Проблеми:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Складно перевизначити стилі</li>
                  <li>Призводить до використання !important</li>
                  <li>Ускладнює підтримку та рефакторинг</li>
                  <li>Робить CSS менш модульним</li>
                  <li>Спричиняє дублювання коду</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Рекомендації:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Уникайте ID-селекторів (#id) для стилізації</li>
                  <li>Віддавайте перевагу класам (.class)</li>
                  <li>Обмежуйте глибину вкладеності селекторів</li>
                  <li>Використовуйте BEM або інші методології для уникнення конфліктів</li>
                  <li>Уникайте !important</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'nesting' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Вкладеність селекторів</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Вкладеність селекторів в CSS</h4>
                <p>Вкладеність селекторів - це коли ви використовуєте комбінацію селекторів для націлювання на елементи в DOM-дереві.</p>
                <p className="mt-2">Приклад вкладеного селектора:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-2">
{`.header .nav .nav-item a { color: blue; }`}
                </pre>
              </div>
              
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Проблеми надмірної вкладеності:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Висока специфічність</strong> - ускладнює перевизначення стилів</li>
                  <li><strong>Тісне зчеплення з HTML</strong> - зміна структури HTML вимагає зміни CSS</li>
                  <li><strong>Менша продуктивність</strong> - браузеру складніше обробляти</li>
                  <li><strong>Погана читабельність</strong> - складно відслідковувати довгі селектори</li>
                  <li><strong>Важче підтримувати</strong> - зміни в одному місці можуть вплинути на інші</li>
                </ul>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Рекомендації щодо вкладеності:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Обмежуйте глибину вкладеності 2-3 рівнями</li>
                  <li>Віддавайте перевагу класам замість глибокої вкладеності</li>
                  <li>Використовуйте BEM або інші методології для зменшення необхідності вкладеності</li>
                  <li>Використовуйте селектори нащадків (space) тільки за необхідності</li>
                  <li>Використовуйте селектори дітей ({'>'}) для обмеження вкладеності</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Приклади вкладеності селекторів:</h4>
              
              <div className="bg-white border rounded-lg shadow-sm mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h5 className="font-semibold">❌ Погана практика</h5>
                </div>
                <div className="p-4">
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Занадто глибока вкладеність */
.header .nav ul li a span.text {
  color: blue;
}

/* Підвищення специфічності без необхідності */
div.container div.content article.post h2.title {
  font-size: 24px;
}

/* Надмірно конкретний селектор */
body .main-content .sidebar .widget .widget-title {
  margin-bottom: 10px;
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg shadow-sm mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h5 className="font-semibold">✅ Хороша практика</h5>
                </div>
                <div className="p-4">
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Використання класів замість глибокої вкладеності */
.nav-link {
  color: blue;
}

/* Використання BEM для уникнення вкладеності */
.post__title {
  font-size: 24px;
}

/* Цілеспрямоване використання дочірнього селектора */
.widget > .widget__title {
  margin-bottom: 10px;
}

/* Використання комбінатора прямого нащадка */
.article-list > li {
  margin-bottom: 10px;
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Типи селекторів і їх використання:</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="border border-blue-300 p-2 text-left">Тип селектора</th>
                      <th className="border border-blue-300 p-2 text-left">Синтаксис</th>
                      <th className="border border-blue-300 p-2 text-left">Опис</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-300 p-2">Нащадок</td>
                      <td className="border border-blue-300 p-2"><code>A B</code></td>
                      <td className="border border-blue-300 p-2">Вибирає всі B всередині A, на будь-якому рівні</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-2">Дочірній</td>
                      <td className="border border-blue-300 p-2"><code>A {'>'} B</code></td>
                      <td className="border border-blue-300 p-2">Вибирає тільки безпосередні B всередині A</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-2">Суміжний</td>
                      <td className="border border-blue-300 p-2"><code>A + B</code></td>
                      <td className="border border-blue-300 p-2">Вибирає B, який йде безпосередньо після A</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 p-2">Братський</td>
                      <td className="border border-blue-300 p-2"><code>A ~ B</code></td>
                      <td className="border border-blue-300 p-2">Вибирає всі B після A з тим самим батьком</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Модульний підхід замість вкладеності:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Принципи модульного CSS:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Компоненти повинні бути незалежними</li>
                  <li>Класи описують компонент, а не його місце в DOM</li>
                  <li>Стилі не повинні залежати від розташування</li>
                  <li>Модифікації задаються додатковими класами</li>
                  <li>Повторювані патерни виносяться в утиліти</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Приклад модульного підходу:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Замість */
.post .title { ... }

/* Використовуйте модульний підхід */
.post-title { ... }

/* Модифікації через додаткові класи */
.post-title--large { ... }
.post-title--featured { ... }

/* Загальні утиліти */
.text-center { text-align: center; }
.mb-10 { margin-bottom: 10px; }`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Сучасні підходи до керування специфічністю:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Методології CSS:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>BEM</strong> (Block, Element, Modifier) - структурований підхід до іменування класів</li>
                  <li><strong>OOCSS</strong> (Object-Oriented CSS) - розділення структури та зовнішнього вигляду</li>
                  <li><strong>SMACSS</strong> (Scalable and Modular Architecture for CSS) - категоризація CSS-правил</li>
                  <li><strong>Atomic CSS</strong> - маленькі одноцільові класи</li>
                  <li><strong>Utility-First</strong> (Tailwind CSS) - створення інтерфейсів за допомогою утилітарних класів</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Сучасні технології:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>CSS Modules</strong> - локалізація стилів на рівні файлів</li>
                  <li><strong>CSS-in-JS</strong> - повна інкапсуляція стилів на рівні компонентів</li>
                  <li><strong>Shadow DOM</strong> - інкапсуляція на рівні браузера</li>
                  <li><strong>CSS Scoping</strong> - майбутній стандарт для локалізації стилів</li>
                  <li><strong>Container Queries</strong> - стилізація на основі розміру контейнера, не тільки вікна</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Підсумок: Баланс між специфічністю та вкладеністю</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Використовуйте низьку специфічність за замовчуванням</li>
              <li>Структуруйте CSS для запобігання конфліктам, а не боротьби з ними</li>
              <li>Обмежуйте вкладеність для кращої підтримки коду</li>
              <li>Використовуйте методології для організації CSS</li>
              <li>Пам'ятайте, що стилі можуть взаємодіяти непередбачувано через каскад і вкладеність</li>
              <li>Обирайте правильні інструменти та підходи відповідно до вимог проекту</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSCascadeSpecificitySlide;