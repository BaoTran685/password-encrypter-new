



const Header = ({ text, className }: { text: string, className:string }) => {
  return (
    <h1 className={`text--header ${className} font-semibold`}>
      {text}
    </h1>
  )
}

export default Header;