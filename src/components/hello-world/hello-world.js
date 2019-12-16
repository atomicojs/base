import { h, customElement } from "atomico";
import AtomicoBrand from "../atomico-brand/atomico-brand";
import AtomicoHeader from "../atomico-header/atomico-header";
import AtomicoButton from "../atomico-button/atomico-button";
import style from "./hello-world.css";

function HelloWorld({ message, length }) {
  return (
    <host shadowDom styleSheet={style}>
      <div>
        <h1 class="title">
          Welcome to <AtomicoBrand></AtomicoBrand>
        </h1>
        <p class="text">
          A 3.7kB micro library to create amazing WebComponents and Applications
        </p>
        <AtomicoHeader>
          <AtomicoBrand size="180" slot="brand"></AtomicoBrand>
          <div slot="links" class="links">
            <AtomicoButton
              small
              href="https://atomico.gitbook.io/doc/"
              target="_blank"
            >
              Documentation
            </AtomicoButton>
            <AtomicoButton
              small
              href="https://twitter.com/uppercod"
              target="_blank"
            >
              Support
            </AtomicoButton>
            <AtomicoButton
              small
              href="https://github.com/atomicojs/atomico"
              target="_blank"
            >
              Github
            </AtomicoButton>
          </div>
        </AtomicoHeader>
      </div>
    </host>
  );
}

HelloWorld.props = {
  message: {
    type: String,
    value: "Atomico!"
  },
  length: {
    type: Number,
    value: 100
  }
};

export default customElement("hello-world", HelloWorld);
