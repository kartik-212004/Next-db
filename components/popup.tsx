import { useState, useEffect } from "react"

export default function SuccessPopup({ show }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 5000) // Hides after 5 seconds
      return () => clearTimeout(timer) // Cleanup timeout on component unmount
    }
  }, [show])

  return (
    <div
      className={`fixed top-4 right-4 max-w-sm p-4 bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p>Login Successful!</p>
    </div>
  )
}
