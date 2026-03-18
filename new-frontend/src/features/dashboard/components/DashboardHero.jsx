import { MaterialIcon } from '../../../components/ui/MaterialIcon.jsx';

export function DashboardHero({ onPreviewShowcase, onStartCreating }) {
    return (
        <section className="scroll-mt-32 grid items-center gap-12 lg:grid-cols-2" id="dashboard-section">
            <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                    <MaterialIcon className="text-sm text-primary">auto_awesome</MaterialIcon>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        Next Gen Video Engine
                    </span>
                </div>

                <h1 className="text-5xl font-bold leading-[1.1] tracking-tight lg:text-7xl">
                    True Power. <br />
                    <span className="text-primary">AI Driven.</span>
                </h1>

                <p className="max-w-md text-lg leading-relaxed text-slate-400">
                    Generate high-quality educational videos instantly with the power of
                    Fragment AI. From script to final export in seconds.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button
                        className="flex items-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-yellow-400"
                        onClick={onStartCreating}
                        type="button"
                    >
                        Start Creating <MaterialIcon>arrow_forward</MaterialIcon>
                    </button>

                    <button
                        className="rounded border border-border-dark px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-surface-dark"
                        onClick={onPreviewShowcase}
                        type="button"
                    >
                        View Demo
                    </button>
                </div>
            </div>

            <div className="group relative scroll-mt-32" id="hero-showcase">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-transparent opacity-50 blur-xl" />
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border-dark bg-surface-dark shadow-2xl">
                    <video
                        aria-label="Fragment AI showcase video"
                        autoPlay
                        className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src="/media/soraaa.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/55 via-transparent to-background-dark/10" />
                </div>
            </div>
        </section>
    );
}
