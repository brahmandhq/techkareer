import deviconName from "../../utils/skill"

const DevIcon = ({ skillName }: { skillName: string }) => {
  const name = deviconName(skillName)
  if (name[1] === "reactjs") {
    return (
      <>
        <i className={`devicon-react-original colored devicon-react-plain`}></i>{" "}
      </>
    )
  } else if (name[0]) {
    return (
      <>
        <i
          className={`devicon-${name[1]}-original colored devicon-${name[1]}-plain`}
        ></i>{" "}
      </>
    )
  } else {
    return <></>
  }
}

export default DevIcon
