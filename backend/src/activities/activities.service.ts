// src/activities/activities.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Activities } from '@prisma/client';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async createActivity(data: { activity_title: string; activity_description: string; start_hour: Date; end_hour: Date; task_id: number }): Promise<Activities> {
    return this.prisma.activities.create({ data });
  }

  async findAllActivities(): Promise<Activities[]> {
    return this.prisma.activities.findMany();
  }
}
