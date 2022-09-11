const CURRENCYFORMETTER = Intl.NumberFormat(undefined,{
    currency:"USD",style :"currency"
})
export const  formatCurrency = (number:number)=>{
  return  CURRENCYFORMETTER.format(number)
}