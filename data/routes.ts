export type Route = {
    id: number;
    origin: string;
    destination: string;
    duration: number; // en minutos
};

export const routes: Route[] = [
    { id: 8988, origin: "EOH", destination: "MTR", duration: 60 },
    { id: 8989, origin: "MTR", destination: "EOH", duration: 60 },
    { id: 8972, origin: "EOH", destination: "APO", duration: 60 },
    { id: 8973, origin: "APO", destination: "EOH", duration: 60 },
    { id: 9058, origin: "EOH", destination: "PEI", duration: 60 },
    { id: 9059, origin: "PEI", destination: "EOH", duration: 60 },
];
