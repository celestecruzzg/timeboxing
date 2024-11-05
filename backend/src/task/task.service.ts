import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Task> {
    const { task_title, task_description, deadline, activities } = data;

    const task = await this.prisma.task.create({
      data: {
        task_title,
        task_description,
        deadline: new Date(deadline),
        activities: {
          create: activities.map(activity => ({
            activity_title: activity.title,
            activity_description: activity.description,
            start_hour: new Date(`1970-01-01T${activity.startHour}`),
            end_hour: new Date(`1970-01-01T${activity.endHour}`),
            is_done: false,
          })),
        },
      },
    });

    return task;
  }
}
