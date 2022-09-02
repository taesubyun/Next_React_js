import Link from 'next/link';
import classes from './button.module.css';

function button(props) {
  return (
    <div>
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    </div>
  );
}
export default button;
