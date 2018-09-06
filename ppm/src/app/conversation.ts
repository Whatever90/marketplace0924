export class Conversation {
  constructor(
    public product_id: string = '',
    public buyer_id: string = '',
    public seller_id: string = '',
    public messages: string[] = [],
  ) {}
}
