export type Route = {
    id: number;
    origin: string;
    destination: string;
    duration: number; // en minutos
    departureTime: string;
};

export const routes = [
    { id: 8988, origin: "EOH", destination: "MTR", duration: 60, departureTime: "13:00" },
    { id: 8989, origin: "MTR", destination: "EOH", duration: 60, departureTime: "15:00" },
    { id: 8972, origin: "EOH", destination: "APO", duration: 60, departureTime: "09:00" },
    { id: 8973, origin: "APO", destination: "EOH", duration: 60, departureTime: "11:00" },
    { id: 9058, origin: "EOH", destination: "PEI", duration: 60, departureTime: "14:30" },
    { id: 9059, origin: "PEI", destination: "EOH", duration: 60, departureTime: "16:30" },
    { id: 9190, origin: "EOH", destination: "UIB", duration: 60, departureTime: "12:30" },
    { id: 9191, origin: "UIB", destination: "APO", duration: 60, departureTime: "13:30" },
    { id: 9192, origin: "APO", destination: "UIB", duration: 60, departureTime: "14:30" },
    { id: 9193, origin: "UIB", destination: "EOH", duration: 60, departureTime: "13:30" }

];
