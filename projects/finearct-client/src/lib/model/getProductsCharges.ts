/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GetChargeAppliesTo } from './getChargeAppliesTo';
import { GetChargeTimeType } from './getChargeTimeType';
import { GetChargesCurrency } from './getChargesCurrency';
import { GetChargePaymentMode } from './getChargePaymentMode';
import { GetChargeCalculationType } from './getChargeCalculationType';


export interface GetProductsCharges { 
    active?: boolean;
    amount?: number;
    chargeAppliesTo?: GetChargeAppliesTo;
    chargeCalculationType?: GetChargeCalculationType;
    chargePaymentMode?: GetChargePaymentMode;
    chargeTimeType?: GetChargeTimeType;
    currency?: GetChargesCurrency;
    id?: number;
    name?: string;
    penalty?: boolean;
}

