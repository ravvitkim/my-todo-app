export type User = {
  id:number,
  name: string,
  email: string,
  isActive?: boolean //?는 있어도 되고 없어도 됨.
}

export type GreetingProps = {
  user: User,
  age? : number
}