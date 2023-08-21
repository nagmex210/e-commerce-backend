import { Publisher, OrderCreatedEvent, Subjects } from '@yayci/common/build';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
