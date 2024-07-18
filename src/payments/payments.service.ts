import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentModel.create(createPaymentDto);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.findAll();
  }

  async findOne(id: number): Promise<Payment> {
    const payment = await this.paymentModel.findByPk(id);
    if (!payment) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
    const payment = await this.findOne(id);
    return payment.update(updatePaymentDto);
  }

  async remove(id: number): Promise<void> {
    const payment = await this.findOne(id);
    await payment.destroy();
  }
}
