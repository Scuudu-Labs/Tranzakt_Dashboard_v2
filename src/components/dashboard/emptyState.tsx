import { EmptyState } from '../../assets';

const EmptyStateContainer = ({ open }: { open: () => void }) => {
  return (
    <div className="flex items-center h-[85vh]  justify-center">
      <div className="flex flex-col mr-4 justify-center mt-4">
        <h1 className="font-montserrat font-semibold text-[32px] py-2">
          No campaign created...
        </h1>
        <p className="py-2 w-[365px] text-[24px] ">
          All campaigns created would be displayed here. Start creating!
        </p>
        <button
          type="submit"
          onClick={open}
          className="text-white bg-[#32C87D] w-[400px]  py-3 mb-2 mt-2 rounded-md"
        >
          Create New Campaign
        </button>
      </div>
      <div>
        <img src={EmptyState} width={690} height={334} />
      </div>
    </div>
  );
};

export default EmptyStateContainer;
