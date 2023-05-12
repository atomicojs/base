import { MyComponent as _MyComponent } from "@atomico/my-component/chunks/1a08-1a80-1a3d";
import { Component } from "@atomico/react/preact";
export const MyComponent: Component<typeof _MyComponent>;
declare namespace JSX {
   interface IntrinsicElements{
      "atomico-my-component": Component<typeof _MyComponent>;
   }
}