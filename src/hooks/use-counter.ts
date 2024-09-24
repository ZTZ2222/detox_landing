import { useEffect, useState } from "react"
import { getUnreadRequestsCount } from "@/server/data-access-layer/request"

/**
 * A custom React hook that fetches and returns the count of unread requests.
 * @returns {number | null} The count of unread requests, or null if the data is still loading.
 /**
  * A React effect hook that fetches and sets the count of unread requests.
  * This effect runs once when the component mounts.
  * @param {void} None
  * @returns {void} Nothing
  */
 */
export function useCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    /**
     * Asynchronously fetches and sets the count of unread requests
     * @returns {void} This function doesn't return anything
     */
    async function getData() {
      const data = await getUnreadRequestsCount()
      setCount(data)
    }

    getData()
  }, [])

  return count
}
