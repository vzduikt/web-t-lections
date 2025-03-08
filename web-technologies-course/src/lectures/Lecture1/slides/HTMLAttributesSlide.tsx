import React from 'react';

const HTMLAttributesSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Атрибути HTML-тегів</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Атрибути надають додаткову інформацію про елементи HTML і завжди визначаються в початковому тегу.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Синтаксис атрибутів:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<тег назва_атрибута="значення">Вміст</тег>`}
          </pre>
          
          <div className="bg-yellow-100 p-3 rounded-lg mt-4">
            <p><strong>Важливо:</strong></p>
            <ul className="list-disc ml-5">
              <li>Значення атрибутів завжди вказуються в лапках</li>
              <li>Можна використовувати одинарні або подвійні лапки</li>
              <li>Атрибути розділяються пробілами</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Приклади використання атрибутів:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-2">
{`<!-- Посилання -->
<a href="https://example.com" target="_blank">
  Перейти на сайт
</a>

<!-- Зображення -->
<img src="image.jpg" alt="Опис зображення" width="300" height="200">

<!-- Введення даних -->
<input type="text" name="username" placeholder="Введіть ім'я">`}
          </pre>
        </div>
      </div>
      
      <h3 className="font-bold mb-2">Найважливіші глобальні атрибути (доступні для всіх елементів):</h3>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Атрибут</th>
              <th className="border border-gray-300 p-2 text-left">Призначення</th>
              <th className="border border-gray-300 p-2 text-left">Приклад</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"><code>id</code></td>
              <td className="border border-gray-300 p-2">Унікальний ідентифікатор елемента</td>
              <td className="border border-gray-300 p-2"><code>&lt;div id="header"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>class</code></td>
              <td className="border border-gray-300 p-2">Клас для CSS-стилізації</td>
              <td className="border border-gray-300 p-2"><code>&lt;p class="important"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>style</code></td>
              <td className="border border-gray-300 p-2">Вбудовані CSS-стилі</td>
              <td className="border border-gray-300 p-2"><code>&lt;p style="color: red;"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>title</code></td>
              <td className="border border-gray-300 p-2">Підказка при наведенні курсору</td>
              <td className="border border-gray-300 p-2"><code>&lt;span title="Додаткова інформація"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>lang</code></td>
              <td className="border border-gray-300 p-2">Мова вмісту</td>
              <td className="border border-gray-300 p-2"><code>&lt;html lang="uk"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>data-*</code></td>
              <td className="border border-gray-300 p-2">Користувацькі дані</td>
              <td className="border border-gray-300 p-2"><code>&lt;div data-user-id="123"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>hidden</code></td>
              <td className="border border-gray-300 p-2">Приховує елемент</td>
              <td className="border border-gray-300 p-2"><code>&lt;div hidden&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Особливості атрибутів:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Деякі атрибути не потребують значення (наприклад, <code className="bg-green-200 px-1 rounded">disabled</code>, <code className="bg-green-200 px-1 rounded">checked</code>, <code className="bg-green-200 px-1 rounded">readonly</code>)</li>
          <li>Атрибути <code className="bg-green-200 px-1 rounded">id</code> повинні бути унікальними в межах документа</li>
          <li>Атрибут <code className="bg-green-200 px-1 rounded">class</code> може містити кілька значень, розділених пробілами</li>
          <li>Атрибути <code className="bg-green-200 px-1 rounded">src</code> і <code className="bg-green-200 px-1 rounded">href</code> можуть містити як абсолютні, так і відносні URL</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLAttributesSlide;