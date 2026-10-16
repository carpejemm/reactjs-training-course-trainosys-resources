import styles from './Card.module.css'

const Card = ({ title, content, img }) => {
  return (
    <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        {img && <img className={styles.img} src={img} alt={title} />}
    </div>
  )
}

export default Card