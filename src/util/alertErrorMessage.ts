interface CustomError {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
}

export const alertErrorMessage = (error: unknown) => {
  console.error(error);
  const { response } = error as CustomError;
  alert(response.data.message);
};
