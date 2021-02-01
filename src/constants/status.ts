export const
  isOk = (status: number) => status === 200,
  isCreated = (status: number) => status === 201,
  isNoContent = (status: number) => status === 204,
  isBadRequest = (status: number) => status === 400,
  isUnauthorized = (status: number) => status === 401,
  isNotFound = (status: number) => status === 404;
