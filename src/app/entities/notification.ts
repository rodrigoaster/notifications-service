import { Content } from './content';

import { randomUUID } from 'crypto';

import { Replace } from 'src/utils/replace';

export type NotificationProps = {
  recipient_id: string;
  content: Content;
  category: string;
  read_at?: Date | null;
  created_at: Date;
};

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { created_at?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
    };
  }

  public get id() {
    return this._id;
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
