function Cv() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-6 lg:ml-64 lg:p-24">
      <h2 className="pb-5 text-3xl font-bold text-purple-500">Curriculum Vitae</h2>
      <iframe src="https://is3.cloudhost.id/public-data/Prinafsika-resume.pdf" className="h-[60vh] w-full rounded-xl border border-purple-500 lg:h-[80vh]" allowFullScreen title="Resume" />
      <a
        href="https://is3.cloudhost.id/public-data/Prinafsika-resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="mt-6 rounded-xl border border-purple-500 px-5 py-3 text-white transition hover:bg-purple-500/10"
      >
        Download CV
      </a>
    </div>
  )
}

export default Cv
