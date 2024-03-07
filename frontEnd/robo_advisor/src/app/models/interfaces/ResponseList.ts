export interface FinancialProduct {
  financial_product: string;
  ticker: string;
  provider: string;
  brief_description: string;
  expectedReturn: string;
  composition: string;
  estimatedReturnValue: number;
  principal: number;
  currency: string;
}


export interface ResponseList {
[x: string]: any;
  response_list: FinancialProduct[];
}
