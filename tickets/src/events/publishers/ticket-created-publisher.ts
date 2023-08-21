import { Publisher, Subjects, TicketCreatedEvent } from '@yayci/common/build';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
