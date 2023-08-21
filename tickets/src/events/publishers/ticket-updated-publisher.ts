import { Publisher, Subjects, TicketUpdatedEvent } from '@yayci/common/build';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
