import { useState } from 'react';
import { amountFormatter, currencyFormatter } from '../../lib/text_formater';
import { AmountLoader } from '../ui/loader';

const TransactionCard = ({
  txFlows,
  loading,
}: {
  txFlows: IFlow;
  loading: boolean;
}) => {
  const [state, setState] = useState('external');
  return (
    <div className="w-full h-full flex flex-col rounded-[16px] bg-white border-[1px] py-[13px] border-[#E3E3E3]">
      <h2 className="font-montserrat font-semibold tex-[24px] border-b pb-3 border-[#E3E3E3] px-[16px] tracking-[0.5px] py-2">
        Transactions
      </h2>
      <div className="px-[16px] flex items-center gap-x-2 py-[14px]">
        <span
          className={`mr-2 ${
            state === 'external'
              ? 'text-[#32C87D] border-b border-[#32C87D] '
              : 'text-[#A1A1A1] '
          } font-montserrat cursor-pointer text-[16px]`}
          onClick={() => setState('external')}
        >
          External
        </span>
        <span
          className={`mr-2 ${
            state === 'internal'
              ? 'text-[#32C87D] border-b border-[#32C87D]'
              : 'text-[#A1A1A1]'
          } font-montserrat cursor-pointer text-[16px]s`}
          onClick={() => setState('internal')}
        >
          Internal
        </span>
      </div>
      <div className="px-[16px] pt-2 border-b  border-[#E3E3E3] ">
        <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] uppercase font-[500]">
          withdrawals
        </p>
        {loading ? (
          <AmountLoader />
        ) : (
          <h2 className="font-montserrat font-semibold text-[16px] tracking-[0.5px] pb-2 ">
            {state === 'external'
              ? currencyFormatter(
                  amountFormatter(txFlows?.external?.[0].total_amount ?? 0)
                )
              : currencyFormatter(
                  amountFormatter(txFlows?.internal?.[0].total_amount ?? 0)
                )}
          </h2>
        )}
      </div>
      <div className="px-[16px] pt-3">
        <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] uppercase font-[500]">
          Bill payment
        </p>
        {loading ? (
          <AmountLoader />
        ) : (
          <h2 className="font-montserrat font-semibold text-[16px] tracking-[0.5px] ">
            {state === 'external'
              ? currencyFormatter(
                  amountFormatter(txFlows?.external?.[1].total_amount ?? 0)
                )
              : currencyFormatter(
                  amountFormatter(txFlows?.internal?.[1].total_amount ?? 0)
                )}
          </h2>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
