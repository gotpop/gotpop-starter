import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface IButtonIcon {
    content: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    doClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export interface ILinkIcon {
    content?: string;
    properties?: { local: string; global: string }[];
    icon?: IconType;
    href: string;
}

export interface Card {
    id: string;
    text: string;
    title: string;
    links: Link[];
}

export interface Link {
    name: string;
    href: string;
}

export interface IPanel {
    id: string;
    text: string;
    title: string;
}

export interface IForm {
    id: string;
    text: string;
    title: string;
}

export interface IFormProps {
    form: IForm2;
}

export interface IForm2 {
    [key: string]: {
        value: string;
        valid: boolean;
        error: string;
    }
}

export type User = {
    id: number;
    name?: string;
}