import React, { useState, DOMAttributes }  from 'react';
import { SpkContainer } from "@/components/container/container";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'spk-container': SpkContainerProps<SpkContainer>;
    }
  }
}