import styles from './Button.module.css'
import AnotherButton from './AnotherButton'
import Button03 from './Button03'

const Button = () => {
  return (
    <>
      <button className={styles.primary}>Click Me</button>
      <AnotherButton>Click me too!</AnotherButton>
      <AnotherButton>Click me three!</AnotherButton>
      <AnotherButton>Click me four!</AnotherButton>
      <AnotherButton>Click me five!</AnotherButton>
      <AnotherButton>Click me six!</AnotherButton>
      <Button03 $variant="outline">Click me seven!</Button03>
      <Button03 $variant="solid">Click me eight!</Button03>
      <Button03 $variant="transparent">Click me nine!</Button03>
    </>
  )
}

export default Button