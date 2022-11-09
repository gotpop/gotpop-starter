import * as React from 'react'
import { useEffect, useRef } from 'react'
import { IButtonIcon } from 'types'
import styles from './ButtonIcon.module.css'

export default function ButtonIcon({
  content = 'Click',
  properties,
  icon: Icon,
  doClick,
  ...rest
}: IButtonIcon) {
  const first = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      first.current.style.setProperty(prop.local, prop.global)
    })
  }, [])

  return (
    <button
      onClick={doClick}
      type="submit"
      className={styles.button}
      ref={first}
      {...rest}>
      <span>{content}</span>
      <Icon />
    </button>
  )
}
