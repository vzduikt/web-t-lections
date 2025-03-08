import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Lecture1 from '@/lectures/Lecture1';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-blue-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
          <Link to="/lecture1" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block">
            <h1 className="text-2xl font-bold">Веб Технології</h1>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:text-blue-200">Головна</Link>
                </li>
                <li>
                  <Link to="/lecture1" className="hover:text-blue-200">Лекція 1: HTML</Link>
                </li>
                <li>
                  <Link to="/lecture2" className="hover:text-blue-200">Лекція 2</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center p-10">
                <h2 className="text-3xl font-bold mb-6">Курс Веб Технологій</h2>
                <p className="mb-4">Оберіть лекцію зі списку вище, щоб розпочати навчання.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">Лекція 1: HTML</h3>
                    <p className="text-gray-600 mb-4">Знайомство з HTML, структура документа, основні теги.</p>
                    <Link to="/lecture1" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block">
                      Перейти до лекції
                    </Link>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">Лекція 2: CSS</h3>
                    <p className="text-gray-600 mb-4">Стилізація веб-сторінок за допомогою CSS.</p>
                    <span className="bg-gray-300 text-gray-600 px-4 py-2 rounded inline-block">
                      Незабаром
                    </span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">Лекція 3: JavaScript</h3>
                    <p className="text-gray-600 mb-4">Основи JavaScript, взаємодія з DOM.</p>
                    <span className="bg-gray-300 text-gray-600 px-4 py-2 rounded inline-block">
                      Незабаром
                    </span>
                  </div>
                </div>
              </div>
            } />
            <Route path="/lecture1" element={<Lecture1 />} />
            <Route path="/lecture2" element={
              <div className="text-center p-10">
                <h2 className="text-3xl font-bold mb-6">Лекція 2</h2>
                <p>Ця лекція знаходиться в розробці.</p>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-blue-800 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Курс Веб Технологій</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;