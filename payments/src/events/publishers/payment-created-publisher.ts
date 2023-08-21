import { Subjects, Publisher, PaymentCreated } from '@yayci/common/build';

export class PaymentCreatedPublisher extends Publisher<PaymentCreated> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
