# Корень проекта
.
├── .dockerignore                  # Игнорируемые Docker файлы
├── .env                           # Переменные окружения
├── .env.example                   # Шаблон переменных окружения
├── .eslintrc.json                 # Конфигурация ESLint
├── .gitignore                     # Игнорируемые Git файлы
├── .prettierrc                    # Конфигурация Prettier
├── CHANGELOG.md                   # История изменений
├── CONTRIBUTING.md                # Руководство для контрибьюторов
├── docker-compose.yml             # Конфигурация Docker Compose
├── Dockerfile                     # Docker-образ приложения
├── jest.config.ts                 # Конфигурация Jest
├── package.json                   # Зависимости и скрипты проекта
├── package-lock.json              # Точная версия зависимостей
├── README.md                      # Документация проекта
├── tsconfig.json                  # Конфигурация TypeScript
├── webpack.config.js              # Конфигурация Webpack

# Конфигурационные файлы
├── configs/
│   ├── babel.config.js            # Конфигурация Babel
│   ├── jest.config.js             # Конфигурация Jest (дублирующая)
│   ├── storybook/                 # Конфигурация Storybook
│   └── webpack.config.js          # Конфигурация Webpack (дублирующая)

# Статические ресурсы
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── fonts.css          # Кастомные шрифты
│   │   ├── images/
│   │   │   ├── icons/
│   │   │   │   └── app-icon.svg   # Иконка приложения
│   │   │   ├── illustrations/
│   │   │   │   └── empty-state.svg # Иллюстрации для пустых состояний
│   │   │   └── logo.svg           # Логотип приложения
│   │   └── styles/
│   │       ├── global.css         # Глобальные стили
│   │       ├── reset.css          # Сброс CSS стилей
│   │       └── theme.css          # Переменные тем оформления
│   ├── favicon.ico                # Иконка вкладки браузера
│   ├── index.html                 # Основной HTML файл
│   ├── manifest.json              # Конфигурация PWA
│   ├── mockData/                  # Тестовые данные
│   │   ├── categories.json        # Категории заявок
│   │   ├── help.json              # Данные для страницы помощи
│   │   ├── tickets.json           # Тестовые заявки
│   │   └── users.json             # Тестовые пользователи
│   └── robots.txt                 # Правила для поисковых роботов

# Исходный код
├── src/
│   ├── core/                      # Ядро приложения (независимые модули)
│   │   ├── constants/             # Константы приложения
│   │   │   ├── api.constants.ts   # API-константы (эндпоинты)
│   │   │   ├── app.constants.ts   # Общие константы приложения
│   │   │   └── systems.ts         # Системные константы
│   │   ├── hooks/                 # Кастомные хуки общего назначения
│   │   │   ├── useApiQuery.ts     # Хук для API-запросов
│   │   │   ├── useLocalStorage.ts # Хук для работы с localStorage
│   │   │   └── useMediaQuery.ts   # Хук для медиа-запросов
│   │   ├── types/                 # Глобальные типы данных
│   │   │   ├── api.d.ts           # Типы API-ответов
│   │   │   ├── app.d.ts           # Основные типы приложения
│   │   │   ├── auth.d.ts          # Типы аутентификации
│   │   │   ├── components.d.ts    # Типы компонентов
│   │   │   ├── icons.d.ts         # Типы иконок
│   │   │   ├── index.d.ts         # Экспорт всех типов
│   │   │   ├── layouts.d.ts       # Типы лейаутов
│   │   │   ├── routes.d.ts        # Типы маршрутизации
│   │   │   ├── services.d.ts      # Типы сервисов
│   │   │   ├── store.d.ts         # Типы хранилища
│   │   │   ├── styled.d.ts        # Типы для styled-components
│   │   │   ├── theme.d.ts         # Типы тем оформления
│   │   │   └── tickets.d.ts       # Типы заявок
│   │   └── utils/                 # Вспомогательные утилиты
│   │       ├── arrayUtils.ts      # Утилиты для работы с массивами
│   │       ├── asyncUtils.ts      # Утилиты для асинхронных операций
│   │       ├── dataTransformation.ts # Преобразование данных
│   │       ├── dateUtils.ts       # Работа с датами
│   │       ├── domUtils.ts        # Утилиты для работы с DOM
│   │       ├── fieldUtils.ts      # Утилиты для полей форм
│   │       ├── fileUtils.ts       # Работа с файлами
│   │       ├── formatters.ts      # Форматирование данных
│   │       ├── statsUtils.ts      # Статистические расчеты
│   │       ├── ticketUtils.ts     # Утилиты для работы с заявками
│   │       ├── userUtils.ts       # Утилиты для работы с пользователями
│   │       └── validation.ts      # Валидация данных
│   │
│   ├── services/                  # Инфраструктурные сервисы
│   │   ├── analytics/             # Сервисы аналитики
│   │   │   └── tracker.ts         # Трекинг событий
│   │   ├── api/                   # API клиенты
│   │   │   ├── adminAPI.ts        # API для административных задач
│   │   │   ├── authAPI.ts         # API для аутентификации
│   │   │   ├── config.ts          # Конфигурация API
│   │   │   ├── gateway.ts         # API Gateway
│   │   │   ├── httpClient.ts      # HTTP клиент
│   │   │   ├── index.ts           # Экспорт API
│   │   │   ├── reportingAPI.ts    # API для отчетов
│   │   │   ├── request.ts         # Обертка запросов
│   │   │   ├── ticketsAPI.ts      # API для работы с заявками
│   │   │   ├── type.ts            # Типы API
│   │   │   └── usersAPI.ts        # API для работы с пользователями
│   │   ├── error/                 # Обработка ошибок
│   │   │   └── handler.ts         # Централизованный обработчик ошибок
│   │   ├── network/               # Сетевые утилиты
│   │   │   ├── resilience.ts      # Устойчивость соединений
│   │   │   ├── streamAdapter.ts   # Адаптер потоков данных
│   │   │   └── websocket.ts       # WebSocket менеджер
│   │   └── offline/               # Офлайн-режим
│   │       ├── cache.ts           # Кэширование данных
│   │       └── sync.ts            # Фоновая синхронизация
│   │
│   ├── contexts/                  # React контексты
│   │   ├── AppContext.tsx         # Глобальный контекст приложения
│   │   └── AuthContext.tsx        # Контекст аутентификации
│   │
│   ├── components/                # UI компоненты
│   │   ├── data-display/          # Компоненты отображения данных
│   │   │   ├── Avatar/            # Аватар пользователя
│   │   │   │   ├── Avatar.module.css
│   │   │   │   └── Avatar.tsx
│   │   │   ├── Badge/             # Бейджи статусов
│   │   │   │   ├── Badge.module.css
│   │   │   │   └── Badge.tsx
│   │   │   ├── Card/              # Карточки
│   │   │   │   ├── Card.module.css
│   │   │   │   └── Card.tsx
│   │   │   ├── CommentItem/       # Элемент комментария
│   │   │   │   ├── CommentItem.module.css
│   │   │   │   └── CommentItem.tsx
│   │   │   ├── FileItem/          # Элемент файла
│   │   │   │   ├── FileItem.module.css
│   │   │   │   └── FileItem.tsx
│   │   │   ├── FileUploader/      # Загрузчик файлов
│   │   │   │   ├── FileUploader.module.css
│   │   │   │   └── FileUploader.tsx
│   │   │   ├── Icon/              # Иконки
│   │   │   │   ├── Icon.module.css
│   │   │   │   └── Icon.tsx
│   │   │   ├── Loader/            # Индикатор загрузки
│   │   │   │   ├── Loader.module.css
│   │   │   │   └── Loader.tsx
│   │   │   ├── MetaItem/          # Мета-информация
│   │   │   │   ├── MetaItem.module.css
│   │   │   │   └── MetaItem.tsx
│   │   │   ├── ReportFields/      # Поля отчетов
│   │   │   │   ├── ReportFields.module.css
│   │   │   │   └── ReportFields.tsx
│   │   │   ├── StatCard/          # Статистические карточки
│   │   │   │   ├── StatCard.module.css
│   │   │   │   └── StatCard.tsx
│   │   │   ├── Table/             # Таблицы данных
│   │   │   │   ├── Table.module.css
│   │   │   │   └── Table.tsx
│   │   │   ├── TabsNavigation/    # Навигация табами
│   │   │   │   ├── TabsNavigation.module.css
│   │   │   │   └── TabsNavigation.tsx
│   │   │   └── TextEditor/        # WYSIWYG редактор
│   │   │       ├── TextEditor.module.css
│   │   │       └── TextEditor.tsx
│   │   └── ui/                    # Базовые UI компоненты
│   │       ├── Button/            # Кнопки
│   │       │   ├── Button.module.css
│   │       │   └── Button.tsx
│   │       ├── Checkbox/          # Чекбоксы
│   │       │   ├── Checkbox.module.css
│   │       │   └── Checkbox.tsx
│   │       ├── Input/             # Поля ввода
│   │       │   ├── Input.module.css
│   │       │   └── Input.tsx
│   │       ├── Modal/             # Модальные окна
│   │       │   ├── Modal.module.css
│   │       │   └── Modal.tsx
│   │       ├── Select/            # Выпадающие списки
│   │       │   ├── Select.module.css
│   │       │   └── Select.tsx
│   │       ├── Tab/               # Элементы табов
│   │       │   ├── Tab.module.css
│   │       │   └── Tab.tsx
│   │       └── ThemeToggle/       # Переключатель тем
│   │           ├── ThemeToggle.module.css
│   │           └── ThemeToggle.tsx
│   │
│   ├── features/                  # Функциональные модули
│   │   ├── admin/                 # Администрирование
│   │   │   ├── components/        # Компоненты
│   │   │   │   ├── AdminPanel/    # Панель администратора
│   │   │   │   │   └── AdminPanel.tsx
│   │   │   │   └── UserManagement.tsx # Управление пользователями
│   │   │   ├── hooks/             # Хуки
│   │   │   │   └── useAdmin.ts    # Хук административных функций
│   │   │   └── store/             # Хранилище
│   │   │       └── adminStore.ts  # Стор администратора
│   │   ├── auth/                  # Аутентификация
│   │   │   ├── components/        # Компоненты
│   │   │   │   └── AuthForm/      # Формы аутентификации
│   │   │   │       ├── AuthForm.tsx # Базовая форма
│   │   │   │       └── LoginForm.tsx # Форма входа
│   │   │   ├── hooks/             # Хуки
│   │   │   │   └── useAuth.ts     # Хук аутентификации
│   │   │   └── store/             # Хранилище
│   │   │       └── authStore.ts   # Стор аутентификации
│   │   ├── reporting/             # Отчетность
│   │   │   ├── components/        # Компоненты
│   │   │   │   └── ReportBuilder/ # Конструктор отчетов
│   │   │   │       ├── ReportBuilder.tsx # Построитель отчетов
│   │   │   │       └── ReportViewer.tsx # Просмотр отчетов
│   │   │   ├── hooks/             # Хуки
│   │   │   │   └── useReporting.ts # Хук отчетности
│   │   │   └── store/             # Хранилище
│   │   │       └── reportingStore.ts # Стор отчетности
│   │   └── tickets/               # Заявки
│   │       ├── components/        # Компоненты
│   │       │   ├── TicketCard/    # Карточка заявки
│   │       │   │   ├── TicketCard.stories.tsx # Storybook
│   │       │   │   └── TicketCard.tsx
│   │       │   ├── TicketDetails/ # Детали заявки
│   │       │   │   ├── TicketDetails.module.css
│   │       │   │   └── TicketDetails.tsx
│   │       │   ├── TicketFilters/ # Фильтры заявок
│   │       │   │   ├── TicketFilters.module.css
│   │       │   │   └── TicketFilters.tsx
│   │       │   ├── TicketForm/    # Форма заявки
│   │       │   │   ├── TicketForm.stories.tsx
│   │       │   │   └── TicketForm.tsx
│   │       │   └── TicketsList/   # Список заявок
│   │       │       ├── TicketsList.stories.tsx
│   │       │       └── TicketsList.tsx
│   │       ├── hooks/             # Хуки
│   │       │   ├── useTicketActions.ts # Действия с заявками
│   │       │   └── useTickets.ts  # Работа с заявками
│   │       └── store/             # Хранилище
│   │           └── ticketsStore.ts # Стор заявок
│   │
│   ├── layouts/                   # Макеты страниц
│   │   ├── AppLayout.tsx          # Основной макет приложения
│   │   └── PageLayout.tsx         # Общий макет страниц
│   │
│   ├── pages/                     # Страницы приложения
│   │   ├── AdminPage/             # Страница администратора
│   │   │   ├── AdminPage.module.css
│   │   │   └── AdminPage.tsx
│   │   ├── AuthPage/              # Страница аутентификации
│   │   │   ├── AuthPage.module.css
│   │   │   └── AuthPage.tsx
│   │   ├── ErrorPage/             # Страница ошибок
│   │   │   ├── ErrorPage.module.css
│   │   │   └── ErrorPage.tsx
│   │   ├── HelpPage/              # Страница помощи
│   │   │   ├── HelpPage.module.css
│   │   │   └── HelpPage.tsx
│   │   ├── NewRequestPage/        # Создание заявки
│   │   │   ├── NewRequestPage.module.css
│   │   │   └── NewRequestPage.tsx
│   │   ├── ProfilePage/           # Профиль пользователя
│   │   │   ├── ProfilePage.module.css
│   │   │   └── ProfilePage.tsx
│   │   └── TicketsPage/           # Страница заявок
│   │       └── TicketsPage.tsx
│   │
│   ├── routes/                    # Маршрутизация
│   │   ├── dynamicRoutes.ts       # Динамические маршруты
│   │   ├── GuestRoute.tsx         # Роут для гостей
│   │   ├── index.ts               # Экспорт роутов
│   │   ├── permissionUtils.ts     # Утилиты проверки прав
│   │   ├── PrivateRoute.tsx       # Защищенный роут
│   │   ├── Router.tsx             # Основной роутер
│   │   ├── routesConfig.tsx       # Конфигурация маршрутов
│   │   └── routes.d.ts            # Типы маршрутов
│   │
│   ├── app/                       # Инициализация приложения
│   │   ├── entry/                 # Точка входа
│   │   │   ├── App.tsx            # Корневой компонент
│   │   │   └── index.tsx          # Рендер приложения
│   │   ├── providers/             # Провайдеры контекста
│   │   │   ├── AppProviders.tsx   # Все провайдеры
│   │   │   ├── AuthProvider.tsx   # Провайдер аутентификации
│   │   │   └── ThemeProvider.tsx  # Провайдер темы
│   │   └── router/                # Маршрутизация
│   │       └── rootReducer.ts     # Корневой редюсер
│   │
│   └── utils/                     # Вспомогательные утилиты
│       └── test-utils.tsx         # Утилиты для тестирования
│
# Тесты
├── tests/
│   ├── integration/               # Интеграционные тесты
│   │   ├── auth/                  # Тесты аутентификации
│   │   │   └── auth.test.ts       # Тесты авторизации
│   │   └── tickets/               # Тесты заявок
│   │       └── tickets.test.ts    # Тесты работы с заявками
│   └── unit/                      # Юнит-тесты
│       ├── components/            # Тесты компонентов
│       │   └── Button.test.tsx    # Тест кнопки
│       ├── features/              # Тесты функционала
│       │   ├── auth/              # Тесты аутентификации
│       │   │   └── authStore.test.ts # Тест стора авторизации
│       │   └── tickets/           # Тесты заявок
│       │       └── ticketsStore.test.ts # Тест стора заявок
│       ├── hooks/                 # Тесты хуков
│       │   └── useAuth.test.ts    # Тест хука авторизации
│       ├── services/              # Тесты сервисов
│       │   ├── api.test.ts        # Тест API
│       │   └── network.test.ts    # Тест сетевых утилит
│       └── utils/                 # Тесты утилит
│           ├── arrayUtils.test.ts # Тест утилит массивов
│           ├── dateUtils.test.ts  # Тест утилит дат
│           └── validation.test.ts # Тест валидации
│
# Скрипты
└── scripts/
    ├── build.js                   # Скрипт сборки
    ├── deploy.sh                  # Скрипт деплоя
    └── setup.js                   # Скрипт настройки среды


Feature-Sliced Design:

Каждая функциональность в своей директории
Горизонтальные слои: store → hooks → components
Вертикальные срезы: auth, tickets, reporting, admin

Четкое разделение слоёв:

Ядро (core) - общие типы, утилиты, константы
Сервисы (services) - инфраструктурный слой (API, сеть, ошибки)
Фичи (features) - бизнес-логика с модульными сторами
UI компоненты - презентационный слой
Страницы (pages) - точки входа

Минимизация циклических зависимостей:

Зависимости идут строго сверху вниз: core → services → features → pages
Невозможность импорта из верхних слоёв в нижние

Масштабируемость:

Новые фичи добавляются изолированно
Изменения в одной фиче не затрагивают другие
Четкие контракты между слоями

Соблюдение Clean Architecture:

Независимость бизнес-логики от фреймворков
Легкая замена инфраструктурного слоя
Тестируемость каждого слоя изолированно

Улучшенная поддерживаемость:

Локализация изменений
Четкие границы ответственности
Упрощенная навигация по кодовой базе

configs
configs\babel.config.js
configs\jest.config.js
configs\storybook
configs\webpack.config.js
public
public\assets
public\assets\fonts
public\assets\fonts\fonts.css
public\assets\images
public\assets\images\icons
public\assets\images\icons\app-icon.svg
public\assets\images\illustrations
public\assets\images\illustrations\empty-state.svg
public\assets\images\logo.svg
public\assets\styles
public\assets\styles\global.css
public\assets\styles\reset.css
public\assets\styles\theme.css
public\favicon.ico
public\index.html
public\manifest.json
public\mockData
public\mockData\categories.json
public\mockData\help.json
public\mockData\tickets.json
public\mockData\users.json
public\robots.txt
src
src\core
src\core\constants
src\core\constants\api.constants.ts
src\core\constants\app.constants.ts
src\core\constants\systems.ts
src\core\hooks
src\core\hooks\useApiQuery.ts
src\core\hooks\useLocalStorage.ts
src\core\hooks\useMediaQuery.ts
src\core\types
src\core\types\api.d.ts
src\core\types\app.d.ts
src\core\types\auth.d.ts
src\core\types\components.d.ts
src\core\types\icons.d.ts
src\core\types\index.d.ts
src\core\types\layouts.d.ts
src\core\types\routes.d.ts
src\core\types\services.d.ts
src\core\types\store.d.ts
src\core\types\styled.d.ts
src\core\types\theme.d.ts
src\core\types\tickets.d.ts
src\core\utils
src\core\utils\arrayUtils.ts
src\core\utils\asyncUtils.ts
src\core\utils\dataTransformation.ts
src\core\utils\dateUtils.ts
src\core\utils\domUtils.ts
src\core\utils\fieldUtils.ts
src\core\utils\fileUtils.ts
src\core\utils\formatters.ts
src\core\utils\statsUtils.ts
src\core\utils\ticketUtils.ts
src\core\utils\userUtils.ts
src\core\utils\validation.ts
src\services
src\services\api
src\services\api\config.ts
src\services\api\httpClient.ts
src\services\api\index.ts
src\services\api\request.ts
src\services\api\type.ts
src\services\api\authAPI.ts
src\services\api\ticketsAPI.ts
src\services\api\usersAPI.ts
src\services\api\reportingAPI.ts
src\services\api\adminAPI.ts
src\services\api\gateway.ts
src\services\error
src\services\error\handler.ts
src\services\network
src\services\network\resilience.ts
src\services\network\streamAdapter.ts
src\services\network\websocket.ts
src\services\offline
src\services\offline\cache.ts
src\services\offline\sync.ts
src\services\analytics
src\services\analytics\tracker.ts
src\contexts
src\contexts\AppContext.tsx
src\contexts\AuthContext.tsx
src\components
src\components\ui
src\components\ui\Button
src\components\ui\Button\Button.module.css
src\components\ui\Button\Button.tsx
src\components\ui\Checkbox
src\components\ui\Checkbox\Checkbox.module.css
src\components\ui\Checkbox\Checkbox.tsx
src\components\ui\Input
src\components\ui\Input\Input.module.css
src\components\ui\Input\Input.tsx
src\components\ui\Modal
src\components\ui\Modal\Modal.module.css
src\components\ui\Modal\Modal.tsx
src\components\ui\Select
src\components\ui\Select\Select.module.css
src\components\ui\Select\Select.tsx
src\components\ui\Tab
src\components\ui\Tab\Tab.module.css
src\components\ui\Tab\Tab.tsx
src\components\ui\ThemeToggle
src\components\ui\ThemeToggle\ThemeToggle.module.css
src\components\ui\ThemeToggle\ThemeToggle.tsx
src\components\data-display
src\components\data-display\Avatar
src\components\data-display\Avatar\Avatar.module.css
src\components\data-display\Avatar\Avatar.tsx
src\components\data-display\Badge
src\components\data-display\Badge\Badge.module.css
src\components\data-display\Badge\Badge.tsx
src\components\data-display\Card
src\components\data-display\Card\Card.module.css
src\components\data-display\Card\Card.tsx
src\components\data-display\CommentItem
src\components\data-display\CommentItem\CommentItem.module.css
src\components\data-display\CommentItem\CommentItem.tsx
src\components\data-display\FileItem
src\components\data-display\FileItem\FileItem.module.css
src\components\data-display\FileItem\FileItem.tsx
src\components\data-display\FileUploader
src\components\data-display\FileUploader\FileUploader.module.css
src\components\data-display\FileUploader\FileUploader.tsx
src\components\data-display\Icon
src\components\data-display\Icon\Icon.module.css
src\components\data-display\Icon\Icon.tsx
src\components\data-display\Loader
src\components\data-display\Loader\Loader.module.css
src\components\data-display\Loader\Loader.tsx
src\components\data-display\MetaItem
src\components\data-display\MetaItem\MetaItem.module.css
src\components\data-display\MetaItem\MetaItem.tsx
src\components\data-display\ReportFields
src\components\data-display\ReportFields\ReportFields.module.css
src\components\data-display\ReportFields\ReportFields.tsx
src\components\data-display\StatCard
src\components\data-display\StatCard\StatCard.module.css
src\components\data-display\StatCard\StatCard.tsx
src\components\data-display\Table
src\components\data-display\Table\Table.module.css
src\components\data-display\Table\Table.tsx
src\components\data-display\TabsNavigation
src\components\data-display\TabsNavigation\TabsNavigation.module.css
src\components\data-display\TabsNavigation\TabsNavigation.tsx
src\components\data-display\TextEditor
src\components\data-display\TextEditor\TextEditor.module.css
src\components\data-display\TextEditor\TextEditor.tsx
src\features
src\features\auth
src\features\auth\store
src\features\auth\store\authStore.ts
src\features\auth\hooks
src\features\auth\hooks\useAuth.ts
src\features\auth\components
src\features\auth\components\AuthForm
src\features\auth\components\AuthForm\AuthForm.tsx
src\features\auth\components\AuthForm\LoginForm.tsx
src\features\tickets
src\features\tickets\store
src\features\tickets\store\ticketsStore.ts
src\features\tickets\hooks
src\features\tickets\hooks\useTicketActions.ts
src\features\tickets\hooks\useTickets.ts
src\features\tickets\components
src\features\tickets\components\TicketCard
src\features\tickets\components\TicketCard\TicketCard.tsx
src\features\tickets\components\TicketCard\TicketCard.stories.tsx
src\features\tickets\components\TicketDetails
src\features\tickets\components\TicketDetails\TicketDetails.tsx
src\features\tickets\components\TicketDetails\TicketDetails.module.css
src\features\tickets\components\TicketFilters
src\features\tickets\components\TicketFilters\TicketFilters.tsx
src\features\tickets\components\TicketFilters\TicketFilters.module.css
src\features\tickets\components\TicketForm
src\features\tickets\components\TicketForm\TicketForm.tsx
src\features\tickets\components\TicketForm\TicketForm.stories.tsx
src\features\tickets\components\TicketsList
src\features\tickets\components\TicketsList\TicketsList.tsx
src\features\tickets\components\TicketsList\TicketsList.stories.tsx
src\features\reporting
src\features\reporting\store
src\features\reporting\store\reportingStore.ts
src\features\reporting\hooks
src\features\reporting\hooks\useReporting.ts
src\features\reporting\components
src\features\reporting\components\ReportBuilder
src\features\reporting\components\ReportBuilder\ReportBuilder.tsx
src\features\reporting\components\ReportBuilder\ReportViewer.tsx
src\features\admin
src\features\admin\store
src\features\admin\store\adminStore.ts
src\features\admin\hooks
src\features\admin\hooks\useAdmin.ts
src\features\admin\components
src\features\admin\components\AdminPage
src\features\admin\components\AdminPage\AdminPage.tsx
src\features\admin\components\AdminPage\UserManagement.tsx
src\features\admin\components\AdminPanel
src\features\admin\components\AdminPanel\AdminDeepPanel.tsx
src\layouts
src\layouts\AppLayout.tsx
src\layouts\PageLayout.tsx
src\pages
src\pages\AdminDeepPanel
src\pages\AdminDeepPanel\AdminDeepPanel.tsx
src\pages\AdminDeepPanel\AdminDeepPanel.module.css
src\pages\AdminPage
src\pages\AdminPage\AdminPage.tsx
src\pages\AdminPage\AdminPage.module.css
src\pages\AuthPage
src\pages\AuthPage\AuthPage.tsx
src\pages\AuthPage\AuthPage.module.css
src\pages\ErrorPage
src\pages\ErrorPage\ErrorPage.tsx
src\pages\ErrorPage\ErrorPage.module.css
src\pages\HelpPage
src\pages\HelpPage\HelpPage.tsx
src\pages\HelpPage\HelpPage.module.css
src\pages\NewRequestPage
src\pages\NewRequestPage\NewRequestPage.tsx
src\pages\NewRequestPage\NewRequestPage.module.css
src\pages\ProfilePage
src\pages\ProfilePage\ProfilePage.tsx
src\pages\ProfilePage\ProfilePage.module.css
src\pages\TicketsPage
src\pages\TicketsPage\TicketsPage.tsx
src\pages\TicketsPage\components
src\routes
src\routes\routes.d.ts
src\routes\dynamicRoutes.ts
src\routes\permissionUtils.ts
src\routes\GuestRoute.tsx
src\routes\PrivateRoute.tsx
src\routes\index.ts
src\routes\Router.tsx
src\routes\routesConfig.tsx
src\app
src\app\providers
src\app\providers\ThemeProvider.tsx
src\app\providers\AuthProvider.tsx
src\app\providers\AppProviders.tsx
src\app\router
src\app\router\rootReducer.ts
src\app\entry
src\app\entry\App.tsx
src\app\entry\index.tsx
src\utils
src\utils\test-utils.tsx
tests
tests\unit
tests\unit\utils
tests\unit\utils\arrayUtils.test.ts
tests\unit\utils\dateUtils.test.ts
tests\unit\utils\validation.test.ts
tests\unit\services
tests\unit\services\api.test.ts
tests\unit\services\network.test.ts
tests\unit\features
tests\unit\features\auth
tests\unit\features\auth\authStore.test.ts
tests\unit\features\tickets
tests\unit\features\tickets\ticketsStore.test.ts
tests\unit\components
tests\unit\components\Button.test.tsx
tests\integration
tests\integration\auth
tests\integration\auth\auth.test.ts
tests\integration\tickets
tests\integration\tickets\tickets.test.ts
scripts
scripts\build.js
scripts\deploy.sh
scripts\setup.js
.dockerignore
.env
.env.example
.eslintrc.json
.gitignore
.prettierrc
CHANGELOG.md
CONTRIBUTING.md
docker-compose.yml
Dockerfile
jest.config.ts
package.json
package-lock.json
README.md
tsconfig.json
webpack.config.js
.github
.vscode
node_modules