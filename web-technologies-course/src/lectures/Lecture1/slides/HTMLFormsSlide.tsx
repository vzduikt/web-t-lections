import React, { useState } from 'react';

const HTMLFormsSlide: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [colorValue, setColorValue] = useState('#3182ce');
  const [rangeValue, setRangeValue] = useState(50);
  const [dateValue, setDateValue] = useState('');
  const [selectValue, setSelectValue] = useState('option1');
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Форми в HTML</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Форми використовуються для збору даних від користувачів. Це невід'ємна частина інтерактивних веб-сайтів, яка дозволяє надсилати інформацію на сервер.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Основні елементи форм:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">form</code> - контейнер форми</p>
            <p><code className="bg-gray-200 px-1 rounded">input</code> - поле введення (різних типів)</p>
            <p><code className="bg-gray-200 px-1 rounded">textarea</code> - багаторядкове текстове поле</p>
            <p><code className="bg-gray-200 px-1 rounded">select</code> - випадаючий список</p>
            <p><code className="bg-gray-200 px-1 rounded">option</code> - пункт списку</p>
            <p><code className="bg-gray-200 px-1 rounded">button</code> - кнопка</p>
            <p><code className="bg-gray-200 px-1 rounded">label</code> - підпис для поля</p>
            <p><code className="bg-gray-200 px-1 rounded">fieldset</code> / <code className="bg-gray-200 px-1 rounded">legend</code> - групування полів</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Приклад простої форми:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto h-64">
{`<form action="/submit" method="post">
  <fieldset>
    <legend>Контактна інформація</legend>
    
    <div>
      <label for="name">Ім'я:</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div>
      <label for="message">Повідомлення:</label>
      <textarea id="message" name="message" rows="4"></textarea>
    </div>
    
    <div>
      <label for="subject">Тема:</label>
      <select id="subject" name="subject">
        <option value="general">Загальне питання</option>
        <option value="support">Підтримка</option>
        <option value="feedback">Відгук</option>
      </select>
    </div>
    
    <button type="submit">Надіслати</button>
  </fieldset>
</form>`}
          </pre>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Типи полів введення - Спробуйте самі!</h3>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="text-input" className="block font-medium mb-1">
                Text input: <code className="bg-gray-200 px-1 rounded">type="text"</code>
              </label>
              <input
                type="text"
                id="text-input"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Введіть текст"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">Поточне значення: {textValue}</p>
            </div>
            
            <div>
              <label htmlFor="password-input" className="block font-medium mb-1">
                Password input: <code className="bg-gray-200 px-1 rounded">type="password"</code>
              </label>
              <input
                type="password"
                id="password-input"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Введіть пароль"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">Довжина паролю: {passwordValue.length} символів</p>
            </div>
            
            <div>
              <label htmlFor="email-input" className="block font-medium mb-1">
                Email input: <code className="bg-gray-200 px-1 rounded">type="email"</code>
              </label>
              <input
                type="email"
                id="email-input"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="email@example.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">Вбудована валідація email</p>
            </div>
            
            <div>
              <label htmlFor="number-input" className="block font-medium mb-1">
                Number input: <code className="bg-gray-200 px-1 rounded">type="number"</code>
              </label>
              <input
                type="number"
                id="number-input"
                className="w-full p-2 border border-gray-300 rounded"
                value={numberValue}
                onChange={(e) => setNumberValue(parseInt(e.target.value) || 0)}
              />
              <p className="text-sm text-gray-500 mt-1">Дозволено лише числа</p>
            </div>
            
            <div>
              <label htmlFor="textarea-input" className="block font-medium mb-1">
                Textarea: <code className="bg-gray-200 px-1 rounded">textarea</code>
              </label>
              <textarea
                id="textarea-input"
                className="w-full p-2 border border-gray-300 rounded"
                rows={3}
                placeholder="Багаторядковий текст"
              ></textarea>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="block font-medium mb-1">
                Checkbox input: <code className="bg-gray-200 px-1 rounded">type="checkbox"</code>
              </span>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5"
                  checked={checkboxValue}
                  onChange={(e) => setCheckboxValue(e.target.checked)}
                />
                Приймаю умови використання
              </label>
              <p className="text-sm text-gray-500 mt-1">Статус: {checkboxValue ? 'Вибрано' : 'Не вибрано'}</p>
            </div>
            
            <div>
              <span className="block font-medium mb-1">
                Radio input: <code className="bg-gray-200 px-1 rounded">type="radio"</code>
              </span>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-group"
                    value="option1"
                    className="mr-2 h-5 w-5"
                    checked={radioValue === 'option1'}
                    onChange={() => setRadioValue('option1')}
                  />
                  Варіант 1
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-group"
                    value="option2"
                    className="mr-2 h-5 w-5"
                    checked={radioValue === 'option2'}
                    onChange={() => setRadioValue('option2')}
                  />
                  Варіант 2
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-group"
                    value="option3"
                    className="mr-2 h-5 w-5"
                    checked={radioValue === 'option3'}
                    onChange={() => setRadioValue('option3')}
                  />
                  Варіант 3
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-1">Вибрано: {radioValue}</p>
            </div>
            
            <div>
              <label htmlFor="select-input" className="block font-medium mb-1">
                Select menu: <code className="bg-gray-200 px-1 rounded">select</code>
              </label>
              <select 
                id="select-input" 
                className="w-full p-2 border border-gray-300 rounded"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="option1">Опція 1</option>
                <option value="option2">Опція 2</option>
                <option value="option3">Опція 3</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">Вибрано: {selectValue}</p>
            </div>
            
            <div>
              <label htmlFor="date-input" className="block font-medium mb-1">
                Date input: <code className="bg-gray-200 px-1 rounded">type="date"</code>
              </label>
              <input
                type="date"
                id="date-input"
                className="w-full p-2 border border-gray-300 rounded"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">Вибрана дата: {dateValue || 'не вибрано'}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="color-input" className="block font-medium mb-1">
                  Color: <code className="bg-gray-200 px-1 rounded">type="color"</code>
                </label>
                <input
                  type="color"
                  id="color-input"
                  className="w-full h-10"
                  value={colorValue}
                  onChange={(e) => setColorValue(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Код: {colorValue}</p>
              </div>
              
              <div>
                <label htmlFor="range-input" className="block font-medium mb-1">
                  Range: <code className="bg-gray-200 px-1 rounded">type="range"</code>
                </label>
                <input
                  type="range"
                  id="range-input"
                  className="w-full"
                  min="0"
                  max="100"
                  value={rangeValue}
                  onChange={(e) => setRangeValue(parseInt(e.target.value))}
                />
                <p className="text-sm text-gray-500 mt-1">Значення: {rangeValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Важливі атрибути форм:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><code className="bg-yellow-200 px-1 rounded">action</code> - URL для надсилання даних</li>
            <li><code className="bg-yellow-200 px-1 rounded">method</code> - метод HTTP (get або post)</li>
            <li><code className="bg-yellow-200 px-1 rounded">name</code> - ім'я поля для надсилання на сервер</li>
            <li><code className="bg-yellow-200 px-1 rounded">value</code> - значення поля</li>
            <li><code className="bg-yellow-200 px-1 rounded">placeholder</code> - підказка в полі</li>
            <li><code className="bg-yellow-200 px-1 rounded">required</code> - обов'язкове поле</li>
            <li><code className="bg-yellow-200 px-1 rounded">disabled</code> - неактивне поле</li>
            <li><code className="bg-yellow-200 px-1 rounded">readonly</code> - поле тільки для читання</li>
          </ul>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Найкращі практики для форм:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Завжди використовуйте <code className="bg-green-200 px-1 rounded">label</code> з атрибутом <code className="bg-green-200 px-1 rounded">for</code> для полів форми</li>
            <li>Групуйте пов'язані поля з <code className="bg-green-200 px-1 rounded">fieldset</code> і <code className="bg-green-200 px-1 rounded">legend</code></li>
            <li>Використовуйте семантичні типи полів (email, tel, number)</li>
            <li>Додавайте атрибут <code className="bg-green-200 px-1 rounded">required</code> для обов'язкових полів</li>
            <li>Забезпечте правильну валідацію даних форми</li>
            <li>Додайте <code className="bg-green-200 px-1 rounded">autocomplete</code> для поширених полів</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HTMLFormsSlide;