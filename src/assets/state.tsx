import { createContext } from "react";
import XLSX from "XLSX";

import { Language, Term } from "../types";

type SpreadsheetState = {
    workbook?: XLSX.WorkBook,
    keywordsWorksheet?: XLSX.WorkSheet,
    lineIndex: number,
    language: Language,
    currTerm: Term,
};

export const SpreadsheetContext = createContext(null);
export const SpreadsheetDispatchContext = createContext(null);

export function spreadsheetReducer(state, action) {
    return {...state};
}