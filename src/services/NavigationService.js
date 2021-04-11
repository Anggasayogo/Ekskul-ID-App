import * as React from 'react';
import { StackActions } from '@react-navigation/native'

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace (name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function goBack(){
  navigationRef.current?.goBack()
}

export const pop = (n) => {
  navigationRef.current?.dispatch(StackActions.pop(n))
}

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop())
}

