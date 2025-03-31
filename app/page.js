import styles from '../app/styles/title.module.css';

export default function Home() {
  return (
    <div>
      <div>
        {/* Título dentro de um retângulo com classes definidas no CSS Module */}
        <div className={styles.titleContainer}>
          <h1 className={styles.titleText}>Pastelaria do seu Zé</h1>
          <img src="/images/logo-2.PNG" className={styles.logo} />
        </div>

        <div className={styles.menuContainer}>
          <div className={styles.productContainer}>
            <img src="/images/CarnecomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/PizzacomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/CarnecomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/PizzacomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/CarnecomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/PizzacomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/CarnecomPreco.PNG" className={styles.LogoPastel} />
          </div>
          <div className={styles.productContainer}>
            <img src="/images/PizzacomPreco.PNG" className={styles.LogoPastel} />
          </div>
        </div>
      </div>
    </div>
  );
}
