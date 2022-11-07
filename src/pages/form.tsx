import LayoutStandard from '@components/LayoutStandard'
import { IForm } from 'types'
import type { NextPage } from 'next'
import { useReducer, useState } from 'react'
import FormResults from '@components/table'
import InputText from '@components/InputText'
import ButtonIcon from '@components/ButtonIcon'
import { BsCheckLg } from 'react-icons/bs'

const cssSuccess = [{ local: '--iconColour', global: 'var(--success)' }]

const formInitialState = {
  firstName: {
    value: '',
    valid: true,
    error: 'First name must be between 4 & 8 characters'
  },
  lastName: {
    value: '',
    valid: true,
    error: 'Last name must be between 4 & 8 characters'
  },
  email: {
    value: '',
    valid: true,
    error: 'Add a valid email!'
  },
  password: {
    value: '',
    valid: true,
    error: 'Add a valid password!'
  }
}

const types = {
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  EMAIL: 'email',
  PASSWORD: 'password'
}

const reducer = (state: any, action) => {
  const key = Object.keys(action)[0]

  switch (key) {
    case types.FIRSTNAME:
      return {
        ...state,
        firstName: {
          value: action.firstName.value,
          valid: action.firstName.valid,
          error: action.firstName.error
        }
      }
    case types.LASTNAME:
      return {
        ...state,
        lastName: {
          value: action.lastName.value,
          valid: action.lastName.valid,
          error: action.lastName.error
        }
      }
    case types.EMAIL:
      return {
        ...state,
        email: {
          value: action.email.value,
          valid: action.email.valid,
          error: action.email.error
        }
      }
    case types.PASSWORD:
      return {
        ...state,
        password: {
          value: action.password.value,
          valid: action.password.valid,
          error: action.password.error
        }
      }
    default:
      return {
        ...state
      }
  }
}

const Form: NextPage = () => {
  const [showResults, setShowResults] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues

  const reducerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const valid = e.target.checkValidity()
    const error = formInitialState[name].error
    // console.log('error :', error);
    // console.log('name, value :', name, value);
    // console.log('valid :', valid);

    dispatchFormValue({
      [name]: {
        value,
        valid,
        error
      }
    })
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowResults(true)
  }

  return (
    <LayoutStandard>
      <div>
        <h2>useReducer used for form data</h2>
        <form
          onSubmit={onFormSubmit}
          onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
            setFormIsValid(e.currentTarget.checkValidity())
          }>
          <InputText
            name={'firstName'}
            value={firstName.value}
            error={firstName.error}
            valid={firstName.valid}
            required
            type="text"
            pattern="[A-Za-z]{4,8}"
            doChange={reducerInputChange}>
            First Name
          </InputText>
          <InputText
            type="text"
            name={'lastName'}
            value={lastName.value}
            error={lastName.error}
            valid={lastName.valid}
            pattern="[A-Za-z]{4,8}"
            doChange={reducerInputChange}>
            Last Name
          </InputText>
          <InputText
            type="email"
            name={'email'}
            value={email.value}
            error={email.error}
            valid={email.valid}
            doChange={reducerInputChange}>
            Email
          </InputText>
          <InputText
            type="password"
            name={'password'}
            value={password.value}
            error={password.error}
            valid={password.valid}
            pattern="[A-Za-z]{4,8}"
            doChange={reducerInputChange}>
            Password
          </InputText>
          <ButtonIcon
            content={'Submit'}
            properties={cssSuccess}
            icon={BsCheckLg}
          />
        </form>
        {showResults && <FormResults form={inputValues} />}
      </div>
    </LayoutStandard>
  )
}

export default Form
