export default function Hint({ hintNum, value, onValueChange }: { hintNum: number, value?: string, onValueChange: (hintNum: number, v: string) => void }) {
    const hintId = hintNum + "";

    return (
        <input id={hintId} key={hintId} className="hint" defaultValue={value} placeholder={`hint${hintNum}`} onInput={e => onValueChange(hintNum, (e.target as HTMLInputElement).value)}/>
    );
}
