import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import * as Sentry from "@sentry/react";
import { Location, Action, RouteObjectArrayAlias, RouteMatchAlias } from '@sentry/react/types/types';

Sentry.init({
  dsn: "https://9a22104c7b12422183777e623ef6435e@o4507891618480128.ingest.us.sentry.io/4507891655901184",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation: function (): Location {
        throw new Error('Function not implemented.');
      },
      useNavigationType: function (): Action {
        throw new Error('Function not implemented.');
      },
      createRoutesFromChildren: function (children: JSX.Element[]) {
        throw new Error('Function not implemented.');
      },
      matchRoutes: function (routes: RouteObjectArrayAlias, location: Location, basename?: string): RouteMatchAlias[] | null {
        throw new Error('Function not implemented.');
      }
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
