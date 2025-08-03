├── .github/                          # Конфигурация CI/CD
│   └── workflows/
│       └── ci-cd.yml                 # Конфигурация GitHub Actions
├── .vscode/                          # Настройки редактора
│   └── settings.json                 # Конфигурация VSCode
├── configs/                          # Конфигурационные файлы
│   ├── babel.config.js               # Конфиг Babel
│   ├── jest.config.js                # Конфиг Jest
│   ├── storybook/                    # Конфиг Storybook
│   │   ├── main.js                   # Основная конфигурация
│   │   └── preview.js                # Предварительные настройки
│   └── webpack.config.js             # Конфиг Webpack
├── public/                           # Статические ресурсы
│   ├── assets/                       # Ассеты приложения
│   │   ├── fonts/                    # Шрифты
│   │   │   └── fonts.css             # Импорт шрифтов
│   │   ├── images/                   # Изображения
│   │   │   ├── icons/                # Иконки
│   │   │   │   └── app-icon.svg      # Иконка приложения
│   │   │   ├── illustrations/        # Иллюстрации
│   │   │   │   └── empty-state.svg   # Заглушка для пустых состояний
│   │   │   └── logo.svg              # Логотип
│   │   └── styles/                   # Глобальные стили
│   │       ├── global.css            # Глобальные CSS правила
│   │       ├── reset.css             # Сброс браузерных стилей
│   │       └── theme.css             # Тема оформления
│   ├── favicon.ico                   # Иконка сайта
│   ├── index.html                    # Основной HTML файл
│   ├── manifest.json                 # Конфиг PWA
│   ├── robots.txt                    # Правила для поисковых роботов
│   └── mockData/                     # Тестовые данные
│       ├── categories.json           # Категории заявок
│       ├── help.json                 # Данные для страницы помощи
│       ├── tickets.json              # Примеры заявок
│       └── users.json                # Тестовые пользователи
├── scripts/                          # Вспомогательные скрипты
│   ├── build.js                      # Скрипт сборки
│   ├── deploy.sh                     # Скрипт деплоя
│   └── setup.js                      # Скрипт настройки окружения
├── src/                              # Исходный код приложения
│   ├── app/                          # Инициализация приложения
│   │   ├── entry/                    # Точки входа
│   │   │   ├── App.tsx               # Корневой компонент приложения
│   │   │   └── index.tsx             # Рендеринг в DOM
│   │   ├── providers/                # Контекстные провайдеры
│   │   │   ├── AppProviders.tsx      # Основные провайдеры (Redux, Router и т.д.)
│   │   │   ├── AuthProvider.tsx      # Провайдер аутентификации
│   │   │   └── ThemeProvider.tsx     # Провайдер темы оформления
│   │   └── router/                   # Маршрутизация
│   │       └── rootReducer.ts        # Комбинированный корневой редьюсер
│   ├── core/                         # Ядро приложения
│   │   ├── constants/                # Константы
│   │   │   ├── api.constants.ts      # URL и параметры API
│   │   │   ├── app.constants.ts      # Глобальные константы приложения
│   │   │   └── systems.ts            # Константы систем (1С/МИС)
│   │   ├── hooks/                    # Кастомные хуки
│   │   │   ├── useApiQuery.ts        # Хук для API запросов
│   │   │   ├── useLocalStorage.ts    # Хук для работы с localStorage
│   │   │   └── useMediaQuery.ts      # Хук для медиа-запросов
│   │   ├── types/                    # Глобальные типы TypeScript
│   │   │   ├── app.d.ts              # Основные типы приложения
│   │   │   ├── auth.d.ts             # Типы для аутентификации
│   │   │   ├── index.ts              # Экспорт всех типов
│   │   │   └── tickets.d.ts          # Типы для заявок
│   │   └── utils/                    # Утилиты
│   │       ├── arrayUtils.ts         # Операции с массивами
│   │       ├── asyncUtils.ts         # Управление асинхронными операциями
│   │       ├── dataTransformation.ts # Преобразование данных
│   │       ├── dateUtils.ts          # Форматирование дат и времени
│   │       ├── domUtils.ts           # DOM-операции
│   │       ├── fieldUtils.ts         # Утилиты для работы с полями форм
│   │       ├── fileUtils.ts          # Работа с файлами
│   │       ├── formatters.ts         # Форматирование строк и чисел
│   │       ├── statsUtils.ts         # Статистические функции
│   │       ├── ticketUtils.ts        # Утилиты для работы с заявками
│   │       ├── userUtils.ts          # Утилиты для работы с пользователями
│   │       └── validation.ts         # Валидация форм
│   ├── features/                     # Функциональные модули
│   │   ├── auth/                     # Модуль аутентификации
│   │   │   ├── components/           # Компоненты модуля
│   │   │   │   └── AuthForm/         # Форма авторизации
│   │   │   │       ├── AuthForm.tsx  # Компонент формы
│   │   │   │       └── LoginForm.tsx # Компонент входа
│   │   │   ├── hooks/                # Хуки модуля
│   │   │   │   └── useAuth.ts        # Хук аутентификации
│   │   │   ├── api/                  # API модуля
│   │   │   │   └── authAPI.ts        # API-вызовы для аутентификации
│   │   │   └── store/                # Состояние модуля
│   │   │       └── authSlice.ts      # Слайс Redux
│   │   ├── tickets/                  # Модуль заявок
│   │   │   ├── components/           # Компоненты заявок
│   │   │   │   ├── TicketCard/       # Карточка заявки
│   │   │   │   │   ├── TicketCard.tsx
│   │   │   │   │   └── TicketCard.stories.tsx # Storybook
│   │   │   │   ├── TicketDetails/    # Детали заявки
│   │   │   │   │   ├── TicketDetails.tsx
│   │   │   │   │   └── TicketDetails.module.css
│   │   │   │   ├── TicketFilters/    # Фильтры заявок
│   │   │   │   │   ├── TicketFilters.tsx
│   │   │   │   │   └── TicketFilters.module.css
│   │   │   │   ├── TicketForm/       # Форма заявки
│   │   │   │   │   ├── TicketForm.tsx
│   │   │   │   │   └── TicketForm.stories.tsx
│   │   │   │   └── TicketsList/      # Список заявок
│   │   │   │       ├── TicketsList.tsx
│   │   │   │       └── TicketsList.stories.tsx
│   │   │   ├── hooks/                # Хуки модуля
│   │   │   │   ├── useTicketActions.ts # Хук действий с заявками
│   │   │   │   └── useTickets.ts     # Хук работы с заявками
│   │   │   ├── api/                  # API модуля
│   │   │   │   └── ticketsAPI.ts     # API-вызовы для заявок
│   │   │   └── store/                # Состояние модуля
│   │   │       └── ticketsSlice.ts   # Слайс Redux
│   │   ├── admin/                    # Модуль администрирования
│   │   │   ├── components/           # Компоненты админки
│   │   │   │   └── AdminPanel/       # Админ-панель
│   │   │   │       ├── AdminPanel.tsx
│   │   │   │       └── UserManagement.tsx # Управление пользователями
│   │   │   ├── hooks/                # Хуки модуля
│   │   │   │   └── useAdmin.ts       # Хук администрирования
│   │   │   ├── api/                  # API модуля
│   │   │   │   └── adminAPI.ts       # API-вызовы для админки
│   │   │   └── store/                # Состояние модуля
│   │   │       └── adminSlice.ts     # Слайс Redux
│   │   └── reporting/                # Модуль отчетности
│   │       ├── components/           # Компоненты отчетов
│   │       │   └── ReportBuilder/    # Конструктор отчетов
│   │       │       ├── ReportBuilder.tsx
│   │       │       └── ReportViewer.tsx # Просмотр отчетов
│   │       ├── hooks/                # Хуки модуля
│   │       │   └── useReporting.ts   # Хук работы с отчетами
│   │       ├── api/                  # API модуля
│   │       │   └── reportingAPI.ts   # API-вызовы для отчетов
│   │       └── store/                # Состояние модуля
│   │           └── reportingSlice.ts # Слайс Redux
│   ├── layouts/                      # Макеты приложения
│   │   ├── AppLayout.tsx             # Основной макет
│   │   └── PageLayout.tsx            # Макет страницы
│   ├── pages/                        # Страницы приложения
│   │   ├── AuthPage/                 # Страница авторизации
│   │   │   ├── AuthPage.tsx          # Компонент страницы
│   │   │   └── AuthPage.module.css   # Стили страницы
│   │   ├── TicketsPage/              # Страница заявок
│   │   │   ├── TicketsPage.tsx       # Компонент страницы
│   │   │   └── components/           # Дочерние компоненты
│   │   │       ├── TicketDetails/    # Детали заявки
│   │   │       │   ├── TicketDetails.tsx
│   │   │       │   └── TicketDetails.module.css
│   │   │       └── TicketFilters/    # Фильтры заявок
│   │   │           ├── TicketFilters.tsx
│   │   │           └── TicketFilters.module.css
│   │   ├── AdminPage/                # Админ-панель
│   │   │   ├── AdminPage.tsx
│   │   │   └── AdminPage.module.css
│   │   ├── ErrorPage/                # Страница ошибки
│   │   │   ├── ErrorPage.tsx
│   │   │   └── ErrorPage.module.css
│   │   ├── HelpPage/                 # Страница помощи
│   │   │   ├── HelpPage.tsx
│   │   │   └── HelpPage.module.css
│   │   ├── NewRequestPage/           # Создание заявки
│   │   │   ├── NewRequestPage.tsx
│   │   │   └── NewRequestPage.module.css
│   │   └── ProfilePage/              # Профиль пользователя
│   │       ├── ProfilePage.tsx
│   │       └── ProfilePage.module.css
│   ├── components/                   # UI компоненты
│   │   ├── ui/                       # Базовые компоненты
│   │   │   ├── Button/               # Кнопка
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Input/                # Поле ввода
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.module.css
│   │   │   ├── Modal/                # Модальное окно
│   │   │   │   ├── Modal.tsx
│   │   │   │   └── Modal.module.css
│   │   │   ├── Select/               # Выпадающий список
│   │   │   │   ├── Select.tsx
│   │   │   │   └── Select.module.css
│   │   │   ├── Tab/                  # Вкладка
│   │   │   │   ├── Tab.tsx
│   │   │   │   └── Tab.module.css
│   │   │   └── ThemeToggle/          # Переключатель темы
│   │   │       ├── ThemeToggle.tsx
│   │   │       └── ThemeToggle.module.css
│   │   └── data-display/             # Компоненты данных
│   │       ├── Avatar/               # Аватар пользователя
│   │       │   ├── Avatar.tsx
│   │       │   └── Avatar.module.css
│   │       ├── Badge/                # Бейдж/метка
│   │       │   ├── Badge.tsx
│   │       │   └── Badge.module.css
│   │       ├── Card/                 # Карточка
│   │       │   ├── Card.tsx
│   │       │   └── Card.module.css
│   │       ├── CommentItem/          # Комментарий
│   │       │   ├── CommentItem.tsx
│   │       │   └── CommentItem.module.css
│   │       ├── FileItem/             # Файл
│   │       │   ├── FileItem.tsx
│   │       │   └── FileItem.module.css
│   │       ├── FileUploader/         # Загрузчик файлов
│   │       │   ├── FileUploader.tsx
│   │       │   └── FileUploader.module.css
│   │       ├── Icon/                 # Иконка
│   │       │   ├── Icon.tsx
│   │       │   └── Icon.module.css
│   │       ├── Loader/               # Индикатор загрузки
│   │       │   ├── Loader.tsx
│   │       │   └── Loader.module.css
│   │       ├── MetaItem/             # Элемент метаданных
│   │       │   ├── MetaItem.tsx
│   │       │   └── MetaItem.module.css
│   │       ├── ReportFields/         # Поля отчета
│   │       │   ├── ReportFields.tsx
│   │       │   └── ReportFields.module.css
│   │       ├── StatCard/             # Статистическая карточка
│   │       │   ├── StatCard.tsx
│   │       │   └── StatCard.module.css
│   │       ├── Table/                # Таблица данных
│   │       │   ├── Table.tsx
│   │       │   └── Table.module.css
│   │       ├── TabsNavigation/       # Навигация по вкладкам
│   │       │   ├── TabsNavigation.tsx
│   │       │   └── TabsNavigation.module.css
│   │       └── TextEditor/           # Текстовый редактор
│   │           ├── TextEditor.tsx
│   │           └── TextEditor.module.css
│   ├── store/                        # Глобальное состояние
│   │   ├── hooks.ts                  # Кастомные Redux-хуки
│   │   ├── index.ts                  # Создание и конфигурация store
│   │   └── slices/                   # Слайсы состояния
│   │       ├── auditSlice.ts         # Аудит действий
│   │       ├── authSlice.ts          # Аутентификация
│   │       ├── filtersSlice.ts       # Фильтры UI
│   │       ├── integrationsSlice.ts  # Интеграции с внешними сервисами
│   │       ├── realtimeSlice.ts      # Режим реального времени
│   │       ├── reportFieldsSlice.ts  # Поля отчетов
│   │       ├── reportTemplatesSlice.ts # Шаблоны отчетов
│   │       ├── requestsSlice.ts      # Запросы к API
│   │       ├── settingsSlice.ts      # Настройки приложения
│   │       ├── uiSlice.ts            # UI состояние (модалки, уведомления)
│   │       └── usersSlice.ts         # Пользователи
│   ├── services/                     # Сервисы приложения
│   │   ├── analytics/                # Аналитика
│   │   │   └── tracker.ts            # Трекинг событий
│   │   ├── api/                      # API сервисы
│   │   │   ├── authAPI.ts            # API аутентификации
│   │   │   ├── config.ts             # Конфиг API
│   │   │   ├── gateway.ts            # API-шлюз
│   │   │   ├── httpClient.ts         # HTTP клиент
│   │   │   ├── index.ts              # Экспорт API
│   │   │   ├── request.ts            # Обертка запроса
│   │   │   ├── requestsAPI.ts        # API запросов
│   │   │   ├── type.ts               # Типы API
│   │   │   └── usersAPI.ts           # API пользователей
│   │   ├── error/                    # Обработка ошибок
│   │   │   └── handler.ts            # Централизованный обработчик
│   │   ├── network/                  # Сетевые утилиты
│   │   │   ├── resilience.ts         # Устойчивость сети
│   │   │   ├── streamAdapter.ts      # Адаптер потоковых данных
│   │   │   └── websocket.ts          # WebSocket клиент
│   │   └── offline/                  # Офлайн-режим
│   │       ├── cache.ts              # Кэширование данных
│   │       └── sync.ts               # Синхронизация данных
│   ├── routes/                       # Маршрутизация
│   │   ├── dynamicRoutes.ts          # Динамические маршруты
│   │   ├── GuestRoute.tsx            # Маршрут для гостей
│   │   ├── index.ts                  # Экспорт роутеров
│   │   ├── permissionUtils.ts        # Утилиты проверки прав
│   │   ├── PrivateRoute.tsx          # Приватный маршрут
│   │   ├── Router.tsx                # Основной роутер
│   │   ├── routes.d.ts               # Типы маршрутов
│   │   └── routesConfig.tsx          # Конфигурация маршрутов
│   ├── contexts/                     # Контексты React
│   │   ├── AppContext.tsx            # Основной контекст приложения
│   │   └── AuthContext.tsx           # Контекст аутентификации
│   └── utils/                        # Вспомогательные утилиты
│       └── test-utils.tsx            # Утилиты для тестирования
├── tests/                            # Тесты
│   ├── integration/                  # Интеграционные тесты
│   │   ├── auth/                     # Тесты аутентификации
│   │   │   └── auth.test.ts          # Тесты модуля auth
│   │   └── tickets/                  # Тесты заявок
│   │       └── tickets.test.ts       # Тесты модуля tickets
│   └── unit/                         # Модульные тесты
│       ├── components/               # Тесты компонентов
│       │   └── Button.test.tsx       # Тесты кнопки
│       ├── hooks/                    # Тесты хуков
│       │   └── useAuth.test.ts       # Тесты хука аутентификации
│       ├── services/                 # Тесты сервисов
│       │   ├── api.test.ts           # Тесты API
│       │   └── network.test.ts       # Тесты сетевых утилит
│       ├── store/                    # Тесты состояния
│       │   ├── authSlice.test.ts     # Тесты слайса аутентификации
│       │   └── ticketsSlice.test.ts  # Тесты слайса заявок
│       └── utils/                    # Тесты утилит
│           ├── arrayUtils.test.ts    # Тесты утилит массивов
│           ├── dateUtils.test.ts     # Тесты утилит дат
│           └── validation.test.ts    # Тесты валидации
├── .dockerignore                     # Игнорируемые Docker файлы
├── .env                              # Переменные окружения
├── .env.example                      # Шаблон переменных окружения
├── .eslintrc.json                    # Конфиг ESLint
├── .gitignore                        # Игнорируемые Git файлы
├── .prettierrc                       # Конфиг Prettier
├── CHANGELOG.md                      # История изменений
├── CONTRIBUTING.md                   # Инструкция для контрибьюторов
├── Dockerfile                        # Конфигурация Docker
├── docker-compose.yml                # Конфигурация Docker Compose
├── jest.config.ts                    # Конфиг Jest
├── package.json                      # Зависимости и скрипты
├── README.md                         # Документация проекта
├── tsconfig.json                     # Конфиг TypeScript
└── webpack.config.js                 # Конфиг Webpack