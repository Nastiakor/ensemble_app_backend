import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivitiesService {
  private activities = [
    {
      id: 1,
      title: 'Balade avec les ânes',
      description: 'Une promenade douce au contact des animaux.',
      category: 'Animaux',
      date: '2026-03-25T10:00:00.000Z',
      location: 'Saint-Martin',
      capacity: 8,
      organizerName: 'Association Les Sentiers Doux',
    },
    {
      id: 2,
      title: 'Atelier poterie douce',
      description: 'Un atelier calme pour créer et échanger.',
      category: 'Poterie',
      date: '2026-03-27T14:00:00.000Z',
      location: 'Lyon 3e',
      capacity: 6,
      organizerName: 'Atelier Terre Calme',
    },
  ];

  findAll() {
    return this.activities;
  }

  findOne(id: number) {
    const activity = this.activities.find((activity) => activity.id === id);

    if (!activity) {
      throw new NotFoundException(`Activity with id ${id} not found`);
    }

    return activity;
  }

  create(createActivityDto: CreateActivityDto) {
    const newActivity = {
      id: this.activities.length + 1,
      ...createActivityDto,
    };

    this.activities.push(newActivity);

    return newActivity;
  }
}