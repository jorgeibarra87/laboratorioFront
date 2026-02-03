import apiClienteLaboratorio from "./apiClienteLaboratorio";

export const obtenerExamenesTomadosPorIngresos = async (ingresos) => {
    try {
        const response = await apiClienteLaboratorio.post(`examenes-tomados/`, { ingresos });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los examenes tomados por ingresos desde laboratorio microservice', error);
        throw error;
    }
};

export const guardarExamenesTomados = async (examenesTomados) => {
    try {
        const response = await apiClienteLaboratorio.post(`examenes-tomados`, examenesTomados);
        return response.data;
    } catch (error) {
        console.error('Error al guardar los examenes tomados en laboratorio microservice', error);
        throw error;
    }
};

export const obtenerExamenesTomadosPageble = async (page, size) => {
    try {
        const response = await apiClienteLaboratorio.get(`examenes-tomados`, {
            params: {
                page,
                size
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los examenes tomados pageable desde laboratorio microservice', error);
        throw error;
    }
};