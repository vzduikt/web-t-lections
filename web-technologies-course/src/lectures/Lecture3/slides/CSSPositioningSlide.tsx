import React, { useState } from 'react';

const CSSPositioningSlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'basics' | 'types' | 'zIndex' | 'bestPractices'>('basics');
  const [positionType, setPositionType] = useState<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>('static');
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Позиціонування в CSS</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Позиціонування в CSS дозволяє керувати розміщенням елементів на сторінці. Різні методи позиціонування мають свої особливості та сценарії використання, що впливають на поведінку елементів та їхню взаємодію.</p>
      </div>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'basics' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('basics')}
        >
          Основи позиціонування
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'types' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('types')}
        >
          Типи позиціонування
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'zIndex' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('zIndex')}
        >
          z-index і стекінг
        </button>
        <button
          className={`px-4 py-2 mb-2 rounded ${activeSection === 'bestPractices' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('bestPractices')}
        >
          Найкращі практики
        </button>
      </div>
      
      {activeSection === 'basics' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Основи позиціонування в CSS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке позиціонування?</h4>
                <p>Позиціонування в CSS визначає, як елемент розташовується на веб-сторінці. Воно впливає на потік документа та взаємодію елемента з іншими елементами.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Керує розміщенням елементів</li>
                  <li>Впливає на потік документа</li>
                  <li>Дозволяє створювати складні макети</li>
                  <li>Дає можливість розміщувати елементи відносно вікна, документа або інших елементів</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Властивість position</h4>
                <p className="mb-2">Основою позиціонування є властивість <code>position</code>, яка може мати такі значення:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-yellow-200">
                        <th className="border border-yellow-300 p-2 text-left">Значення</th>
                        <th className="border border-yellow-300 p-2 text-left">Опис</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>static</code></td>
                        <td className="border border-yellow-300 p-2">За замовчуванням. Елемент розміщується відповідно до нормального потоку документа.</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>relative</code></td>
                        <td className="border border-yellow-300 p-2">Зміщення відносно нормальної позиції елемента.</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>absolute</code></td>
                        <td className="border border-yellow-300 p-2">Позиціонування відносно найближчого позиціонованого предка.</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>fixed</code></td>
                        <td className="border border-yellow-300 p-2">Позиціонування відносно вікна перегляду.</td>
                      </tr>
                      <tr>
                        <td className="border border-yellow-300 p-2"><code>sticky</code></td>
                        <td className="border border-yellow-300 p-2">Гібрид relative і fixed. "Прилипає" при досягненні певної позиції.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Властивості позиціонування</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">Для керування позицією елемента використовуються додаткові властивості:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse mb-4">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2 text-left">Властивість</th>
                          <th className="border p-2 text-left">Опис</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2"><code>top</code></td>
                          <td className="border p-2">Відстань від верхнього краю</td>
                        </tr>
                        <tr>
                          <td className="border p-2"><code>right</code></td>
                          <td className="border p-2">Відстань від правого краю</td>
                        </tr>
                        <tr>
                          <td className="border p-2"><code>bottom</code></td>
                          <td className="border p-2">Відстань від нижнього краю</td>
                        </tr>
                        <tr>
                          <td className="border p-2"><code>left</code></td>
                          <td className="border p-2">Відстань від лівого краю</td>
                        </tr>
                        <tr>
                          <td className="border p-2"><code>z-index</code></td>
                          <td className="border p-2">Порядок накладання елементів</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-sm mb-2">Приклад використання властивостей позиціонування:</p>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`.element {
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 10;
}

.another-element {
  position: relative;
  bottom: 15px;
  right: 5px;
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Позиціонування і потік документа</h4>
                <p className="mb-2">Різні типи позиціонування по-різному впливають на потік документа:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>static, relative, sticky</strong>: залишаються в потоці документа і займають простір</li>
                  <li><strong>absolute, fixed</strong>: видаляються з потоку документа і не займають простір</li>
                </ul>
                <div className="bg-white p-3 rounded-lg mt-3">
                  <h5 className="font-semibold text-sm mb-1">Візуальне представлення:</h5>
                  <div className="relative bg-gray-200 h-40 p-3">
                    <div className="bg-blue-200 p-2 mb-2">Елемент у потоці</div>
                    <div className="bg-green-200 p-2 mb-2">Ще один елемент у потоці</div>
                    <div className="absolute top-10 right-10 bg-red-200 p-2 border border-red-500">
                      Absolute елемент (поза потоком)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Відмінності між типами позиціонування</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-200">
                    <th className="border border-green-300 p-2 text-left">Тип</th>
                    <th className="border border-green-300 p-2 text-left">В потоці?</th>
                    <th className="border border-green-300 p-2 text-left">Відносно чого?</th>
                    <th className="border border-green-300 p-2 text-left">Працюють властивості top, right, bottom, left?</th>
                    <th className="border border-green-300 p-2 text-left">Особливості</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-300 p-2"><code>static</code></td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Нормальний потік</td>
                    <td className="border border-green-300 p-2">Ні</td>
                    <td className="border border-green-300 p-2">Типова поведінка за замовчуванням</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 p-2"><code>relative</code></td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Власна нормальна позиція</td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Зміщення не впливає на інші елементи</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 p-2"><code>absolute</code></td>
                    <td className="border border-green-300 p-2">Ні</td>
                    <td className="border border-green-300 p-2">Найближчий позиціонований предок</td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Якщо немає позиціонованого предка, відносно document</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 p-2"><code>fixed</code></td>
                    <td className="border border-green-300 p-2">Ні</td>
                    <td className="border border-green-300 p-2">Вікно перегляду (viewport)</td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Залишається на місці при прокрутці</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 p-2"><code>sticky</code></td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">Спочатку як relative, потім як fixed</td>
                    <td className="border border-green-300 p-2">Так</td>
                    <td className="border border-green-300 p-2">"Прилипає" при досягненні порогового значення</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'types' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Типи позиціонування</h3>
          
          <div className="mb-6">
            <h4 className="font-bold mb-2">Інтерактивна демонстрація</h4>
            <p className="mb-2">Оберіть тип позиціонування, щоб побачити різницю:</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`px-3 py-1 rounded ${positionType === 'static' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setPositionType('static')}
              >
                static
              </button>
              <button
                className={`px-3 py-1 rounded ${positionType === 'relative' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setPositionType('relative')}
              >
                relative
              </button>
              <button
                className={`px-3 py-1 rounded ${positionType === 'absolute' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setPositionType('absolute')}
              >
                absolute
              </button>
              <button
                className={`px-3 py-1 rounded ${positionType === 'fixed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setPositionType('fixed')}
              >
                fixed
              </button>
              <button
                className={`px-3 py-1 rounded ${positionType === 'sticky' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setPositionType('sticky')}
              >
                sticky
              </button>
            </div>
            
            <div className="relative bg-gray-100 p-4 rounded-lg border border-gray-300 overflow-hidden" style={{ height: '350px', overflowY: 'auto' }}>
              <div className="mb-4 bg-yellow-100 p-2 rounded">
                <strong>Прокрутіть цей контейнер</strong>, щоб побачити поведінку елементів з різним позиціонуванням.
              </div>
              
              <div className="h-32 bg-gray-200 mb-4 p-3 relative">
                Контейнер з <code>position: relative</code>
                
                {/* Демонстраційний елемент з обраним типом позиціонування */}
                <div 
                  className="w-32 h-32 bg-blue-500 text-white p-2 flex items-center justify-center text-center"
                  style={{ 
                    position: positionType,
                    top: positionType !== 'static' ? '20px' : undefined,
                    left: positionType !== 'static' ? '20px' : undefined,
                    zIndex: 10
                  }}
                >
                  position: {positionType}
                  {positionType !== 'static' && <div className="mt-1 text-xs">top: 20px; left: 20px;</div>}
                </div>
              </div>
              
              <div className="bg-white p-3 mb-4">
                Цей текст показує звичайний потік документа. Елементи з позиціонуванням <code>absolute</code> або <code>fixed</code> не займають місця в потоці.
              </div>
            </div>
            
            <div className="bg-blue-100 p-3 rounded-lg mt-3">
              <h5 className="font-semibold mb-1">Поведінка при типі "{positionType}":</h5>
              {positionType === 'static' && (
                <p>
                  <strong>static</strong> - елемент знаходиться в нормальному потоці документа. Властивості <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> та <code>z-index</code> не мають ефекту.
                </p>
              )}
              {positionType === 'relative' && (
                <p>
                  <strong>relative</strong> - елемент зміщується відносно своєї нормальної позиції, але зберігає своє місце в потоці документа. Інші елементи не "знають", що цей елемент зміщено.
                </p>
              )}
              {positionType === 'absolute' && (
                <p>
                  <strong>absolute</strong> - елемент видаляється з потоку документа і позиціонується відносно найближчого позиціонованого (не static) предка. Якщо такого предка немає, позиціонується відносно початкового блоку документа.
                </p>
              )}
              {positionType === 'fixed' && (
                <p>
                  <strong>fixed</strong> - елемент видаляється з потоку документа і позиціонується відносно вікна перегляду. Він залишається на одному місці навіть при прокрутці сторінки.
                </p>
              )}
              {positionType === 'sticky' && (
                <p>
                  <strong>sticky</strong> - гібридне позиціонування. Елемент поводиться як <code>relative</code>, поки не досягне заданого порогу прокрутки, після чого поводиться як <code>fixed</code> (прилипає). Працює в межах найближчого предка з прокруткою.
                </p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Приклади з кодом</h4>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-sm mb-1">position: relative</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`.parent {
  /* Звичайний елемент */
}

.child {
  position: relative;
  top: 20px;
  left: 10px;
  /* Зміщується на 20px вниз і 10px вправо 
     від своєї нормальної позиції */
}

/* Використання для створення відліку
   для абсолютно позиціонованих елементів */
.container {
  position: relative;
  /* Тепер абсолютні елементи всередині
     будуть позиціонуватись відносно цього контейнера */
}`}
                  </pre>
                  
                  <h5 className="font-semibold text-sm mb-1">position: absolute</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`.parent {
  position: relative;
  height: 200px;
  /* Створюємо контекст позиціонування */
}

.child {
  position: absolute;
  top: 20px;
  right: 20px;
  /* Розміщується за 20px від верхнього
     і правого краю батьківського елемента */
}

/* Центрування елемента */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Точне центрування відносно батька */
}`}
                  </pre>
                  
                  <h5 className="font-semibold text-sm mb-1">position: fixed</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* Фіксований заголовок, що займає всю ширину
     і залишається вгорі при прокрутці */
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Кнопка "нагору", що завжди видима
     у правому нижньому куті */
}

/* Модальне вікно */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Покриває весь екран */
}`}
                  </pre>
                  
                  <h5 className="font-semibold text-sm mb-1">position: sticky</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.section-header {
  position: sticky;
  top: 0;
  background: white;
  /* Заголовок секції, який "прилипає"
     до верхнього краю при прокрутці */
}

.sidebar {
  position: sticky;
  top: 20px;
  /* Бічна панель, яка "прилипає" на відстані
     20px від верхнього краю */
}

/* Важливо: sticky елемент обмежується
   найближчим предком з прокруткою */
.table-header {
  position: sticky;
  top: 0;
  /* Заголовок таблиці, який залишається
     видимим при прокрутці вмісту таблиці */
}`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Особливості та обмеження</h4>
                
                <h5 className="font-semibold text-sm mb-1">position: relative</h5>
                <ul className="list-disc pl-5 text-sm mb-3">
                  <li>Елемент залишається в потоці документа</li>
                  <li>Зміщення обчислюється від оригінальної позиції</li>
                  <li>Створює новий контекст позиціонування для нащадків</li>
                  <li>Не впливає на сусідні елементи</li>
                </ul>
                
                <h5 className="font-semibold text-sm mb-1">position: absolute</h5>
                <ul className="list-disc pl-5 text-sm mb-3">
                  <li>Видаляється з потоку документа</li>
                  <li>Інші елементи поводяться так, ніби цього елемента немає</li>
                  <li>Позиціонується відносно найближчого позиціонованого предка</li>
                  <li>Якщо такого предка немає, позиціонується відносно початкового блоку (часто це <code>&lt;html&gt;</code>)</li>
                  <li>За замовчуванням розмір адаптується до вмісту</li>
                </ul>
                
                <h5 className="font-semibold text-sm mb-1">position: fixed</h5>
                <ul className="list-disc pl-5 text-sm mb-3">
                  <li>Видаляється з потоку документа</li>
                  <li>Завжди позиціонується відносно вікна перегляду</li>
                  <li>Не рухається при прокрутці</li>
                  <li>Створює новий контекст стекінгу</li>
                  <li>Transform, filter або perspective на батьківських елементах можуть впливати на фіксоване позиціонування</li>
                </ul>
                
                <h5 className="font-semibold text-sm mb-1">position: sticky</h5>
                <ul className="list-disc pl-5 text-sm">
                  <li>Поводиться як relative, поки не досягнуто порогу прокрутки</li>
                  <li>Потім поводиться як fixed в межах батьківського контейнера</li>
                  <li>Вимагає вказання хоча б однієї порогової властивості (top, right, bottom, left)</li>
                  <li>Ефект "прилипання" обмежений батьківським контейнером</li>
                  <li>Може мати проблеми з підтримкою в старих браузерах</li>
                </ul>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Комбінування позиціонування</h4>
                <p className="mb-3">Різні типи позиціонування часто комбінуються для створення складних макетів:</p>
                
                <h5 className="font-semibold text-sm mb-1">Шаблон "overlay":</h5>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3"
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  {showOverlay ? 'Сховати оверлей' : 'Показати оверлей'}
                </button>
                
                {showOverlay && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowOverlay(false)}>
                    <div className="bg-white p-4 rounded-lg max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
                      <h4 className="font-bold mb-2">Модальне вікно</h4>
                      <p className="mb-3">Це модальне вікно створене за допомогою комбінації <code>position: fixed</code> для оверлею та позиціонування контенту.</p>
                      <button 
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={() => setShowOverlay(false)}
                      >
                        Закрити
                      </button>
                    </div>
                  </div>
                )}
                
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                {`/* Модальне вікно з оверлеєм */
.overlay {
  position: fixed;
  inset: 0; /* Скорочення для top: 0; right: 0; bottom: 0; left: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  z-index: 1001;
}

/* Спливаюча підказка (tooltip) */
.tooltip-container {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'zIndex' && (
        <div>
          <h3 className="text-xl font-bold mb-3">z-index і стекінг</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Що таке z-index?</h4>
                <p className="mb-2">Властивість <code>z-index</code> визначає порядок накладання елементів на вісі Z (перпендикулярно до екрану). Вона впливає на те, які елементи будуть відображатися поверх інших при перекритті.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Працює тільки для позиціонованих елементів (не static)</li>
                  <li>Вищі значення відображаються поверх нижчих</li>
                  <li>Може приймати як додатні, так і від'ємні значення</li>
                  <li>За замовчуванням: <code>z-index: auto</code> (еквівалентно 0)</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Демонстрація z-index</h4>
                </div>
                <div className="p-4">
                  <div className="relative h-60 bg-gray-200 rounded p-2">
                    <div className="absolute top-5 left-5 w-40 h-40 bg-blue-500 text-white p-2 flex items-center justify-center" style={{ zIndex: 1 }}>
                      z-index: 1
                    </div>
                    <div className="absolute top-20 left-20 w-40 h-40 bg-red-500 text-white p-2 flex items-center justify-center" style={{ zIndex: 2 }}>
                      z-index: 2
                    </div>
                    <div className="absolute top-35 left-35 w-40 h-40 bg-green-500 text-white p-2 flex items-center justify-center" style={{ zIndex: 3 }}>
                      z-index: 3
                    </div>
                  </div>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-3">
{`.blue-box {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
}

.red-box {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2; /* Вище ніж блакитний */
}

.green-box {
  position: absolute;
  top: 35px;
  left: 35px;
  z-index: 3; /* Вище ніж червоний */
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Контексти стекінгу</h4>
                <p className="mb-2">Контекст стекінгу (stacking context) - це тривимірна концептуальна модель, яка визначає, як елементи накладаються один на одного.</p>
                <div className="bg-white p-3 rounded mb-2">
                  <h5 className="font-semibold text-sm mb-1">Елемент створює новий контекст стекінгу, якщо:</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Має <code>position: absolute/relative</code> з <code>z-index</code>, відмінним від <code>auto</code></li>
                    <li>Має <code>position: fixed</code> або <code>position: sticky</code></li>
                    <li>Є flex/grid контейнером з <code>z-index</code>, відмінним від <code>auto</code></li>
                    <li>Має <code>opacity</code> менше 1</li>
                    <li>Має <code>transform</code>, <code>filter</code>, <code>perspective</code>, <code>clip-path</code>, <code>mask</code> або <code>mix-blend-mode</code> не в значенні за замовчуванням</li>
                    <li>Має <code>isolation: isolate</code></li>
                    <li>Має <code>will-change</code> з властивістю, що створює контекст стекінгу</li>
                    <li>Має <code>contain: layout</code>, <code>paint</code> або значення, що їх включає</li>
                  </ul>
                </div>
                <div className="text-sm text-red-600 font-semibold">
                  Важливо: z-index працює тільки в межах одного контексту стекінгу! Елемент з низьким z-index у батьківському контексті стекінгу з високим z-index буде поверх елемента з високим z-index у батьківському контексті з низьким z-index.
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Ізольовані контексти стекінгу</h4>
                </div>
                <div className="p-4">
                  <div className="relative h-80 bg-gray-200 rounded p-2">
                    <div className="absolute top-5 left-5 w-60 h-60 bg-blue-200 p-3" style={{ zIndex: 1 }}>
                      <div className="font-semibold mb-1">Батьківський елемент (z-index: 1)</div>
                      <div className="relative h-40 bg-blue-100">
                        <div className="absolute top-5 left-5 w-20 h-20 bg-blue-500 text-white p-2 flex items-center justify-center text-sm" style={{ zIndex: 100 }}>
                          z-index: 100
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-20 left-20 w-60 h-60 bg-red-200 p-3" style={{ zIndex: 2 }}>
                      <div className="font-semibold mb-1">Батьківський елемент (z-index: 2)</div>
                      <div className="relative h-40 bg-red-100">
                        <div className="absolute top-5 left-5 w-20 h-20 bg-red-500 text-white p-2 flex items-center justify-center text-sm" style={{ zIndex: 1 }}>
                          z-index: 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm bg-blue-100 p-2 rounded">
                    <strong>Спостереження:</strong> Червоний квадрат з z-index: 1 відображається поверх синього з z-index: 100, тому що червоний знаходиться в батьківському контексті з вищим z-index (2 &gt; 1).
                  </div>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-3">
{`/* Ізольовані контексти стекінгу */
.blue-parent {
  position: absolute;
  z-index: 1; /* Створює контекст стекінгу */
}

.blue-child {
  position: absolute;
  z-index: 100; /* Високий, але обмежений батьком */
}

.red-parent {
  position: absolute;
  z-index: 2; /* Вищий контекст стекінгу */
}

.red-child {
  position: absolute;
  z-index: 1; /* Низький, але в контексті з вищим z-index */
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Примусова ізоляція з isolation</h4>
                <p className="mb-2">Властивість <code>isolation</code> дозволяє явно створювати новий контекст стекінгу без зміни інших властивостей:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`.parent {
  isolation: isolate; /* Створює новий контекст стекінгу */
}

/* Це краще, ніж використовувати такі хаки: */
.hack {
  position: relative;
  z-index: 0; /* Хак для створення контексту стекінгу */
}

/* Або: */
.opacity-hack {
  opacity: 0.9999; /* Також створює контекст стекінгу */
}`}
                </pre>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-semibold text-sm mb-1">Переваги isolation:</h5>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Явний намір створити контекст стекінгу</li>
                    <li>Не впливає на інші властивості (opacity, transform)</li>
                    <li>Не вимагає позиціонування або z-index</li>
                    <li>Покращує читабельність коду</li>
                    <li>Дозволяє локалізувати z-index всередині компонента</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold mb-2">Порядок стекінгу (з найнижчого до найвищого)</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Кореневий елемент (контекст стекінгу документа)</li>
                  <li>Елементи з від'ємним z-index + їхні дочірні елементи</li>
                  <li>Не позиціоновані елементи (normal flow)</li>
                  <li>Позиціоновані елементи з z-index: auto (0)</li>
                  <li>Елементи з додатним z-index + їхні дочірні елементи</li>
                </ol>
                <div className="mt-3 text-sm">
                  <strong>Порада:</strong> Використовуйте low/mid/high систему замість абсолютних значень z-index. Наприклад, змінні <code>--z-dropdown: 100</code>, <code>--z-modal: 200</code>, <code>--z-tooltip: 300</code>.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'bestPractices' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Найкращі практики позиціонування</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Загальні рекомендації</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Використовуйте потік документа</strong>, коли це можливо, замість позиціонування</li>
                  <li><strong>Обмежуйте використання absolute/fixed</strong> до компонентів, які дійсно потребують цього</li>
                  <li><strong>Завжди задавайте context</strong> для absolute елементів (position: relative на батьку)</li>
                  <li><strong>Використовуйте sticky</strong> замість JS-скриптів для прилипаючих елементів</li>
                  <li><strong>Структуруйте z-index</strong> з використанням CSS змінних і зрозумілих іменованих рівнів</li>
                  <li><strong>Уникайте вкладених абсолютно позиціонованих елементів</strong> для спрощення розуміння</li>
                  <li><strong>Пам'ятайте про доступність</strong> при роботі з фіксованим позиціонуванням (уникайте перекриття контенту)</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Системний підхід до z-index</h4>
                </div>
                <div className="p-4">
                  <p className="mb-2">Створіть систему рівнів для управління z-index:</p>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`:root {
  /* Z-Index рівні */
  --z-negative: -1;       /* Елементи за потоком */
  --z-base: 0;            /* Базовий рівень */
  --z-dropdown: 100;      /* Випадаючі списки */
  --z-sticky: 200;        /* Прилипаючі елементи */
  --z-drawer: 300;        /* Бічні панелі */
  --z-modal: 400;         /* Модальні вікна */
  --z-popover: 500;       /* Спливаючі підказки */
  --z-toast: 600;         /* Сповіщення */
  --z-tooltip: 700;       /* Підказки */
  --z-max: 9999;          /* Найвищий рівень */
}

/* Використання в компонентах */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
}

.tooltip {
  position: absolute;
  z-index: var(--z-tooltip);
}`}
                  </pre>
                  <div className="mt-3">
                    <h5 className="font-semibold text-sm mb-1">Переваги:</h5>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Централізоване управління накладанням елементів</li>
                      <li>Уникнення "z-index війн" між компонентами</li>
                      <li>Зрозуміла ієрархія накладання</li>
                      <li>Легко модифікувати при необхідності</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Ефективне використання absolute</h4>
                <h5 className="font-semibold text-sm mb-1">Ключові шаблони:</h5>
                <ul className="list-disc pl-5 text-sm space-y-2">
                  <li>
                    <strong>Вкладені списки/меню</strong>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.dropdown-parent {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
}`}
                    </pre>
                  </li>
                  <li>
                    <strong>Декоративні елементи</strong>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.card {
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}`}
                    </pre>
                  </li>
                  <li>
                    <strong>Розтягнення елемента на весь контейнер</strong>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.container {
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0; /* Розтягується на весь контейнер */
}`}
                    </pre>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Техніки центрування</h4>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-sm mb-1">Абсолютне центрування:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-3">
{`/* Метод 1: Трансформація */
.center-transform {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Метод 2: Margin auto з розмірами */
.center-margin {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 200px;
  height: 100px;
}

/* Метод 3: Flexbox (сучасний підхід) */
.container {
  position: relative;
}

.container-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Метод 4: Grid (сучасний підхід) */
.grid-container {
  position: relative;
}

.grid-inner {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}`}
                  </pre>
                  
                  <div className="relative h-40 bg-gray-200 rounded mb-3">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 flex items-center justify-center">
                      Центрований елемент
                    </div>
                  </div>
                  
                  <h5 className="font-semibold text-sm mb-1">Вертикальне центрування:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Вертикальне центрування тексту */
.text-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

/* Альтернатива: line-height для тексту в один рядок */
.single-line {
  line-height: 100px; /* Дорівнює висоті контейнера */
}

/* Для багаторядкового тексту */
.container {
  display: flex;
  align-items: center;
  height: 100px;
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Типові компоненти з позиціонуванням</h4>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Фіксовані елементи:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Заголовки (headers)</li>
                      <li>Нижні панелі (footers)</li>
                      <li>Кнопки "Нагору" (back-to-top)</li>
                      <li>Бічні панелі (sidebars)</li>
                      <li>Спливаючі сповіщення (toasts)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Прилипаючі елементи:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Навігаційні панелі</li>
                      <li>Заголовки секцій</li>
                      <li>Фільтри в списках</li>
                      <li>Заголовки таблиць</li>
                      <li>Панелі інструментів (toolbars)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Абсолютне позиціонування:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Спливаючі підказки (tooltips)</li>
                      <li>Випадаючі меню (dropdowns)</li>
                      <li>Значки оповіщень (badges)</li>
                      <li>Модальні вікна (modals)</li>
                      <li>Оверлеї (overlays)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Відносне позиціонування:</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Контексти для абсолютних елементів</li>
                      <li>Зміщення елементів</li>
                      <li>Створення z-index стеків</li>
                      <li>Анімації з трансформацією</li>
                      <li>Невеликі візуальні налаштування</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold mb-2">Поширені помилки і як їх уникнути</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Проблема:</strong> Абсолютно позиціоновані елементи "вилазять" за межі контейнера.<br />
                    <strong>Рішення:</strong> Завжди додавайте <code>position: relative</code> до батьківського елемента.
                  </li>
                  <li>
                    <strong>Проблема:</strong> Постійно зростаючі значення z-index, "z-index війни".<br />
                    <strong>Рішення:</strong> Створіть систему z-index із CSS змінними та isolation для контекстів.
                  </li>
                  <li>
                    <strong>Проблема:</strong> Фіксовані елементи не враховують інші фіксовані елементи.<br />
                    <strong>Рішення:</strong> Координуйте фіксовані елементи з CSS змінними для позицій і розмірів.
                  </li>
                  <li>
                    <strong>Проблема:</strong> Sticky елементи перекривають один одного.<br />
                    <strong>Рішення:</strong> Налаштовуйте top/z-index для кожного sticky елемента з урахуванням інших.
                  </li>
                  <li>
                    <strong>Проблема:</strong> Абсолютне позиціонування для верстки всього макета.<br />
                    <strong>Рішення:</strong> Використовуйте flexbox/grid для загальної верстки, absolute лише для спеціальних випадків.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Сучасні альтернативи абсолютному позиціонуванню</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Flexbox:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`/* Замість абсолютного центрування */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Замість absolute для розташування елемента в кутку */
.container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}`}
                </pre>
                <div className="text-xs">Підходить для одновимірних макетів (рядок або стовпець).</div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Grid:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`/* Замість absolute для накладання елементів */
.container {
  display: grid;
  grid-template: "stack" 1fr / 1fr;
}

.container > * {
  grid-area: stack;
}

/* Для розміщення елементів у чіткому порядку */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}
                </pre>
                <div className="text-xs">Ідеально для двовимірних макетів і вирівнювання елементів.</div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">CSS Container Queries:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .adaptive-element {
    /* Стилі, що змінюються на основі
       розміру контейнера, а не вікна */
  }
}`}
                </pre>
                <div className="text-xs">Замінює деякі випадки використання fixed і sticky, які залежать від розміру вікна.</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-semibold mb-1">Коли все ж використовувати позиціонування:</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>UI перекриття</strong> - модальні вікна, спливаючі підказки, випадаючі меню, оверлеї</li>
                <li><strong>Декоративні елементи</strong> - значки, бейджі, сповіщення, що виходять за межі батьківського елемента</li>
                <li><strong>"Прилипаючі" елементи</strong> - заголовки секцій, навігаційні панелі, що залишаються видимими під час прокрутки</li>
                <li><strong>Особливе розташування</strong> - елементи, які повинні розташовуватись незалежно від потоку документа з чіткими координатами</li>
                <li><strong>Спеціальні ефекти</strong> - анімації і трансформації, що вимагають позиціонування поза стандартним потоком</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Підсумок: Керівні принципи для позиціонування</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Загальні правила:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Почніть з нормального потоку документа (static)</li>
                  <li>Використовуйте Flexbox і Grid для основної верстки</li>
                  <li>Застосовуйте абсолютне позиціонування з обережністю і тільки для спеціальних випадків</li>
                  <li>Завжди забезпечуйте контекст позиціонування (position: relative на батьківському елементі)</li>
                  <li>Структуруйте z-index з використанням CSS змінних і логічних рівнів</li>
                  <li>Обмежуйте контексти стекінгу з isolation: isolate</li>
                  <li>Враховуйте адаптивність при використанні fixed і sticky</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Підхід до вирішення задач:</h5>
                <ol className="list-decimal pl-5 text-sm space-y-1">
                  <li>Визначте, чи справді потрібне позиціонування (або можна обійтись Flexbox/Grid)</li>
                  <li>Виберіть найменш "радикальний" тип позиціонування для задачі</li>
                  <li>Врахуйте контекст і обмеження (батьківські елементи, прокрутка, адаптивність)</li>
                  <li>Керуйте взаємодією з іншими позиціонованими елементами (z-index)</li>
                  <li>Перевірте на різних пристроях і в різних сценаріях використання</li>
                  <li>Переконайтеся, що доступність не порушується</li>
                </ol>
                <div className="mt-3 p-2 bg-white rounded-lg">
                  <p className="text-sm font-semibold text-blue-800">Пам'ятайте: CSS позиціонування - це дієвий інструмент, але використовуйте його обдумано і лише коли це дійсно необхідно!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSPositioningSlide;