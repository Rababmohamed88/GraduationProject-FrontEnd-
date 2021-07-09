export class ServerResponse {
  constructor(
    public message?: string,
    public token?: string,
    public isSuccess?: boolean,
    public errors?: string[],
    public expireDate?: Date,
    public fullname?: string,
    public email?: string
  ) {}
}
