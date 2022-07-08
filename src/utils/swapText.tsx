import { Dispatch, SetStateAction } from "react";

export const swapText = (
    current: string,
    target: string,
    setText: Dispatch<SetStateAction<string>>
) => {
    let currentText = current;
    const commonSubstring = sharedStart([current, target]);

    startSwapping(currentText, commonSubstring, target, setText);
};

const startSwapping = (
    current: string,
    commonSubstring: string,
    target: string,
    setText: Dispatch<SetStateAction<string>>
) => {
    reduceToCommon(current, commonSubstring, setText, () =>
        generateTargetText(commonSubstring, target, setText)
    );
};

const reduceToCommon = (
    current: string,
    commonSubstring: string,
    setText: Dispatch<SetStateAction<string>>,
    callback: () => void
) => {
    if (current.length > commonSubstring.length) {
        setTimeout(() => {
            const newText = current.slice(0, -1);
            setText(newText);
            reduceToCommon(newText, commonSubstring, setText, callback);
        }, 100);
    } else {
        callback();
    }
};

const generateTargetText = (
    current: string,
    target: string,
    setText: Dispatch<SetStateAction<string>>
) => {
    if (current.length < target.length) {
        setTimeout(() => {
            const newText = target.slice(0, current.length + 1);
            setText(newText);
            generateTargetText(newText, target, setText);
        }, 100);
    }
};

function sharedStart(array: string[]) {
    const sortedArray = [...array].sort();
    const firstString = sortedArray[0];
    const lastString = sortedArray[sortedArray.length - 1];
    const firstStringLength = firstString.length;
    let i = 0;

    while (
        i < firstStringLength &&
        firstString.charAt(i) === lastString.charAt(i)
    )
        i++;

    return firstString.substring(0, i);
}
