import { ReactComponent as ButtonLoaderSvg } from '../../assets/icons/buttonLoader.svg';

const ButtonLoader = () => {
  return (
    <div className="flex w-[20px] h-[20px] items-center justify-center  text-center animate-spin">
      <ButtonLoaderSvg />
    </div>
  );
};

export default ButtonLoader;
