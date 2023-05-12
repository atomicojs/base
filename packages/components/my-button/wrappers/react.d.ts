import { MyButton as _MyButton } from "@atomico/my-button/";
import { Component } from "@atomico/react";
export const MyButton: Component<typeof _MyButton>;
declare namespace JSX {
   interface IntrinsicElements{
      "atomico-my-button": Component<typeof _MyButton>;
   }
}