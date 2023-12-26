import { remultExpress } from 'remult/remult-express';
import { createPostgresDataProvider } from 'remult/postgres';
import { Task } from '../shared/Task';
import { TasksController } from '../shared/TasksController';

const connectionString =
  process.env['DATABASE_URL'] || 'postgresql://localhost/';

export const api = remultExpress({
  entities: [Task],
  controllers: [TasksController],
  getUser: (req) => req.session!['user'],
  dataProvider: createPostgresDataProvider({
    connectionString,
  }),
});
