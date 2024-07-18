import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/payment.dto';
import { UpdatePaymentDto } from '../payments/dto/payment.dto'
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/constants';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles(UserRole.USER)
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Put(':id')
  @Roles(UserRole.USER)
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  @Roles(UserRole.USER)
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }
}
