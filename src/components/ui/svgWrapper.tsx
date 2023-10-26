
const IconWrap = ({src, style}: {src:string; style?:string}) => {
  return (
    <img src={src} alt="icon" className={style} />
  )
}

export default IconWrap