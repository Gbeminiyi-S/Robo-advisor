export interface FinancialProduct {
  financial_product: string;
  ticker: string;
  provider: string;
  brief_description: string;
  expected_return: string;
  composition: string;
  expected_amount: string;
  investmentAmount: string;
  currency: string;
}


export interface ResponseList {
[x: string]: any;
  response_list: FinancialProduct[];
}
