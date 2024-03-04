export interface FinancialProduct {
  financial_product: string;
  ticker: string;
  provider: string;
  brief_description: string;
  expected_return: string;
  composition: string;
}

export interface ResponseList {
  response_list: FinancialProduct[];
}
