import React, { useState } from 'react';

const CSSColorsBordersSlide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'colors' | 'backgrounds' | 'borders'>('colors');
  const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex');
  const [showGradientGenerator, setShowGradientGenerator] = useState(false);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Кольори, фони та межі в CSS</h2>
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="font-semibold">Властивості для кольорів, фонів та меж є фундаментальними для стилізації елементів в CSS. Правильне використання цих властивостей дозволяє створювати візуально привабливі та інтуїтивно зрозумілі інтерфейси.</p>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'colors' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('colors')}
        >
          Кольори
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'backgrounds' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('backgrounds')}
        >
          Фони
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'borders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection('borders')}
        >
          Межі
        </button>
      </div>
      
      {activeSection === 'colors' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Кольори в CSS (color)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Властивість color</h4>
                <p>Властивість <code>color</code> визначає колір тексту елемента, а також колір деяких інших елементів, таких як підкреслення або перекреслення.</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-2">
{`.text-default {
  color: black;
}

.text-primary {
  color: #0066cc;
}

.text-accent {
  color: rgb(255, 82, 82);
}

.text-custom {
  color: hsl(120, 100%, 25%);
}`}
                </pre>
              </div>
              
              <div className="bg-white border rounded-lg p-4 mb-4">
                <h4 className="font-bold mb-2">Формати визначення кольорів</h4>
                <div className="flex space-x-2 mb-3">
                  <button
                    className={`px-3 py-1 text-sm rounded ${colorFormat === 'hex' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setColorFormat('hex')}
                  >
                    HEX
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded ${colorFormat === 'rgb' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setColorFormat('rgb')}
                  >
                    RGB
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded ${colorFormat === 'hsl' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setColorFormat('hsl')}
                  >
                    HSL
                  </button>
                </div>
                
                {colorFormat === 'hex' && (
                  <div>
                    <h5 className="font-semibold mb-1">HEX (шістнадцятковий формат)</h5>
                    <p className="text-sm mb-2">Формат запису: <code>#RRGGBB</code> або скорочений <code>#RGB</code></p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded" style={{ backgroundColor: '#ff0000' }}>
                        <p className="text-white text-center text-sm font-semibold">#ff0000</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: '#00ff00' }}>
                        <p className="text-black text-center text-sm font-semibold">#00ff00</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: '#0000ff' }}>
                        <p className="text-white text-center text-sm font-semibold">#0000ff</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: '#ff00ff' }}>
                        <p className="text-white text-center text-sm font-semibold">#ff00ff</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">З підтримкою прозорості: <code>#RRGGBBAA</code> або <code>#RGBA</code></p>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.semi-transparent {
  color: #00aaff80; /* 50% прозорості */
}`}
                    </pre>
                  </div>
                )}
                
                {colorFormat === 'rgb' && (
                  <div>
                    <h5 className="font-semibold mb-1">RGB/RGBA</h5>
                    <p className="text-sm mb-2">Формат запису: <code>rgb(red, green, blue)</code> або <code>rgba(red, green, blue, alpha)</code></p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
                        <p className="text-white text-center text-sm font-semibold">rgb(255, 0, 0)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'rgb(0, 255, 0)' }}>
                        <p className="text-black text-center text-sm font-semibold">rgb(0, 255, 0)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'rgba(0, 0, 255, 1)' }}>
                        <p className="text-white text-center text-sm font-semibold">rgba(0, 0, 255, 1)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'rgba(255, 0, 255, 0.5)' }}>
                        <p className="text-white text-center text-sm font-semibold">rgba(255, 0, 255, 0.5)</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Сучасний синтаксис CSS:</p>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.modern-rgb {
  color: rgb(100 150 200 / 80%);
}`}
                    </pre>
                  </div>
                )}
                
                {colorFormat === 'hsl' && (
                  <div>
                    <h5 className="font-semibold mb-1">HSL/HSLA</h5>
                    <p className="text-sm mb-2">Формат запису: <code>hsl(hue, saturation, lightness)</code> або <code>hsla(hue, saturation, lightness, alpha)</code></p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
                        <p className="text-white text-center text-sm font-semibold">hsl(0, 100%, 50%)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'hsl(120, 100%, 50%)' }}>
                        <p className="text-black text-center text-sm font-semibold">hsl(120, 100%, 50%)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}>
                        <p className="text-white text-center text-sm font-semibold">hsl(240, 100%, 50%)</p>
                      </div>
                      <div className="p-2 rounded" style={{ backgroundColor: 'hsla(300, 100%, 50%, 0.5)' }}>
                        <p className="text-white text-center text-sm font-semibold">hsla(300, 100%, 50%, 0.5)</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Переваги HSL: інтуїтивне розуміння, легке створення палітр.</p>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-1">
{`.modern-hsl {
  color: hsl(200 70% 50% / 80%);
}`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Поіменовані кольори</h4>
                <p className="mb-2">CSS підтримує близько 140 поіменованих кольорів:</p>
                <div className="grid grid-cols-4 gap-1">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                    <span className="text-xs">red</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <span className="text-xs">blue</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-500 rounded"></div>
                    <span className="text-xs">green</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                    <span className="text-xs">yellow</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded"></div>
                    <span className="text-xs">purple</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-pink-500 rounded"></div>
                    <span className="text-xs">pink</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-500 rounded"></div>
                    <span className="text-xs">gray</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded"></div>
                    <span className="text-xs">orange</span>
                  </div>
                </div>
                <p className="text-sm mt-2 text-red-600 font-semibold">⚠️ У різних браузерах поіменовані кольори можуть відрізнятися. Для точного контролю використовуйте HEX, RGB або HSL.</p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Сучасні можливості кольорів в CSS</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm">Колірні простори:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.modern-color {
  color: lab(50% 40 20); /* CIE LAB */
  color: lch(50% 40 20); /* LCH */
  color: oklch(60% 0.2 30); /* Oklab LCH */
  color: color(display-p3 1 0.5 0);
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm">Функції кольорів:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Змішування кольорів */
.mixed {
  color: color-mix(in srgb, #ff0000, #0000ff);
}

/* Контрастний колір */
.contrast {
  color: color-contrast(#background vs #111, #eee);
}

/* Колірні функції */
.relative-color {
  --base: hsl(220, 70%, 50%);
  --darker: color-adjust(var(--base) lightness(-20%));
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">CSS змінні для кольорів</h4>
                <p className="mb-2">Змінні (custom properties) дозволяють створювати гнучкі колірні системи:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`:root {
  --color-primary: #0066cc;
  --color-secondary: #ff6b6b;
  --color-accent: #41c7c7;
  
  --color-text: #333333;
  --color-text-light: #777777;
  
  --color-primary-light: hsl(from var(--color-primary) h s calc(l + 15%));
  --color-primary-dark: hsl(from var(--color-primary) h s calc(l - 15%));
}

.button {
  background-color: var(--color-primary);
  color: white;
}

.button:hover {
  background-color: var(--color-primary-dark);
}

/* Підтримка темної теми */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f5f5f5;
    --color-text-light: #dddddd;
    --color-primary: #5599ff;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'backgrounds' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Фони в CSS (background)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Властивості фону</h4>
                <p className="mb-2">CSS надає кілька властивостей для контролю фону елементів:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>background-color</code>: колір фону</li>
                  <li><code>background-image</code>: зображення фону</li>
                  <li><code>background-repeat</code>: повторення фону</li>
                  <li><code>background-position</code>: позиція фону</li>
                  <li><code>background-size</code>: розмір фону</li>
                  <li><code>background-attachment</code>: фіксація фону</li>
                  <li><code>background-clip</code>: обрізання фону</li>
                  <li><code>background-origin</code>: початок фону</li>
                  <li><code>background</code>: скорочена властивість</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg p-4 mb-4">
                <h4 className="font-bold mb-2">background-color</h4>
                <p className="mb-2">Встановлює колір фону елемента:</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="p-4 rounded text-center" style={{ backgroundColor: '#e6f7ff' }}>
                    <code className="text-xs">background-color: #e6f7ff;</code>
                  </div>
                  <div className="p-4 rounded text-white text-center" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
                    <code className="text-xs">background-color: rgb(60, 60, 60);</code>
                  </div>
                  <div className="p-4 rounded text-center" style={{ backgroundColor: 'hsl(120, 60%, 70%)' }}>
                    <code className="text-xs">background-color: hsl(120, 60%, 70%);</code>
                  </div>
                  <div className="p-4 rounded text-center" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>
                    <code className="text-xs">background-color: rgba(255, 0, 0, 0.3);</code>
                  </div>
                </div>
                
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.card {
  background-color: white;
}

.alert-warning {
  background-color: #fff3cd;
}

.semi-transparent {
  background-color: rgba(255, 255, 255, 0.8);
}`}
                </pre>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Градієнти (background-image)</h4>
                <p className="mb-2">CSS дозволяє створювати різні типи градієнтів:</p>
                
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <div className="p-4 rounded h-16" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
                    <p className="text-center text-white font-semibold">Лінійний градієнт</p>
                  </div>
                  <div className="p-4 rounded h-16" style={{ background: 'radial-gradient(circle, #00d2ff, #3a7bd5)' }}>
                    <p className="text-center text-white font-semibold">Радіальний градієнт</p>
                  </div>
                  <div className="p-4 rounded h-16" style={{ background: 'conic-gradient(from 45deg, #f6d365, #fda085, #f6d365)' }}>
                    <p className="text-center text-white font-semibold">Конічний градієнт</p>
                  </div>
                </div>
                
                <button 
                  className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-2"
                  onClick={() => setShowGradientGenerator(!showGradientGenerator)}
                >
                  {showGradientGenerator ? 'Сховати приклади градієнтів' : 'Показати приклади градієнтів'}
                </button>
                
                {showGradientGenerator && (
                  <div className="mt-2">
                    <h5 className="font-semibold mb-1">Приклади CSS градієнтів:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Лінійний градієнт */
.linear-gradient {
  background-image: linear-gradient(to right, #ff7e5f, #feb47b);
  background-image: linear-gradient(45deg, blue, red);
  background-image: linear-gradient(to bottom right, yellow, #009688, purple);
}

/* Радіальний градієнт */
.radial-gradient {
  background-image: radial-gradient(circle, #00d2ff, #3a7bd5);
  background-image: radial-gradient(ellipse at top left, red, blue, green);
}

/* Конічний градієнт */
.conic-gradient {
  background-image: conic-gradient(from 45deg, #f6d365, #fda085, #f6d365);
  background-image: conic-gradient(red, orange, yellow, green, blue, purple, red);
}

/* Повторювані градієнти */
.repeating-gradient {
  background-image: repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px);
  background-image: repeating-radial-gradient(circle at center, #f5f7fa, #c3cfe2 20px);
}`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Фонові зображення</h4>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">background-image</h5>
                    <p className="text-sm mb-2">Встановлює зображення як фон елемента:</p>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.hero {
  background-image: url('path/to/image.jpg');
}

.multiple-backgrounds {
  background-image: 
    url('overlay.png'),
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('background.jpg');
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">background-repeat</h5>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="h-24 rounded border flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'5\' fill=\'%23ccc\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>
                        <code className="text-xs bg-white p-1 rounded">repeat</code>
                      </div>
                      <div className="h-24 rounded border flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'5\' fill=\'%23ccc\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat' }}>
                        <code className="text-xs bg-white p-1 rounded">no-repeat</code>
                      </div>
                      <div className="h-24 rounded border flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'5\' fill=\'%23ccc\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat-x' }}>
                        <code className="text-xs bg-white p-1 rounded">repeat-x</code>
                      </div>
                      <div className="h-24 rounded border flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'5\' fill=\'%23ccc\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat-y' }}>
                        <code className="text-xs bg-white p-1 rounded">repeat-y</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">background-position</h5>
                    <p className="text-sm mb-2">Позиціонує фонове зображення:</p>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.bg-position {
  background-position: center;
  background-position: top right;
  background-position: 50% 25%;
  background-position: 20px 10px;
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">background-size</h5>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="h-24 rounded border flex items-end justify-center p-1" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23ddd\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'auto' }}>
                        <code className="text-xs bg-white p-1 rounded">auto</code>
                      </div>
                      <div className="h-24 rounded border flex items-end justify-center p-1" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23ddd\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <code className="text-xs bg-white p-1 rounded">cover</code>
                      </div>
                      <div className="h-24 rounded border flex items-end justify-center p-1" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23ddd\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
                        <code className="text-xs bg-white p-1 rounded">contain</code>
                      </div>
                    </div>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
                    {`.hero-image {
  background-size: cover;   /* Заповнити контейнер */
}

.icon {
  background-size: contain; /* Вписати в контейнер */
}

.custom-size {
  background-size: 200px 100px;
  background-size: 50% auto;
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Комбінування властивостей фону</h4>
                <p className="mb-2">Скорочена властивість <code>background</code> дозволяє комбінувати кілька значень:</p>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.hero {
  /* color image position / size repeat attachment */
  background: #f5f5f5 url('bg.jpg') center / cover no-repeat fixed;
}

.card {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url('card-bg.jpg') center / cover no-repeat;
}`}
                </pre>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Додаткові властивості фону</h4>
                <div className="space-y-2">
                  <div>
                    <h5 className="font-semibold text-sm">background-attachment:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.parallax {
  background-attachment: fixed;  /* Фон фіксований при прокрутці */
}

.scrolling {
  background-attachment: scroll; /* Фон прокручується з елементом */
}

.local {
  background-attachment: local;  /* Прокручується з вмістом */
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm">background-clip і background-origin:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.element {
  /* Визначає межі відображення фону */
  background-clip: border-box;    /* За замовчуванням */
  background-clip: padding-box;   /* Всередині відступів */
  background-clip: content-box;   /* Тільки в області контенту */
  background-clip: text;          /* Тільки під текстом */
  
  /* Визначає початок координат фону */
  background-origin: border-box;  /* Від краю межі */
  background-origin: padding-box; /* За замовчуванням */
  background-origin: content-box; /* Від краю контенту */
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm">Приклад тексту з фоном:</h5>
                    <div className="p-3 rounded" style={{ backgroundImage: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' }}>
                      <h1 className="font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)', WebkitBackgroundClip: 'text' }}>
                        Текст з градієнтним фоном
                      </h1>
                    </div>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto mt-2">
{`.gradient-text {
  background-image: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'borders' && (
        <div>
          <h3 className="text-xl font-bold mb-3">Межі в CSS (border, border-radius)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Властивості меж</h4>
                <p className="mb-2">CSS дозволяє налаштовувати межі елементів за допомогою таких властивостей:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>border-width</code>: товщина межі</li>
                  <li><code>border-style</code>: стиль межі</li>
                  <li><code>border-color</code>: колір межі</li>
                  <li><code>border</code>: скорочена властивість</li>
                  <li><code>border-top</code>, <code>border-right</code>, <code>border-bottom</code>, <code>border-left</code>: для окремих сторін</li>
                  <li><code>border-radius</code>: заокруглення кутів</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg p-4 mb-4">
                <h4 className="font-bold mb-2">Базовий синтаксис border</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 text-center" style={{ border: '1px solid black' }}>
                    <code>border: 1px solid black;</code>
                  </div>
                  <div className="p-4 text-center" style={{ border: '2px dashed #0066cc' }}>
                    <code>border: 2px dashed #0066cc;</code>
                  </div>
                  <div className="p-4 text-center" style={{ border: '3px dotted rgba(255, 0, 0, 0.5)' }}>
                    <code>border: 3px dotted rgba(255, 0, 0, 0.5);</code>
                  </div>
                  <div className="p-4 text-center" style={{ border: '4px double green' }}>
                    <code>border: 4px double green;</code>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Стилі межі (border-style)</h4>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white p-3 text-center" style={{ border: '3px solid black' }}>
                    <code className="text-xs">solid</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px dashed black' }}>
                    <code className="text-xs">dashed</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px dotted black' }}>
                    <code className="text-xs">dotted</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px double black' }}>
                    <code className="text-xs">double</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px groove black' }}>
                    <code className="text-xs">groove</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px ridge black' }}>
                    <code className="text-xs">ridge</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px inset black' }}>
                    <code className="text-xs">inset</code>
                  </div>
                  <div className="bg-white p-3 text-center" style={{ border: '3px outset black' }}>
                    <code className="text-xs">outset</code>
                  </div>
                </div>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.element {
  border-style: solid;
  border-style: dashed;
  border-style: dotted;
  border-style: double;
  border-style: groove;
  border-style: ridge;
  border-style: inset;
  border-style: outset;
  border-style: none;
  border-style: hidden;
  
  /* Різні стилі для кожної сторони */
  border-style: solid dashed dotted double;
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 border-b">
                  <h4 className="font-bold">Налаштування окремих сторін</h4>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">Індивідуальні межі для кожної сторони:</h5>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div className="p-3 text-center" style={{ borderTop: '2px solid red' }}>
                        <code className="text-xs">border-top: 2px solid red;</code>
                      </div>
                      <div className="p-3 text-center" style={{ borderRight: '2px solid green' }}>
                        <code className="text-xs">border-right: 2px solid green;</code>
                      </div>
                      <div className="p-3 text-center" style={{ borderBottom: '2px solid blue' }}>
                        <code className="text-xs">border-bottom: 2px solid blue;</code>
                      </div>
                      <div className="p-3 text-center" style={{ borderLeft: '2px solid orange' }}>
                        <code className="text-xs">border-left: 2px solid orange;</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">Декомпозиція властивостей:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Повна декомпозиція властивостей */
.element {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: red;
  
  border-right-width: 2px;
  border-right-style: dashed;
  border-right-color: green;
  
  border-bottom-width: 3px;
  border-bottom-style: dotted;
  border-bottom-color: blue;
  
  border-left-width: 4px;
  border-left-style: double;
  border-left-color: orange;
}

/* Або з використанням скорочень */
.element {
  border-width: 1px 2px 3px 4px;
  border-style: solid dashed dotted double;
  border-color: red green blue orange;
}`}
                    </pre>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold mb-1">Приклад використання:</h5>
                    <div className="flex justify-center mb-2">
                      <div className="p-4 w-40 text-center bg-gray-50" style={{ borderBottom: '2px solid #0066cc' }}>
                        Підкреслення заголовка
                      </div>
                    </div>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.heading {
  border-bottom: 2px solid #0066cc;
  padding-bottom: 5px;
}

.tab {
  border-bottom: none;
  border-top: 2px solid transparent;
}

.tab.active {
  border-top-color: #0066cc;
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Заокруглення кутів (border-radius)</h4>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white p-3 text-center rounded-sm">
                    <code className="text-xs">rounded-sm (2px)</code>
                  </div>
                  <div className="bg-white p-3 text-center rounded">
                    <code className="text-xs">rounded (4px)</code>
                  </div>
                  <div className="bg-white p-3 text-center rounded-md">
                    <code className="text-xs">rounded-md (6px)</code>
                  </div>
                  <div className="bg-white p-3 text-center rounded-lg">
                    <code className="text-xs">rounded-lg (8px)</code>
                  </div>
                  <div className="bg-white p-3 text-center rounded-xl">
                    <code className="text-xs">rounded-xl (12px)</code>
                  </div>
                  <div className="bg-white p-3 text-center rounded-full h-12 flex items-center justify-center">
                    <code className="text-xs">rounded-full (9999px)</code>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h5 className="font-semibold mb-1">Синтаксис border-radius:</h5>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.element {
  /* Однакове заокруглення з усіх сторін */
  border-radius: 8px;
  
  /* top-left top-right bottom-right bottom-left */
  border-radius: 10px 20px 30px 40px;
  
  /* Відносні значення */
  border-radius: 10%;
  
  /* Окремі кути */
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 40px;
}`}
                  </pre>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-1">Еліптичні заокруглення:</h5>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="bg-white h-24 flex items-center justify-center" style={{ borderRadius: '50% 20% / 10% 40%' }}>
                      <code className="text-xs">border-radius: 50% 20% / 10% 40%;</code>
                    </div>
                    <div className="bg-white h-24 flex items-center justify-center" style={{ borderRadius: '20px 60px 35px 75px / 40px 25px 70px 30px' }}>
                      <code className="text-xs">складні значення</code>
                    </div>
                  </div>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Еліптичні заокруглення */
.element {
  /* горизонтальні радіуси / вертикальні радіуси */
  border-radius: 50% 20% / 10% 40%;
  
  /* Детальне визначення */
  border-radius: 20px 60px 35px 75px / 40px 25px 70px 30px;
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Сучасні можливості для меж</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm">Градієнтні межі:</h5>
                    <div className="p-4 mb-2 bg-white" style={{ border: '3px solid transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, red, blue)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                      Градієнтна межа
                    </div>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.gradient-border {
  border: 3px solid transparent;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(to right, red, blue);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm">Зображення як межа:</h5>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.image-border {
  border: 10px solid;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: round;
  
  /* Скорочений запис */
  border-image: url('border.png') 30 round;
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm">outline vs border:</h5>
                    <p className="text-sm mb-2">outline - це лінія навколо елемента, яка не займає простору в потоці документа:</p>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div className="p-3 bg-white text-center" style={{ border: '2px solid blue' }}>
                        <code className="text-xs">border</code>
                      </div>
                      <div className="p-3 bg-white text-center" style={{ outline: '2px solid red' }}>
                        <code className="text-xs">outline</code>
                      </div>
                    </div>
                    <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`.element {
  /* Не впливає на розмір елемента */
  outline: 2px solid red;
  outline-offset: 2px; /* Відступ від краю елемента */
}

/* Подвійна рамка */
.double-outline {
  border: 2px solid blue;
  outline: 2px solid red;
  outline-offset: 3px;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Комбінування властивостей для створення UI елементів</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h5 className="font-semibold mb-2">Картка</h5>
                <div className="bg-blue-500 h-24 rounded-md mb-2"></div>
                <p className="text-sm text-gray-600">Приклад картки з заокругленими кутами та тінню.</p>
              </div>
              
              <div className="bg-white p-4 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-md">
                <span className="text-blue-500 font-semibold">Круглий елемент</span>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibold mb-2">Неоморфічний стиль</h5>
                  <p className="text-sm text-gray-600">Сучасний дизайн з градієнтами і тінями.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`/* Картка */
.card {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

/* Круглий елемент */
.circle {
  border: 2px solid #3b82f6;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Неоморфічний стиль */
.neomorphic {
  position: relative;
}

.neomorphic::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #a78bfa, #ec4899);
  border-radius: 0.5rem;
  filter: blur(15px);
  opacity: 0.75;
  z-index: -1;
}

.neomorphic-content {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  position: relative;
  z-index: 1;
}`}
              </pre>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Найкращі практики для меж та кольорів</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-1">Найкращі практики для border:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Використовуйте border-radius для покращення UX і візуального вигляду</li>
                  <li>Зберігайте консистентність заокруглень у всьому дизайні</li>
                  <li>Обережно з кольоровими межами - вони привертають увагу</li>
                  <li>Для створення тонких розділювачів надавайте перевагу слабкоконтрастним кольорам</li>
                  <li>Для інтерактивних елементів використовуйте border для зворотного зв'язку</li>
                  <li>Враховуйте доступність - звертайте увагу на контраст меж</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-1">Організація кольорів та меж:</h5>
                <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-auto">
{`:root {
  /* Система кольорів */
  --color-primary: #3b82f6;
  --color-primary-light: #93c5fd;
  --color-primary-dark: #1d4ed8;
  
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  
  /* Типові значення меж */
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
  
  --border-radius-sm: 0.125rem;
  --border-radius-md: 0.25rem;
  --border-radius-lg: 0.5rem;
  --border-radius-xl: 1rem;
  --border-radius-full: 9999px;
}

/* Застосування для елементів */
.button {
  border: var(--border-width-thin) solid var(--color-primary);
  border-radius: var(--border-radius-md);
}

.button:hover {
  border-color: var(--color-primary-dark);
}

.input {
  border: var(--border-width-thin) solid var(--color-neutral-300);
  border-radius: var(--border-radius-md);
}

.input:focus {
  border-color: var(--color-primary);
  outline: var(--border-width-thin) solid var(--color-primary-light);
  outline-offset: 1px;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSColorsBordersSlide;