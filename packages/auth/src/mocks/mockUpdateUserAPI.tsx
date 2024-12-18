import { User } from "@ajk-ui/user";

export const mockUpdateUserAPI = async (data: Partial<User>): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        name: data.name || "Usuario Demo",
        email: data.email || "usuario@demo.com",
        role: "user",
        ...data,
      });
    }, 500);
  });
};
