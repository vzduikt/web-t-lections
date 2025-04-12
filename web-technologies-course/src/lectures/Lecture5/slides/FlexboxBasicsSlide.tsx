import { useState } from 'react';

const FlexboxBasicsSlide = () => {
  const [activeSection, setActiveSection] = useState('container');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Основні поняття CSS Flexbox</h1>

      <div className="flex justify-center mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex" style={{ width: 350, height: 200 }}>
          <div className="flex-1 bg-blue-500 m-2 rounded flex items-center justify-center text-white font-bold">1</div>
          <div className="flex-1 bg-blue-500 m-2 rounded flex items-center justify-center text-white font-bold">2</div>
          <div className="flex-1 bg-blue-500 m-2 rounded flex items-center justify-center text-white font-bold">3</div>
        </div>
      </div>

      <div className="flex space-x-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'container' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('container')}
        >
          Flex-контейнер
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'items' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('items')}
        >
          Flex-елементи
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'axes' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('axes')}
        >
          Осі Flexbox
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'example' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('example')}
        >
          Приклад коду
        </button>
      </div>

      {activeSection === 'container' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Flex-контейнер</h2>
          <p className="mb-4">
            Flex-контейнер — це батьківський елемент, який визначає область Flexbox. Він створюється встановленням
            властивості <code className="bg-gray-100 px-2 py-1 rounded">display: flex</code> або
            <code className="bg-gray-100 px-2 py-1 rounded">display: inline-flex</code>.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold text-lg mb-2">Основні властивості контейнера:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code> - визначає напрямок головної осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-wrap</code> - дозволяє/забороняє перенесення
                елементів
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">justify-content</code> - вирівнювання по головній осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">align-items</code> - вирівнювання по поперечній осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">align-content</code> - вирівнювання ліній при переносі
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-medium">
              Важливо: Лише прямі нащадки елемента з{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">display: flex</code>
              стають flex-елементами і підпорядковуються правилам Flexbox.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'items' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Flex-елементи</h2>
          <p className="mb-4">
            Flex-елементи — це прямі нащадки flex-контейнера. Вони розташовуються вздовж головної осі контейнера і
            підпорядковуються правилам Flexbox.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold text-lg mb-2">Основні властивості елементів:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-grow</code> - фактор росту елемента
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink</code> - фактор стиснення елемента
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-basis</code> - базовий розмір елемента
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex</code> - скорочена властивість для трьох попередніх
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">align-self</code> - індивідуальне вирівнювання
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">order</code> - зміна порядку елемента
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-medium">
              Порада: Використовуйте скорочену властивість <code className="bg-gray-100 px-2 py-1 rounded">flex</code>
              замість встановлення окремих властивостей. Наприклад,
              <code className="bg-gray-100 px-2 py-1 rounded">flex: 1</code> означає
              <code className="bg-gray-100 px-2 py-1 rounded">flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'axes' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Осі Flexbox</h2>
          <p className="mb-4">
            Flexbox працює з двома осями: головною віссю (main axis) і поперечною віссю (cross axis). Розуміння цих осей
            є ключовим для ефективного використання Flexbox.
          </p>

          <div className="flex mb-4">
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg border border-blue-200 h-full">
                <h3 className="font-bold text-lg mb-2">Головна вісь (Main Axis)</h3>
                <p className="mb-2">
                  Визначається властивістю <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code>:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">row</code> - зліва направо (за замовчуванням)
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">row-reverse</code> - справа наліво
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">column</code> - зверху вниз
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">column-reverse</code> - знизу вгору
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 ml-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200 h-full">
                <h3 className="font-bold text-lg mb-2">Поперечна вісь (Cross Axis)</h3>
                <p className="mb-2">Завжди перпендикулярна головній осі:</p>
                <ul className="list-disc pl-5">
                  <li>Якщо головна вісь горизонтальна, то поперечна — вертикальна</li>
                  <li>Якщо головна вісь вертикальна, то поперечна — горизонтальна</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <p className="font-medium">
              Зверніть увагу: Коли ви змінюєте <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code>,
              властивості <code className="bg-gray-100 px-2 py-1 rounded">justify-content</code> і
              <code className="bg-gray-100 px-2 py-1 rounded">align-items</code> змінюють свою поведінку, бо вони
              працюють відносно осей, а не відносно сторінки.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'example' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Приклад коду</h2>
          <p className="mb-4">Ось простий приклад використання Flexbox для створення навігаційного меню:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <pre className="text-sm">
                {`.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-300">
              <div className="bg-gray-800 p-4 rounded-lg text-white mb-4">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">Logo</div>
                  <div className="flex gap-4">
                    <div>Головна</div>
                    <div>Про нас</div>
                    <div>Послуги</div>
                    <div>Контакти</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Результат: Навігаційне меню з логотипом ліворуч та посиланнями праворуч, вертикально вирівняними по
                центру.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxBasicsSlide;
