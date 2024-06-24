/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LineaTransporteService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postLineaTransporte(
        body?: {
            numeroLinea: string;
            rutaIda: Array<{
                latitud: number;
                longitud: number;
            }>;
            rutaVuelta: Array<{
                latitud: number;
                longitud: number;
            }>;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/linea_transporte/',
            body: body,
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getLineaTransporte(): CancelablePromise<{
        list: Array<{
            lineaTransporteID: number;
            numeroLinea: string;
            rutaIdaID: number;
            rutaVueltaID: number;
            creadoEn: string;
            administradorID: any;
            administrador: {
                usuarioID: number;
                nombre: string;
                email: string;
            };
            vehiculos: Array<{
                vehiculoID: number;
                matricula: string;
                modelo: string;
                aireAcondicionado: boolean;
                creadoEn: string;
                propietarioNombre: string;
                lineaTransporteID: number;
                lineaTransporte: {
                    numeroLinea: string;
                };
            }>;
            rutaIda: {
                rutaID: number;
                puntos: Array<{
                    latitud: number;
                    longitud: number;
                }>;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/linea_transporte/',
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getLineaTransporteOnlyLines(): CancelablePromise<{
        list: Array<{
            lineaTransporteID: number;
            numeroLinea: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/linea_transporte/only-lines',
        });
    }
    /**
     * @param lineaTransporteId
     * @returns any Default Response
     * @throws ApiError
     */
    public static getLineaTransporte1(
        lineaTransporteId: number,
    ): CancelablePromise<{
        lineaTransporteID: number;
        numeroLinea: string;
        rutaIdaID: number;
        rutaVueltaID: number;
        creadoEn: string;
        administradorID: any;
        administrador: {
            usuarioID: number;
            nombre: string;
            email: string;
        };
        vehiculos: Array<{
            vehiculoID: number;
            matricula: string;
            modelo: string;
            aireAcondicionado: boolean;
            creadoEn: string;
            propietarioNombre: string;
            lineaTransporteID: number;
            lineaTransporte: {
                numeroLinea: string;
            };
        }>;
        rutaIda: {
            rutaID: number;
            puntos: Array<{
                latitud: number;
                longitud: number;
            }>;
        };
        rutaVuelta: {
            rutaID: number;
            puntos: Array<{
                latitud: number;
                longitud: number;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/linea_transporte/{lineaTransporteID}',
            path: {
                'lineaTransporteID': lineaTransporteId,
            },
        });
    }
    /**
     * @param lineaTransporteId
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putLineaTransporte(
        lineaTransporteId: number,
        body?: {
            numeroLinea?: string;
            rutaIda?: Array<{
                latitud: number;
                longitud: number;
            }>;
            rutaVuelta?: Array<{
                latitud: number;
                longitud: number;
            }>;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/linea_transporte/{lineaTransporteID}',
            path: {
                'lineaTransporteID': lineaTransporteId,
            },
            body: body,
        });
    }
}
