import { ApiRoot } from './../generated/index'

export function createApiBuilderFromCtpClient(
  ctpClient: any,
  baseUri?: string
): ApiRoot {
  return new ApiRoot({
    executeRequest: ctpClient.execute,
  })
}
