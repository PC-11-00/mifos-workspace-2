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
import { CenterData } from './centerData';
import { GroupRoleData } from './groupRoleData';
import { ClientData } from './clientData';
import { OfficeData } from './officeData';
import { CalendarData } from './calendarData';
import { CodeValueData } from './codeValueData';
import { DatatableData } from './datatableData';
import { StaffData } from './staffData';
import { EnumOptionData } from './enumOptionData';


export interface GroupGeneralData { 
    accountNo?: string;
    activationDate?: string;
    active?: boolean;
    activeClientMembers?: Array<ClientData>;
    availableRoles?: Array<CodeValueData>;
    calendarsData?: Array<CalendarData>;
    centerId?: number;
    centerName?: string;
    centerOptions?: Array<CenterData>;
    childGroup?: boolean;
    clientMembers?: Array<ClientData>;
    clientOptions?: Array<ClientData>;
    closureReasons?: Array<CodeValueData>;
    collectionMeetingCalendar?: CalendarData;
    datatables?: Array<DatatableData>;
    dateFormat?: string;
    externalId?: string;
    groupLevel?: string;
    groupRoles?: Array<GroupRoleData>;
    hierarchy?: string;
    id?: number;
    locale?: string;
    name?: string;
    officeId?: number;
    officeName?: string;
    officeOptions?: Array<OfficeData>;
    parentId?: number;
    rowIndex?: number;
    selectedRole?: GroupRoleData;
    staffId?: number;
    staffName?: string;
    staffOptions?: Array<StaffData>;
    status?: EnumOptionData;
    submittedOnDate?: string;
    timeline?: object;
}

