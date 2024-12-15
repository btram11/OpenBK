import { UserEntity } from "@/domain/user.entity";

export const roleString = ((role: UserEntity["role"]) => {
  switch (role) {
    case "COLLAB":
      return "Collaborator";
    case "USER":
      return "User";
    case "ADMIN":
      return "Admin";
    default:
      return "Undefined Role";
  }
});
