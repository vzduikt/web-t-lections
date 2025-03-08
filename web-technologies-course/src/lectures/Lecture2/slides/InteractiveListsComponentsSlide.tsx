import React, { useState } from 'react';

const InteractiveListsComponentsSlide: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'accordion' | 'navigation' | 'breadcrumbs' | 'tabs'>('accordion');
  const [activeAccordionItem, setActiveAccordionItem] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  
  // Дані для навігаційного меню
  const navItems = [
    { name: 'Головна', url: '#', hasSubmenu: false },
    { 
      name: 'Товари', 
      url: '#',
      hasSubmenu: true,
      submenu: [
        { name: 'Електроніка', url: '#' },
        { name: 'Одяг', url: '#' },
      ]
    },
    { name: 'Про нас', url: '#', hasSubmenu: false },
    { 
      name: 'Послуги', 
      url: '#',
      hasSubmenu: true,
      submenu: [
        { name: 'Доставка', url: '#' },
        { name: 'Установка', url: '#' },
      ]
    },
    { name: 'Контакти', url: '#', hasSubmenu: false }
  ];
  
  // Дані для аккордеону
  const faqItems = [
    { 
      question: 'Як оформити замовлення?', 
      answer: 'Щоб оформити замовлення, додайте товари до кошика, перейдіть у кошик, вкажіть свої дані та виберіть спосіб доставки та оплати.' 
    },
    { 
      question: 'Які способи оплати доступні?', 
      answer: 'Ми приймаємо оплату карткою онлайн, готівкою при отриманні, та банківським переказом для юридичних осіб.' 
    },
    { 
      question: 'Скільки триває доставка?', 
      answer: 'Доставка зазвичай займає 1-3 робочих дні залежно від вашого місцезнаходження та наявності товару на складі.' 
    },
    { 
      question: 'Як оформити повернення товару?', 
      answer: 'Для повернення товару зверніться до служби підтримки протягом 14 днів з моменту покупки. Товар повинен бути в оригінальній упаковці та без слідів використання.' 
    }
  ];
  
  // Дані для хлібних крихт
  const breadcrumbItems = [
    { name: 'Головна', url: '#' },
    { name: 'Електроніка', url: '#' },
    { name: 'Ноутбуки', url: '#' },
    { name: 'Ігрові ноутбуки', url: '#' },
    { name: 'Asus ROG Strix G15', url: null }
  ];
  
  // Дані для вкладок
  const tabItems = [
    { name: 'Опис', content: 'Повний опис товару з детальними характеристиками та особливостями використання.' },
    { name: 'Характеристики', content: 'Технічні специфікації, розміри, вага, матеріали та інші важливі параметри.' },
    { name: 'Відгуки', content: 'Відгуки користувачів, які вже придбали та користуються цим товаром.' },
    { name: 'Доставка', content: 'Інформація про способи, терміни та вартість доставки в різні регіони.' }
  ];
  
  const toggleAccordionItem = (index: number) => {
    if (activeAccordionItem === index) {
      setActiveAccordionItem(null);
    } else {
      setActiveAccordionItem(index);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Інтерактивні компоненти на основі списків</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Списки (UL та OL) є основою багатьох інтерактивних компонентів веб-інтерфейсу. Правильне семантичне використання списків покращує структуру, доступність та SEO.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'accordion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('accordion')}
        >
          Аккордеон (FAQ)
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'navigation' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('navigation')}
        >
          Навігаційне меню
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'breadcrumbs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('breadcrumbs')}
        >
          Хлібні крихти
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === 'tabs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('tabs')}
        >
          Вкладки (Tabs)
        </button>
      </div>
      
      {/* Аккордеон */}
      {activeComponent === 'accordion' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Аккордеон на основі UL</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2">HTML-розмітка аккордеону:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-4">
{`<ul class="accordion">
  <li class="accordion-item">
    <button class="accordion-header">
      Як оформити замовлення?
    </button>
    <div class="accordion-content">
      <p>Щоб оформити замовлення, додайте 
      товари до кошика, перейдіть у кошик,
      вкажіть свої дані та виберіть спосіб 
      доставки та оплати.</p>
    </div>
  </li>
  
  <li class="accordion-item">
    <button class="accordion-header">
      Які способи оплати доступні?
    </button>
    <div class="accordion-content">
      <p>Ми приймаємо оплату карткою 
      онлайн, готівкою при отриманні, 
      та банківським переказом для 
      юридичних осіб.</p>
    </div>
  </li>
  
  <!-- Інші елементи... -->
</ul>`}
              </pre>
              
              <p className="text-sm mt-3 mb-2"><strong>Доступність:</strong></p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`<button class="accordion-header"
  aria-expanded="true" 
  aria-controls="panel-1"
  id="header-1">
  Як оформити замовлення?
</button>
<div class="accordion-content" 
  id="panel-1" 
  role="region" 
  aria-labelledby="header-1">
  <p>Вміст панелі...</p>
</div>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Приклад аккордеону</h3>
            <div className="bg-white rounded-lg border overflow-hidden">
              <ul className="accordion divide-y divide-gray-200">
                {faqItems.map((item, index) => (
                  <li key={index} className="accordion-item">
                    <button 
                      className="w-full text-left p-4 flex justify-between items-center font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => toggleAccordionItem(index)}
                      aria-expanded={activeAccordionItem === index}
                    >
                      {item.question}
                      <svg 
                        className={`w-5 h-5 transition-transform ${activeAccordionItem === index ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div 
                      className={`accordion-content overflow-hidden transition-all duration-300 ${activeAccordionItem === index ? 'max-h-40' : 'max-h-0'}`}
                    >
                      <div className="p-4 bg-gray-50">{item.answer}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Переваги використання UL:</strong> Семантично правильна структура для списку питань і відповідей, 
                покращена доступність, зрозуміла структура для програм зчитування з екрану.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Навігаційне меню */}
      {activeComponent === 'navigation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Навігаційне меню на основі UL</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2">HTML-розмітка навігаційного меню:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-4">
{`<nav class="main-nav">
  <ul>
    <li><a href="#">Головна</a></li>
    
    <li>
      <a href="#">Товари</a>
      <ul class="submenu">
        <li><a href="#">Електроніка</a></li>
        <li><a href="#">Одяг</a></li>
        <li><a href="#">Побутова техніка</a></li>
      </ul>
    </li>
    
    <li><a href="#">Про нас</a></li>
    
    <li>
      <a href="#">Послуги</a>
      <ul class="submenu">
        <li><a href="#">Доставка</a></li>
        <li><a href="#">Установка</a></li>
        <li><a href="#">Гарантія</a></li>
      </ul>
    </li>
    
    <li><a href="#">Контакти</a></li>
  </ul>
</nav>`}
              </pre>
              
              <p className="text-sm mt-3 mb-2"><strong>Доступність:</strong></p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
{`<li>
  <a href="#" 
    aria-haspopup="true" 
    aria-expanded="false">
    Товари
  </a>
  <ul class="submenu" aria-label="Підменю товарів">
    <li><a href="#">Електроніка</a></li>
    <!-- Інші пункти -->
  </ul>
</li>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Приклад навігаційного меню</h3>
            <div className="bg-white rounded-lg border overflow-hidden">
              <nav className="main-nav p-2">
                <ul className="flex flex-wrap space-x-0 sm:space-x-2">
                  {navItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <a 
                        href={item.url} 
                        className="block px-3 py-2 hover:bg-gray-100 rounded"
                        aria-haspopup={item.hasSubmenu}
                        aria-expanded="false"
                      >
                        {item.name}
                        {item.hasSubmenu && (
                          <svg
                            className="inline-block w-4 h-4 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </a>
                      
                      {item.hasSubmenu && (
                        <ul className="submenu absolute left-0 mt-0 w-48 bg-white border rounded shadow-lg z-10 hidden group-hover:block">
                          {item.submenu?.map((subitem, subindex) => (
                            <li key={subindex}>
                              <a 
                                href={subitem.url} 
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {subitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="text-sm text-gray-500 p-2">Наведіть курсор на пункти "Товари" або "Послуги", щоб побачити підменю</p>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Переваги використання UL:</strong> Природна семантична структура для меню, підтримка вкладеності, 
                хороша доступність для клавіатурної навігації та асистивних технологій.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Хлібні крихти */}
      {activeComponent === 'breadcrumbs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Хлібні крихти на основі OL</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2">HTML-розмітка хлібних крихт:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-4">
{`<nav aria-label="Хлібні крихти">
  <ol class="breadcrumbs">
    <li>
      <a href="#">Головна</a>
    </li>
    <li>
      <a href="#">Електроніка</a>
    </li>
    <li>
      <a href="#">Ноутбуки</a>
    </li>
    <li>
      <a href="#">Ігрові ноутбуки</a>
    </li>
    <li aria-current="page">
      Asus ROG Strix G15
    </li>
  </ol>
</nav>`}
              </pre>
              
              <p className="text-sm mt-3 mb-2"><strong>Примітка:</strong></p>
              <p className="text-sm">Хлібні крихти є впорядкованим списком, тому використання <code>OL</code> семантично більш коректне, ніж <code>UL</code>, оскільки порядок навігації важливий.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Приклад хлібних крихт</h3>
            <div className="bg-white rounded-lg border overflow-hidden p-4">
              <nav aria-label="Хлібні крихти">
                <ol className="flex flex-wrap items-center space-x-2 text-sm">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <svg className="mx-2 w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      
                      {item.url ? (
                        <a 
                          href={item.url} 
                          className="text-blue-500 hover:underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span 
                          className="font-medium" 
                          aria-current="page"
                        >
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Переваги використання OL:</strong> Семантична структура, яка вказує на послідовність навігаційних кроків.
                Атрибут <code>aria-current="page"</code> допомагає програмам зчитування з екрану зрозуміти поточне місцезнаходження.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Вкладки */}
      {activeComponent === 'tabs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Вкладки на основі UL</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2">HTML-розмітка вкладок:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto mb-4">
{`<div class="tabs-container">
  <ul class="tabs-list" role="tablist">
    <li role="presentation">
      <button 
        id="tab-1" 
        role="tab" 
        aria-selected="true" 
        aria-controls="panel-1">
        Опис
      </button>
    </li>
    <li role="presentation">
      <button 
        id="tab-2" 
        role="tab" 
        aria-selected="false" 
        aria-controls="panel-2">
        Характеристики
      </button>
    </li>
    <!-- Інші вкладки... -->
  </ul>
  
  <div 
    id="panel-1" 
    role="tabpanel" 
    aria-labelledby="tab-1">
    Вміст першої вкладки...
  </div>
  
  <div 
    id="panel-2" 
    role="tabpanel" 
    aria-labelledby="tab-2" 
    hidden>
    Вміст другої вкладки...
  </div>
  
  <!-- Інші панелі... -->
</div>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Приклад вкладок</h3>
            <div className="bg-white rounded-lg border overflow-hidden">
              <div className="tabs-container">
                <ul className="tabs-list flex border-b" role="tablist">
                  {tabItems.map((tab, index) => (
                    <li key={index} role="presentation" className="mr-1">
                      <button 
                        id={`tab-${index}`}
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`panel-${index}`}
                        className={`py-2 px-4 font-medium focus:outline-none ${
                          activeTab === index 
                            ? 'bg-white border border-b-0 border-gray-300 rounded-t'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                {tabItems.map((tab, index) => (
                  <div
                    key={index}
                    id={`panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${index}`}
                    className={`p-4 ${activeTab !== index ? 'hidden' : ''}`}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Переваги використання UL з правильними ARIA-атрибутами:</strong> Покращена доступність, 
                правильний порядок навігації за допомогою клавіатури, інформативність для програм зчитування з екрану.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <h3 className="font-bold mb-2">Рекомендації щодо використання списків у компонентах інтерфейсу:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Використовуйте <code className="bg-blue-200 px-1 rounded">UL</code> для невпорядкованих груп (меню, аккордеони, вкладки)</li>
          <li>Використовуйте <code className="bg-blue-200 px-1 rounded">OL</code> для послідовних елементів (хлібні крихти, інструкції, кроки)</li>
          <li>Завжди додавайте відповідні ролі ARIA (<code className="bg-blue-200 px-1 rounded">role="tablist"</code>, <code className="bg-blue-200 px-1 rounded">role="tab"</code>) для складних компонентів</li>
          <li>Забезпечуйте навігацію клавіатурою з правильним порядком фокусування</li>
          <li>Тестуйте компоненти з програмами зчитування з екрану для перевірки доступності</li>
        </ol>
      </div>
    </div>
  );
};

export default InteractiveListsComponentsSlide;