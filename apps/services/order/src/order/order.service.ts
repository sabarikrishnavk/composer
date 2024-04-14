// order-service/src/order/order.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  async createOrder(orderData: any): Promise<any> {
    // Implement order creation logic
    return Promise.resolve({ orderId: '12345', ...orderData });
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
