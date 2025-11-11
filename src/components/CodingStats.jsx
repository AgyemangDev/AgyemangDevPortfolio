"use client"

import { useEffect, useRef } from "react"

const CodingStats = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      // Scroll to the extreme right to show the latest contributions
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-center">
        My WakaTime Contributions
      </h2>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto touch-pan-x scrollbar-none" // swipeable & hide scrollbar
        style={{ maxHeight: "500px" }} // adjust height as needed
      >
        <div className="inline-block h-full min-w-max">
          <embed
            src="https://wakatime.com/share/@3007d2cb-2e62-4fd0-9832-efca1f399d18/3c7600ec-fd71-4863-83d4-57158d2b0adb.svg"
            type="image/svg+xml"
            className="h-full w-auto"
          />
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE 10+ */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  )
}

export default CodingStats
