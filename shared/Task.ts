import { Allow, Entity, Fields, Validators } from 'remult';

@Entity('tasks', {
  allowApiCrud: Allow.authenticated,
})
export class Task {
  @Fields.cuid()
  id = '';

  @Fields.string<Task>({
    validate: (task) => {
      if (!task.title) throw 'Should not be empty';
      if (task.title.length < 3) throw 'Too Short';
    },
  })
  title = '';

  @Fields.boolean()
  completed = false;

  @Fields.createdAt()
  createdAt?: Date;
}
