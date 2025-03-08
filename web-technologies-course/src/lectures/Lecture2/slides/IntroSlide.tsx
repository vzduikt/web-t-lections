import React from 'react';

const IntroSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Таблиці та списки в HTML</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Таблиці та списки є фундаментальними елементами HTML для структурування та організації інформації. Правильне використання цих елементів впливає на доступність, читабельність та SEO вашого сайту.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Списки</h3>
          <p>Списки дозволяють організувати пов'язані елементи в структуровану послідовність.</p>
          <div className="mt-3">
            <p className="font-semibold">Типи списків:</p>
            <ul className="list-disc pl-5">
              <li>Невпорядковані списки (ul)</li>
              <li>Впорядковані списки (ol)</li>
              <li>Списки опису (dl)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Таблиці</h3>
          <p>Таблиці дозволяють представити дані у форматі рядків і стовпців, що полегшує їх сприйняття.</p>
          <div className="mt-3">
            <p className="font-semibold">Основні елементи таблиць:</p>
            <ul className="list-disc pl-5">
              <li>table, tr, td, th</li>
              <li>thead, tbody, tfoot</li>
              <li>caption, colgroup</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-2">Важливі аспекти вивчення:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <h4 className="font-bold">Семантика</h4>
            <p className="text-sm">Використання правильних елементів для правильних цілей</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <h4 className="font-bold">Доступність</h4>
            <p className="text-sm">Забезпечення доступності для всіх користувачів, у тому числі з обмеженими можливостями</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <h4 className="font-bold">Гнучкість</h4>
            <p className="text-sm">Адаптація таблиць і списків до різних розмірів екранів</p>
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Чому це важливо:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Структурованість:</strong> Чітка структура покращує сприйняття інформації</li>
          <li><strong>SEO:</strong> Пошукові системи краще розуміють добре структурований контент</li>
          <li><strong>Доступність:</strong> Правильно побудовані таблиці та списки доступні для програм читання з екрану</li>
          <li><strong>Підтримка:</strong> Легше оновлювати і підтримувати правильно організований код</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSlide;