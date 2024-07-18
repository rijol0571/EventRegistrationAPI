import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from '../src/events/events.service';
import { EventsController } from '../src/events/events.controller';

describe('EventsController', () => {
  let eventsController: EventsController;
  let eventsService: EventsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [EventsService],
    }).compile();

    eventsService = moduleRef.get<EventsService>(EventsService);
    eventsController = moduleRef.get<EventsController>(EventsController);
  });

  it('should be defined', () => {
    expect(eventsController).toBeDefined();
  });

  // vaqtm qosa qo'shimcha qilaman
});
