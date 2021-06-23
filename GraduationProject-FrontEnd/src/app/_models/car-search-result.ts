export class CarSearchResult {
  constructor(
    public price: number,
    public brand: string,
    public model: string,
    public img: string,
    public modelClassId: number,
    public modelId: number,
    public className: string
  ) {}
}
