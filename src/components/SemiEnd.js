import style from '../styles/stylesComponents/semiEnd.module.css';

export function SemiEnd(){
    return(
        <div className={style.container}>
          
          <h1 className={style.h1}>Sheilong</h1>
           
           <img src="img/img43.png"className={`${style.img} ${style.zoom}`}></img>
            <br/>
            <a className={style.View} href="https://www.instagram.com/p/Bgv8hTfhSBh/" >View project </a>
           <br/><br/><br/>
          
        </div>
    )
}