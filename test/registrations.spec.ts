import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationsService } from '../src/registrations/registrations.service';
import { RegistrationsController } from '../src/registrations/registrations.controller';

describe('RegistrationsController', () => {
  let registrationsController: RegistrationsController;
  let registrationsService: RegistrationsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationsController],
      providers: [RegistrationsService],
    }).compile();

    registrationsService = moduleRef.get<RegistrationsService>(RegistrationsService);
    registrationsController = moduleRef.get<RegistrationsController>(RegistrationsController);
  });

  it('should be defined', () => {
    expect(registrationsController).toBeDefined();
  });

  // vaqtm qosa qo'shimcha qilaman
});
