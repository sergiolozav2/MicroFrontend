/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getUserProfile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/profile',
        });
    }
}
