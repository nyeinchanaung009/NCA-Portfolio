import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
        <div className="w-full h-screen bg-bg4 flex justify-center items-center">
            <div className="text-center">
                <i className="bi bi-exclamation-circle text-4xl text-tmute"></i>
                <h1 className="text-tsec font-fpop font-semibold text-lg mt-4 mb-8">Page Not Found</h1>
                <Link to={-1} className="mybtn"><i className="bi bi-arrow-left me-2"></i>Go Back</Link>
            </div>
        </div>
    </>
  )
}

export default NotFound