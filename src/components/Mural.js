import style from '../styles/stylesComponents/Mural.module.css';
import styled from 'styled-components';
export function Mural(){
  return(
    <div >
      <section  className={style.container}>
        
        <img  className={`${style.imgLeft} ${style.zoom}`} src="img/img2.png"></img>
        <span className={style.line}></span>
        <h1 className={style.h1Left}>Meu amor</h1>
        <p className={style.legend}>Text para textar a legenda leia sem atenção so para estilo</p>
       
        <a className={style.ViewLeft} href="https://www.instagram.com/p/B5nUThBnDXw/" >View project </a>

        
        <img  className={`${style.imgRight} ${style.zoom}`}src="img/img3.png"></img>
        <span className={style.lineRight}></span>
        <h1 className={style.h1Right}>Meu amor</h1>
        <p className={style.legendRight}>Text para textar a legenda leia sem atenção so para estilo</p>
       
        <a className={style.ViewRight} href="https://www.instagram.com/p/B5nUThBnDXw/" >View project </a>

        <img  className={`${style.imgLeft2} ${style.zoom}`} src="img/img6.png"></img>
        <span className={style.lineLeft2}></span>
        <h1 className={style.h1Left2}>Meu amor</h1>
        <p className={style.legendLeft2}>Text para textar a legenda leia sem atenção so para estilo</p>
       
        <a className={style.ViewLeft2} href="https://www.instagram.com/p/BlL0PB3HgdH/" >View project </a>

        
      </section>
    </div>
  )
}