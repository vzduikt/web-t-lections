import React, { useState } from 'react';

const CSSIntroSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'what' | 'why' | 'evolution'>('what');
  
  const htmlExample = `<div class="card">
  <h2 class="card-title">Назва картки</h2>
  <p class="card-text">Вміст картки</p>
  <button class="card-button">Дізнатися більше</button>
</div>`;

  const cssExample = `.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.card-title {
  color: #333;
  font-size: 18px;
  margin-bottom: 8px;
}

.card-text {
  color: #666;
  font-size: 14px;
}

.card-button {
  background-color: #4a7aff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}`;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Стилізація веб-сторінок за допомогою CSS</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">CSS (Cascading Style Sheets) - це мова, яка використовується для опису зовнішнього вигляду і форматування документів, написаних мовою розмітки, такою як HTML.</p>
      </div>
      
      <div className="flex border-b mb-6">
        <button 
          className={`p-3 ${activeTab === 'what' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('what')}
        >
          Що таке CSS?
        </button>
        <button 
          className={`p-3 ${activeTab === 'why' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('why')}
        >
          Навіщо потрібен CSS?
        </button>
        <button 
          className={`p-3 ${activeTab === 'evolution' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('evolution')}
        >
          Еволюція CSS
        </button>
      </div>
      
      {activeTab === 'what' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Що таке CSS?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>CSS</strong> - Cascading Style Sheets (Каскадні таблиці стилів)</li>
              <li>Мова стилів, що використовується для опису представлення документа, написаного HTML</li>
              <li>Дозволяє відокремити зміст (HTML) від оформлення (CSS)</li>
              <li>Контролює кольори, шрифти, розміри, відступи, позиціонування та інші аспекти зовнішнього вигляду</li>
              <li>Містить <strong>селектори</strong> (для вибору елементів) та <strong>декларації</strong> (для задання стилів)</li>
            </ul>
            
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="font-semibold mb-1">CSS означає "каскадні" таблиці стилів, тому що:</p>
              <ul className="list-disc pl-5">
                <li>Стилі "спадають" від батьківських елементів до дочірніх</li>
                <li>Різні джерела стилів комбінуються за певними правилами</li>
                <li>Більш специфічні правила мають вищий пріоритет</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Базовий синтаксис CSS</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`селектор {
  властивість: значення;
  властивість: значення;
}`}
              </pre>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Приклад:</p>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`.header {
  background-color: #3498db;
  color: white;
  padding: 20px;
}`}
                </pre>
                <p className="mt-2 text-sm">Цей стиль застосується до всіх елементів з класом "header", задаючи їм синій фон, білий текст та внутрішній відступ 20 пікселів.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'why' && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Навіщо потрібен CSS?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">До CSS:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Стилізація виконувалась прямо в HTML з допомогою атрибутів (<code>bgcolor</code>, <code>font</code>, <code>align</code>)</li>
                <li>Дублювання коду стилізації</li>
                <li>Неможливість централізованого керування стилями</li>
                <li>Обмежені можливості оформлення</li>
                <li>Складно підтримувати великі проекти</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">З CSS:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Розділення контенту (HTML) і представлення (CSS)</li>
                <li>Централізоване керування стилями</li>
                <li>Повторне використання стилів</li>
                <li>Гнучкість і багатий вибір можливостей оформлення</li>
                <li>Полегшена підтримка, менший розмір файлів</li>
                <li>Адаптивний дизайн для різних пристроїв</li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-bold mb-2">Приклад порівняння:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1">HTML із вбудованими стилями (старий підхід):</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`<div style="background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 16px;">
  <h2 style="color: #333; font-size: 18px; margin-bottom: 8px;">Назва картки</h2>
  <p style="color: #666; font-size: 14px;">Вміст картки</p>
  <button style="background-color: #4a7aff; color: white; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer;">Дізнатися більше</button>
</div>`}
              </pre>
            </div>
            
            <div>
              <p className="font-semibold mb-1">HTML з CSS (сучасний підхід):</p>
              <div className="flex flex-col h-full">
                <pre className="bg-gray-800 text-white p-3 rounded-t text-sm overflow-auto mb-0 flex-shrink-0">
                  {htmlExample}
                </pre>
                <pre className="bg-gray-800 text-white p-3 rounded-b text-sm overflow-auto flex-grow">
                  {cssExample}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'evolution' && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Еволюція CSS</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold">CSS1 (1996)</h4>
              <p>Перша версія CSS, що включала базові функції: шрифти, кольори, текст, відступи, поля, розміри.</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold">CSS2 (1998) і CSS 2.1 (2004-2011)</h4>
              <p>Додавання позиціонування, z-index, медіа-запитів, покращена підтримка таблиць і селекторів.</p>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-bold">CSS3 (2000-наш час)</h4>
              <p>Модульний підхід до розробки. CSS розбито на модулі, які розвиваються окремо:</p>
              <ul className="list-disc pl-5 mt-2 grid grid-cols-2 gap-x-4">
                <li>Селектори</li>
                <li>Фон і границі</li>
                <li>Трансформації</li>
                <li>Анімації</li>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Градієнти</li>
                <li>Тіні та ефекти</li>
                <li>Медіа-запити</li>
                <li>Змінні (custom properties)</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-bold">Сучасні можливості CSS (CSS4+)</h4>
              <ul className="list-disc pl-5">
                <li><strong>CSS Grid</strong> і <strong>Flexbox</strong> - сучасні інструменти для верстки</li>
                <li><strong>CSS Variables</strong> - для повторного використання значень</li>
                <li><strong>Calc()</strong> - динамічні обчислення розмірів</li>
                <li><strong>Css-in-JS</strong> - інтеграція з JavaScript-фреймворками</li>
                <li><strong>Container queries</strong> - адаптивний дизайн на рівні компонентів</li>
                <li><strong>Logical properties</strong> - для кращої підтримки різних мов і напрямків тексту</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Ключові поняття CSS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Селектори</h4>
            <p className="text-sm">Визначають, які елементи обираються для стилізації</p>
          </div>
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Властивості</h4>
            <p className="text-sm">Параметри елементів, які можна змінювати (колір, розмір, тощо)</p>
          </div>
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Значення</h4>
            <p className="text-sm">Конкретні налаштування для властивостей</p>
          </div>
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Каскад</h4>
            <p className="text-sm">Правила перекриття та об'єднання стилів з різних джерел</p>
          </div>
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Специфічність</h4>
            <p className="text-sm">Визначає пріоритет стилів при конфліктах</p>
          </div>
          <div className="bg-white rounded shadow p-3">
            <h4 className="font-bold">Наслідування</h4>
            <p className="text-sm">Передача стилів від батьківських елементів до дочірніх</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSIntroSlide;