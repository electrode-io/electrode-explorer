/* @flow */

const PRODUCTION_ENV = "production";

type AutomationId = {"data-automation-id": string};

export function getDataAutomationId(id: string, context: string, checkProduction: boolean = true): string { // eslint-disable-line func-style, max-len
  if (!checkProduction || process.env.NODE_ENV !== PRODUCTION_ENV) {
    return context ? `${context}-${id}` : id;
  }
}

export function getDataAutomationIdPair(id: string, context:string): ?AutomationId { // eslint-disable-line func-style, max-len
  let automationKey = "data-tl-id";
  if (process.env.NODE_ENV !== PRODUCTION_ENV) {
    automationKey = "data-automation-id";
  }
  return {
    [automationKey]: getDataAutomationId(id, context, false)
  };
}
