import { useState } from 'react';
const GitIntroSlide = () => {
const [activeSection, setActiveSection] = useState('intro');
return (
<div className="p-6 max-w-6xl mx-auto">
<h1 className="text-3xl font-bold mb-6">Вступ до системи контролю версій Git</h1>
  <div className="flex justify-center mb-8">
    <img 
      src="https://media.planview.com/wp-content/uploads/2022/10/git-logo-png-transparent-1.png" 
      alt="Git Logo"
      width={300}
      height={300}
    />
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
      Навіщо вивчати Git?
    </button>
  </div>
  
  {activeSection === 'intro' && (
    <div className="bg-blue-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Що таке Git?</h2>
      <p className="mb-4">
        Git — це розподілена система контролю версій, яка дозволяє відстежувати зміни у файлах,
        зберігати різні версії цих файлів та ефективно співпрацювати з іншими розробниками.
      </p>
      <p className="mb-4">
        Git створений Лінусом Торвальдсом у 2005 році для розробки ядра Linux і сьогодні 
        є найпопулярнішою системою контролю версій у світі.
      </p>
      <div className="bg-white p-4 rounded-lg border border-blue-200">
        <p className="italic">
          "Розробка програмного забезпечення без системи контролю версій — 
          як написання книги без можливості зберегти чернетки."
        </p>
      </div>
    </div>
  )}
  
  {activeSection === 'topics' && (
    <div className="bg-blue-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Що ми вивчимо:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li className="text-lg">Основні концепції систем контролю версій</li>
        <li className="text-lg">Історія та призначення Git</li>
        <li className="text-lg">Базові команди та робочий процес</li>
        <li className="text-lg">Робота з віддаленими репозиторіями</li>
        <li className="text-lg">Розгалуження (branching) та злиття (merging)</li>
        <li className="text-lg">Кращі практики роботи з Git</li>
      </ul>
    </div>
  )}
  
  {activeSection === 'why' && (
    <div className="bg-blue-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Навіщо використовувати Git?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-lg mb-2">Для індивідуальних розробників</h3>
          <ul className="list-disc pl-5">
            <li>Історія змін коду</li>
            <li>Повернення до попередніх версій</li>
            <li>Експериментування без ризику</li>
            <li>Резервні копії проекту</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-lg mb-2">Для команд</h3>
          <ul className="list-disc pl-5">
            <li>Паралельна робота над кодом</li>
            <li>Відслідковування хто, коли і що змінив</li>
            <li>Вирішення конфліктів змін</li>
            <li>Синхронізація роботи між розробниками</li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>
);
};
export default GitIntroSlide;