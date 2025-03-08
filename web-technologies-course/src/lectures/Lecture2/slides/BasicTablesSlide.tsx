import React from 'react';

const BasicTablesSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Основи роботи з таблицями</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Таблиці в HTML використовуються для відображення табличних даних у рядках і стовпцях. Це дозволяє організувати інформацію у структурованому форматі, зрозумілому для користувачів.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Основні елементи таблиць:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">table</code> - контейнер таблиці</p>
            <p><code className="bg-gray-200 px-1 rounded">tr</code> - рядок таблиці (table row)</p>
            <p><code className="bg-gray-200 px-1 rounded">td</code> - комірка даних (table data)</p>
            <p><code className="bg-gray-200 px-1 rounded">th</code> - заголовок (table header)</p>
            <p><code className="bg-gray-200 px-1 rounded">caption</code> - підпис таблиці</p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-bold mb-2">Структурні елементи (семантичні):</h4>
            <div className="bg-gray-100 p-3 rounded-lg space-y-2">
              <p><code className="bg-gray-200 px-1 rounded">thead</code> - секція заголовків</p>
              <p><code className="bg-gray-200 px-1 rounded">tbody</code> - секція основного вмісту</p>
              <p><code className="bg-gray-200 px-1 rounded">tfoot</code> - підсумкова секція</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Проста таблиця:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<table>
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
          <div className="bg-white p-2 rounded border">
            <table className="w-full border-collapse">
              <caption className="font-bold mb-2">Розклад занять</caption>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50">День</th>
                <th className="border border-gray-300 p-2 bg-gray-50">Предмет</th>
                <th className="border border-gray-300 p-2 bg-gray-50">Аудиторія</th>
              </tr>
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
            </table>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border p-4 rounded-lg">
          <h3 className="font-bold mb-3">Семантична таблиця з секціями:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<table>
  <caption>Фінансовий звіт</caption>
  <thead>
    <tr>
      <th>Місяць</th>
      <th>Дохід</th>
      <th>Витрати</th>
      <th>Прибуток</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Січень</td>
      <td>10000</td>
      <td>7000</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>Лютий</td>
      <td>12000</td>
      <td>8000</td>
      <td>4000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Всього</th>
      <td>22000</td>
      <td>15000</td>
      <td>7000</td>
    </tr>
  </tfoot>
</table>`}
          </pre>
          
          <h3 className="font-bold mb-2">Результат:</h3>
          <div className="bg-white p-2 rounded border">
            <table className="w-full border-collapse">
              <caption className="font-bold mb-2">Фінансовий звіт</caption>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50">Місяць</th>
                  <th className="border border-gray-300 p-2 bg-gray-50">Дохід</th>
                  <th className="border border-gray-300 p-2 bg-gray-50">Витрати</th>
                  <th className="border border-gray-300 p-2 bg-gray-50">Прибуток</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Січень</td>
                  <td className="border border-gray-300 p-2">10000</td>
                  <td className="border border-gray-300 p-2">7000</td>
                  <td className="border border-gray-300 p-2">3000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Лютий</td>
                  <td className="border border-gray-300 p-2">12000</td>
                  <td className="border border-gray-300 p-2">8000</td>
                  <td className="border border-gray-300 p-2">4000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Всього</th>
                  <td className="border border-gray-300 p-2 font-bold">22000</td>
                  <td className="border border-gray-300 p-2 font-bold">15000</td>
                  <td className="border border-gray-300 p-2 font-bold">7000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div>
          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Переваги використання thead, tbody і tfoot:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Структуризація таблиці на логічні секції</li>
              <li>Можливість стилізації різних частин таблиці</li>
              <li>Підтримка доступності для асистивних технологій</li>
              <li>Можливість фіксації заголовків (thead) при прокрутці</li>
              <li>Повторення підсумкового рядка (tfoot) при друку</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Важливі атрибути для таблиць:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-green-200 px-1 rounded">colspan</code> - об'єднання кількох стовпців</li>
              <li><code className="bg-green-200 px-1 rounded">rowspan</code> - об'єднання кількох рядків</li>
              <li><code className="bg-green-200 px-1 rounded">scope</code> - зв'язок між заголовком і комірками</li>
              <li><code className="bg-green-200 px-1 rounded">headers</code> - зв'язок комірки з заголовками</li>
            </ul>
            <p className="mt-2 text-sm">Ці атрибути особливо важливі для складних таблиць і доступності.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Доступність таблиць:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1">Найкращі практики:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Використовуйте <code className="bg-blue-200 px-1 rounded">caption</code> для опису змісту таблиці</li>
              <li>Використовуйте <code className="bg-blue-200 px-1 rounded">th</code> для заголовків стовпців і рядків</li>
              <li>Додавайте атрибут <code className="bg-blue-200 px-1 rounded">scope</code> до заголовків</li>
              <li>Дотримуйтесь семантичної структури секцій таблиці</li>
              <li>Використовуйте <code className="bg-blue-200 px-1 rounded">aria-*</code> атрибути для складних таблиць</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Приклад з атрибутами scope:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<table>
  <tr>
    <th scope="col">Ім'я</th>
    <th scope="col">Вік</th>
  </tr>
  <tr>
    <th scope="row">Іван</th>
    <td>25</td>
  </tr>
  <tr>
    <th scope="row">Марія</th>
    <td>30</td>
  </tr>
</table>`}
            </pre>
            <p className="mt-2 text-sm">Атрибути <code>scope="col"</code> та <code>scope="row"</code> допомагають програмам читання з екрану правильно інтерпретувати структуру таблиці.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTablesSlide;