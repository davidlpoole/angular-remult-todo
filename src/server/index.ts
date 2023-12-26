import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';

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

// console.log(__dirname);
// /Users/user/dev-academy/angular-remult-todo/src/server
app.use(express.static(path.join(__dirname, '../angular-remult-todo/browser')));
app.get('/*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../angular-remult-todo/browser', 'index.html')
  );
});

app.listen(process.env['PORT'] || 3002, () => console.log('Server started'));
