import { Controller, Post, Body, Get } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Activities } from '@prisma/client';

@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Post()
  async create(@Body() activityData: { 
    activity_title: string; 
    activity_description: string; 
    activity_date: Date;
    start_hour: Date; 
    end_hour: Date; 
    task_id: number 
  }): Promise<Activities> {
    return this.activitiesService.createActivity(activityData);
  }

  @Get()
  async findAll(): Promise<Activities[]> {
    return this.activitiesService.findAllActivities();
  }
}