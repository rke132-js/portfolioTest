import style from './Nav.module.css';


export function Nav() {
  return (
    <div className={style.nav}>
      <a href="#" alt="">Main</a>
      <a href="#" alt="">Skills</a>
      <a href="#" alt="">Projects</a>
      <a href="#" alt="">Contact</a>
    </div>
  );
}
