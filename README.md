# 🚀 Stellar Burger

**Stellar Burger** — сервис для заказа бургеров с возможностью создания кастомных заказов и управления аккаунтом.

[![Макет в Figma](https://img.shields.io/badge/Figma-Макет-FF6B6B?logo=figma)](https://www.figma.com/file/vIywAvqfkOIRWGOkfOnReY/React-Fullstack_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=0-1&mode=design)

![Stellar Burger Preview](https://github.com/user-attachments/assets/636a1fd6-c9c3-457b-9889-c9a9478a1555)

---

## 🛠️ Функционал

- **Создание заказа**:
  - Добавление, удаление и комбинирование ингредиентов для кастомного бургера.
- **Управление аккаунтом**:
  - Регистрация, авторизация, выход из учетной записи.
  - Изменение данных в личном кабинете.
  - Просмотр истории заказов и деталей заказа.
- **Восстановление доступа**:
  - Возможность восстановления пароля.
- **Лента заказов**:
  - Для неавторизованных пользователей доступна лента общих заказов.

---

## 🛠️ Технологии

- **Frontend**:
  - ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
  - ![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white)
  - ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)
- **Тестирование**:
  - ![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white)
  - ![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
- **Сборка**:
  - ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=black)

---

## 🧪 Тесты

- **End-to-End (e2e) тесты**: Написаны с использованием Cypress.
- **Юнит-тесты**: Написаны с использованием Jest.

---

## ⚙️ Настройка проекта

1. Склонируйте репозиторий:
   git clone https://github.com/MariaOstanina/stellar-burgers.git
2. Установите зависимости:
   npm install
3. Добавьте переменную окружения BURGER_API_URL (пример в файле .env.example).
4. Запустите проект:
  npm start

## 📝 Важно

- Для корректной работы запросов к серверу необходимо добавить переменную `BURGER_API_URL` в окружение. Пример находится в файле `.env.example`.
- В проекте использовался **Webpack**, настроен линтинг.


