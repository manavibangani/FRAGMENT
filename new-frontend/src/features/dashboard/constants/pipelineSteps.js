export const pipelineSteps = [
    {
        key: 'script',
        label: 'SCRIPT',
        icon: 'description',
        statusText: 'Script generation in progress',
        durationMs: 4000,
    },
    {
        key: 'image',
        label: 'IMAGE',
        icon: 'image',
        statusText: 'Image generation in progress',
        durationMs: 7000,
    },
    {
        key: 'voice',
        label: 'VOICE',
        icon: 'mic',
        statusText: 'Voice generation in progress',
        durationMs: 6000,
    },
    {
        key: 'subtitles',
        label: 'SUBTITLES',
        icon: 'subtitles',
        statusText: 'Subtitle generation in progress',
        durationMs: 5000,
    },
    {
        key: 'assembly',
        label: 'ASSEMBLY',
        icon: 'inventory_2',
        statusText: 'Video assembly in progress',
        durationMs: 0,
    },
];
