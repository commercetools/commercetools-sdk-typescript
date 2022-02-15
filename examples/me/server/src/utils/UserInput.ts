interface Output {
  isValid: boolean
  issues: {
    email?: string
    firstName?: string
    lastName?: string
    invalidField?: string
  }
}

/**
 *
 * @description UserInput class
 *
 * @method emailValidator
 * @method nameValidator
 * @method passwordValidator
 * @method validateFields
 */
class UserInput {
  /**
   *
   * @description email validation method
   *
   * @param { email }
   *
   * @return { true | false }  boolean
   */
  static emailValidator = ({ email }) => {
    const emailFilter =
      /^([a-zA-Z0-9_\s.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/

    return emailFilter.test(email)
  }

  /**
   *
   * @description name validation method
   *
   * @param { name }
   *
   * @return { true | false }  boolean
   */
  static nameValidator = (name) => {
    const nameValidator = /^[a-zA-Z]+[a-zA-Z]+$/

    return nameValidator.test(name.toString())
  }

  /**
   *
   * @description password validation method
   *
   * @param { password }
   *
   * @return { true | false }  boolean
   */
  static passwordValidator = ({ password }) => {
    if (password && password.length > 7) {
      return true
    }
  }

  /**
   *
   * @description required input fields validator
   *
   * @param { requestBody }
   *
   * @return { Object } output
   */
  static validateFields = (requestBody, requiredFields) => {
    const output: Output = {
      isValid: true,
      issues: {},
    }

    for (let i = 0; i < requiredFields.length; i++) {
      if (requestBody[requiredFields[i]] === undefined) {
        if (output.isValid === true) {
          output.issues.invalidField = ''
        }
        output.issues.invalidField += `${requiredFields[i]
          .toString()
          .toLowerCase()} is empty. `
        output.isValid = false
      }
    }

    if (!output.isValid) {
      return output
    }

    // validate email
    if (requestBody.email && !this.emailValidator(requestBody)) {
      output.isValid = false
      output.issues.email = 'invalid email'
    }

    // validate firstName
    const { firstName } = requestBody
    if (firstName && !this.nameValidator(firstName)) {
      output.isValid = false
      output.issues.firstName = 'invalid firstname'
    }

    // validate lastName
    const { lastName } = requestBody
    if (lastName && !this.nameValidator(lastName)) {
      output.isValid = false
      output.issues.lastName = 'invalid lastname'
    }

    // validate password
    if (requestBody.password && !this.passwordValidator(requestBody)) {
      output.isValid = false
      output.issues.invalidField = 'password length is less then 8'
    }

    return output
  }
}

export default UserInput
