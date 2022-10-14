export const alertErrorMessage = (error: unknown, message: string) => {
  console.error(error);
  alert(message);
};
