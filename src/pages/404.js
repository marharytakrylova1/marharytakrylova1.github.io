import React, { useEffect } from "react"
import Layout from "../components/layout";

const NotFoundPage = () => {
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser) return false;
    window.location.href = "/"
  }, []);

  return (
    <main>
      <Layout />
    </main>
  )
}

export default NotFoundPage