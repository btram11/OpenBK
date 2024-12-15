export class UserEntity {
  id?: string;
  name?: string;
  email: string;
  role?: string;
  createdAt: string;
  profileURL: string;

  constructor(data: Partial<UserEntity>) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.email = data.email || "";
    this.role = data.role || "";
    this.createdAt = data.createdAt
      ? new Date(data.createdAt).toLocaleString("de-DE") // Format thành string
      : "-";
    this.profileURL =
      data.profileURL || "https://www.w3schools.com/images/w3schools_green.jpg";
  }
}
