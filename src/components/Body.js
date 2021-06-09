import styles from  '../styles/stylesComponents/Body.module.css';
export function Body(){
    return (
        <div className={styles.container}>
          
  
  <h1>Bem-Vindo á minha página  </h1> 

  <img className={styles.img} src="https://avatars.githubusercontent.com/u/60237326?s=460&u=45e0ce3b0f4d29f6442d62544a1119cc878daf0f&v=4"/>
  <p>Esta página foi desenvolvida por mim , com linguagens HTML 5 ,CSS3 ,Javascript e React/NextJs  ,<b/>
no intuito de mostrar meus conhecimentos nas linguagens e de mostrar minha arte também , então seja muito bem-vindo.</p>
  <h2>Veja minha playlist no Spotify</h2>
  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1EpimDXSv3bUs6" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
  
  
  
  <h1  >Meus desenhos:</h1>
  
  
        </div>
    )
}