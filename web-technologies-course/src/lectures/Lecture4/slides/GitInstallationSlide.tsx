import React, { useState } from 'react';

const GitInstallationSlide = () => {
  const [activeSection, setActiveSection] = useState('installation');

  const windowsInstallation = `# Варіант 1: Завантажити інсталятор з офіційного сайту
https://git-scm.com/download/win

# Варіант 2: Встановлення через Chocolatey
choco install git

# Варіант 3: Встановлення через Winget
winget install --id Git.Git -e --source winget`;

  const macInstallation = `# Варіант 1: Через Homebrew
brew install git

# Варіант 2: Через MacPorts
sudo port install git

# Варіант 3: Завантажити інсталятор
https://git-scm.com/download/mac`;

  const linuxInstallation = `# Debian/Ubuntu
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# CentOS/RHEL
sudo yum install git

# Arch Linux
sudo pacman -S git`;

  const gitConfigExample = `# Налаштування імені та email
git config --global user.name "Ваше ім'я"
git config --global user.email "your.email@example.com"

# Налаштування текстового редактора
git config --global core.editor "code --wait"

# Перегляд налаштувань
git config --list

# Налаштування автоматичного виправлення помилок
git config --global help.autocorrect 1`;

  const aliasesExample = `# Короткі команди для частих операцій
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Складніші аліаси
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# Використання аліасів
git co main  # замість git checkout main
git st       # замість git status`;

  const sshExample = `# Генерація SSH-ключа
ssh-keygen -t ed25519 -C "your.email@example.com"

# Перевірка наявності ключів
ls -la ~/.ssh

# Додавання ключа до SSH-агента
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Копіювання публічного ключа
# Windows
clip < ~/.ssh/id_ed25519.pub
# MacOS
pbcopy < ~/.ssh/id_ed25519.pub
# Linux
cat ~/.ssh/id_ed25519.pub

# Тестування підключення
ssh -T git@github.com`;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Встановлення та налаштування Git</h1>
      
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'installation' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('installation')}
        >
          Встановлення
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'configuration' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('configuration')}
        >
          Базові налаштування
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'aliases' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('aliases')}
        >
          Аліаси
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'ssh' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('ssh')}
        >
          SSH-ключі
        </button>
      </div>
      
      {activeSection === 'installation' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Встановлення Git</h2>
            <p className="mb-4">
              Git можна встановити на будь-яку операційну систему. Існує декілька способів встановлення,
              залежно від вашої ОС та преференцій.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Windows</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {windowsInstallation}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">macOS</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {macInstallation}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Linux</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {linuxInstallation}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Перевірка встановлення</h3>
            <p className="mb-4">
              Щоб перевірити, чи правильно встановлено Git, виконайте наступну команду в терміналі:
            </p>
            <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-4">
              git --version
            </pre>
            <p>
              Ви повинні побачити версію встановленого Git, наприклад:
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">git version 2.37.1</code>
            </p>
            
            <div className="mt-4 bg-white p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold mb-2">Додаткові інструменти для роботи з Git</h4>
              <ul className="list-disc pl-5">
                <li><strong>Git GUI</strong> - графічний інтерфейс, який встановлюється разом з Git</li>
                <li><strong>GitHub Desktop</strong> - простий клієнт для роботи з GitHub</li>
                <li><strong>GitKraken</strong> - потужний крос-платформений клієнт Git</li>
                <li><strong>Sourcetree</strong> - безкоштовний Git клієнт для Windows та macOS</li>
                <li><strong>VS Code</strong> - популярний редактор коду з вбудованою підтримкою Git</li>
                <li><strong>IntelliJ IDEA / WebStorm</strong> - IDE з інтеграцією Git</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'configuration' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Базові налаштування Git</h2>
            <p className="mb-4">
              Після встановлення Git потрібно виконати базові налаштування. Це особливо важливо,
              якщо ви плануєте співпрацювати з іншими розробниками.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Основні налаштування</h3>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  {gitConfigExample}
                </pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">Рівні налаштувань</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>--system</strong> - налаштування для всіх користувачів системи
                    <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --system [ключ] [значення]</pre>
                  </li>
                  <li>
                    <strong>--global</strong> - налаштування для поточного користувача
                    <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global [ключ] [значення]</pre>
                  </li>
                  <li>
                    <strong>--local</strong> - налаштування для конкретного репозиторію
                    <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --local [ключ] [значення]</pre>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Файли конфігурації</h3>
              <p className="mb-2">Git зберігає налаштування в текстових файлах:</p>
              <ul className="list-disc pl-5">
                <li><strong>/etc/gitconfig</strong> - системні налаштування</li>
                <li><strong>~/.gitconfig</strong> - глобальні налаштування користувача</li>
                <li><strong>.git/config</strong> - налаштування конкретного репозиторію</li>
              </ul>
              <p className="mt-2 text-sm">Налаштування з локального рівня мають пріоритет над глобальними та системними.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Корисні налаштування</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Кольорове виведення в терміналі</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global color.ui auto</pre>
                </li>
                <li>
                  <strong>Автоматичне виправлення помилок</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global help.autocorrect 1</pre>
                </li>
                <li>
                  <strong>Встановлення стратегії перебазування за замовчуванням</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global pull.rebase true</pre>
                </li>
                <li>
                  <strong>Збереження облікових даних</strong>
                  <pre className="bg-gray-100 p-1 rounded text-xs mt-1">git config --global credential.helper store</pre>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'aliases' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Аліаси в Git</h2>
            <p className="mb-4">
              Аліаси дозволяють створювати власні короткі команди для часто використовуваних операцій Git.
              Це економить час і зменшує кількість набору на клавіатурі.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2">Налаштування та використання аліасів</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                {aliasesExample}
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Популярні аліаси</h3>
              <table className="w-full border-collapse">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="border border-yellow-200 p-2 text-left">Аліас</th>
                    <th className="border border-yellow-200 p-2 text-left">Команда</th>
                    <th className="border border-yellow-200 p-2 text-left">Опис</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-yellow-200 p-2">st</td>
                    <td className="border border-yellow-200 p-2">status</td>
                    <td className="border border-yellow-200 p-2">Перевірка статусу репозиторію</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200 p-2">co</td>
                    <td className="border border-yellow-200 p-2">checkout</td>
                    <td className="border border-yellow-200 p-2">Переключення між гілками</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200 p-2">ci</td>
                    <td className="border border-yellow-200 p-2">commit</td>
                    <td className="border border-yellow-200 p-2">Створення коміту</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200 p-2">br</td>
                    <td className="border border-yellow-200 p-2">branch</td>
                    <td className="border border-yellow-200 p-2">Робота з гілками</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200 p-2">unstage</td>
                    <td className="border border-yellow-200 p-2">reset HEAD --</td>
                    <td className="border border-yellow-200 p-2">Видалення файлу з індексу</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200 p-2">last</td>
                    <td className="border border-yellow-200 p-2">log -1 HEAD</td>
                    <td className="border border-yellow-200 p-2">Перегляд останнього коміту</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Корисні складні аліаси</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Гарний лог з графіком</h4>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold">Зручний amend (зміна останнього коміту)</h4>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`git config --global alias.amend "commit --amend --no-edit"`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold">Список змінених файлів</h4>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`git config --global alias.files "diff-tree --no-commit-id --name-only -r"`}
                  </pre>
                  <p className="text-sm">Використання: <code>git files HEAD</code></p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Швидке додавання всіх змін і коміт</h4>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mb-2">
{`git config --global alias.ac "!git add -A && git commit -m"`}
                  </pre>
                  <p className="text-sm">Використання: <code>git ac "Повідомлення коміту"</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'ssh' && (
        <div>
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Налаштування SSH-ключів для Git</h2>
            <p className="mb-4">
              SSH-ключі забезпечують безпечний спосіб аутентифікації з віддаленими Git-серверами
              без необхідності кожного разу вводити пароль. Це особливо корисно при роботі з GitHub, GitLab, Bitbucket та іншими хостингами Git.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2">Створення та налаштування SSH-ключів</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                {sshExample}
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Додавання SSH-ключа в GitHub/GitLab</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Скопіюйте вміст публічного ключа (файл <code>~/.ssh/id_ed25519.pub</code>)</li>
                <li>
                  <strong>GitHub:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Перейдіть в <code>Settings</code> → <code>SSH and GPG keys</code></li>
                    <li>Натисніть <code>New SSH key</code></li>
                    <li>Вставте ключ і збережіть</li>
                  </ul>
                </li>
                <li>
                  <strong>GitLab:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Перейдіть в <code>Preferences</code> → <code>SSH Keys</code></li>
                    <li>Вставте ключ і натисніть <code>Add key</code></li>
                  </ul>
                </li>
              </ol>
              <p className="mt-4 text-sm">
                Після додавання ключа ви зможете використовувати SSH-протокол для клонування та операцій з репозиторіями.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">SSH vs HTTPS</h3>
              <table className="w-full border-collapse">
                <thead className="bg-green-100">
                  <tr>
                    <th className="border border-green-200 p-2 text-left"></th>
                    <th className="border border-green-200 p-2 text-left">SSH</th>
                    <th className="border border-green-200 p-2 text-left">HTTPS</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-green-200 p-2"><strong>URL формат</strong></td>
                    <td className="border border-green-200 p-2"><code>git@github.com:user/repo.git</code></td>
                    <td className="border border-green-200 p-2"><code>https://github.com/user/repo.git</code></td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 p-2"><strong>Аутентифікація</strong></td>
                    <td className="border border-green-200 p-2">SSH-ключі</td>
                    <td className="border border-green-200 p-2">Логін/пароль або токен</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 p-2"><strong>Зручність</strong></td>
                    <td className="border border-green-200 p-2">Не потрібно вводити пароль</td>
                    <td className="border border-green-200 p-2">Може вимагати введення облікових даних</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 p-2"><strong>Налаштування</strong></td>
                    <td className="border border-green-200 p-2">Потребує початкового налаштування</td>
                    <td className="border border-green-200 p-2">Простіше для початку</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 p-2"><strong>Корпоративні брандмауери</strong></td>
                    <td className="border border-green-200 p-2">Може бути заблоковано</td>
                    <td className="border border-green-200 p-2">Зазвичай дозволено</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-4 bg-white p-3 rounded border border-green-200">
                <p className="text-sm">
                  <strong>Порада:</strong> SSH рекомендується для регулярної розробки, а HTTPS корисний, коли ви працюєте з тимчасового комп'ютера або в обмеженому середовищі.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitInstallationSlide;