import { SvelteComponent } from "svelte";
import type { DatabaseReference, Database } from "firebase/database";
declare const __propDef: {
    props: {
        path: string;
        startWith?: any[] | undefined;
        children?: import("svelte").Snippet<{
            data: any[];
            ref: DatabaseReference;
            count: number;
            rtdb: Database | undefined;
        }> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any[];
            ref: DatabaseReference | null;
            count: number;
            rtdb?: Database | undefined;
        };
        loading: {};
    };
};
export type NodeListProps = typeof __propDef.props;
export type NodeListEvents = typeof __propDef.events;
export type NodeListSlots = typeof __propDef.slots;
export default class NodeList extends SvelteComponent<NodeListProps, NodeListEvents, NodeListSlots> {
}
export {};
