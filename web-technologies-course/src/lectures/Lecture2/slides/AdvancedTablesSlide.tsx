import React, { useState } from 'react';

const AdvancedTablesSlide: React.FC = () => {
  const [showColGroup, setShowColGroup] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Розширені можливості таблиць</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Об'єднання комірок</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2">Атрибути <code className="bg-gray-200 px-1 rounded">colspan</code> і <code className="bg-gray-200 px-1 rounded">rowspan</code> дозволяють об'єднувати комірки горизонтально та вертикально.</p>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад коду:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<table>
  <tr>
    <th colspan="2">Інформація про користувача</th>
  </tr>
  <tr>
    <th>Ім'я:</th>
    <td>Іван Петренко</td>
  </tr>
  <tr>
    <th>Email:</th>
    <td>ivan@example.com</td>
  </tr>
  <tr>
    <th>Телефон:</th>
    <td>+380501234567</td>
  </tr>
  <tr>
    <th rowspan="2">Адреса:</th>
    <td>вул. Хрещатик, 1</td>
  </tr>
  <tr>
    <td>м. Київ, 01001</td>
  </tr>
</table>`}
            </pre>
            
            <h4 className="font-bold mb-2">Результат:</h4>
            <div className="bg-white rounded border overflow-hidden">
              <table className="w-full border-collapse">
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50" colSpan={2}>Інформація про користувача</th>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 w-1/3 text-left">Ім'я:</th>
                  <td className="border border-gray-300 p-2">Іван Петренко</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Email:</th>
                  <td className="border border-gray-300 p-2">ivan@example.com</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Телефон:</th>
                  <td className="border border-gray-300 p-2">+380501234567</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left" rowSpan={2}>Адреса:</th>
                  <td className="border border-gray-300 p-2">вул. Хрещатик, 1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">м. Київ, 01001</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Групування стовпців з colgroup і col</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2">Елементи <code className="bg-gray-200 px-1 rounded">colgroup</code> і <code className="bg-gray-200 px-1 rounded">col</code> дозволяють групувати та стилізувати стовпці таблиці.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm mt-2"
              onClick={() => setShowColGroup(!showColGroup)}
            >
              {showColGroup ? "Сховати приклад" : "Показати приклад з colgroup"}
            </button>
          </div>
          
          {showColGroup && (
            <div className="bg-white border p-4 rounded-lg">
              <h4 className="font-bold mb-2">Приклад коду:</h4>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<table>
  <colgroup>
    <col style="background-color: #f0f0f0;">
    <col span="2" style="background-color: #e6f7ff;">
    <col style="background-color: #e6ffe6;">
  </colgroup>
  <tr>
    <th>Квартал</th>
    <th>Q1</th>
    <th>Q2</th>
    <th>Всього</th>
  </tr>
  <tr>
    <td>Дохід</td>
    <td>10,000</td>
    <td>15,000</td>
    <td>25,000</td>
  </tr>
  <tr>
    <td>Витрати</td>
    <td>8,000</td>
    <td>9,000</td>
    <td>17,000</td>
  </tr>
</table>`}
              </pre>
              
              <h4 className="font-bold mb-2">Результат:</h4>
              <div className="bg-white rounded border overflow-hidden">
                <table className="w-full border-collapse">
                  <colgroup>
                    <col style={{ backgroundColor: '#f0f0f0' }} />
                    <col span={2} style={{ backgroundColor: '#e6f7ff' }} />
                    <col style={{ backgroundColor: '#e6ffe6' }} />
                  </colgroup>
                  <tr>
                    <th className="border border-gray-300 p-2">Квартал</th>
                    <th className="border border-gray-300 p-2">Q1</th>
                    <th className="border border-gray-300 p-2">Q2</th>
                    <th className="border border-gray-300 p-2">Всього</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Дохід</td>
                    <td className="border border-gray-300 p-2">10,000</td>
                    <td className="border border-gray-300 p-2">15,000</td>
                    <td className="border border-gray-300 p-2">25,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Витрати</td>
                    <td className="border border-gray-300 p-2">8,000</td>
                    <td className="border border-gray-300 p-2">9,000</td>
                    <td className="border border-gray-300 p-2">17,000</td>
                  </tr>
                </table>
              </div>
              
              <p className="mt-2 text-sm">
                <strong>Переваги colgroup:</strong> дозволяє стилізувати цілі стовпці одночасно і покращує семантичну структуру таблиці.
              </p>
            </div>
          )}
          
          <div className="bg-yellow-100 p-4 rounded-lg mt-4">
            <h3 className="font-bold mb-2">Корисні поради:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Використовуйте <code className="bg-yellow-200 px-1 rounded">colgroup</code> для логічного групування стовпців</li>
              <li>Застосовуйте <code className="bg-yellow-200 px-1 rounded">colspan</code> і <code className="bg-yellow-200 px-1 rounded">rowspan</code> лише для логічно пов'язаних даних</li>
              <li>Для складних таблиць об'єднуйте комірки по горизонталі перед об'єднанням по вертикалі</li>
              <li>Перевіряйте таблиці на доступність після застосування складного об'єднання комірок</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2">Складні заголовки таблиць</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>У складних таблицях можуть бути кілька рівнів заголовків. Для правильної семантики та доступності важливо правильно структурувати такі заголовки.</p>
        </div>
        
        <div className="bg-white border p-4 rounded-lg">
          <h4 className="font-bold mb-2">Приклад складної таблиці з багаторівневими заголовками:</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="font-bold mb-2">Фінансовий звіт за 2023 рік</caption>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50" rowSpan={2}>Відділ</th>
                  <th className="border border-gray-300 p-2 bg-gray-50" colSpan={2}>1 квартал</th>
                  <th className="border border-gray-300 p-2 bg-gray-50" colSpan={2}>2 квартал</th>
                  <th className="border border-gray-300 p-2 bg-gray-50" colSpan={2}>Всього</th>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-100">Дохід</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Витрати</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Дохід</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Витрати</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Дохід</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Витрати</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left" scope="row">Продажі</th>
                  <td className="border border-gray-300 p-2">45,000</td>
                  <td className="border border-gray-300 p-2">22,000</td>
                  <td className="border border-gray-300 p-2">50,000</td>
                  <td className="border border-gray-300 p-2">25,000</td>
                  <td className="border border-gray-300 p-2">95,000</td>
                  <td className="border border-gray-300 p-2">47,000</td>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left" scope="row">Маркетинг</th>
                  <td className="border border-gray-300 p-2">30,000</td>
                  <td className="border border-gray-300 p-2">15,000</td>
                  <td className="border border-gray-300 p-2">35,000</td>
                  <td className="border border-gray-300 p-2">17,000</td>
                  <td className="border border-gray-300 p-2">65,000</td>
                  <td className="border border-gray-300 p-2">32,000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left" scope="row">Всього</th>
                  <td className="border border-gray-300 p-2 font-bold">75,000</td>
                  <td className="border border-gray-300 p-2 font-bold">37,000</td>
                  <td className="border border-gray-300 p-2 font-bold">85,000</td>
                  <td className="border border-gray-300 p-2 font-bold">42,000</td>
                  <td className="border border-gray-300 p-2 font-bold">160,000</td>
                  <td className="border border-gray-300 p-2 font-bold">79,000</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="mt-3">
            <h4 className="font-bold mb-1">Код для забезпечення доступності:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<thead>
  <tr>
    <th rowspan="2" scope="col">Відділ</th>
    <th colspan="2" scope="colgroup">1 квартал</th>
    <th colspan="2" scope="colgroup">2 квартал</th>
    <th colspan="2" scope="colgroup">Всього</th>
  </tr>
  <tr>
    <th scope="col">Дохід</th>
    <th scope="col">Витрати</th>
    <th scope="col">Дохід</th>
    <th scope="col">Витрати</th>
    <th scope="col">Дохід</th>
    <th scope="col">Витрати</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">Продажі</th>
    <td>45,000</td>
    ...
  </tr>
</tbody>`}
            </pre>
            <p className="mt-2 text-sm">Зверніть увагу на використання <code className="bg-gray-200 px-1 rounded">scope="colgroup"</code> для групованих заголовків.</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Corner cases і спеціальні випадки:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Порожні комірки</strong> - використовуйте <code>&nbsp;</code> або CSS для підтримки структури</li>
            <li><strong>Нерівномірні таблиці</strong> - забезпечте правильне об'єднання для збереження структури</li>
            <li><strong>Підзаголовки</strong> - використовуйте <code>th scope="row"</code> для заголовків підрозділів</li>
            <li><strong>Реагування на мобільні пристрої</strong> - розгляньте альтернативні підходи чи використовуйте прокрутку</li>
            <li><strong>Перетворення на список на мобільних</strong> - використовуйте CSS і data-атрибути</li>
          </ul>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Розширена доступність:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Використовуйте атрибут <code className="bg-green-200 px-1 rounded">id</code> для заголовків і <code className="bg-green-200 px-1 rounded">headers</code> для комірок у складних таблицях</li>
            <li>Додавайте <code className="bg-green-200 px-1 rounded">aria-describedby</code> для зв'язку з описами таблиці</li>
            <li>Для довгих таблиць використовуйте <code className="bg-green-200 px-1 rounded">aria-label</code> для секцій</li>
            <li>Не видаляйте рамки повністю, оскільки вони важливі для орієнтації</li>
            <li>Перевіряйте читабельність таблиць, використовуючи програми зчитування з екрану</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Приклад використання заголовків даних (headers):</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<table>
  <tr>
    <th id="header1">Назва товару</th>
    <th id="header2">Ціна</th>
    <th id="header3">Кількість</th>
  </tr>
  <tr>
    <td headers="header1">Ноутбук</td>
    <td headers="header2">25000</td>
    <td headers="header3">3</td>
  </tr>
  <tr>
    <td headers="header1">Телефон</td>
    <td headers="header2">15000</td>
    <td headers="header3">5</td>
  </tr>
</table>`}
            </pre>
          </div>
          <div>
            <p><strong>Переваги використання headers:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Покращує навігацію для програм зчитування з екрану</li>
              <li>Створює явний зв'язок між заголовками і даними</li>
              <li>Особливо корисний у складних таблицях з багаторівневими заголовками</li>
              <li>Дозволяє зберегти семантичний контекст при візуальному перегляді</li>
              <li>Полегшує орієнтацію в таблиці для користувачів допоміжних технологій</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTablesSlide;