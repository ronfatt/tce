type StageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function StageIntro({ eyebrow, title, copy }: StageIntroProps) {
  return (
    <section className="px-1 py-2">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
        {eyebrow}
      </p>
      <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {copy}
        </p>
      </div>
    </section>
  );
}
