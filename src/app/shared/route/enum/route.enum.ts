export enum AppNode {
  AUTHENTICATED = 'dashboard',
  REDIRECT_TO_AUTHENTICATED = AppNode.AUTHENTICATED,
  SIGN_IN = 'signin',
  FALL_BACK = '**'
}
export enum AppRoutes {
  AUTHENTICATED = `/${AppNode.AUTHENTICATED}`,
}
