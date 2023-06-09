import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipient_id: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  category: string;
}
