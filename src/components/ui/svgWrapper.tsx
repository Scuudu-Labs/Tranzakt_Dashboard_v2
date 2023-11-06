const IconWrap = ({
  src,
  style,
  close,
}: {
  src: string;
  style?: string;
  close?: () => void;
}) => {
  return <img src={src} alt="icon" className={style} onClick={close} />;
};

export default IconWrap;
