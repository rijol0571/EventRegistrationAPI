import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event)
    private readonly eventModel: typeof Event,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return this.eventModel.create(createEventDto);
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.findAll();
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventModel.findByPk(id);
    if (!event) {
      throw new NotFoundException(`Event with id ${id} not found`);
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const event = await this.findOne(id);
    return event.update(updateEventDto);
  }

  async remove(id: number): Promise<void> {
    const event = await this.findOne(id);
    await event.destroy();
  }
}
