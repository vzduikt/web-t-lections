import React from 'react';

const HTMLTablesSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Таблиці в HTML</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Таблиці використовуються для відображення даних у рядках і стовпцях. Важливо використовувати таблиці тільки для табличних даних, а не для компонування макетів.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Основні елементи таблиць:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">table</code> - контейнер таблиці</p>
            <p><code className="bg-gray-200 px-1 rounded">tr</code> - рядок таблиці (table row)</p>
            <p><code className="bg-gray-200 px-1 rounded">th</code> - заголовок стовпця/рядка (table header)</p>
            <p><code className="bg-gray-200 px-1 rounded">td</code> - комірка даних (table data)</p>
            <p><code className="bg-gray-200 px-1 rounded">caption</code> - підпис таблиці</p>
          </div>
          
          <h3 className="font-bold mt-4 mb-2">Структурні елементи для великих таблиць:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">thead</code> - секція заголовків</p>
            <p><code className="bg-gray-200 px-1 rounded">tbody</code> - основна частина з даними</p>
            <p><code className="bg-gray-200 px-1 rounded">tfoot</code> - нижня частина (підсумки)</p>
            <p><code className="bg-gray-200 px-1 rounded">colgroup</code> / <code className="bg-gray-200 px-1 rounded">col</code> - групування стовпців</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Приклад простої таблиці:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<table border="1">
  <caption>Розклад занять</caption>
  <tr>
    <th>День</th>
    <th>Предмет</th>
    <th>Аудиторія</th>
  </tr>
  <tr>
    <td>Понеділок</td>
    <td>Веб-технології</td>
    <td>301</td>
  </tr>
  <tr>
    <td>Вівторок</td>
    <td>Програмування</td>
    <td>205</td>
  </tr>
</table>`}
          </pre>
          
          <h3 className="font-bold mb-2">Результат:</h3>
          <div className="bg-white p-3 rounded-lg border">
            <table className="border-collapse w-full">
              <caption className="font-bold mb-2">Розклад занять</caption>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">День</th>
                  <th className="border border-gray-300 p-2">Предмет</th>
                  <th className="border border-gray-300 p-2">Аудиторія</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Понеділок</td>
                  <td className="border border-gray-300 p-2">Веб-технології</td>
                  <td className="border border-gray-300 p-2">301</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Вівторок</td>
                  <td className="border border-gray-300 p-2">Програмування</td>
                  <td className="border border-gray-300 p-2">205</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">Атрибути таблиць:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-yellow-200 px-1 rounded">colspan</code> - об'єднання кількох стовпців</li>
          <li><code className="bg-yellow-200 px-1 rounded">rowspan</code> - об'єднання кількох рядків</li>
          <li><code className="bg-yellow-200 px-1 rounded">scope</code> - зв'язок між заголовком і даними (для доступності)</li>
        </ul>
        <div className="mt-2">
          <p className="font-semibold">Приклад:</p>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mt-1">
{`<table>
  <tr>
    <th>Товар</th>
    <th colspan="2">Ціна і наявність</th>
  </tr>
  <tr>
    <td>Ноутбук</td>
    <td>24000 грн</td>
    <td>В наявності</td>
  </tr>
</table>`}
          </pre>
        </div>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Найкращі практики використання таблиць:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Використовуйте <code className="bg-green-200 px-1 rounded">thead</code>, <code className="bg-green-200 px-1 rounded">tbody</code> і <code className="bg-green-200 px-1 rounded">tfoot</code> для структурування даних</li>
          <li>Застосовуйте <code className="bg-green-200 px-1 rounded">th</code> для заголовків з атрибутом <code className="bg-green-200 px-1 rounded">scope</code></li>
          <li>Використовуйте <code className="bg-green-200 px-1 rounded">caption</code> для опису вмісту таблиці</li>
          <li>Не використовуйте таблиці для створення макетів (використовуйте CSS Grid або Flexbox)</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLTablesSlide;