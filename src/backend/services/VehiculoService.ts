/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehiculoService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postVehiculo(
        body?: {
            lineaTransporteID: number;
            matricula: string;
            modelo: string;
            aireAcondicionado: boolean;
            propietarioNombre: string;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehiculo/',
            body: body,
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getVehiculo(): CancelablePromise<{
        list: Array<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehiculo/',
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putVehiculoActualizarViaje(
        body?: {
            vehiculoID: number;
            latitud: number;
            longitud: number;
        },
    ): CancelablePromise<{
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vehiculo/actualizar-viaje',
            body: body,
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getVehiculoUbicacionReal(): CancelablePromise<{
        list: Array<{
            vehiculoID: number;
            matricula: string;
            modelo: string;
            lineaTransporteID: number;
            lineaTransporte: {
                numeroLinea: string;
            };
            latitud?: number;
            longitud?: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehiculo/ubicacion-real',
        });
    }
}
