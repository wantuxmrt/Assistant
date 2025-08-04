import AuthPage from '@/pages/AuthPage/AuthPage'; // Прямой импорт
import { RouteConfig } from '@/core/types/routes';

export const routesConfig: RouteConfig[] = [
  {
    path: '/login',
    element: <AuthPage />,
    guestOnly: true,
  },
  // ... другие маршруты ...
];
export default routesConfig;