export class Registration {
  constructor(
    public fullName?:string,
    public email?: string,
    public password?: string,
    public confirmPassword?: string,
    public nationalId?: string,
    public personalLicenceNo?: string,
    public phoneNo?: string
  ) {}
}
