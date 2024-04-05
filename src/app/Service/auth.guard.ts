import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (token) {
    return true; // User has token, allow navigation
  } else {
    // User does not have token, redirect to login page
    window.location.href = '/login';
    return false;
  }
};
