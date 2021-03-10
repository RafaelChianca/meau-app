import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function resetTo(name, params) {
  navigationRef.current?.dispatch(
    StackActions.replace(name, params),
  );
}

export function novoResetTo(name, params) {
  navigationRef.current?.dispatch(
      CommonActions.reset({
          index: 1,
          routes: [
            { name: name },
            {
              params: params,
            },
          ],
        })
  );
}

export function push(name, params) {
  navigationRef.current?.dispatch(
    StackActions.push(name, params),
  );
}

export function pop(number) {
  navigationRef.current?.dispatch(
    StackActions.pop(number),
  );
}

export function popToTop() {
  navigationRef.current?.dispatch(
    StackActions.popToTop(),
  );
}
