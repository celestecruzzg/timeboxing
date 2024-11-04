import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: {
    task_title: string;
    task_description: string;
    task_priority: boolean;
    task_created_on: Date;
    deadline: Date;
    user_id: number;
    activities?: { create: any };
  }): Promise<Task> {
    return this.taskService.createTask(data);
  }
}