import React, { useState } from 'react';

const BasicListsSlide: React.FC = () => {
  const [bulletType, setBulletType] = useState('disc');
  const [numberType, setNumberType] = useState('decimal');
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Основи роботи зі списками</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Невпорядковані списки (Unordered Lists)</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2">Використовуються для групування пов'язаних елементів без певного порядку.</p>
            <div className="flex space-x-2 mb-2">
              <code className="bg-gray-200 px-1 rounded">ul</code>
              <span>- контейнер невпорядкованого списку</span>
            </div>
            <div className="flex space-x-2">
              <code className="bg-gray-200 px-1 rounded">li</code>
              <span>- елемент списку</span>
            </div>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад коду:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<ul>
  <li>Елемент 1</li>
  <li>Елемент 2</li>
  <li>Елемент 3</li>
</ul>`}
            </pre>
            
            <h4 className="font-bold mb-2">Результат:</h4>
            <ul className="list-disc pl-5">
              <li>Елемент 1</li>
              <li>Елемент 2</li>
              <li>Елемент 3</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h4 className="font-bold mb-2">Типи маркерів (list-style-type):</h4>
            <div className="mb-2">
              <select 
                className="p-2 border rounded w-full"
                value={bulletType}
                onChange={(e) => setBulletType(e.target.value)}
              >
                <option value="disc">disc - суцільний круг (за замовчуванням)</option>
                <option value="circle">circle - порожній круг</option>
                <option value="square">square - квадрат</option>
                <option value="none">none - без маркера</option>
              </select>
            </div>
            
            <div className="bg-white border p-4 rounded-lg">
              <ul style={{ listStyleType: bulletType as string }} className="pl-5">
                <li>Елемент з маркером типу: {bulletType}</li>
                <li>Другий елемент</li>
                <li>Третій елемент</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Впорядковані списки (Ordered Lists)</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2">Використовуються для елементів, де важливий порядок або послідовність.</p>
            <div className="flex space-x-2 mb-2">
              <code className="bg-gray-200 px-1 rounded">ol</code>
              <span>- контейнер впорядкованого списку</span>
            </div>
            <div className="flex space-x-2">
              <code className="bg-gray-200 px-1 rounded">li</code>
              <span>- елемент списку</span>
            </div>
          </div>
          
          <div className="bg-white border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Приклад коду:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto mb-4">
{`<ol>
  <li>Перший крок</li>
  <li>Другий крок</li>
  <li>Третій крок</li>
</ol>`}
            </pre>
            
            <h4 className="font-bold mb-2">Результат:</h4>
            <ol className="list-decimal pl-5">
              <li>Перший крок</li>
              <li>Другий крок</li>
              <li>Третій крок</li>
            </ol>
          </div>
          
          <div className="mt-4">
            <h4 className="font-bold mb-2">Типи нумерації (list-style-type):</h4>
            <div className="mb-2">
              <select 
                className="p-2 border rounded w-full"
                value={numberType}
                onChange={(e) => setNumberType(e.target.value)}
              >
                <option value="decimal">decimal - числа (1, 2, 3...)</option>
                <option value="decimal-leading-zero">decimal-leading-zero - числа з нулем (01, 02, 03...)</option>
                <option value="lower-roman">lower-roman - малі римські (i, ii, iii...)</option>
                <option value="upper-roman">upper-roman - великі римські (I, II, III...)</option>
                <option value="lower-alpha">lower-alpha - малі літери (a, b, c...)</option>
                <option value="upper-alpha">upper-alpha - великі літери (A, B, C...)</option>
              </select>
            </div>
            
            <div className="bg-white border p-4 rounded-lg">
              <ol style={{ listStyleType: numberType as string }} className="pl-5">
                <li>Елемент з нумерацією типу: {numberType}</li>
                <li>Другий елемент</li>
                <li>Третій елемент</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">Важливі атрибути для списків:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1">Для ol (впорядкованих списків):</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-yellow-200 px-1 rounded">start</code> - початкове значення нумерації</li>
              <li><code className="bg-yellow-200 px-1 rounded">reversed</code> - зворотній порядок нумерації</li>
              <li><code className="bg-yellow-200 px-1 rounded">type</code> - тип маркера (1, A, a, I, i)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Приклади:</h4>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<!-- Починається з 5 -->
<ol start="5">
  <li>Елемент (буде 5)</li>
  <li>Елемент (буде 6)</li>
</ol>

<!-- Зворотній порядок -->
<ol reversed>
  <li>Елемент (буде 3)</li>
  <li>Елемент (буде 2)</li>
  <li>Елемент (буде 1)</li>
</ol>

<!-- Римські числа -->
<ol type="I">
  <li>Елемент (буде I)</li>
  <li>Елемент (буде II)</li>
</ol>`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Доступність (Accessibility) для списків:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Використовуйте списки за їх призначенням - для групування пов'язаних елементів</li>
          <li>Застосовуйте впорядковані списки, коли порядок має значення (інструкції, рецепти)</li>
          <li>Не використовуйте списки лише для відступів або візуальних ефектів</li>
          <li>Програми читання з екрану оголошують початок і кінець списку та кількість елементів</li>
          <li>Екранні читачі можуть переміщатися між елементами списку, що покращує навігацію</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicListsSlide;