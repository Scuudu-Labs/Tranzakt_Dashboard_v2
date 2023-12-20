import { AmountLoader } from './loader';

const StatusTag = ({
  text,
  id,
  isLoading,
}: {
  text: string;
  id?: string;
  isLoading?: boolean;
}) => {
  const style =
    id === 'ACTIVE'
      ? 'text-[#32C87D] bg-[#EBF9F2]'
      : text === 'pending'
      ? 'text-[#F5A122] bg-[#FFF0D2]'
      : 'text-[#FF2636] bg-[#FFE8E8]';
  return (
    <>
      {isLoading ? (
        <AmountLoader />
      ) : (
        <button
          className={`lowercase px-[12px] py-[4px] rounded-[12px] text-[12px] ${style}`}
        >
          {text}
        </button>
      )}
    </>
  );
};
export default StatusTag;

export const KYCStatusTag = ({
  text,
  id,
  loading,
}: {
  text: string;
  id?: boolean;
  loading?: boolean;
}) => {
  const style = id
    ? 'text-[#32C87D] bg-[#EBF9F2]'
    : 'text-[#F5A122] bg-[#FFF0D2]';
  return (
    <>
      {loading ? (
        <AmountLoader />
      ) : (
        <button
          className={`lowercase px-[12px] py-[4px] rounded-[12px] text-[12px] ${style}`}
        >
          {text}
        </button>
      )}
    </>
  );
};
