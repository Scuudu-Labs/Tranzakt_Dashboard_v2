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

interface IStats {
  totalUsers: number;
  role: string;
  totalCompletedKYC: number;
  totalPendingKYC: number;
  percentageCompletedKYC: number;
  percentagePendingKYC: number;
  totalCompletedKYB: number;
  totalPendingKYB: number;
  percentageCompletedKYB: number;
  percentagePendingKYB: number;
}

interface IGraphData {
  total_amount: number;
  number_of_transactions: number;
  legend: string;
  previous_total_amount: number;
  previous_number_of_transactions: number;
}

interface IFormatData {
  label: string;
  amount: number;
  valueLabel: string;
}

interface ITxFlows {
  total_in_and_out_flows: {
    in_flow: {
      total_amount: number;
      previous_total_amount: number;
      percentage_change: number;
      percentage_change_direction: string;
    };
    out_flow: {
      total_amount: number;
      previous_total_amount: number;
      percentage_change: number;
      percentage_change_direction: string;
    };
  };
  internal_and_external_flows: {
    internal: {
      total_amount: number;
      kind: string;
    }[];
    external: {
      total_amount: number;
      kind: string;
    }[];
  };
}

interface IFlow {
  internal: {
    total_amount: number;
    kind: string;
  }[];
  external: {
    total_amount: number;
    kind: string;
  }[];
}
