const StatusTag = ({ text, id }: { text: string; id?: string }) => {
  const style =
    id === 'ACTIVE'
      ? 'text-[#32C87D] bg-[#EBF9F2]'
      : text === 'pending'
      ? 'text-[#F5A122] bg-[#FFF0D2]'
      : 'text-[#FF2636] bg-[#FFE8E8]';
  return (
    <button
      className={`capitalize px-[12px] py-[4px] rounded-[12px] text-[12px] ${style}`}
    >
      {text}
    </button>
  );
};
export default StatusTag;
