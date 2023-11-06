interface IBalance {
  balance: number;
  previous_balance: number;
  balance_difference: number;
  balance_percentage_change: number;
  balance_percentage_change_direction: string;
  number_of_transactions: number;
}

interface IBalanceOverView {
  users: IBalance;
  customers: IBalance;
  businesses: IBalance;
}
