import { useState } from 'react';

const FlexboxIntroSlide = () => {
  const [activeSection, setActiveSection] = useState('intro');
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Вступ до CSS Flexbox</h1>
      
      <div className="flex justify-center mb-8">
        <div className="bg-blue-100 p-6 rounded-lg flex items-center justify-center" style={{width: 300, height: 200}}>
          <span className="text-6xl font-bold text-blue-600">Flexbox</span>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'intro' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('intro')}
        >
          Вступ
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'topics' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('topics')}
        >
          Теми лекцій
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'why' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('why')}
        >
          Навіщо вивчати Flexbox?
        </button>
      </div>
      
      {activeSection === 'intro' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Що таке Flexbox?</h2>
          <p className="mb-4">
            Flexbox (Flexible Box Module) — це сучасний метод CSS-верстки, який дозволяє ефективно розташовувати, 
            вирівнювати та розподіляти простір між елементами контейнера, навіть коли їхні розміри невідомі або динамічні.
          </p>
          <p className="mb-4">
            Flexbox було створено спеціально для вирішення типових проблем верстки і забезпечення більш 
            інтуїтивного та гнучкого способу розташування елементів.
          </p>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <p className="italic">
              "Flexbox — це революція у CSS-верстці, яка дозволяє створювати адаптивні та 
              гнучкі макети з мінімальними зусиллями."
            </p>
          </div>
        </div>
      )}
      
      {activeSection === 'topics' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Що ми вивчимо:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-lg">Основні концепції Flexbox-верстки</li>
            <li className="text-lg">Контейнер Flex та елементи Flex</li>
            <li className="text-lg">Головна та поперечна осі</li>
            <li className="text-lg">Вирівнювання та розподіл простору</li>
            <li className="text-lg">Порядок елементів та гнучкість розмірів</li>
            <li className="text-lg">Практичні приклади використання Flexbox</li>
          </ul>
        </div>
      )}
      
      {activeSection === 'why' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Навіщо використовувати Flexbox?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2">Переваги для розробників</h3>
              <ul className="list-disc pl-5">
                <li>Спрощення CSS-коду</li>
                <li>Менше хаків та обхідних шляхів</li>
                <li>Легша адаптивна верстка</li>
                <li>Кращий контроль над елементами</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2">Вирішення проблем</h3>
              <ul className="list-disc pl-5">
                <li>Вертикальне центрування</li>
                <li>Однакова висота колонок</li>
                <li>Зміна порядку елементів</li>
                <li>Пропорційне розподілення простору</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxIntroSlide;