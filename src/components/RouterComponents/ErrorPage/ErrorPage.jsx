function ErrorPage({logoGotoTopOrHome}) {
    const imageCopyDisable = (event)=>{
        event.preventDefault()
    }
  return (
    <div onContextMenu={imageCopyDisable} className=" h-screen w-screen flex justify-center items-center flex-col xl2:px-4 md:h-[80vh] relative">
        <img onDragStart={imageCopyDisable} draggable="false" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="ERROR-404" className=" pointer-events-none"/>
        <div className=" absolute top-0 h-full w-screen"></div>
        <div className=" flex justify-center items-center gap-4 flex-col md:text-center">
            <h1 className=" text-blue-600 text-4xl font-bold">404 NOT FOUND</h1>
            <h2 className=" text-xl">Sorry, we can't find that page. You'll find lots to explore on the home page.</h2>
            <button onClick={logoGotoTopOrHome} className=" px-4 py-2 bg-black z-10 text-white rounded-lg transition-all duration-300 hover:opacity-80">Back to Homepage</button>
        </div>
    </div>
  )
}
export default ErrorPage