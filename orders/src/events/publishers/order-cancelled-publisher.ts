import { Subjects, Publisher, OrderCancelledEvent } from '@yayci/common/build';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
