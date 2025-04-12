import { useState } from 'react';

const GitConceptsSlide = () => {
  const [activeSection, setActiveSection] = useState('repository');

  const repositoryExample = `# Створення нового репозиторію
$ git init my-project

# Або ініціалізація в поточній директорії
$ git init`;

  const commitExample = `# Додавання файлів до індексу
$ git add file.txt

# Створення коміту
$ git commit -m "Додав новий функціонал"

# Перегляд історії комітів
$ git log`;

  const branchExample = `# Створення нової гілки
$ git branch feature-login

# Переключення на гілку
$ git checkout feature-login

# Створення і переключення (скорочено)
$ git checkout -b feature-registration`;

  const workflowExample = `# Типовий робочий процес
$ git status                   # Перевірка статусу
$ git add index.html           # Додавання змін
$ git commit -m "Опис змін"    # Збереження змін
$ git push                     # Відправка на сервер`;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Основні концепції Git</h1>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'repository' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('repository')}
        >
          Репозиторій
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'commit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('commit')}
        >
          Коміт
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'branch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('branch')}
        >
          Гілка
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'workflow' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('workflow')}
        >
          Робочий процес
        </button>
      </div>
      
      {activeSection === 'repository' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Репозиторій (Repository)</h2>
            <p className="mb-4">
              Репозиторій Git — це місце, де зберігаються всі файли проекту та історія їх змін. 
              Фактично, це директорія на вашому комп'ютері, яка містить спеціальну піддиректорію .git
              з метаданими та базою даних Git.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Типи репозиторіїв</h3>
                <ul className="list-disc pl-5">
                  <li><strong>Локальний репозиторій</strong> — знаходиться на вашому комп'ютері</li>
                  <li><strong>Віддалений репозиторій</strong> — розміщений на сервері (GitHub, GitLab, Bitbucket)</li>
                  <li><strong>Голий (bare) репозиторій</strong> — не містить робочої директорії, використовується на серверах</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Створення репозиторію</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {repositoryExample}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Структура репозиторію Git</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5">
                  <li><strong>.git/</strong> — директорія з метаданими Git</li>
                  <li><strong>.git/objects/</strong> — база даних об'єктів Git</li>
                  <li><strong>.git/refs/</strong> — посилання на коміти (гілки, теги)</li>
                  <li><strong>.git/HEAD</strong> — вказівник на поточну гілку</li>
                  <li><strong>.git/config</strong> — конфігурація репозиторію</li>
                  <li><strong>.gitignore</strong> — файли, які Git має ігнорувати</li>
                </ul>
              </div>
              <div>
                <p className="bg-white p-3 rounded border border-yellow-200">
                  Ніколи не змінюйте вміст директорії <strong>.git</strong> вручну, 
                  якщо не впевнені в тому, що робите! Використовуйте команди Git для 
                  взаємодії з репозиторієм.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'commit' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Коміт (Commit)</h2>
            <p className="mb-4">
              Коміт — це знімок стану вашого проекту в певний момент часу. 
              Коміти зберігають зміни, внесені у файли проекту, разом з інформацією
              про автора, датою та повідомленням.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Анатомія коміту</h3>
                <ul className="list-disc pl-5">
                  <li><strong>SHA-1 хеш</strong> — унікальний ідентифікатор коміту</li>
                  <li><strong>Автор</strong> — ім'я та email автора змін</li>
                  <li><strong>Дата</strong> — час створення коміту</li>
                  <li><strong>Повідомлення</strong> — опис внесених змін</li>
                  <li><strong>Посилання на батьківський коміт</strong> — зв'язок з історією</li>
                  <li><strong>Зміни файлів</strong> — що саме було змінено</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Робота з комітами</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {commitExample}
                </pre>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-lg mb-2">Життєвий цикл змін у Git</h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-8">
                <div className="bg-white p-3 rounded text-center border border-green-300 w-40">
                  <div className="font-bold mb-1">Робоча директорія</div>
                  <div className="text-sm">(Working Directory)</div>
                </div>
                <div className="flex items-center">→</div>
                <div className="bg-white p-3 rounded text-center border border-green-300 w-40">
                  <div className="font-bold mb-1">Індекс</div>
                  <div className="text-sm">(Staging Area)</div>
                </div>
                <div className="flex items-center">→</div>
                <div className="bg-white p-3 rounded text-center border border-green-300 w-40">
                  <div className="font-bold mb-1">Репозиторій</div>
                  <div className="text-sm">(Git Repository)</div>
                </div>
              </div>
              <div className="flex justify-center mt-2 text-sm">
                <div className="text-center w-40">
                  Змінені файли
                </div>
                <div className="w-8"></div>
                <div className="text-center w-40">
                  git add
                </div>
                <div className="w-8"></div>
                <div className="text-center w-40">
                  git commit
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'branch' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Гілка (Branch)</h2>
            <p className="mb-4">
              Гілка у Git — це рухомий вказівник на коміт. 
              За замовчуванням, Git створює гілку <strong>master</strong> (або <strong>main</strong>), 
              коли ви ініціалізуєте репозиторій.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Для чого потрібні гілки?</h3>
                <ul className="list-disc pl-5">
                  <li><strong>Паралельна розробка</strong> — можливість працювати над різними функціями одночасно</li>
                  <li><strong>Експерименти</strong> — спробувати нові ідеї без ризику зламати основний код</li>
                  <li><strong>Поетапний розвиток</strong> — ізолювати різні функціональні частини</li>
                  <li><strong>Командна робота</strong> — кожен розробник може працювати у своїй гілці</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Робота з гілками</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {branchExample}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Візуалізація гілок</h3>
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg border border-yellow-200 max-w-lg">
                <svg viewBox="0 0 500 200" className="w-full">
                  <circle cx="50" cy="100" r="10" fill="#4299e1" />
                  <circle cx="120" cy="100" r="10" fill="#4299e1" />
                  <circle cx="190" cy="100" r="10" fill="#4299e1" />
                  <circle cx="260" cy="100" r="10" fill="#4299e1" />
                  <circle cx="330" cy="60" r="10" fill="#ed8936" />
                  <circle cx="400" cy="60" r="10" fill="#ed8936" />
                  <circle cx="330" cy="140" r="10" fill="#48bb78" />
                  <circle cx="400" cy="140" r="10" fill="#48bb78" />
                  <line x1="60" y1="100" x2="110" y2="100" stroke="#4299e1" strokeWidth="2" />
                  <line x1="130" y1="100" x2="180" y2="100" stroke="#4299e1" strokeWidth="2" />
                  <line x1="200" y1="100" x2="250" y2="100" stroke="#4299e1" strokeWidth="2" />
                  <line x1="270" y1="100" x2="320" y2="60" stroke="#ed8936" strokeWidth="2" />
                  <line x1="270" y1="100" x2="320" y2="140" stroke="#48bb78" strokeWidth="2" />
                  <line x1="340" y1="60" x2="390" y2="60" stroke="#ed8936" strokeWidth="2" />
                  <line x1="340" y1="140" x2="390" y2="140" stroke="#48bb78" strokeWidth="2" />
                  <text x="260" y="80" fontSize="12" textAnchor="middle">main</text>
                  <text x="400" y="40" fontSize="12" textAnchor="middle">feature-1</text>
                  <text x="400" y="120" fontSize="12" textAnchor="middle">feature-2</text>
                </svg>
              </div>
            </div>
            <div className="text-center text-sm">
              <p>Візуалізація розгалуження та розвитку проекту з головною гілкою (main) та двома функціональними гілками.</p>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'workflow' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Базовий робочий процес Git</h2>
            <p className="mb-4">
              Типовий робочий процес включає кілька основних етапів, які повторюються
              під час розробки проекту.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Основні етапи роботи з Git</h3>
                <ol className="list-decimal pl-5">
                  <li><strong>Клонування</strong> або <strong>ініціалізація</strong> репозиторію</li>
                  <li><strong>Створення</strong> або <strong>перемикання</strong> на потрібну гілку</li>
                  <li><strong>Внесення змін</strong> у файли проекту</li>
                  <li><strong>Перегляд статусу</strong> змін (git status)</li>
                  <li><strong>Додавання змін</strong> до індексу (git add)</li>
                  <li><strong>Збереження змін</strong> у коміті (git commit)</li>
                  <li><strong>Синхронізація</strong> з віддаленим репозиторієм (git push, git pull)</li>
                </ol>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Приклад робочого процесу</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {workflowExample}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Популярні моделі розгалуження</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Git Flow</strong> — складна модель з гілками для розробки, релізів, функціональності та виправлень
                </li>
                <li>
                  <strong>GitHub Flow</strong> — простіша модель з єдиною головною гілкою та функціональними гілками
                </li>
                <li>
                  <strong>GitLab Flow</strong> — комбінація попередніх підходів з додаванням гілок оточення
                </li>
                <li>
                  <strong>Trunk-Based Development</strong> — всі зміни вносяться в головну гілку з короткоживучими функціональними гілками
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Рекомендовані практики</h3>
              <ul className="list-disc pl-5">
                <li><strong>Частіше робіть коміти</strong> — робіть невеликі логічні зміни</li>
                <li><strong>Пишіть інформативні повідомлення</strong> до комітів</li>
                <li><strong>Регулярно синхронізуйтесь</strong> з віддаленим репозиторієм</li>
                <li><strong>Використовуйте гілки</strong> для різних функцій/завдань</li>
                <li><strong>Перевіряйте статус</strong> перед комітом (git status)</li>
                <li><strong>Використовуйте .gitignore</strong> для виключення непотрібних файлів</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitConceptsSlide;