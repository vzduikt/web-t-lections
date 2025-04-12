import { useState } from 'react';

const FlexboxCheatsheetSlide = () => {
  const [activeSection, setActiveSection] = useState('visual');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Шпаргалка з Flexbox: Візуальний конспект</h1>

      <div className="flex space-x-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'visual' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('visual')}
        >
          Візуальна схема
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'container' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('container')}
        >
          Властивості контейнера
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'items' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('items')}
        >
          Властивості елементів
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'tips' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('tips')}
        >
          Поради та підказки
        </button>
      </div>

      {activeSection === 'visual' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Візуальна схема Flexbox</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center">Основні осі Flexbox</h3>
              <div className="relative h-64 bg-gray-100 rounded-lg flex justify-center items-center mb-2">
                <div
                  className="absolute border-2 border-red-500 w-full top-1/2 transform -translate-y-1/2"
                  style={{ height: '0px' }}
                ></div>
                <div
                  className="absolute border-2 border-blue-500 h-full left-1/2 transform -translate-x-1/2"
                  style={{ width: '0px' }}
                ></div>

                <div className="absolute top-1/4 right-4 transform -translate-y-1/2 text-red-500 font-bold">
                  Головна вісь
                </div>
                <div className="absolute left-1/4 top-4 transform -translate-x-1/2 text-blue-500 font-bold">
                  Поперечна вісь
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-1/2 text-red-500 font-bold">
                  ←
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-1/2 text-red-500 font-bold">
                  →
                </div>
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 font-bold">
                  ↑
                </div>
                <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 translate-y-1/2 text-blue-500 font-bold">
                  ↓
                </div>

                <div className="z-10 px-4 py-2 bg-white rounded-lg border-2 border-gray-400">flex-direction: row</div>
              </div>
              <p className="text-xs text-gray-600 text-center italic">
                Напрямок осей змінюється залежно від flex-direction
              </p>
            </div>

            <div className="flex-1 bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center">Основні компоненти</h3>
              <div className="relative h-64 bg-gray-100 rounded-lg p-3 flex flex-col justify-center mb-2">
                <div className="border-2 border-purple-400 rounded-lg py-28 bg-purple-50">
                  <div className="text-center font-bold mb-2">Flex-контейнер</div>
                  <div className="flex gap-2 justify-around">
                    <div className="border-2 border-orange-400 rounded bg-orange-50 p-3 text-center">
                      <span className="font-bold">Flex-елемент 1</span>
                    </div>
                    <div className="border-2 border-orange-400 rounded bg-orange-50 p-3 text-center">
                      <span className="font-bold">Flex-елемент 2</span>
                    </div>
                    <div className="border-2 border-orange-400 rounded bg-orange-50 p-3 text-center">
                      <span className="font-bold">Flex-елемент 3</span>
                    </div>
                  </div>
                  <div className="absolute top-1/6 right-6 transform -translate-y-1/2">
                    <div className="text-purple-600 font-bold">display: flex</div>
                    <div className="text-purple-600 font-bold">justify-content</div>
                    <div className="text-purple-600 font-bold">align-items</div>
                  </div>
                  <div className="absolute bottom-1/7 left-6 transform translate-y-1/2">
                    <div className="text-orange-600 font-bold">flex-grow</div>
                    <div className="text-orange-600 font-bold">flex-shrink</div>
                    <div className="text-orange-600 font-bold">flex-basis</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 text-center italic">
                Контейнер керує розташуванням, елементи керують своїм розміром
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2 text-center">flex-direction</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-gray-300 rounded p-3 bg-gray-50">
                  <div className="text-xs font-bold mb-1 text-gray-500">row</div>
                  <div className="flex">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">3</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-3 bg-gray-50">
                  <div className="text-xs font-bold mb-1 text-gray-500">row-reverse</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">3</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-3 bg-gray-50">
                  <div className="text-xs font-bold mb-1 text-gray-500">column</div>
                  <div className="flex flex-col">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">3</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-3 bg-gray-50">
                  <div className="text-xs font-bold mb-1 text-gray-500">column-reverse</div>
                  <div className="flex flex-col-reverse">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">3</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2 text-center">justify-content</h3>
              <div className="flex flex-col gap-2">
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">flex-start</div>
                  <div className="flex justify-start">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">center</div>
                  <div className="flex justify-center">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">flex-end</div>
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">space-between</div>
                  <div className="flex justify-between">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">space-around</div>
                  <div className="flex justify-around">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2 text-center">align-items</h3>
              <div className="flex flex-col gap-2">
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">flex-start</div>
                  <div className="flex items-start h-12">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">center</div>
                  <div className="flex items-center h-12">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">flex-end</div>
                  <div className="flex items-end h-12">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">stretch</div>
                  <div className="flex items-stretch h-12">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">2</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded p-1 bg-gray-50">
                  <div className="text-xs font-bold text-gray-500">baseline</div>
                  <div className="flex items-baseline h-12">
                    <div className="bg-blue-500 text-white text-xs p-1 m-1">1</div>
                    <div className="bg-blue-500 text-white text-xs p-1 m-1 text-lg">2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-lg mb-2 text-center">Швидка схема відповідності властивостей до осей</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border border-gray-300">
                <h4 className="font-bold text-center mb-2">Головна вісь (рядок →)</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between items-center">
                    <span>Вирівнювання:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">justify-content</code>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Відступи:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">column-gap</code>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Розмір елемента:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">width/flex-basis</code>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg border border-gray-300">
                <h4 className="font-bold text-center mb-2">Поперечна вісь (стовпець ↓)</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between items-center">
                    <span>Вирівнювання:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">align-items</code>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Відступи:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">row-gap</code>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Розмір елемента:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">height</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'container' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Властивості Flex-контейнера: Шпаргалка</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">display</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">display: flex;</code>
                  <span>→ Блоковий flex-контейнер</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">display: inline-flex;</code>
                  <span>→ Рядковий flex-контейнер</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="text-center font-bold mb-2">Візуалізація:</div>
                <div className="flex gap-2 justify-center">
                  <div className="border-2 border-dashed border-blue-500 p-2 rounded">
                    <div className="flex gap-2">
                      <div className="bg-blue-500 rounded text-white p-1">1</div>
                      <div className="bg-blue-500 rounded text-white p-1">2</div>
                    </div>
                    <div className="text-xs mt-1 text-center">display: flex</div>
                  </div>
                  <div className="border-2 border-dashed border-blue-500 p-2 rounded inline-flex">
                    <div className="flex gap-2">
                      <div className="bg-blue-500 rounded text-white p-1">1</div>
                      <div className="bg-blue-500 rounded text-white p-1">2</div>
                    </div>
                    <div className="text-xs mt-1 text-center">display: inline-flex</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">flex-direction</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-direction: row;</code>
                  <span>→ Елементи в рядок (за замовчуванням)</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-direction: row-reverse;</code>
                  <span>→ Елементи в рядок справа наліво</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-direction: column;</code>
                  <span>→ Елементи в стовпець</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-direction: column-reverse;</code>
                  <span>→ Елементи в стовпець знизу вгору</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">justify-content</h3>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <div className="flex justify-between">
                    <code className="font-bold">justify-content: flex-start;</code>
                    <span>→ За замовчуванням</span>
                  </div>
                  <div className="flex justify-start bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">justify-content: flex-end;</code>
                  <div className="flex justify-end bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">justify-content: center;</code>
                  <div className="flex justify-center bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">justify-content: space-between;</code>
                  <div className="flex justify-between bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">3</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">justify-content: space-around;</code>
                  <div className="flex justify-around bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">3</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">align-items</h3>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">align-items: stretch;</code>
                  <div className="flex items-stretch bg-gray-100 p-2 mt-2 rounded h-12">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">3</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">align-items: flex-start;</code>
                  <div className="flex items-start bg-gray-100 p-2 mt-2 rounded h-12">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">3</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">align-items: flex-end;</code>
                  <div className="flex items-end bg-gray-100 p-2 mt-2 rounded h-12">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">3</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">align-items: center;</code>
                  <div className="flex items-center bg-gray-100 p-2 mt-2 rounded h-12">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs ml-1">3</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">align-items: baseline;</code>
                  <div className="flex items-baseline bg-gray-100 p-2 mt-2 rounded h-12">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-lg ml-1">2</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-2xl ml-1">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">flex-wrap</h3>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-wrap: nowrap;</code>
                  <div className="flex flex-nowrap bg-gray-100 p-2 mt-2 rounded overflow-hidden">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="flex-none bg-blue-500 rounded text-white p-1 text-xs m-1">
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Елементи не переносяться (за замовчуванням)</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-wrap: wrap;</code>
                  <div className="flex flex-wrap bg-gray-100 p-2 mt-2 rounded max-w-44">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="w-8 bg-blue-500 rounded text-white p-1 text-xs m-1">
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Елементи переносяться на новий рядок</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-wrap: wrap-reverse;</code>
                  <div className="flex flex-wrap-reverse bg-gray-100 p-2 mt-2 max-w-44 rounded">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="w-8 bg-blue-500 rounded text-white p-1 text-xs m-1">
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Елементи переносяться у зворотному порядку</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">gap (відступи)</h3>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">gap: 10px;</code>
                  <div className="flex gap-3 bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">2</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">3</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Однаковий відступ по всіх напрямках</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">row-gap: 20px; column-gap: 10px;</code>
                  <div className="flex flex-wrap gap-x-3 gap-y-6 bg-gray-100 p-2 mt-2 rounded max-w-32">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">1</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">2</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">3</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">4</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">5</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">6</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Різні відступи по горизонталі та вертикалі</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
            <h3 className="font-bold text-lg mb-2 text-center">Шпаргалка по властивостях flex-контейнера</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded-lg border border-gray-300">
                <h4 className="font-bold mb-1">Головні властивості:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">display: flex</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">justify-content</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">align-items</code>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg border border-gray-300">
                <h4 className="font-bold mb-1">Додаткові властивості:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-wrap</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">gap</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">row-gap</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">column-gap</code>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg border border-gray-300">
                <h4 className="font-bold mb-1">Скорочені властивості:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-flow</code> (direction + wrap)
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">place-content</code> (align-content +
                    justify-content)
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">place-items</code> (align-items + justify-items)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'items' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Властивості Flex-елементів: Шпаргалка</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">flex-grow</h3>
              <div className="flex flex-col gap-3">
                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-grow: 0;</code>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 0</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 0</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 0</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Елементи не розширюються (за замовчуванням)</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">Перший: flex-grow: 1; Інші: flex-grow: 0;</code>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 0</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 0</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Перший елемент займає весь доступний простір</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-grow: 1 для всіх елементів</code>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Всі елементи займають рівні частини простору</p>
                </div>

                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                  <code className="font-bold">flex-grow: 1, 2, 1</code>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                    <div className="flex-2 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 2</div>
                    <div className="flex-1 bg-blue-500 rounded text-white p-2 text-xs m-1">flex-grow: 1</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Середній елемент займає вдвічі більше простору</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'tips' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Поради та підказки з Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">Швидкі рішення типових задач</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Центрування елемента по горизонталі і вертикалі:</h4>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
                  </pre>
                  <div className="flex justify-center items-center bg-gray-100 h-20 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">По центру</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Розподіл елементів з однаковими відступами:</h4>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.parent {
  display: flex;
  justify-content: space-between;
}`}
                  </pre>
                  <div className="flex justify-between bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">Ліворуч</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">По центру</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs">Праворуч</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Елементи однакової висоти:</h4>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.parent {
  display: flex;
  align-items: stretch; /* За замовчуванням */
}`}
                  </pre>
                  <div className="flex items-stretch bg-gray-100 p-2 mt-2 rounded min-h-16">
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">Текст</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">Текст з додатковими словами</div>
                    <div className="bg-blue-500 rounded text-white p-2 text-xs m-1">Текст</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">Підказки для зручності</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Запам'ятайте головне:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Горизонтальне вирівнювання:</strong> justify-content
                    </li>
                    <li>
                      <strong>Вертикальне вирівнювання:</strong> align-items
                    </li>
                    <li>
                      <strong>Розширення елементів:</strong> flex-grow
                    </li>
                    <li>
                      <strong>Стиснення елементів:</strong> flex-shrink
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Відладка Flexbox:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Додайте тимчасові кольорові рамки для візуалізації контейнерів</li>
                    <li>Використовуйте інструменти розробника в браузері</li>
                    <li>Почніть з базових властивостей і додавайте більше за потреби</li>
                  </ul>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="border-2 border-red-500 p-1 m-1">
                      <div className="border-2 border-blue-500 p-1">Елемент</div>
                    </div>
                    <div className="border-2 border-red-500 p-1 m-1">
                      <div className="border-2 border-blue-500 p-1">Елемент</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">Поширені проблеми і рішення</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Проблема: Елементи не переносяться</h4>
                  <p className="text-sm mb-2">Рішення: Додайте flex-wrap: wrap</p>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.container {
  display: flex;
  flex-wrap: wrap;
}`}
                  </pre>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Проблема: Елементи мають різну ширину</h4>
                  <p className="text-sm mb-2">Рішення: Використовуйте flex: 1 для всіх</p>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.item {
  flex: 1;  /* Короткий запис для flex: 1 1 0% */
}`}
                  </pre>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Проблема: Елементи не центруються вертикально</h4>
                  <p className="text-sm mb-2">Рішення: Перевірте, чи має контейнер задану висоту</p>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.container {
  display: flex;
  align-items: center;
  height: 100px; /* Потрібна висота! */
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-center text-blue-600">Хитрощі та розширені техніки</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Зміна порядку на мобільних пристроях:</h4>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`/* На мобільних - спочатку контент, потім бічна панель */
@media (max-width: 768px) {
  .sidebar {
    order: 2;
  }
  .content {
    order: 1;
  }
}`}
                  </pre>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Остання кнопка праворуч, інші ліворуч:</h4>
                  <pre className="text-sm bg-gray-100 p-2 rounded text-balance">
                    {`.button:last-child {
  margin-left: auto;
}`}
                  </pre>
                  <div className="flex bg-gray-100 p-2 mt-2 rounded">
                    <div className="bg-blue-500 rounded text-white p-1 text-xs m-1">Кнопка 1</div>
                    <div className="bg-blue-500 rounded text-white p-1 text-xs m-1">Кнопка 2</div>
                    <div className="ml-auto bg-blue-500 rounded text-white p-1 text-xs m-1">Кнопка 3</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <h4 className="font-bold mb-2">Flexbox + CSS Grid = Потужна комбінація</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Grid для загального макету сторінки</li>
                    <li>Flexbox для вирівнювання всередині компонентів</li>
                    <li>Grid для двовимірних розкладок</li>
                    <li>Flexbox для однорядкових/одностовпцевих розкладок</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mt-4">
            <h3 className="font-bold text-lg mb-2 text-center">Висновки щодо Flexbox</h3>
            <p className="mb-2">
              Flexbox революціонізував CSS-верстку, спростивши багато складних задач, таких як вертикальне центрування,
              розподіл простору та створення адаптивних макетів.
            </p>
            <p>
              Розуміння основних принципів Flexbox - ключових осей, властивостей контейнера та елементів - дозволяє
              вирішувати практично будь-які задачі макетування без складних хаків та обхідних шляхів.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxCheatsheetSlide;
