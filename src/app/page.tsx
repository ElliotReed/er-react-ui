import styles from './page.module.scss'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'

export default function IndexPage() {
  return (
    <main className={styles.main}>
      <h1>ER React UI Components</h1>

      <h2>Buttons</h2>

      <Button>Button</Button>

      <h2>Button Group</h2>

      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </main>
  )
}
