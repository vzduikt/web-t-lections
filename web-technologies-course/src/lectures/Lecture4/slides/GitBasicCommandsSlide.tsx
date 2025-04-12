import { useState } from 'react';

const GitBasicCommandsSlide = () => {
  const [activeSection, setActiveSection] = useState('init-clone');

  const initExample = `# Створення нового репозиторію
git init

# Клонування існуючого репозиторію
git clone https://github.com/username/repository.git

# Клонування в конкретну директорію
git clone https://github.com/username/repository.git my-folder

# Клонування конкретної гілки
git clone -b develop https://github.com/username/repository.git`;

  const statusAddExample = `# Перевірка статусу репозиторію
git status

# Додавання файлу до індексу
git add file.txt

# Додавання всіх змінених файлів
git add .

# Додавання всіх файлів з певним розширенням
git add *.js

# Інтерактивне додавання змін
git add -p`;

  const commitExample = `# Створення коміту
git commit -m "Короткий опис змін"

# Додавання всіх змін та створення коміту
git commit -am "Додав нову функцію"

# Зміна останнього коміту
git commit --amend

# Зміна останнього коміту без редагування повідомлення
git commit --amend --no-edit`;

  const diffExample = `# Перегляд змін в робочій директорії
git diff

# Перегляд змін в індексі
git diff --staged

# Порівняння з певним комітом
git diff abc123

# Порівняння двох комітів
git diff abc123 def456

# Перегляд змін конкретного файлу
git diff -- path/to/file.js`;

  const logExample = `# Перегляд історії комітів
git log

# Обмеження кількості комітів
git log -n 5

# Компактний вигляд з графіком гілок
git log --oneline --graph

# Перегляд змін в комітах
git log -p

# Форматований вивід
git log --pretty=format:"%h - %an, %ar : %s"

# Фільтрація за автором
git log --author="John Doe"

# Фільтрація за датою
git log --since="2 weeks ago"`;

  const resetExample = `# Скасування змін в індексі
git reset HEAD file.txt

# Скасування всіх змін в індексі
git reset HEAD

# Скасування останнього коміту зі збереженням змін
git reset --soft HEAD^

# Повне скасування останнього коміту з видаленням змін
git reset --hard HEAD^

# Скидання до певного коміту
git reset --hard abc123`;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Основні команди Git</h1>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'init-clone' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('init-clone')}
        >
          Init/Clone
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'status-add' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('status-add')}
        >
          Status/Add
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'commit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('commit')}
        >
          Commit
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'diff' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('diff')}
        >
          Diff
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'log' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('log')}
        >
          Log
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'reset' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('reset')}
        >
          Reset
        </button>
      </div>
      
      {activeSection === 'init-clone' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Створення та клонування репозиторіїв</h2>
            <p className="mb-4">
              Початок роботи з Git включає або створення нового репозиторію, або клонування існуючого.
              Ці команди є відправною точкою для будь-якого Git-проекту.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команди init та clone</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {initExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Різниця між init та clone</h3>
                <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border border-blue-200 p-2 text-left">Команда</th>
                      <th className="border border-blue-200 p-2 text-left">Використання</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git init</code></td>
                      <td className="border border-blue-200 p-2">Створення нового порожнього репозиторію</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git clone</code></td>
                      <td className="border border-blue-200 p-2">Копіювання існуючого репозиторію з усією історією</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Після створення репозиторію</h3>
              <p className="mb-2">Після <code>git init</code> потрібно:</p>
              <ol className="list-decimal pl-5">
                <li className="mb-1">Додати файли до репозиторію (<code>git add</code>)</li>
                <li className="mb-1">Створити перший коміт (<code>git commit</code>)</li>
                <li className="mb-1">За потреби, налаштувати віддалений репозиторій (<code>git remote add</code>)</li>
              </ol>
              <p className="mt-2 text-sm">
                <strong>Примітка:</strong> <code>git init</code> створює прихований каталог <code>.git</code>, 
                де зберігаються всі дані репозиторію.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Додаткові опції клонування</h3>
              <ul className="list-disc pl-5">
                <li className="mb-1">
                  <code>--depth</code> - неглибоке клонування (обмежує історію)
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git clone --depth=1 repository-url</pre>
                </li>
                <li className="mb-1">
                  <code>--branch</code> або <code>-b</code> - клонування конкретної гілки
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git clone -b develop repository-url</pre>
                </li>
                <li className="mb-1">
                  <code>--mirror</code> - клонування з усіма посиланнями та гілками
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git clone --mirror repository-url</pre>
                </li>
                <li className="mb-1">
                  <code>--recurse-submodules</code> - клонування з підмодулями
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git clone --recurse-submodules repository-url</pre>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'status-add' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Перевірка статусу та додавання змін</h2>
            <p className="mb-4">
              Команди <code>git status</code> та <code>git add</code> дозволяють вам перевіряти стан вашого
              репозиторію та підготувати зміни перед створенням коміту.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команди status та add</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {statusAddExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Статуси файлів у Git</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-1">
                    <strong>Untracked</strong> - новий файл, не доданий до Git
                  </li>
                  <li className="mb-1">
                    <strong>Modified</strong> - змінений файл, не доданий до індексу
                  </li>
                  <li className="mb-1">
                    <strong>Staged</strong> - файл доданий до індексу, готовий до коміту
                  </li>
                  <li className="mb-1">
                    <strong>Unmodified</strong> - файл не змінювався з останнього коміту
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Кольорове позначення статусу</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <div><strong>Червоний</strong> - невідстежувані (untracked) або змінені (modified) файли</div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 mr-2"></div>
                  <div><strong>Зелений</strong> - файли, додані до індексу (staged)</div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-1">Приклад виводу git status</h4>
                <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto">
{`On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
        new file:   style.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   script.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        images/
        README.md`}
                </pre>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Додаткові опції git add</h3>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git add -p</code> (або <code>--patch</code>)
                  <p className="text-sm mt-1">Інтерактивне додавання змін - дозволяє вибрати окремі частини файлу для додавання.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git add -u</code> (або <code>--update</code>)
                  <p className="text-sm mt-1">Додає лише змінені файли, які Git вже відстежує (без нових файлів).</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git add -A</code> (або <code>--all</code>)
                  <p className="text-sm mt-1">Додає всі зміни, включаючи нові, змінені та видалені файли.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git add -i</code> (або <code>--interactive</code>)
                  <p className="text-sm mt-1">Повний інтерактивний режим з багатьма опціями.</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold mb-1">Корисна порада</h4>
                <p className="text-sm">
                  Використовуйте <code>git add -p</code> для створення логічно згрупованих комітів, 
                  які містять пов'язані зміни. Це покращує читабельність історії проекту.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'commit' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Створення комітів</h2>
            <p className="mb-4">
              Команда <code>git commit</code> зберігає підготовлені зміни в історії репозиторію.
              Кожен коміт є знімком стану проекту на певний момент часу.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команда commit</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {commitExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Написання хороших повідомлень комітів</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Використовуйте дієслово в наказовій формі (Add, Update, Fix, etc.)</li>
                  <li className="mb-1">Перший рядок має бути коротким (до 50 символів)</li>
                  <li className="mb-1">За потреби, додайте детальний опис після порожнього рядка</li>
                  <li className="mb-1">Пояснюйте "чому", а не "що" (код сам показує "що")</li>
                  <li className="mb-1">Розділяйте логічно пов'язані зміни на окремі коміти</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Структура коміту</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto mb-4">
{`commit 8a7d659b10d3b59243c9214cad9fe2126798aa68
Author: John Doe <john.doe@example.com>
Date:   Mon Mar 15 14:52:36 2021 +0200

    Add user authentication feature
    
    - Implement login and registration pages
    - Set up JWT token authentication
    - Add password reset functionality
    
    Closes #42`}
              </pre>
              
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="font-semibold">SHA-1 хеш</span>
                  <span className="text-sm">Унікальний ідентифікатор коміту</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Автор і дата</span>
                  <span className="text-sm">Хто і коли створив коміт</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Заголовок повідомлення</span>
                  <span className="text-sm">Короткий опис змін (перший рядок)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Тіло повідомлення</span>
                  <span className="text-sm">Детальний опис змін (після порожнього рядка)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Посилання на задачу</span>
                  <span className="text-sm">Зв'язок з системою відстеження завдань</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Додаткові опції commit</h3>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git commit -a</code> (або <code>--all</code>)
                  <p className="text-sm mt-1">Автоматично додає всі змінені відстежувані файли перед комітом (не включає нові файли).</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git commit --amend</code>
                  <p className="text-sm mt-1">Змінює останній коміт, додаючи нові зміни або оновлюючи повідомлення.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git commit -v</code> (або <code>--verbose</code>)
                  <p className="text-sm mt-1">Показує різницю змін в редакторі під час написання повідомлення коміту.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git commit --date="2023-03-15T14:00:00"</code>
                  <p className="text-sm mt-1">Встановлює конкретну дату для коміту (корисно при перебазуванні).</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold mb-1">Важливо про git commit --amend</h4>
                <p className="text-sm">
                  <code>--amend</code> змінює історію Git. Не використовуйте його для комітів, які вже опубліковані
                  у спільному репозиторії, це може викликати проблеми у інших розробників.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'diff' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Перегляд змін</h2>
            <p className="mb-4">
              Команда <code>git diff</code> дозволяє переглядати відмінності між комітами,
              гілками, файлами в робочій директорії та індексі.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команда diff</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {diffExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Різні форми diff</h3>
                <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border border-blue-200 p-2 text-left">Команда</th>
                      <th className="border border-blue-200 p-2 text-left">Показує зміни між</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git diff</code></td>
                      <td className="border border-blue-200 p-2">Робочою директорією та індексом</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git diff --staged</code></td>
                      <td className="border border-blue-200 p-2">Індексом та останнім комітом</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git diff HEAD</code></td>
                      <td className="border border-blue-200 p-2">Робочою директорією та останнім комітом</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git diff branch1 branch2</code></td>
                      <td className="border border-blue-200 p-2">Останніми комітами двох гілок</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>git diff commit1 commit2</code></td>
                      <td className="border border-blue-200 p-2">Двома конкретними комітами</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Зрозуміння формату diff</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto mb-4">
{`diff --git a/file.txt b/file.txt
index abc123..def456 100644
--- a/file.txt
+++ b/file.txt
@@ -1,4 +1,4 @@
 Перший рядок
-Другий рядок зі старим текстом
+Другий рядок з новим текстом
 Третій рядок
 Четвертий рядок`}
              </pre>
              
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="font-semibold">diff --git a/file.txt b/file.txt</span>
                  <span className="text-sm">Вказує файл, який порівнюється</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">--- a/file.txt</span>
                  <span className="text-sm">Версія "до" (старий файл)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">+++ b/file.txt</span>
                  <span className="text-sm">Версія "після" (новий файл)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">@@ -1,4 +1,4 @@</span>
                  <span className="text-sm">Координати змін: рядки 1-4 в старій версії і 1-4 в новій</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">- Видалений рядок</span>
                  <span className="text-sm">Рядок, який видалено (позначається червоним)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">+ Доданий рядок</span>
                  <span className="text-sm">Рядок, який додано (позначається зеленим)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Додаткові опції diff</h3>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git diff --word-diff</code>
                  <p className="text-sm mt-1">Показує зміни на рівні слів, а не цілих рядків.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git diff --color-words</code>
                  <p className="text-sm mt-1">Схоже на --word-diff, але з кращим форматуванням.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git diff --stat</code>
                  <p className="text-sm mt-1">Показує статистику змін (кількість доданих/видалених рядків).</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git diff --name-only</code>
                  <p className="text-sm mt-1">Показує лише імена змінених файлів.</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git diff --check</code>
                  <p className="text-sm mt-1">Перевіряє наявність конфліктів злиття та пробілів у кінці рядків.</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold mb-1">Використання з зовнішніми інструментами</h4>
                <p className="text-sm">
                  Git можна налаштувати для використання зовнішніх інструментів порівняння:
                </p>
                <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global diff.tool vscode</pre>
                <p className="text-sm mt-1">
                  Запуск з <code>git difftool</code> замість <code>git diff</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'log' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Перегляд історії</h2>
            <p className="mb-4">
              Команда <code>git log</code> дозволяє переглядати історію комітів. Вона має багато
              опцій для фільтрації та форматування виводу.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команда log</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {logExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Корисні опції log</h3>
                <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border border-blue-200 p-2 text-left">Опція</th>
                      <th className="border border-blue-200 p-2 text-left">Опис</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--oneline</code></td>
                      <td className="border border-blue-200 p-2">Компактний вигляд (один рядок на коміт)</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--graph</code></td>
                      <td className="border border-blue-200 p-2">Відображення графа гілок ASCII-графікою</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--pretty=format:"..."</code></td>
                      <td className="border border-blue-200 p-2">Користувацьке форматування виводу</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--author="name"</code></td>
                      <td className="border border-blue-200 p-2">Фільтрація за автором</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--since, --until</code></td>
                      <td className="border border-blue-200 p-2">Фільтрація за датою</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Приклад виводу git log</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-auto mb-4">
{`commit 8a7d659b10d3b59243c9214cad9fe2126798aa68
Author: John Doe <john.doe@example.com>
Date:   Mon Mar 15 14:52:36 2021 +0200

    Add user authentication feature

commit 4b16822e9c18ed31f641ab3e6971acb246812345
Author: Jane Smith <jane.smith@example.com>
Date:   Mon Mar 15 11:34:23 2021 +0200

    Fix layout issues in responsive design`}
              </pre>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Пошук у історії</h3>
              <ul className="list-disc pl-5">
                <li className="mb-1">
                  <code>git log -S"query"</code> - пошук комітів, які додали або видалили рядок з "query"
                </li>
                <li className="mb-1">
                  <code>git log -G"regex"</code> - пошук комітів за регулярним виразом
                </li>
                <li className="mb-1">
                  <code>git log --grep="query"</code> - пошук у повідомленнях комітів
                </li>
                <li className="mb-1">
                  <code>git log -- file.txt</code> - історія певного файлу
                </li>
                <li className="mb-1">
                  <code>git log -p</code> - історія з повними змінами
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'reset' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Скасування змін</h2>
            <p className="mb-4">
              Команда <code>git reset</code> дозволяє скасувати зміни в репозиторії, 
              повернутися до попередніх станів проекту або видалити коміти з історії.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Команда reset</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {resetExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Режими reset</h3>
                <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border border-blue-200 p-2 text-left">Режим</th>
                      <th className="border border-blue-200 p-2 text-left">Дія</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--soft</code></td>
                      <td className="border border-blue-200 p-2">Лише переміщує HEAD, зберігає зміни в індексі та робочій директорії</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--mixed</code> (за замовчуванням)</td>
                      <td className="border border-blue-200 p-2">Переміщує HEAD і скидає індекс, зберігає зміни в робочій директорії</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2"><code>--hard</code></td>
                      <td className="border border-blue-200 p-2">Переміщує HEAD, скидає індекс і робочу директорію (видаляє зміни)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Типові випадки використання reset</h3>
              <ul className="list-disc pl-5">
                <li className="mb-1">
                  <strong>Скасування змін в індексі</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git reset HEAD file.txt</pre>
                </li>
                <li className="mb-1">
                  <strong>Скасування останнього коміту зі збереженням змін</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git reset --soft HEAD^</pre>
                </li>
                <li className="mb-1">
                  <strong>Повне скасування останніх N комітів</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git reset --hard HEAD~3</pre>
                </li>
                <li className="mb-1">
                  <strong>Скидання до конкретного коміту</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git reset --mixed abc123</pre>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Альтернативи до reset</h3>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git checkout file.txt</code>
                  <p className="text-sm mt-1">Скасовує зміни в одному файлі (новіша альтернатива: <code>git restore file.txt</code>)</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git revert HEAD</code>
                  <p className="text-sm mt-1">Створює новий коміт, який скасовує зміни попереднього (безпечно для спільних репозиторіїв)</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">git restore --staged file.txt</code>
                  <p className="text-sm mt-1">Новіша команда для видалення файлу з індексу (замість git reset HEAD)</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold mb-1">Важливо!</h4>
                <p className="text-sm">
                  Будьте обережні з <code>git reset --hard</code>! Ця команда видаляє коміти 
                  та всі незбережені зміни без можливості відновлення.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      );
    };

    export default GitBasicCommandsSlide;