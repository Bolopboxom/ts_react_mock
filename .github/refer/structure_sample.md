react-enterprise-app/	
│	
├── public/	
│   ├── favicon.ico	
│   ├── logo.png	
│   └── index.html	
│	
├── src/	
│   │	
│   ├── api/                         # Axios config, API client, interceptor	
│   │   ├── axios.ts	
│   │   ├── authApi.ts	
│   │   └── userApi.ts	
│   │	
│   ├── assets/                      # Static resources	
│   │   ├── images/	
│   │   ├── icons/	
│   │   ├── fonts/	
│   │   └── styles/	
│   │	
│   ├── components/                  # Reusable shared components	
│   │   ├── Button/	
│   │   ├── Modal/	
│   │   ├── Table/	
│   │   ├── Input/	
│   │   ├── Loading/	
│   │   └── ErrorBoundary/	
│   │	
│   ├── config/                      # System configurations	
│   │   ├── env.ts	
│   │   ├── routes.ts	
│   │   ├── permissions.ts	
│   │   └── constants.ts	
│   │	
│   ├── constants/                   # Static constants / enums	
│   │   ├── role.ts	
│   │   ├── status.ts	
│   │   └── message.ts	
│   │	
│   ├── contexts/                    # React Context API	
│   │   ├── AuthContext.tsx	
│   │   ├── ThemeContext.tsx	
│   │   └── LanguageContext.tsx	
│   │	
│   ├── features/                    # Feature-based architecture	
│   │   │	
│   │   ├── auth/	
│   │   │   ├── api/	
│   │   │   ├── components/	
│   │   │   ├── hooks/	
│   │   │   ├── pages/	
│   │   │   ├── services/	
│   │   │   ├── store/	
│   │   │   ├── types/	
│   │   │   └── utils/	
│   │   │	
│   │   ├── user/	
│   │   │   ├── api/	
│   │   │   ├── components/	
│   │   │   ├── hooks/	
│   │   │   ├── pages/	
│   │   │   ├── services/	
│   │   │   ├── store/	
│   │   │   ├── types/	
│   │   │   └── utils/	
│   │   │	
│   │   ├── booking/	
│   │   ├── payment/	
│   │   └── dashboard/	
│   │	
│   ├── hooks/                       # Shared custom hooks	
│   │   ├── useAuth.ts	
│   │   ├── useDebounce.ts	
│   │   ├── usePagination.ts	
│   │   └── useLocalStorage.ts	
│   │	
│   ├── layouts/                     # Application layouts	
│   │   ├── MainLayout.tsx	
│   │   ├── AdminLayout.tsx	
│   │   └── AuthLayout.tsx	
│   │	
│   ├── pages/                       # Top-level pages	
│   │   ├── Home/	
│   │   ├── Login/	
│   │   ├── Dashboard/	
│   │   ├── UserManagement/	
│   │   └── NotFound/	
│   │	
│   ├── routes/                      # React Router config	
│   │   ├── AppRoutes.tsx	
│   │   ├── PrivateRoute.tsx	
│   │   └── RouteGuard.tsx	
│   │	
│   ├── services/                    # Shared business services	
│   │   ├── authService.ts	
│   │   ├── tokenService.ts	
│   │   ├── storageService.ts	
│   │   └── notificationService.ts	
│   │	
│   ├── store/                       # Redux Toolkit global store	
│   │   ├── index.ts	
│   │   ├── rootReducer.ts	
│   │   ├── authSlice.ts	
│   │   └── userSlice.ts	
│   │	
│   ├── styles/                      # Global styles/themes	
│   │   ├── global.css	
│   │   ├── variables.css	
│   │   ├── theme.css	
│   │   └── tailwind.css	
│   │	
│   ├── types/                       # Global TypeScript types	
│   │   ├── api.ts	
│   │   ├── auth.ts	
│   │   ├── user.ts	
│   │   └── common.ts	
│   │	
│   ├── utils/                       # Utility/helper functions	
│   │   ├── date.ts	
│   │   ├── format.ts	
│   │   ├── validation.ts	
│   │   └── helpers.ts	
│   │	
│   ├── validations/                 # Validation schema	
│   │   ├── loginSchema.ts	
│   │   ├── registerSchema.ts	
│   │   └── userSchema.ts	
│   │	
│   ├── websocket/                   # WebSocket / realtime	
│   │   └── socket.ts	
│   │	
│   ├── i18n/                        # Multi-language	
│   │   ├── en.json	
│   │   └── vi.json	
│   │	
│   ├── tests/                       # Testing	
│   │   ├── unit/	
│   │   ├── integration/	
│   │   └── mocks/	
│   │	
│   ├── App.tsx                      # Root component	
│   ├── main.tsx                     # Entry point	
│   └── vite-env.d.ts	
│	
├── .env	
├── .gitignore	
├── package.json	
├── tsconfig.json	
├── vite.config.ts	
├── Dockerfile	
└── README.md	