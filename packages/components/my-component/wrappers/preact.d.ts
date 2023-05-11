import { MyComponent as _MyComponent } from "@atomico/my-component";
import { Component } from "@atomico/react/preact";
export const MyComponent: Component<typeof _MyComponent>;
declare namespace JSX {
   interface IntrinsicElements{
      "atomico-my-component": Component<typeof _MyComponent>;
   }
}