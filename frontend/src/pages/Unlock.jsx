import { useState } from "react"

export default function Unlock({ onUnlock }) {
  const [value, setValue] = useState("")
  const secret = "always you"

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-sm text-center">
        <p className="text-white/70 mb-6">
          This page is only for one person.
        </p>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          placeholder="A memory only we know"
          className="w-full px-4 py-3 rounded-full bg-white/10 text-white outline-none"
        />

        <button
          onClick={() => value === secret && onUnlock()}
          className="mt-6 px-6 py-2 rounded-full border border-white/30 text-white"
        >
          Unlock
        </button>
      </div>
    </div>
  )
}
