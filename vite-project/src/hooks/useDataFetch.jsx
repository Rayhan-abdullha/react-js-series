import { useEffect, useState } from "react"

export const useDataFetch = (url, slice = null) => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await fetch(url, {
        signal: AbortSignal.timeout(10000)
      })
      const res = await data.json()
      console.log(res)
      if (slice !== null && slice > 0) {
        setData(res.slice(0, slice))
      } else {
        setData(res)
      }
      if (error) {
        setError(false)
      }
    } catch (err) {
      console.log(err)
      setError("something went to wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return {
    error,
    loading,
    data
  }
}