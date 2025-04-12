import { useState } from 'react';

const FlexboxExamplesSlide = () => {
  const [activeSection, setActiveSection] = useState('navbar');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Практичні приклади використання Flexbox</h1>

      <div className="flex space-x-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'navbar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('navbar')}
        >
          Навігаційна панель
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('cards')}
        >
          Картки
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'centering' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('centering')}
        >
          Центрування
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'form' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('form')}
        >
          Форма
        </button>
        <button
          className={`px-4 py-2 rounded mb-2 ${activeSection === 'responsive' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('responsive')}
        >
          Адаптивний дизайн
        </button>
      </div>

      {activeSection === 'navbar' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Навігаційна панель з Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="mb-4">
                Навігаційні панелі — одне з найпоширеніших застосувань Flexbox. З його допомогою можна легко створити
                гнучке та адаптивне меню.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">HTML:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li><a href="#">Головна</a></li>
    <li><a href="#">Про нас</a></li>
    <li><a href="#">Послуги</a></li>
    <li><a href="#">Контакти</a></li>
  </ul>
  <div class="nav-auth">
    <button>Увійти</button>
  </div>
</nav>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">CSS:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.nav-auth button {
  padding: 0.5rem 1rem;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Результат:</h3>
              <div className="border border-gray-300 rounded-lg overflow-scroll mb-4">
                <div className="flex justify-between items-center bg-gray-100 min-w-[590px] p-4">
                  <div className="text-xl font-bold">MySite</div>
                  <ul className="flex list-none m-0 p-0">
                    <li className="mx-3">
                      <a href="#" className="text-gray-700 no-underline">
                        Головна
                      </a>
                    </li>
                    <li className="mx-3">
                      <a href="#" className="text-gray-700 no-underline">
                        Про нас
                      </a>
                    </li>
                    <li className="mx-3">
                      <a href="#" className="text-gray-700 no-underline">
                        Послуги
                      </a>
                    </li>
                    <li className="mx-3">
                      <a href="#" className="text-gray-700 no-underline">
                        Контакти
                      </a>
                    </li>
                  </ul>
                  <div>
                    <button className="px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">Увійти</button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Ключові властивості:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">justify-content: space-between</code> - розміщує
                    логотип, посилання та кнопку на рівній відстані
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">align-items: center</code> - вертикально вирівнює
                    всі елементи
                  </li>
                  <li>
                    Вкладений <code className="bg-gray-100 px-2 py-1 rounded">display: flex</code> для створення
                    горизонтального меню
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2">Переваги використання Flexbox:</h3>
                <ul className="list-disc pl-5">
                  <li>Легко центрувати елементи як горизонтально, так і вертикально</li>
                  <li>Адаптивність до різних розмірів екрану</li>
                  <li>Простота налаштування просторів між елементами</li>
                  <li>Можливість зміни порядку елементів на мобільних пристроях</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'cards' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Картки продуктів з Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="mb-4">
                Flexbox ідеально підходить для створення сіток з карток, які мають однакову висоту, незалежно від
                кількості контенту всередині.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">HTML:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`<div class="products-container">
  <div class="product-card">
    <img src="product1.jpg" alt="Product 1">
    <h3>Продукт 1</h3>
    <p>Короткий опис продукту.</p>
    <button>Купити</button>
  </div>
  
  <div class="product-card">
    <img src="product2.jpg" alt="Product 2">
    <h3>Продукт 2</h3>
    <p>Довший опис продукту, який займає кілька рядків тексту.</p>
    <button>Купити</button>
  </div>
  
  <div class="product-card">
    <img src="product3.jpg" alt="Product 3">
    <h3>Продукт 3</h3>
    <p>Короткий опис.</p>
    <button>Купити</button>
  </div>
</div>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">CSS:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px; /* Гнучка основа в 300px */
  max-width: 350px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

.product-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.product-card p {
  flex-grow: 1; /* Розширює опис, щоб кнопки були на одному рівні */
  margin-bottom: 15px;
}

.product-card button {
  align-self: flex-start;
  padding: 8px 16px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Результат:</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-col flex-1 basis-40 max-w-xs p-4 border border-gray-300 rounded-lg bg-white">
                  <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center text-gray-500">
                    Фото продукту
                  </div>
                  <h3 className="mt-0 mb-2 text-lg font-bold">Продукт 1</h3>
                  <p className="flex-grow mb-4 text-gray-600">Короткий опис продукту.</p>
                  <button className="self-start px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">
                    Купити
                  </button>
                </div>

                <div className="flex flex-col flex-1 basis-40 max-w-xs p-4 border border-gray-300 rounded-lg bg-white">
                  <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center text-gray-500">
                    Фото продукту
                  </div>
                  <h3 className="mt-0 mb-2 text-lg font-bold">Продукт 2</h3>
                  <p className="flex-grow mb-4 text-gray-600">
                    Довший опис продукту, який займає кілька рядків тексту і має багато деталей та інформації.
                  </p>
                  <button className="self-start px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">
                    Купити
                  </button>
                </div>

                <div className="flex flex-col flex-1 basis-40 max-w-xs p-4 border border-gray-300 rounded-lg bg-white">
                  <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center text-gray-500">
                    Фото продукту
                  </div>
                  <h3 className="mt-0 mb-2 text-lg font-bold">Продукт 3</h3>
                  <p className="flex-grow mb-4 text-gray-600">Короткий опис.</p>
                  <button className="self-start px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">
                    Купити
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Ключові властивості:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-wrap: wrap</code> - дозволяє карткам
                    переноситися на новий рядок
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex: 1 1 300px</code> - гнучка основа, яка дозволяє
                    карткам змінювати розмір
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-direction: column</code> - для вертикального
                    розташування вмісту картки
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-grow: 1</code> для параграфа - розтягує опис,
                    щоб кнопки були вирівняні
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2">Переваги використання Flexbox:</h3>
                <ul className="list-disc pl-5">
                  <li>Однакова висота всіх карток, незалежно від кількості тексту</li>
                  <li>Кнопки вирівняні по нижньому краю</li>
                  <li>Автоматична адаптація сітки до різних розмірів екрану</li>
                  <li>
                    Використання властивості <code className="bg-gray-100 px-2 py-1 rounded">gap</code> замість полів
                    між елементами
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'centering' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Досконале центрування з Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="mb-4">
                Центрування елементів вертикально та горизонтально завжди було складним завданням у CSS. Flexbox робить
                це елегантно та просто.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">HTML:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`<div class="centered-container">
  <div class="centered-box">
    <h2>Заголовок</h2>
    <p>Цей контент ідеально відцентрований!</p>
    <button>Кнопка</button>
  </div>
</div>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">CSS:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background-color: #f0f4f8;
}

.centered-box {
  max-width: 400px;
  padding: 30px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.centered-box h2 {
  margin-top: 0;
  color: #333;
}

.centered-box button {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`}
                </pre>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <h3 className="font-bold text-lg mb-2">До Flexbox:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`/* Центрування до Flexbox (складніше) */
.old-centered-container {
  position: relative;
  min-height: 400px;
}

.old-centered-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Інші стилі... */
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Результат:</h3>
              <div className="flex justify-center items-center min-h-64 bg-blue-100 rounded-lg border border-blue-200 mb-4">
                <div className="max-w-xs p-6 text-center bg-white rounded-lg shadow-md">
                  <h2 className="mt-0 mb-2 text-xl font-bold text-gray-800">Заголовок</h2>
                  <p className="text-gray-600">Цей контент ідеально відцентрований!</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">
                    Кнопка
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Інші способи центрування:</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium mb-1">Тільки горизонтальне центрування:</p>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                      {`.container {
  display: flex;
  justify-content: center;
}`}
                    </pre>
                  </div>

                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium mb-1">Тільки вертикальне центрування:</p>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                      {`.container {
  display: flex;
  align-items: center;
}`}
                    </pre>
                  </div>

                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium mb-1">Центрування одного елемента, що займає весь простір:</p>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                      {`.container {
  display: flex;
}

.item {
  margin: auto;
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2">Переваги використання Flexbox:</h3>
                <ul className="list-disc pl-5">
                  <li>Швидке і просте центрування як по горизонталі, так і по вертикалі</li>
                  <li>Не потрібно використовувати абсолютне позиціонування та трансформації</li>
                  <li>Працює з блоками будь-якого розміру</li>
                  <li>Менше коду та більш інтуїтивний підхід</li>
                  <li>Добре працює з динамічним контентом</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'form' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Форма з використанням Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="mb-4">
                Форми можуть значно виграти від використання Flexbox для вирівнювання та розташування полів, міток та
                кнопок.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">HTML:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`<form class="contact-form">
  <h2>Зв'яжіться з нами</h2>
  
  <div class="form-row">
    <div class="form-group">
      <label for="name">Ім'я</label>
      <input type="text" id="name" name="name">
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
    </div>
  </div>
  
  <div class="form-group">
    <label for="subject">Тема</label>
    <input type="text" id="subject" name="subject">
  </div>
  
  <div class="form-group">
    <label for="message">Повідомлення</label>
    <textarea id="message" name="message" rows="5"></textarea>
  </div>
  
  <div class="form-buttons">
    <button type="reset" class="btn-reset">Скасувати</button>
    <button type="submit" class="btn-submit">Відправити</button>
  </div>
</form>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">CSS:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex: 1;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn-reset {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Результат:</h3>
              <div className="border border-gray-300 rounded-lg bg-white p-6 mb-4">
                <h2 className="text-xl font-bold mb-4">Зв'яжіться з нами</h2>

                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 font-medium">Ім'я</label>
                    <input type="text" className="p-2 border border-gray-300 rounded" />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label className="mb-1 font-medium">Email</label>
                    <input type="email" className="p-2 border border-gray-300 rounded" />
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-medium">Тема</label>
                  <input type="text" className="p-2 border border-gray-300 rounded" />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-medium">Повідомлення</label>
                  <textarea rows={4} className="p-2 border border-gray-300 rounded"></textarea>
                </div>

                <div className="flex justify-end gap-3">
                  <button type="reset" className="px-4 py-2 bg-gray-200 border border-gray-300 rounded cursor-pointer">
                    Скасувати
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white border-0 rounded cursor-pointer">
                    Відправити
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Ключові властивості:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">display: flex</code> для <code>.form-row</code> -
                    створює горизонтальне розташування полів
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-direction: column</code> для{' '}
                    <code>.form-group</code> - вертикальне вирівнювання мітки та поля
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex: 1</code> - для рівномірного розподілу місця
                    між групами полів
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">justify-content: flex-end</code> - вирівнює кнопки
                    по правому краю
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2">Переваги використання Flexbox для форм:</h3>
                <ul className="list-disc pl-5">
                  <li>Легке створення багатоколонкових форм</li>
                  <li>Просте вирівнювання полів та міток</li>
                  <li>Гнучке позиціонування кнопок форми</li>
                  <li>Краща адаптація до мобільних пристроїв</li>
                  <li>Однакова ширина полів у рядку</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'responsive' && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Адаптивний дизайн з Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="mb-4">
                Flexbox є потужним інструментом для створення адаптивних макетів, які добре відображаються на різних
                пристроях без необхідності в складних медіа-запитах.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-bold text-lg mb-2">HTML:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`<div class="responsive-layout">
  <header class="header">Шапка сайту</header>
  
  <div class="content-wrapper">
    <main class="main-content">
      <h2>Основний контент</h2>
      <p>Тут розміщується основний вміст сторінки...</p>
    </main>
    
    <aside class="sidebar">
      <h3>Бічна панель</h3>
      <ul>
        <li>Пункт меню 1</li>
        <li>Пункт меню 2</li>
        <li>Пункт меню 3</li>
      </ul>
    </aside>
  </div>
  
  <footer class="footer">Підвал сайту</footer>
</div>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-2">CSS:</h3>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {`.responsive-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 20px;
  background-color: #4a6cf7;
  color: white;
}

.content-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.main-content {
  flex: 3;
  padding: 20px;
  background-color: white;
}

.sidebar {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
}

.footer {
  padding: 20px;
  background-color: #333;
  color: white;
}

/* Адаптація для планшетів і десктопів */
@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row; /* Змінюємо напрямок при більших екранах */
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Результат:</h3>
              <div className="bg-gray-100 rounded-lg border border-gray-300 mb-4 overflow-hidden">
                <div className="flex flex-col min-h-96 border-4 border-dashed border-gray-400">
                  <div className="bg-blue-500 text-white p-4">Шапка сайту</div>

                  <div className="flex flex-col md:flex-row flex-1">
                    <div className="flex-3 bg-white p-4">
                      <h2 className="text-lg font-bold mb-2">Основний контент</h2>
                      <p>Тут розміщується основний вміст сторінки...</p>
                    </div>

                    <div className="flex-1 bg-gray-100 p-4">
                      <h3 className="font-bold mb-2">Бічна панель</h3>
                      <ul className="list-disc pl-5">
                        <li>Пункт меню 1</li>
                        <li>Пункт меню 2</li>
                        <li>Пункт меню 3</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-white p-4">Підвал сайту</div>
                </div>
                <p className="text-xs text-gray-600 italic text-center mt-2">
                  На мобільних пристроях основний контент та бічна панель стають вертикальними
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Ключові властивості:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex-direction: column/row</code> - змінює напрямок
                    макету залежно від розміру екрану
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">flex: 1</code> - використовується для розподілу
                    доступного простору
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">min-height: 100vh</code> - забезпечує, що макет
                    займає всю висоту екрану
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-2">Переваги адаптивного дизайну з Flexbox:</h3>
                <ul className="list-disc pl-5">
                  <li>Мінімальні медіа-запити - достатньо однієї зміни flex-direction</li>
                  <li>Природна адаптивність при зміні розміру вікна</li>
                  <li>Легке пріоритизування контенту на різних пристроях</li>
                  <li>Чистий і логічний HTML без додаткових обгорток</li>
                  <li>Можливість зміни порядку елементів для різних розмірів екрану</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mt-4">
            <h3 className="font-bold text-lg mb-2">Висновки:</h3>
            <p className="mb-2">
              Практичні приклади демонструють, що Flexbox є універсальним інструментом, який значно спрощує та покращує
              верстку сучасних веб-сайтів.
            </p>
            <p>
              Від простих елементів навігації до складних адаптивних макетів — Flexbox допомагає створювати стабільні,
              гнучкі та естетично приємні інтерфейси з меншою кількістю коду та меншими зусиллями порівняно з
              традиційними методами верстки.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexboxExamplesSlide;
