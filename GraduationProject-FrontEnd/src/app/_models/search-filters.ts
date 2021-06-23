export class SearchFilters {
  constructor(
    public minprice?: number,
    public maxprice?: number,
    public brand?: number,
    public model?: number,
    public body?: number,
    public year?: number
  ) {}
}
