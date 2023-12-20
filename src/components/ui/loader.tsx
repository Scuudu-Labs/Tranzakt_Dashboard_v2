import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const AmountLoader = () => {
  return (
    <SkeletonTheme baseColor="#afadad" highlightColor="#c0bfbf">
      <p className="w-[90px]">
        <Skeleton count={1} />
      </p>
    </SkeletonTheme>
  );
};
