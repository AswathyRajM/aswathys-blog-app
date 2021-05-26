import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/penguin.png"
          alt="an image showing Penguin-Aswathy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Aswathy</h1>
      <p>I'm interested in JS stack - especially React and Node</p>
    </section>
  );
}
