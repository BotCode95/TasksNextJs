interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}

export const seedData = {
    entries: [
        {
            description: "Pendiente: dasdasd adskkasd psapsapd aldeledflk gjhghjdj dhdha",
            status: 'pending',
            createdAt: Date.now()
        },
        {  
            description: "En Progreso: ffdasd adskkasd psapsapd aldeledflk gjhghjdj dhdhb",
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },  
        {
            description: "Terminada: gg dskkasd psapsapd aldeledflk gjhghjdj dhdhc",
            status: 'finished',
            createdAt: Date.now() - 100000
        } 
    ]
}