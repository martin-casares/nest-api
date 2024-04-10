import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controllers';

@Module({
  controllers: [TaskController],
})
export class TasksModule {}
