/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdministradorService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAdministrador(
        body?: {
            lineaTransporteID: number;
            usuario: {
                email: string;
                nombre: string;
                password: string;
            };
        },
    ): CancelablePromise<{
        usuarioID: number;
        email: string;
        nombre: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/administrador/',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putAdministrador(
        body?: {
            lineaTransporteID: number;
            usuario: {
                email?: string;
                nombre?: string;
                password?: string;
            };
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/administrador/',
            body: body,
        });
    }
}
