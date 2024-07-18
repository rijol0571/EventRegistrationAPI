import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from '../src/payments/payments.service';
import { PaymentsController } from '../src/payments/payments.controller';

describe('PaymentsController', () => {
  let paymentsController: PaymentsController;
  let paymentsService: PaymentsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [PaymentsService],
    }).compile();

    paymentsService = moduleRef.get<PaymentsService>(PaymentsService);
    paymentsController = moduleRef.get<PaymentsController>(PaymentsController);
  });

  it('should be defined', () => {
    expect(paymentsController).toBeDefined();
  });

  // vaqtm qosa qo'shimcha qilaman
});
