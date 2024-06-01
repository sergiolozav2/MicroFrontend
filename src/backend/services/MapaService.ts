/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MapaService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postMapa(
        body?: {
            inicio: {
                latitud: number;
                longitud: number;
            };
            destino: {
                latitud: number;
                longitud: number;
            };
        },
    ): CancelablePromise<{
        list: Array<{
            lineaTransporteID: number;
            numeroLinea: string;
            puntos: Array<{
                latitud: number;
                longitud: number;
            }>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mapa/',
            body: body,
        });
    }
}
