import Transaction from './transactions';

const transactions = [
  {
    type: 'credit',
    text: 'Bank Transfer',
    details: '770 TF ALESSA AB.',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'debit',
    text: 'Bank Withdrawal',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'credit',
    text: 'Bank Transfer',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'debit',
    text: 'Bank Transfer',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'debit',
    text: 'Bank Withdrawal',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'credit',
    text: 'Bank Transfer',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
  {
    type: 'debit',
    text: 'Bank Transfer',
    details: '770 TF ALESSA AB...',
    amount: '₦9,430.15',
    date: '14:37 | 10 AUG, 2023',
  },
];

const TransactionHistory = () => {
  return (
    <div className="w-full rounded-[8px] py-4 bg-white  border-[#EAEAEA] border shadow-sm">
      <h1 className="text-[#3F3F3F] px-4 text-[18px]  font-montserrat mb-3">
        Transaction History
      </h1>
      <div className="flex flex-col h-[380px] overflow-y-auto">
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            type={transaction.type}
            text={transaction.text}
            amount={transaction.amount}
            details={transaction.details}
            date={transaction.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
