/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConductorService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getConductor(): CancelablePromise<{
        list: Array<{
            usuarioID: number;
            email: string;
            nombre: string;
            permisos: string;
            verificado: boolean;
            creadoEn: string;
            vehiculos: Array<{
                creadoEn: string;
                vehiculo: {
                    lineaTransporteID: number;
                    vehiculoID: number;
                    matricula: string;
                    modelo: string;
                    aireAcondicionado: boolean;
                    propietarioNombre: string;
                };
            }>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/conductor/',
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postConductor(
        body?: {
            usuario: {
                email: string;
                nombre: string;
                password: string;
            };
            vehiculosID: Array<number>;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/conductor/',
            body: body,
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getConductorVehiculos(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            usuarioID: number;
            creadoEn: string;
            vehiculoID: number;
            vehiculo: {
                creadoEn: string;
                lineaTransporte: {
                    numeroLinea: string;
                };
                lineaTransporteID: number;
                vehiculoID: number;
                matricula: string;
                modelo: string;
                aireAcondicionado: boolean;
                propietarioNombre: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/conductor/vehiculos',
            headers: {
                'authorization': authorization,
            },
        });
    }
}
