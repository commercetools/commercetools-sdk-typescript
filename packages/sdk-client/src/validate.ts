import METHODS from './allowed-methods'
import { ClientRequest } from 'types/sdk'

/**
 * @throws {Error}
 */
export default function validate(
  funcName: string,
  request: ClientRequest,
  options: { allowedMethods: Array<string> } = { allowedMethods: METHODS }
): void {
  if (!request)
    throw new Error(
      `The "${funcName}" function requires a "Request" object as an argument. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )

  if (typeof request.uri !== 'string')
    throw new Error(
      `The "${funcName}" Request object requires a valid uri. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )

  if (!options.allowedMethods.includes(request.method))
    throw new Error(
      `The "${funcName}" Request object requires a valid method. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )
}
