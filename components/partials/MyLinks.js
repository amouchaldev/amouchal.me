import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
const MyLinks = ({color}) => {
  return (
    <div className="links">
        <a href="https://twitter.com/amcmostapha" target="_blank" className="me-1"><AiOutlineTwitter fontSize="30px" color={color ?? "white"} /></a>
        <a href="https://www.linkedin.com/in/amouchaldev/" target="_blank" className="me-1"><AiFillLinkedin fontSize="30px" color={color ?? "white"}/></a>
        <a href="https://github.com/amouchaldev" target="_blank"><AiFillGithub fontSize="30px" color={color ?? "white"} /></a>
    </div>
  )
}

export default MyLinks