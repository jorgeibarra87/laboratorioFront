import { useState } from "react";
import useFetchExamenesTomados from "../../../hooks/laboratorio/useFetchExamenesTomados";
import Pagination from "../../Pagination";

function TblExamenesTomados() {

    const { data, loading, error, fetchExamenesTomados } = useFetchExamenesTomados();
    const [page, setPage] = useState(0);
    const [fontSize, setFontSize] = useState(10); // por defecto pequeño
    const aumentarTexto = () => setFontSize((prev) => Math.min(prev + 1, 16));
    const reducirTexto = () => setFontSize((prev) => Math.max(prev - 1, 8));

    return (
        <div>
            <div className="flex justify-end items-center mb-2 space-x-2 text-xs text-gray-600">
                <span>Tamaño texto:</span>
                <button onClick={reducirTexto} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold">A–</button>
                <button onClick={aumentarTexto} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold">A+</button>
            </div>

            <div className="relative mb-8 border border-gray-300 rounded-lg shadow-md bg-white flex flex-col" style={{ minHeight: "400px", maxHeight: "900px" }} >
                {/* CONTENEDOR PARA SCROLL HORIZONTAL */}
                <div className="flex-grow overflow-auto p-2">
                    <table className="min-w-full text-gray-700" style={{ fontSize: `${fontSize}px` }}>
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="px-2 py-0.5 font-semibold">Historia</th>
                                <th className="px-2 py-0.5 font-semibold">Ingreso</th>
                                <th className="px-2 py-0.5 font-semibold">Paciente</th>
                                <th className="px-2 py-0.5 font-semibold">Sexo</th>
                                <th className="px-2 py-0.5 font-semibold">Edad</th>
                                <th className="px-2 py-0.5 font-semibold">Folio</th>
                                {/* <th className="px-2 py-0.5 font-semibold">Cód CUPS</th> */}
                                <th className="px-2 py-0.5 font-semibold">Examen</th>
                                <th className="px-2 py-0.5 font-semibold">Observaciones</th>
                                <th className="px-2 py-0.5 font-semibold">Cod Cama</th>
                                <th className="px-2 py-0.5 font-semibold">Cama</th>
                                <th className="px-2 py-0.5 font-semibold">Cod Dx</th>
                                <th className="px-2 py-0.5 font-semibold">Diagnostico</th>
                                <th className="px-2 py-0.5 font-semibold">Aislamiento</th>
                                <th className="px-2 py-0.5 font-semibold">Fechas Solicitud</th>
                                <th className="px-2 py-0.5 font-semibold">Área Sol.</th>
                                <th className="px-2 py-0.5 font-semibold">Prioridad</th>
                                <th className="px-2 py-0.5 font-semibold">Fecha Tomado</th>
                                <th className="px-2 py-0.5 font-semibold">Tomado Por</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={19} className="text-center py-6">Cargando...</td>
                                </tr>
                            ) : (
                                data.content.map((p) => (
                                    <tr key={p.id ?? `${p.folio}-${p.ingreso}`} className="border-b hover:bg-gray-200">
                                        <td className="border-r px-1 py-0.5">{p.documento}</td>
                                        <td className="border-r px-1 py-0.5">{p.ingreso}</td>
                                        <td className="border-r px-1 py-0.5">{p.nomPaciente}</td>
                                        <td className="border-r px-1 py-0.5">{p.sexo == 1 ? 'M' : p.sexo == 2 ? 'F' : ''}</td>
                                        <td className="border-r px-1 py-0.5">{p.edad}</td>
                                        <td className="border-r px-1 py-0.5">{p.folio}</td>
                                        {/* <td className="border-r px-1 py-0.5">{p.codCups}</td> */}
                                        <td className="border-r px-1 py-0.5">{p.descCups}</td>
                                        <td className="border-r px-1 py-0.5">{p.observaciones}</td>
                                        <td className="border-r px-1 py-0.5">{p.codCama}</td>
                                        <td className="border-r px-1 py-0.5">{p.cama}</td>
                                        <td className="border-r px-1 py-0.5">{p.diaCodigo}</td>
                                        <td className="border-r px-1 py-0.5">{p.diaNombre?.trim()}</td>
                                        <td className="border-r px-1 py-0.5">{(p.tiposAislamiento || []).join(", ")}</td>
                                        <td className="border-r px-1 py-0.5">{new Date(p.fechaSolicitudFolio).toLocaleString()}</td>
                                        <td className="border-r px-1 py-0.5">{p.areaSolicitante}</td>
                                        <td className="border-r px-1 py-0.5">{p.prioridad}</td>
                                        <td className="border-r px-1 py-0.5">{new Date(p.fechaTomado).toLocaleString()}</td>
                                        <td className="border-r px-1 py-0.5">{p.tomadoPor}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex-shrink-0 p-2 border-t bg-gray-50">
                    {data && <Pagination currentPage={page} totalPages={data.totalPages} onPageChange={setPage} />}
                </div>
            </div>
        </div>
    );
}

export default TblExamenesTomados;