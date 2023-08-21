import {
  Subjects,
  Publisher,
  ExpirationComplete,
} from '@yayci/common/build';

export class ExpirationCompletePublisher extends Publisher<ExpirationComplete> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
