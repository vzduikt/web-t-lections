import { useState, CSSProperties } from 'react';

const FlexboxItemsSlide = () => {
  const [activeSection, setActiveSection] = useState('grow');
  const [flexGrow, setFlexGrow] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<number>(1);
  const [alignSelf, setAlignSelf] = useState<CSSProperties['alignSelf']>('auto');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Властивості Flex-елементів</h1>

      <div className="flex space-x-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'grow' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('grow')}
        >
          flex-grow
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'shrink' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('shrink')}
        >
          flex-shrink
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'basis' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('basis')}
        >
          flex-basis
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'shorthand' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('shorthand')}
        >
          flex (скорочена властивість)
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'order' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('order')}
        >
          order
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'align-self' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('align-self')}
        >
          align-self
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'playground' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('playground')}
        >
          Інтерактивний приклад
        </button>
      </div>

      {activeSection === 'grow' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex-grow</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex-grow</code> визначає здатність елемента
            розширюватися та займати доступний простір.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Як це працює:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    За замовчуванням <code className="bg-gray-100 px-2 py-1 rounded">flex-grow: 0</code> - елемент не
                    розширюється
                  </li>
                  <li>
                    Значення <code className="bg-gray-100 px-2 py-1 rounded">flex-grow: 1</code> означає, що елемент
                    буде займати весь доступний простір
                  </li>
                  <li>
                    Якщо кілька елементів мають <code className="bg-gray-100 px-2 py-1 rounded">flex-grow</code> більше
                    0, вони розподіляють доступний простір пропорційно своїм значенням
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm">
                  {`.item {
  flex-grow: 0; /* За замовчуванням */
}

.item-growing {
  flex-grow: 1; /* Буде розширюватися */
}

.item-growing-more {
  flex-grow: 2; /* Буде розширюватися вдвічі більше */
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-grow: 0 (для всіх елементів):</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Всі елементи займають лише потрібний їм простір</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-grow: 1 (для першого елемента):</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="flex-grow bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Перший елемент розширюється і займає весь доступний простір
                </p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">flex-grow: 1, 2, 1 (відповідно):</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="flex-1 bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="flex-2 bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="flex-1 bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Другий елемент отримує вдвічі більше простору, ніж перший і третій
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="font-medium">
              Важливо: Властивість <code className="bg-gray-100 px-2 py-1 rounded">order</code> впливає лише на
              візуальне представлення, а не на логічний порядок елементів. Це означає, що для скрін-рідерів та
              клавіатурної навігації порядок залишається таким, як у HTML.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'shrink' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex-shrink</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink</code> визначає здатність елемента
            стискатися, якщо в контейнері недостатньо місця.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Як це працює:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    За замовчуванням <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink: 1</code> - елемент
                    може стискатися
                  </li>
                  <li>
                    Значення <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink: 0</code> означає, що елемент
                    не буде стискатися
                  </li>
                  <li>Чим більше значення, тим сильніше елемент буде стискатися відносно інших елементів</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm">
                  {`.item {
  flex-shrink: 1; /* За замовчуванням */
  width: 200px;
}

.no-shrink {
  flex-shrink: 0; /* Не буде стискатися */
  width: 200px;
}

.shrink-more {
  flex-shrink: 2; /* Стискатиметься сильніше */
  width: 200px;
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-shrink: 1 (для всіх):</p>
                <div className="flex bg-white p-2 rounded overflow-hidden" style={{ maxWidth: '350px' }}>
                  <div className="w-40 flex-shrink bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 1
                  </div>
                  <div className="w-40 flex-shrink bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 2
                  </div>
                  <div className="w-40 flex-shrink bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 3
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Всі елементи стискаються рівномірно</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-shrink: 0 (для першого), 1 (для інших):</p>
                <div className="flex bg-white p-2 rounded overflow-hidden" style={{ maxWidth: '350px' }}>
                  <div className="w-40 flex-none bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">Елемент 1</div>
                  <div className="w-40 flex-shrink bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 2
                  </div>
                  <div className="w-40 flex-shrink bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 3
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Перший елемент не стискається, інші стискаються</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">flex-shrink: 1, 2, 1 (відповідно):</p>
                <div className="flex bg-white p-2 rounded overflow-hidden" style={{ maxWidth: '350px' }}>
                  <div className="w-40 flex-shrink-1 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 1
                  </div>
                  <div className="w-40 flex-shrink-2 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 2
                  </div>
                  <div className="w-40 flex-shrink-1 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Елемент 3
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Другий елемент стискається сильніше</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-medium">
              Порада: <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink: 0</code> корисно використовувати для
              елементів, розмір яких не повинен зменшуватися (наприклад, логотипи, іконки, кнопки).
            </p>
          </div>
        </div>
      )}

      {activeSection === 'basis' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex-basis</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex-basis</code> визначає початковий головний
            розмір елемента перед розподілом доступного простору.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Як це працює:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    За замовчуванням <code className="bg-gray-100 px-2 py-1 rounded">flex-basis: auto</code> - розмір
                    базується на вмісті елемента
                  </li>
                  <li>Можна встановити конкретний розмір (px, em, %, тощо)</li>
                  <li>
                    Значення <code className="bg-gray-100 px-2 py-1 rounded">flex-basis: 0</code> означає, що початковий
                    розмір не враховується
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm">
                  {`.item-auto {
  flex-basis: auto; /* За замовчуванням */
}

.item-fixed {
  flex-basis: 200px; /* Фіксований початковий розмір */
}

.item-percentage {
  flex-basis: 50%; /* Відсоток від контейнера */
}

.item-zero {
  flex-basis: 0; /* Ігнорує власний розмір */
  flex-grow: 1; /* Часто використовується з flex-grow */
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-basis: auto:</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">Короткий</div>
                  <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">Довший текст</div>
                  <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">
                    Найдовший текст в елементі
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Розмір елементів залежить від їх вмісту</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">flex-basis: 100px (для всіх):</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="basis-24 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">Короткий</div>
                  <div className="basis-24 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">Довший текст</div>
                  <div className="basis-24 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">Найдовший текст</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Всі елементи мають однаковий початковий розмір</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">flex-basis: 0 з flex-grow: 1 (для всіх):</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="flex-1 basis-0 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">Короткий</div>
                  <div className="flex-1 basis-0 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Довший текст
                  </div>
                  <div className="flex-1 basis-0 bg-blue-500 text-white px-4 py-2 rounded m-1 truncate">
                    Найдовший текст
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Всі елементи мають однаковий розмір, незалежно від вмісту</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <p className="font-medium">
              <code className="bg-gray-100 px-2 py-1 rounded">flex-basis</code> працює вздовж головної осі. Якщо{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">flex-direction: row</code>, то
              <code className="bg-gray-100 px-2 py-1 rounded"> flex-basis</code> впливає на ширину. Якщо{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">flex-direction: column</code>, то на висоту.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'align-self' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">align-self</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">align-self</code> дозволяє перевизначити
            вирівнювання окремого flex-елемента вздовж поперечної осі.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Як це працює:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    За замовчуванням <code className="bg-gray-100 px-2 py-1 rounded">align-self: auto</code> - елемент
                    наслідує значення align-items контейнера
                  </li>
                  <li>
                    Приймає ті ж значення, що й <code className="bg-gray-100 px-2 py-1 rounded">align-items</code>
                  </li>
                  <li>Дозволяє задати індивідуальне вирівнювання для конкретного елемента</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm">
                  {`.container {
  display: flex;
  align-items: center; /* Для всіх елементів */
  height: 150px;
}

.item {
  /* Наслідує align-items: center */
}

.item-top {
  align-self: flex-start; /* Буде вирівняний по верху */
}

.item-bottom {
  align-self: flex-end; /* Буде вирівняний по низу */
}

.item-stretch {
  align-self: stretch; /* Буде розтягнутий по висоті */
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">align-items: center (контейнер) без align-self:</p>
                <div className="flex items-center bg-white p-2 rounded h-32">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Всі елементи вирівняні по центру</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">З використанням align-self для окремих елементів:</p>
                <div className="flex items-center bg-white p-2 rounded h-32">
                  <div className="self-start bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="self-end bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Елемент 1 - зверху, елемент 2 - по центру, елемент 3 - знизу
                </p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">З використанням align-self: stretch:</p>
                <div className="flex items-center bg-white p-2 rounded h-32">
                  <div className="self-start bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="self-stretch bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="self-end bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Елемент 2 розтягується на всю висоту контейнера</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-medium">
              Порада: <code className="bg-gray-100 px-2 py-1 rounded">align-self</code> дуже корисний для створення
              винятків у макеті, коли потрібно вирівняти один елемент інакше, ніж усі інші.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'playground' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Інтерактивний приклад</h2>
          <p className="mb-4">
            Виберіть елемент та змініть його властивості, щоб побачити, як вони впливають на макет:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="col-span-2">
              <div className="bg-white p-4 border border-gray-300 rounded h-64 flex items-center">
                <div
                  className={`px-6 py-3 m-1 rounded font-bold flex items-center justify-center cursor-pointer ${selectedItem === 1 ? 'bg-blue-600 text-white ring-2 ring-blue-300' : 'bg-blue-200'}`}
                  style={{
                    flexGrow: selectedItem === 1 ? flexGrow : 0,
                    order: selectedItem === 1 ? 0 : 'unset',
                    alignSelf: selectedItem === 1 ? alignSelf : 'auto',
                  }}
                  onClick={() => setSelectedItem(1)}
                >
                  1
                </div>
                <div
                  className={`px-6 py-3 m-1 rounded font-bold flex items-center justify-center cursor-pointer ${selectedItem === 2 ? 'bg-blue-600 text-white ring-2 ring-blue-300' : 'bg-blue-200'}`}
                  style={{
                    flexGrow: selectedItem === 2 ? flexGrow : 0,
                    order: selectedItem === 2 ? 0 : 'unset',
                    alignSelf: selectedItem === 2 ? alignSelf : 'auto',
                  }}
                  onClick={() => setSelectedItem(2)}
                >
                  2
                </div>
                <div
                  className={`px-6 py-3 m-1 rounded font-bold flex items-center justify-center cursor-pointer ${selectedItem === 3 ? 'bg-blue-600 text-white ring-2 ring-blue-300' : 'bg-blue-200'}`}
                  style={{
                    flexGrow: selectedItem === 3 ? flexGrow : 0,
                    order: selectedItem === 3 ? 0 : 'unset',
                    alignSelf: selectedItem === 3 ? alignSelf : 'auto',
                  }}
                  onClick={() => setSelectedItem(3)}
                >
                  3
                </div>
              </div>
              <p className="text-sm text-center mt-2 text-gray-600">
                Натисніть на елемент, щоб вибрати його для налаштування
              </p>
            </div>

            <div>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                <h3 className="font-bold text-lg mb-3">Властивості елемента {selectedItem}</h3>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">flex-grow:</label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={flexGrow}
                    onChange={(e) => setFlexGrow(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">align-self:</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={alignSelf as string}
                    onChange={(e) => setAlignSelf(e.target.value as CSSProperties['alignSelf'])}
                  >
                    <option value="auto">auto</option>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="stretch">stretch</option>
                    <option value="baseline">baseline</option>
                  </select>
                </div>

                <div className="bg-white p-2 rounded border border-gray-300">
                  <h4 className="font-medium text-sm mb-2">CSS для елемента {selectedItem}:</h4>
                  <pre className="text-xs bg-gray-50 p-2 rounded">
                    {`.item-${selectedItem} {
  flex-grow: ${flexGrow};
  align-self: ${alignSelf};
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
            <p className="font-medium">
              У цьому інтерактивному прикладі ви можете вибрати будь-який елемент і змінити його властивість flex-grow.
              Спробуйте різні значення, щоб побачити, як елемент реагує і як це впливає на інші елементи в контейнері.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'shorthand' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">flex (скорочена властивість)</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">flex</code> є скороченою для{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">flex-grow</code>,
            <code className="bg-gray-100 px-2 py-1 rounded">flex-shrink</code> та
            <code className="bg-gray-100 px-2 py-1 rounded">flex-basis</code>.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-bold text-lg mb-2">Синтаксис:</h3>
            <pre className="text-sm bg-gray-100 p-3 rounded mb-4">
              {`.item {
  flex: flex-grow flex-shrink flex-basis;
}`}
            </pre>

            <h3 className="font-bold text-lg mb-2">Поширені варіанти:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">flex: 0 1 auto</p>
                <p className="text-sm text-gray-700 mb-2">
                  Значення за замовчуванням. Елемент не розширюється, може стискатися, початковий розмір залежить від
                  вмісту.
                </p>
                <pre className="text-sm bg-gray-100 p-2 rounded">flex: initial;</pre>
              </div>

              <div>
                <p className="font-medium">flex: 1 1 auto</p>
                <p className="text-sm text-gray-700 mb-2">
                  Елемент розширюється, заповнюючи вільний простір, може стискатися, початковий розмір залежить від
                  вмісту.
                </p>
                <pre className="text-sm bg-gray-100 p-2 rounded">flex: auto;</pre>
              </div>

              <div>
                <p className="font-medium">flex: 0 0 auto</p>
                <p className="text-sm text-gray-700 mb-2">
                  Елемент не змінює свій розмір, не розширюється і не стискається.
                </p>
                <pre className="text-sm bg-gray-100 p-2 rounded">flex: none;</pre>
              </div>

              <div>
                <p className="font-medium">flex: 1 1 0%</p>
                <p className="text-sm text-gray-700 mb-2">
                  Елемент займає простір пропорційно свому flex-grow, ігноруючи початковий розмір.
                </p>
                <pre className="text-sm bg-gray-100 p-2 rounded">flex: 1;</pre>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex: initial (0 1 auto):</p>
              <div className="flex bg-white p-2 rounded">
                <div className="flex-initial bg-blue-500 text-white px-4 py-2 rounded m-1">Короткий</div>
                <div className="flex-initial bg-blue-500 text-white px-4 py-2 rounded m-1">Довший текст</div>
                <div className="flex-initial bg-blue-500 text-white px-4 py-2 rounded m-1">
                  Найдовший текст в елементі
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Елементи зберігають свій початковий розмір</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex: auto (1 1 auto):</p>
              <div className="flex bg-white p-2 rounded">
                <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">Короткий</div>
                <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">Довший текст</div>
                <div className="flex-auto bg-blue-500 text-white px-4 py-2 rounded m-1">Найдовший текст в елементі</div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Елементи розширюються, але з врахуванням їх вмісту</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex: none (0 0 auto):</p>
              <div className="flex bg-white p-2 rounded overflow-hidden">
                <div className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">Короткий</div>
                <div className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">Довший текст</div>
                <div className="flex-none bg-blue-500 text-white px-4 py-2 rounded m-1">Найдовший текст в елементі</div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Жоден елемент не змінює свій розмір</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
              <p className="text-sm font-bold mb-2">flex: 1 (1 1 0%):</p>
              <div className="flex bg-white p-2 rounded">
                <div className="flex-1 bg-blue-500 text-white px-4 py-2 rounded m-1">Короткий</div>
                <div className="flex-1 bg-blue-500 text-white px-4 py-2 rounded m-1">Довший текст</div>
                <div className="flex-1 bg-blue-500 text-white px-4 py-2 rounded m-1">Найдовший текст в елементі</div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Всі елементи мають однаковий розмір, незалежно від вмісту</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-medium">
              Рекомендація: Використовуйте скорочену властивість{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">flex</code>
              замість встановлення окремих властивостей. Це зробить ваш код коротшим і забезпечить правильне
              встановлення значень за замовчуванням.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'order' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">order</h2>
          <p className="mb-4">
            Властивість <code className="bg-gray-100 px-2 py-1 rounded">order</code> дозволяє змінювати порядок
            відображення елементів, не змінюючи HTML.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Як це працює:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    За замовчуванням <code className="bg-gray-100 px-2 py-1 rounded">order: 0</code> для всіх елементів
                  </li>
                  <li>Елементи відображаються за зростанням значення order</li>
                  <li>Можна використовувати від'ємні значення</li>
                  <li>Елементи з однаковим значенням order відображаються в порядку їх появи в HTML</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <pre className="text-sm text-balance">
                  {`.first {
  order: 3; /* Буде показаний останнім */
}

.second {
  order: 1; /* Буде показаний першим */
}

.third {
  order: 2; /* Буде показаний другим */
}

.important {
  order: -1; /* Буде показаний перед усіма елементами з order >= 0 */
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">Порядок в HTML:</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Елементи показані в тому порядку, в якому вони в HTML</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 mb-3">
                <p className="text-sm font-bold mb-2">З використанням order:</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="order-3 bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="order-1 bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="order-2 bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Елементи показані в порядку: 2, 3, 1</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                <p className="text-sm font-bold mb-2">З використанням від'ємного order:</p>
                <div className="flex bg-white p-2 rounded">
                  <div className="order-1 bg-blue-500 text-white px-4 py-2 rounded m-1">1</div>
                  <div className="order-2 bg-blue-500 text-white px-4 py-2 rounded m-1">2</div>
                  <div className="order-first bg-blue-500 text-white px-4 py-2 rounded m-1">3</div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Елемент 3 з order: -1 показується першим</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="font-medium">
              Важливо: Властивість <code className="bg-gray-100 px-2 py-1 rounded">order</code> впливає лише на
              візуальне представлення, а не на логічний порядок елементів. Це означає, що для скрін-рідерів та
              клавіатурної навігації порядок залишається таким, як у HTML.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxItemsSlide;
