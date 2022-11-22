import {useState} from "react";

export const useToggle = (initial: boolean): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initial)

    const toggle = () => {
        setValue(!value);
        console.log(value)
    }

    return [value, toggle]
}