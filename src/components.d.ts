/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ComponentName {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLComponentNameElement extends Components.ComponentName, HTMLStencilElement {}
  var HTMLComponentNameElement: {
    prototype: HTMLComponentNameElement;
    new (): HTMLComponentNameElement;
  };
  interface HTMLElementTagNameMap {
    'component-name': HTMLComponentNameElement;
  }
}

declare namespace LocalJSX {
  interface ComponentName {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'component-name': ComponentName;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'component-name': LocalJSX.ComponentName & JSXBase.HTMLAttributes<HTMLComponentNameElement>;
    }
  }
}

