"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { usePortfolio } from "./PortfolioContext"

const WAKATIME_LAST7_URL =
  "https://wakatime.com/share/@3007d2cb-2e62-4fd0-9832-efca1f399d18/24149a99-5cec-4282-ba5c-a9b6efc2534e.json"
const WAKATIME_LAST30_URL =
  "https://wakatime.com/share/@3007d2cb-2e62-4fd0-9832-efca1f399d18/228e1fa7-8095-4947-93e9-3c0934f3b56a.json"
const WAKATIME_LASTYEAR_URL =
  "https://wakatime.com/share/@3007d2cb-2e62-4fd0-9832-efca1f399d18/ebc0aa5e-ff90-49cf-b0d4-bd4c3bd408b2.json"
const WAKATIME_ALLTIME_URL =
  "https://wakatime.com/share/@3007d2cb-2e62-4fd0-9832-efca1f399d18/7741c8f5-f3f9-4c0e-8d14-dd75cd20de37.json"

// WakaTime's embeddable JSON doesn't send CORS headers — JSONP is required.
function loadJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = "wk_jsonp_" + Math.random().toString(36).slice(2)
    const script = document.createElement("script")
    const sep = url.includes("?") ? "&" : "?"
    script.src = `${url}${sep}callback=${callbackName}`

    const cleanup = () => {
      delete window[callbackName]
      script.remove()
    }
    window[callbackName] = (data) => {
      resolve(data)
      cleanup()
    }
    script.onerror = () => {
      reject(new Error("WakaTime JSONP request failed"))
      cleanup()
    }
    document.body.appendChild(script)
  })
}

function formatHoursMins(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.round((totalSeconds % 3600) / 60)
  if (hrs === 0) return `${mins} mins`
  return mins ? `${hrs} hrs ${mins} mins` : `${hrs} hrs`
}

function formatMonthYear(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

function computeCurrentStreak(days) {
  let streak = 0
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].total_seconds > 0) streak++
    else break
  }
  return streak
}

// bucket a day's seconds into a 0-4 intensity level for the heatmap
function levelFor(seconds) {
  if (!seconds || seconds <= 0) return 0
  if (seconds <= 1800) return 1
  if (seconds <= 7200) return 2
  if (seconds <= 14400) return 3
  return 4
}

const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "#3730a3",
  "#3b82f6",
  "#a855f7",
  "#e879f9",
]

// group a flat array of {date, total_seconds} into Sun-start weeks for a
// GitHub-style calendar, plus which columns should carry a month label
function buildWeeks(days) {
  if (!days.length) return { weeks: [], monthLabels: [] }
  const sorted = [...days].sort((a, b) => (a.date < b.date ? -1 : 1))
  const firstDow = new Date(sorted[0].date + "T00:00:00").getDay() // 0 = Sun
  const padded = [...Array(firstDow).fill(null), ...sorted]
  const weeks = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }
  let lastMonth = null
  const monthLabels = weeks.map((week) => {
    const firstReal = week.find(Boolean)
    if (!firstReal) return null
    const month = new Date(firstReal.date + "T00:00:00").getMonth()
    if (month !== lastMonth) {
      lastMonth = month
      return new Date(firstReal.date + "T00:00:00").toLocaleDateString("en-US", {
        month: "short",
      })
    }
    return null
  })
  return { weeks, monthLabels }
}

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""]
const SQUARE = 12
const GAP = 3

const CodingStats = () => {
  const { t } = usePortfolio()
  const scrollRef = useRef(null)
  const [stats, setStats] = useState(null)
  const [last30, setLast30] = useState([])
  const [yearDays, setYearDays] = useState([])

  useEffect(() => {
    loadJsonp(WAKATIME_ALLTIME_URL)
      .then((json) => setStats(json?.data ?? json))
      .catch(() => {})

    loadJsonp(WAKATIME_LAST30_URL)
      .then((json) => {
        const rows = (json?.data ?? json).map((d) => ({
          date: d.range.date,
          total_seconds: d.grand_total.total_seconds,
        }))
        setLast30(rows)
      })
      .catch(() => {})

    loadJsonp(WAKATIME_LASTYEAR_URL)
      .then((json) => {
        const rows = (json?.data ?? json).map((d) => ({
          date: d.range.date,
          total_seconds: d.grand_total.total_seconds,
        }))
        setYearDays(rows)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [yearDays])

  const streak = computeCurrentStreak(last30)
  const last30Total = last30.reduce((sum, d) => sum + d.total_seconds, 0)
  const activeDays = stats?.range?.days_minus_holidays
  const since = stats?.range?.start ? formatMonthYear(stats.range.start) : null
  const { weeks, monthLabels } = buildWeeks(yearDays)

  const cards = [
    { label: t.codingStats.dailyAverage, value: stats?.grand_total?.human_readable_daily_average || "—" },
    { label: t.codingStats.bestDayEver, value: stats?.best_day?.text || "—" },
    {
      label: t.codingStats.currentStreak,
      value: `${streak} ${streak === 1 ? t.codingStats.day : t.codingStats.days}`,
    },
    { label: t.codingStats.last30Days, value: last30.length ? formatHoursMins(last30Total) : "—" },
  ]

  return (
    <section id="coding-activity" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.codingStats.title}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/50">
            {t.codingStats.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/60">
            {t.codingStats.description}
          </p>
        </motion.div>

        {/* headline stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass mt-10 rounded-3xl p-8 text-center"
        >
          <div className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            {stats?.grand_total?.human_readable_total || "…"}
          </div>
          <div className="mt-2 text-sm text-foreground/60">
            {t.codingStats.loggedSince}
            {since ? ` ${since}` : ""}
            {activeDays ? ` · ${activeDays.toLocaleString()} ${t.codingStats.activeCodingDays}` : ""}
          </div>
        </motion.div>

        {/* summary stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="text-lg font-bold md:text-xl">{c.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-foreground/50">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* custom heatmap, built in-house so colors always match the site */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass relative mt-6 rounded-3xl p-4 md:p-6"
        >
          {weeks.length > 0 ? (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 rounded-l-3xl bg-gradient-to-r from-background/40 to-transparent md:w-14" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 rounded-r-3xl bg-gradient-to-l from-background/40 to-transparent md:w-14" />
              <div
                ref={scrollRef}
                className="w-full touch-pan-x overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="inline-block pl-8">
                  <div
                    className="grid text-[10px] text-foreground/40"
                    style={{
                      gridTemplateColumns: `repeat(${weeks.length}, ${SQUARE}px)`,
                      gap: `${GAP}px`,
                      marginBottom: 4,
                    }}
                  >
                    {monthLabels.map((label, i) => (
                      <div key={i} className="whitespace-nowrap">
                        {label || ""}
                      </div>
                    ))}
                  </div>
                  <div className="flex" style={{ gap: GAP }}>
                    <div
                      className="grid shrink-0 text-[10px] text-foreground/40"
                      style={{ gridTemplateRows: `repeat(7, ${SQUARE}px)`, gap: `${GAP}px`, marginRight: 6 }}
                    >
                      {DAY_LABELS.map((label, i) => (
                        <div key={i} className="flex items-center">
                          {label}
                        </div>
                      ))}
                    </div>
                    <div
                      className="grid"
                      style={{
                        gridTemplateColumns: `repeat(${weeks.length}, ${SQUARE}px)`,
                        gridTemplateRows: `repeat(7, ${SQUARE}px)`,
                        gridAutoFlow: "column",
                        gap: `${GAP}px`,
                      }}
                    >
                      {weeks.map((week, wi) =>
                        week.map((day, di) => {
                          const level = day ? levelFor(day.total_seconds) : -1
                          return (
                            <div
                              key={`${wi}-${di}`}
                              title={day ? `${day.date} · ${formatHoursMins(day.total_seconds)}` : ""}
                              style={{
                                width: SQUARE,
                                height: SQUARE,
                                borderRadius: 3,
                                background: level >= 0 ? LEVEL_COLORS[level] : "transparent",
                              }}
                            />
                          )
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-foreground/40">
                <span>{t.codingStats.less}</span>
                {LEVEL_COLORS.map((c, i) => (
                  <span
                    key={i}
                    style={{ width: SQUARE, height: SQUARE, borderRadius: 3, background: c }}
                  />
                ))}
                <span>{t.codingStats.more}</span>
              </div>
            </>
          ) : (
            <div className="py-16 text-center text-sm text-foreground/40">
              {t.codingStats.loading}
            </div>
          )}
        </motion.div>

        <p className="mt-4 text-center text-xs text-foreground/40">
          {t.codingStats.swipeHint}
        </p>
      </div>
    </section>
  )
}

export default CodingStats