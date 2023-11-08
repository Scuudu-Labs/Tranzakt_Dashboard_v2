const IconWrap = ({
  src,
  style,
  close,
  click,
}: {
  src: string;
  style?: string;
  click?: () => void;
  close?: () => void;
}) => {
  return (
    <div onClick={click}>
      <img src={src} alt="icon" className={style} onClick={close} />
    </div>
  );
};

export default IconWrap;
