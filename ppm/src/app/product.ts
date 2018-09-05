export class Product {
  constructor(
    public title: string = '',
    public price: number = null,
    public description: string = '',
    public location: number = null,
    public images: string[] = [],
    public seller: string = '',
    public category: string = ''
  ) {}
}
