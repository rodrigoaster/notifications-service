import { Content } from './content';

export type ContentProps = {
  recipient_id: string;
  content: Content;
  category: string;
  read_at?: Date | null;
  created_at: Date;
};

export class Notifications {
  private props: ContentProps;

  constructor(props: ContentProps) {
    this.props = props;
  }

  public set recipientId(recipientId: string) {
    this.props.recipient_id = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipient_id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.read_at = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.read_at;
  }

  public set createdAt(createdAt: Date | null | undefined) {
    this.props.created_at = createdAt;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.created_at;
  }
}
