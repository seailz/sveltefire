import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        eventName?: string | undefined;
        setUser?: boolean | undefined;
        customParams?: Record<string, unknown> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PageViewProps = typeof __propDef.props;
export type PageViewEvents = typeof __propDef.events;
export type PageViewSlots = typeof __propDef.slots;
export default class PageView extends SvelteComponent<PageViewProps, PageViewEvents, PageViewSlots> {
}
export {};
