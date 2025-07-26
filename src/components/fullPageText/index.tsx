const FullPageText = ({ text }: { text: string }) => {
  return <div className="w-full h-full flex flex-grow items-center text-center justify-center">
    {text}
  </div>
}

export default FullPageText