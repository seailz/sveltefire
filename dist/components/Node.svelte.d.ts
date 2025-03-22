import { SvelteComponent } from "svelte";
import type { DatabaseReference, Database } from "firebase/database";
declare const __propDef: {
    props: {
        path: string;
        startWith?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any;
            ref: DatabaseReference | null;
            rtdb?: Database | undefined;
        };
        loading: {};
    };
};
export type NodeProps = typeof __propDef.props;
export type NodeEvents = typeof __propDef.events;
export type NodeSlots = typeof __propDef.slots;
export default class Node extends SvelteComponent<NodeProps, NodeEvents, NodeSlots> {
}
export {};
