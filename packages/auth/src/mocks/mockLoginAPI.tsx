export const mockLoginAPI = async (email: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "mock-jwt-token",
        user: {
          id: "1",
          name: "Usuario Demo",
          email: email,
          role: "user",
        },
      });
    }, 500);
  });
};
