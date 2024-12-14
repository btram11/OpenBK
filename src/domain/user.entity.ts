export class UserEntity {
  id?: string;
  name?: string;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  biography: string;
  createdAt: string;
  profileURL: string;

  constructor(data: Partial<UserEntity>) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.firstName = data.firstName || "";
    this.lastName = data.lastName || "";
    this.email = data.email || "";
    this.phoneNumber = data.phoneNumber || "";
    this.biography = data.biography || "";
    this.createdAt = data.createdAt
      ? new Date(data.createdAt).toLocaleString("de-DE") // Format thành string
      : "-";
    this.profileURL =
      data.profileURL || "https://www.w3schools.com/images/w3schools_green.jpg";
    console.log(this.email);
  }
}
