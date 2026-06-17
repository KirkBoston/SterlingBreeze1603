export default function CalendarEmbed() {
  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=ksgab1lc8e6lqg9qgc59mt7bh16n7igi%40import.calendar.google.com&ctz=America%2FNew_York"
        title="Availability Calendar"
        className="absolute inset-0 w-full h-full rounded-2xl border-0 shadow-md"
        frameBorder={0}
        scrolling="no"
      />
    </div>
  )
}
