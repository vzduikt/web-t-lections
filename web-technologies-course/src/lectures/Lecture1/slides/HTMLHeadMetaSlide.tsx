import React from 'react';

const HTMLHeadMetaSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Елемент HEAD та мета-дані</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Елемент <code className="bg-blue-200 px-1 rounded">head</code> містить мета-інформацію про документ, яка не відображається безпосередньо на сторінці, але є важливою для браузерів та пошукових систем.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Основні елементи в HEAD:</h3>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <p><code className="bg-gray-200 px-1 rounded">title</code> - заголовок сторінки, який відображається у вкладці браузера</p>
            <p><code className="bg-gray-200 px-1 rounded">meta</code> - мета-дані про сторінку</p>
            <p><code className="bg-gray-200 px-1 rounded">link</code> - зв'язки з зовнішніми ресурсами (CSS, іконки)</p>
            <p><code className="bg-gray-200 px-1 rounded">script</code> - JavaScript-код або посилання на JS-файли</p>
            <p><code className="bg-gray-200 px-1 rounded">style</code> - вбудовані CSS-стилі</p>
            <p><code className="bg-gray-200 px-1 rounded">base</code> - базовий URL для всіх відносних URL в документі</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Приклад секції HEAD:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
{`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Опис сторінки для SEO">
  <meta name="keywords" content="html, css, javascript">
  <meta name="author" content="Ім'я Автора">
  <title>Назва сторінки</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
  <script src="script.js"></script>
</head>`}
          </pre>
        </div>
      </div>
      
      <h3 className="font-bold mb-2">Найважливіші мета-теги та їх призначення:</h3>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Мета-тег</th>
              <th className="border border-gray-300 p-2 text-left">Призначення</th>
              <th className="border border-gray-300 p-2 text-left">Приклад</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"><code>charset</code></td>
              <td className="border border-gray-300 p-2">Кодування символів</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta charset="UTF-8"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>viewport</code></td>
              <td className="border border-gray-300 p-2">Налаштування масштабу на мобільних пристроях</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>description</code></td>
              <td className="border border-gray-300 p-2">Опис сторінки для пошукових систем</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta name="description" content="Короткий опис сторінки"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>keywords</code></td>
              <td className="border border-gray-300 p-2">Ключові слова для пошукових систем</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta name="keywords" content="ключові, слова"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>author</code></td>
              <td className="border border-gray-300 p-2">Автор сторінки</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta name="author" content="Ім'я автора"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2"><code>robots</code></td>
              <td className="border border-gray-300 p-2">Інструкції для пошукових роботів</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta name="robots" content="index, follow"&gt;</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Open Graph</td>
              <td className="border border-gray-300 p-2">Метадані для соціальних мереж</td>
              <td className="border border-gray-300 p-2"><code>&lt;meta property="og:title" content="Заголовок"&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Важливість метаданих:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Покращують <strong>SEO</strong> (пошукову оптимізацію)</li>
          <li>Визначають вигляд у результатах пошуку та при поширенні в соцмережах</li>
          <li>Оптимізують відображення на різних пристроях</li>
          <li>Впливають на доступність та зручність користування сайтом</li>
          <li>Допомагають браузерам правильно відображати вміст</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLHeadMetaSlide;