import React from 'react';

const HTMLSemanticSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Семантичні теги HTML5</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Семантичні теги описують значення вмісту, а не просто його вигляд. Вони допомагають браузерам, пошуковим системам та асистивним технологіям краще розуміти структуру сторінки.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Структурні семантичні теги:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">header</code> - заголовок сторінки або розділу</p>
            <p><code className="bg-gray-200 px-1 rounded">nav</code> - навігаційне меню</p>
            <p><code className="bg-gray-200 px-1 rounded">main</code> - основний вміст сторінки</p>
            <p><code className="bg-gray-200 px-1 rounded">article</code> - самостійний, незалежний контент</p>
            <p><code className="bg-gray-200 px-1 rounded">section</code> - тематичний розділ вмісту</p>
            <p><code className="bg-gray-200 px-1 rounded">aside</code> - побічний вміст (сайдбар)</p>
            <p><code className="bg-gray-200 px-1 rounded">footer</code> - нижня частина сторінки або розділу</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Приклад семантичної структури:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto h-full">
{`<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Семантична структура</title>
</head>
<body>
  <header>
    <h1>Назва сайту</h1>
    <nav>
      <ul>
        <li><a href="#">Головна</a></li>
        <li><a href="#">Про нас</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Заголовок статті</h2>
      <p>Текст статті...</p>
      
      <section>
        <h3>Розділ статті</h3>
        <p>Зміст розділу...</p>
      </section>
    </article>
    
    <aside>
      <h3>Додаткова інформація</h3>
      <p>Побічний вміст...</p>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 Мій сайт</p>
  </footer>
</body>
</html>`}
          </pre>
        </div>
      </div>
      
      <h3 className="font-bold mb-2">Інші корисні семантичні теги:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Текстові елементи:</h4>
          <ul className="space-y-1">
            <li><code className="bg-gray-200 px-1 rounded">figure</code> / <code className="bg-gray-200 px-1 rounded">figcaption</code> - зображення з підписом</li>
            <li><code className="bg-gray-200 px-1 rounded">time</code> - дата або час</li>
            <li><code className="bg-gray-200 px-1 rounded">mark</code> - виділений текст</li>
            <li><code className="bg-gray-200 px-1 rounded">cite</code> - назва твору</li>
            <li><code className="bg-gray-200 px-1 rounded">blockquote</code> - цитата</li>
            <li><code className="bg-gray-200 px-1 rounded">address</code> - контактна інформація</li>
          </ul>
        </div>
      
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Інтерактивні елементи:</h4>
          <ul className="space-y-1">
            <li><code className="bg-gray-200 px-1 rounded">details</code> / <code className="bg-gray-200 px-1 rounded">summary</code> - розгортаємий блок</li>
            <li><code className="bg-gray-200 px-1 rounded">dialog</code> - діалогове вікно</li>
            <li><code className="bg-gray-200 px-1 rounded">progress</code> - індикатор прогресу</li>
            <li><code className="bg-gray-200 px-1 rounded">meter</code> - шкала вимірювання</li>
            <li><code className="bg-gray-200 px-1 rounded">output</code> - результат обчислення</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Переваги використання семантичних тегів:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>SEO</strong> - пошукові системи краще розуміють вміст</li>
          <li><strong>Доступність</strong> - програми читання з екрану можуть краще орієнтуватися</li>
          <li><strong>Зручність розробки</strong> - структурований код легше підтримувати</li>
          <li><strong>Адаптивність</strong> - семантичні елементи легше стилізувати для різних пристроїв</li>
          <li><strong>Прогресивне покращення</strong> - сторінка коректно працює навіть при проблемах із CSS або JS</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLSemanticSlide;