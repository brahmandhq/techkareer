const Loader = ({ size, mssg }: { size: string; mssg?: string }) => {
  const loaderStyle = {
    width: size ? size : "30px", // Default size is 30px if no size prop is provided
    height: size ? size : "30px",
  }

  return (
    <>
      <div className="loader" style={loaderStyle}></div>
      <div className="mssg">{mssg}</div>
    </>
  )
}
export default Loader
