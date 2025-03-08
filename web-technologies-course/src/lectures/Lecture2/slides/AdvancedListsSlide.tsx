import React, { useState } from 'react';

const AdvancedListsSlide: React.FC = () => {
  const [counterStyle, setCounterStyle] = useState('default');
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Розширені можливості списків</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Вкладені списки (Nested Lists)</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>Дозволяють створювати ієрархічні структури, розміщуючи один список всередині елемента іншого списку.</p>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад коду:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<ul>
  <li>Фрукти
    <ul>
      <li>Яблука</li>
      <li>Банани</li>
      <li>Ягоди
        <ul>
          <li>Полуниця</li>
          <li>Малина</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Овочі
    <ul>
      <li>Морква</li>
      <li>Помідори</li>
    </ul>
  </li>
</ul>`}
            </pre>
            
            <h4 className="font-bold mb-2">Результат:</h4>
            <ul className="list-disc pl-5">
              <li>Фрукти
                <ul className="list-circle pl-5">
                  <li>Яблука</li>
                  <li>Банани</li>
                  <li>Ягоди
                    <ul className="list-square pl-5">
                      <li>Полуниця</li>
                      <li>Малина</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Овочі
                <ul className="list-circle pl-5">
                  <li>Морква</li>
                  <li>Помідори</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Списки опису (Description Lists)</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2">Використовуються для пар "термін-опис", таких як глосарії, метадані тощо.</p>
            <div className="flex space-x-2 mb-2">
              <code className="bg-gray-200 px-1 rounded">dl</code>
              <span>- контейнер списку опису</span>
            </div>
            <div className="flex space-x-2 mb-2">
              <code className="bg-gray-200 px-1 rounded">dt</code>
              <span>- термін (term)</span>
            </div>
            <div className="flex space-x-2">
              <code className="bg-gray-200 px-1 rounded">dd</code>
              <span>- опис (description)</span>
            </div>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад коду:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<dl>
  <dt>HTML</dt>
  <dd>Мова розмітки для створення веб-сторінок</dd>
  
  <dt>CSS</dt>
  <dd>Мова стилів для оформлення веб-сторінок</dd>
  
  <dt>JavaScript</dt>
  <dd>Мова програмування для додавання інтерактивності</dd>
</dl>`}
            </pre>
            
            <h4 className="font-bold mb-2">Результат:</h4>
            <dl className="space-y-2">
              <dt className="font-bold">HTML</dt>
              <dd className="pl-4">Мова розмітки для створення веб-сторінок</dd>
              
              <dt className="font-bold">CSS</dt>
              <dd className="pl-4">Мова стилів для оформлення веб-сторінок</dd>
              
              <dt className="font-bold">JavaScript</dt>
              <dd className="pl-4">Мова програмування для додавання інтерактивності</dd>
            </dl>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2">Кастомні лічильники (CSS Counters)</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>CSS лічильники дозволяють створювати складні нумерації, які не можна реалізувати стандартними атрибутами.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-2">
              <select 
                className="p-2 border rounded w-full"
                value={counterStyle}
                onChange={(e) => setCounterStyle(e.target.value)}
              >
                <option value="default">Стандартний стиль</option>
                <option value="custom">Кастомний лічильник (1.1, 1.2, etc.)</option>
                <option value="emoji">Emoji замість чисел</option>
              </select>
            </div>
            
            <div className="bg-white border p-4 rounded-lg">
              {counterStyle === 'default' && (
                <ol className="pl-5">
                  <li>Перший розділ</li>
                  <li>Другий розділ
                    <ol className="pl-5">
                      <li>Підрозділ 2.1</li>
                      <li>Підрозділ 2.2</li>
                    </ol>
                  </li>
                  <li>Третій розділ</li>
                </ol>
              )}
              
              {counterStyle === 'custom' && (
                <div className="custom-counters">
                  <style dangerouslySetInnerHTML={{ __html: `
                    .custom-counters {
                      counter-reset: section;
                    }
                    .custom-counters > div {
                      counter-increment: section;
                      margin-bottom: 8px;
                    }
                    .custom-counters > div::before {
                      content: counter(section) ". ";
                      font-weight: bold;
                    }
                    .custom-counters .subsection {
                      counter-reset: subsection;
                      margin-left: 20px;
                    }
                    .custom-counters .subsection > div {
                      counter-increment: subsection;
                      margin-bottom: 4px;
                    }
                    .custom-counters .subsection > div::before {
                      content: counter(section) "." counter(subsection) " ";
                      font-weight: bold;
                    }
                  `}} />
                  <div>Перший розділ</div>
                  <div>
                    Другий розділ
                    <div className="subsection">
                      <div>Підрозділ другого розділу</div>
                      <div>Ще один підрозділ</div>
                    </div>
                  </div>
                  <div>Третій розділ</div>
                </div>
              )}
              
              {counterStyle === 'emoji' && (
                <div className="emoji-list">
                  <style dangerouslySetInnerHTML={{ __html: `
                    .emoji-list {
                      list-style: none;
                      padding-left: 0;
                    }
                    .emoji-list > li {
                      padding-left: 30px;
                      position: relative;
                      margin-bottom: 8px;
                    }
                    .emoji-list > li:nth-child(1)::before {
                      content: "🔴";
                      position: absolute;
                      left: 0;
                    }
                    .emoji-list > li:nth-child(2)::before {
                      content: "🟠";
                      position: absolute;
                      left: 0;
                    }
                    .emoji-list > li:nth-child(3)::before {
                      content: "🟡";
                      position: absolute;
                      left: 0;
                    }
                    .emoji-list > li:nth-child(4)::before {
                      content: "🟢";
                      position: absolute;
                      left: 0;
                    }
                    .emoji-list > li:nth-child(5)::before {
                      content: "🔵";
                      position: absolute;
                      left: 0;
                    }
                  `}} />
                  <ul className="emoji-list">
                    <li>Перший елемент з емодзі-маркером</li>
                    <li>Другий елемент з емодзі-маркером</li>
                    <li>Третій елемент з емодзі-маркером</li>
                    <li>Четвертий елемент з емодзі-маркером</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад CSS для кастомних лічильників:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto h-64">
{`/* Ініціалізація лічильника розділів */
ol.custom {
  counter-reset: section;
  list-style-type: none;
}

/* Основні елементи */
ol.custom > li {
  counter-increment: section;
}

/* Додавання номера розділу перед елементом */
ol.custom > li::before {
  content: counter(section) ". ";
  font-weight: bold;
}

/* Підрозділи: скидання лічильника підрозділів */
ol.custom > li > ol {
  counter-reset: subsection;
  list-style-type: none;
}

/* Підрозділи: інкремент лічильника */
ol.custom > li > ol > li {
  counter-increment: subsection;
}

/* Підрозділи: додавання номера підрозділу */
ol.custom > li > ol > li::before {
  content: counter(section) "." counter(subsection) " ";
  font-weight: bold;
}`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Особливі випадки використання списків:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Навігаційні меню</strong> - UL/LI елементи часто використовуються для навігації</li>
            <li><strong>Хлібні крихти</strong> (breadcrumbs) - OL для послідовності навігації</li>
            <li><strong>FAQ секції</strong> - DL для питань (DT) і відповідей (DD)</li>
            <li><strong>Каталоги</strong> - вкладені UL для категорій і підкатегорій</li>
            <li><strong>Кроки процесу</strong> - OL для чітких послідовних інструкцій</li>
          </ul>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Важливі особливості для доступності:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>ARIA атрибути</strong> можуть покращити доступність складних списків</li>
            <li>Атрибут <code className="bg-green-200 px-1 rounded">role="list"</code> може знадобитись при деяких стилізаціях</li>
            <li>Не перериваємо списки діваіми або іншими елементами - всі LI повинні бути прямими дітьми UL/OL</li>
            <li>Використовуйте правильну семантичну структуру для списків визначень</li>
            <li>Не використовуйте таблиці, коли підходить список, і навпаки</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Поширені помилки та corner cases:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Проблеми, яких слід уникати:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Деякі стилі для UL/OL можуть порушити семантику для асистивних технологій</li>
              <li>Змішування блочних елементів з інлайновими всередині LI</li>
              <li>Перелаштовування порядку елементів у впорядкованому списку через CSS</li>
              <li>Використання списків виключно для візуального ефекту</li>
              <li>Розрив списку ненавмисними закриваючими тегами</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Рішення для складних випадків:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Для кастомних стилів використовуйте <code className="bg-blue-200 px-1 rounded">::marker</code> псевдоелемент</li>
              <li>Для горизонтальних списків використовуйте Flexbox або CSS Grid</li>
              <li>Для списків із складним UI використовуйте ARIA атрибути</li>
              <li>Для інтерактивних списків використовуйте JavaScript для маніпуляцій, зберігаючи семантику HTML</li>
              <li>Для багаторівневих списків слідкуйте за консистентністю вкладення і стилів</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedListsSlide;