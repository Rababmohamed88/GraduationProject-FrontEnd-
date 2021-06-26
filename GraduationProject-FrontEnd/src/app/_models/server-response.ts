export class ServerResponse {
  constructor(
    public message?: string,
    public token?: string,
    public isSuccess?: boolean,
    public errors?: string[],
    public expireDate?: Date
  ) {}
}
