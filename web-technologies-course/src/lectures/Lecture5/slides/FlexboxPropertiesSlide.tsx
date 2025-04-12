import { CSSProperties, useState } from 'react';

const FlexboxPropertiesSlide = () => {
  const [activeSection, setActiveSection] = useState('direction');
  const [flexDirection, setFlexDirection] = useState<CSSProperties['flexDirection']>('row');
  const [justifyContent, setJustifyContent] = useState<CSSProperties['justifyContent']>('flex-start');
  const [alignItems, setAlignItems] = useState<CSSProperties['alignItems']>('stretch');
  const [flexWrap, setFlexWrap] = useState<CSSProperties['flexWrap']>('nowrap');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Властивості Flex-контейнера</h1>

      <div className="flex space-x-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'direction' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('direction')}
        >
          flex-direction
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'justify' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('justify')}
        >
          justify-content
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'align' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('align')}
        >
          align-items
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'wrap' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('wrap')}
        >
          flex-wrap
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'playground' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('playground')}
        >
          Інтерактивний приклад
        </button>
      </div>

      {activeSection === 'direction' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex-direction</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code> визначає напрямок головної
            осі, вздовж якої розташовуються flex-елементи.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Значення:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">row</code> (за замовчуванням) - зліва направо
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

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm">
                  {`.container {
  display: flex;
  flex-direction: row;
}

/* Або інші варіанти: */
.container {
  flex-direction: row-reverse;
}

.container {
  flex-direction: column;
}

.container {
  flex-direction: column-reverse;
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-2 rounded-lg border border-gray-300 mb-2">
                <p className="text-sm font-bold mb-2">row:</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white p-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">3</div>
                </div>
              </div>

              <div className="bg-gray-100 p-2 rounded-lg border border-gray-300 mb-2">
                <p className="text-sm font-bold mb-2">row-reverse:</p>
                <div className="flex flex-row-reverse bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white p-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">3</div>
                </div>
              </div>

              <div className="bg-gray-100 p-2 rounded-lg border border-gray-300 mb-2">
                <p className="text-sm font-bold mb-2">column:</p>
                <div className="flex flex-col bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white p-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">3</div>
                </div>
              </div>

              <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">column-reverse:</p>
                <div className="flex flex-col-reverse bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white p-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white p-2 rounded m-1">3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-medium">
              Важливо: Зміна <code className="bg-gray-100 px-2 py-1 rounded">flex-direction</code> також змінює напрямок
              головної осі, що впливає на те, як працюють інші властивості, такі як{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">justify-content</code>.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'justify' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">justify-content</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">justify-content</code> визначає, як
            flex-елементи розподіляються вздовж головної осі.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-bold text-lg mb-2">Значення:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-start</code> (за замовчуванням) - елементи
                розташовуються на початку контейнера
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-end</code> - елементи розташовуються в кінці
                контейнера
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">center</code> - елементи розташовуються по центру
                контейнера
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">space-between</code> - елементи рівномірно
                розподіляються з пробілами між ними
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">space-around</code> - елементи рівномірно розподіляються
                з пробілами навколо них
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">space-evenly</code> - елементи розподіляються з рівними
                відстанями між ними та від країв
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex-start:</p>
              <div className="flex justify-start bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex-end:</p>
              <div className="flex justify-end bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">center:</p>
              <div className="flex justify-center bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">space-between:</p>
              <div className="flex justify-between bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">space-around:</p>
              <div className="flex justify-around bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">space-evenly:</p>
              <div className="flex justify-evenly bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'align' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">align-items</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">align-items</code> визначає, як flex-елементи
            вирівнюються вздовж поперечної осі.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-bold text-lg mb-2">Значення:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">stretch</code> (за замовчуванням) - елементи
                розтягуються, щоб заповнити контейнер
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-start</code> - елементи вирівнюються на початку
                поперечної осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">flex-end</code> - елементи вирівнюються в кінці
                поперечної осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">center</code> - елементи центруються вздовж поперечної
                осі
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">baseline</code> - елементи вирівнюються по базовій лінії
                тексту
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">stretch (за замовчуванням):</p>
              <div className="flex items-stretch bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex-start:</p>
              <div className="flex items-start bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex-end:</p>
              <div className="flex items-end bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">center:</p>
              <div className="flex items-center bg-white p-2 h-24 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-medium">
              Порада: Використовуйте <code className="bg-gray-100 px-2 py-1 rounded">align-items: center</code>
              разом з <code className="bg-gray-100 px-2 py-1 rounded">justify-content: center</code>
              для ідеального центрування елемента як по горизонталі, так і по вертикалі.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'wrap' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex-wrap</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex-wrap</code> визначає, чи можуть
            flex-елементи переноситися на новий рядок, якщо вони не вміщуються в контейнер.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-bold text-lg mb-2">Значення:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">nowrap</code> (за замовчуванням) - елементи не
                переносяться
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">wrap</code> - елементи переносяться на новий рядок
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">wrap-reverse</code> - елементи переносяться на новий
                рядок в зворотному порядку
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-4">
            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">nowrap (за замовчуванням):</p>
              <div className="flex flex-nowrap bg-white p-2 rounded overflow-hidden">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Елементи не переносяться і можуть виходити за межі контейнера
              </p>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">wrap:</p>
              <div className="flex flex-wrap bg-white p-2 rounded">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">Елементи переносяться на новий рядок при потребі</p>
            </div>

            <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">wrap-reverse:</p>
              <div className="flex flex-wrap-reverse bg-white p-2 rounded">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">Елементи переносяться в зворотному порядку (знизу вгору)</p>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <p className="font-medium">
              Якщо ви використовуєте <code className="bg-gray-100 px-2 py-1 rounded">flex-wrap: wrap</code>, може бути
              корисно використовувати також властивість
              <code className="bg-gray-100 px-2 py-1 rounded">align-content</code>, яка контролює, як рядки елементів
              розподіляються вздовж поперечної осі.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'playground' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Інтерактивний приклад</h2>
          <p className="mb-4">
            Спробуйте змінити різні властивості flex-контейнера та подивіться, як вони впливають на розташування
            елементів:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">flex-direction:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={flexDirection}
                onChange={(e) => setFlexDirection(e.target.value as CSSProperties['flexDirection'])}
              >
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">justify-content:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={justifyContent}
                onChange={(e) => setJustifyContent(e.target.value)}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">align-items:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value)}
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="baseline">baseline</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">flex-wrap:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={flexWrap}
                onChange={(e) => setFlexWrap(e.target.value as CSSProperties['flexWrap'])}
              >
                <option value="nowrap">nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Результат:</h3>
            <div
              className="bg-white p-4 border border-gray-300 rounded"
              style={{
                display: 'flex',
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
              }}
            >
              <div className="bg-blue-500 text-white p-4 m-1 rounded font-bold">1</div>
              <div className="bg-blue-500 text-white p-4 m-1 rounded font-bold">2</div>
              <div className="bg-blue-500 text-white p-4 m-1 rounded font-bold">3</div>
              <div className="bg-blue-500 text-white p-4 m-1 rounded font-bold">4</div>
              <div className="bg-blue-500 text-white p-4 m-1 rounded font-bold">5</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-lg mb-2">CSS код:</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm">
              {`.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
}`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxPropertiesSlide;
