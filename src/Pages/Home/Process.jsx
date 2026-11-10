const steps = [
  ['01', 'Confidential consultation', 'Tell us what support you need.'],
  ['02', 'Scope & plan', 'We agree on a clear, suitable approach.'],
  ['03', 'Investigation', 'Our team conducts discreet fact-finding.'],
  ['04', 'Findings & next steps', 'We share the findings and discuss what follows.'],
]

const Process = () => {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            How it works
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">
            Our process
          </h2>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <li
              key={number}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                {number}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process