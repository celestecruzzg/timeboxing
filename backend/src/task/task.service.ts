// src/tasks/task.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: {
    task_title: string;
    task_description: string;
    task_priority: boolean;
    task_created_on: Date;
    deadline: Date;
    user_id: number;
    activities?: { create: any };
  }): Promise<Task> {
    return this.prisma.task.create({
      data: {
        task_title: data.task_title,
        task_description: data.task_description,
        task_priority: data.task_priority,
        task_created_on: data.task_created_on,
        deadline: data.deadline,
        user_id: data.user_id,
        activities: data.activities,
      },
    });
  };
  }
