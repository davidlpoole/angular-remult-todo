import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import session from 'cookie-session';
import { auth } from './auth';
import { api } from './api';

const app = express();
app.use(
  session({
    secret: process.env['SESSION_SECRET'] || 'super secret key',
  })
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src-attr': ["'unsafe-inline'"],
      },
    },
  })
);
app.use(compression());
app.use(auth);
app.use(api);

// Use Swagger/OpenAPI
const openApiDocument = api.openApiDoc({ title: 'angular-remult-todo' });
app.get('/api/openApi.json', (req, res) => res.json(openApiDocument));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// For production
app.use(express.static(path.join(__dirname, '../angular-remult-todo/browser')));
app.get('/*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../angular-remult-todo/browser', 'index.html')
  );
});

app.listen(process.env['PORT'] || 3002, () => console.log('Server started'));
