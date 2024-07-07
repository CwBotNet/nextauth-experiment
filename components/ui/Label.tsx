import { ChangeEvent, ReactElement } from "react"

interface UserInput {

    label: string
    type?: string
    placeHolder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

}
export default function Label({ label, onChange, type, placeHolder }: UserInput) {
    return (
        <>
            <div className="flex flex-col ">
                <label className="capitalize">{label}</label>
                <input className="text-black rounded-md p-2" type={type || "text"} onChange={onChange} placeholder={placeHolder} />
            </div>
        </>
    )
}