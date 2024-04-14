// order-service/src/order/order.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderData: any): Promise<any> {
    try {
      const order = await this.orderService.createOrder(orderData);
      return { message: 'Order created successfully', order };
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  @Get()
  getData() {
    return this.orderService.getData();
  }
}
