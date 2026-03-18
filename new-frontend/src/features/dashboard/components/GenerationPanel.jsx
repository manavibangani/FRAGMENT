import { useState } from 'react';
import { MaterialIcon } from '../../../components/ui/MaterialIcon.jsx';
import { durationOptions } from '../constants/durationOptions.js';

const initialForm = {
    topic: '',
    duration: durationOptions[0].value,
    keyPoints: '',
};

export function GenerationPanel({ isGenerating, onGenerate }) {
    const [formValues, setFormValues] = useState(initialForm);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormValues((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await onGenerate(formValues);
            setFormValues(initialForm);
        } catch {
            // Keep current form values in place if the request fails.
        }
    }

    return (
        <section
            className="scroll-mt-32 flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8"
            id="generation-panel"
        >
            <div className="border-b border-border-dark pb-6">
                <h3 className="flex items-center gap-3 text-xl font-bold">
                    <MaterialIcon className="text-primary">psychology</MaterialIcon>
                    Generation Panel
                </h3>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Video Topic
                        </span>
                        <input
                            className="rounded border border-border-dark bg-background-dark p-4 text-slate-100 transition-all focus:border-primary focus:ring-primary"
                            name="topic"
                            onChange={handleChange}
                            placeholder="e.g. Quantum Physics Explained"
                            required
                            type="text"
                            value={formValues.topic}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Duration
                        </span>
                        <select
                            className="rounded border border-border-dark bg-background-dark p-4 text-slate-100 transition-all focus:border-primary focus:ring-primary"
                            name="duration"
                            onChange={handleChange}
                            value={formValues.duration}
                        >
                            {durationOptions.map((option) => (
                                <option key={option.label} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Key Points &amp; Context
                    </span>
                    <textarea
                        className="resize-none rounded border border-border-dark bg-background-dark p-4 text-slate-100 transition-all focus:border-primary focus:ring-primary"
                        name="keyPoints"
                        onChange={handleChange}
                        placeholder="Describe the core message, tone, and specific data points to include..."
                        rows="4"
                        value={formValues.keyPoints}
                    />
                </label>

                <div className="flex justify-end pt-4">
                    <button
                        className="rounded bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-prestige transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                        disabled={isGenerating}
                        type="submit"
                    >
                        {isGenerating ? 'Generating...' : 'Generate Video'}
                    </button>
                </div>
            </form>
        </section>
    );
}
