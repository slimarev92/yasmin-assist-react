import { SyntheticEvent, useState } from "react";
import { z } from "zod";

import { ClassificationValidator, Classification, Language} from "./types";
import Hint from "./Hint";

const SELECT_OPTIONS: Classification[] = ["אנשים", "מקומות", "כללי", ""];

export default function Menu() {
    const [classification, setClassification] = useState<Classification>("");
    const [hints, setHints] = useState<string[]>(Array(7).fill(""));
    const [language, setLanguage] = useState<Language>("he");
    const [rowNum, setRowNum] = useState<number>(2);

    console.log(rowNum);

    const onHintValueChange = (hintNum: number, value: string) => {
        const updatedHints = [...hints];

        updatedHints[hintNum - 1] = value;

        setHints(updatedHints);
    }

    const onClassificationChange = (event: SyntheticEvent<HTMLSelectElement>) => {
        const value = ClassificationValidator.parse((event.target as HTMLSelectElement).value);

        setClassification(value);
    }

    const toggleLanguage = () => {
        setLanguage(language === "he" ? "en" : "he");
    };

    const onRowNumChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const number = Number.parseInt((event.target as HTMLInputElement).value);
        const rowNum = z.number().parse(number);

        setRowNum(rowNum);
    };

    return (
        <>
            <div className="menu">
                <div id="curr-term-container">
                    <div id="curr-term"></div>
                </div>

                <select value={classification} onChange={onClassificationChange}>
                    {
                        SELECT_OPTIONS.map(o => <option key={o} onChange={() => setClassification(o)}>{o}</option>)
                    }
                </select>

                <button id="prev">הקודם</button>
                <button id="next">הבא</button>

                <div className="hints">
                    { hints.map((value, index) => <Hint hintNum={index + 1} onValueChange={onHintValueChange} value={value} /> )}
                </div>

                <button id="language" onClick={toggleLanguage}>{language}</button>

                <input type="number" id="row-num" defaultValue={rowNum} onInput={onRowNumChange}></input>
            </div>
        </>
    )
}