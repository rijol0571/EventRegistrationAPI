import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/event.dto';
import { UpdateEventDto } from '../events/dto/event.dto' 
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/constants';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @Roles(UserRole.EVENT_MANAGER)
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Put(':id')
  @Roles(UserRole.EVENT_MANAGER)
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  @Roles(UserRole.EVENT_MANAGER)
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
