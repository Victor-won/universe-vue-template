declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{}, {}, any>;
    argTypes: {
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
        disabled: {
            control: string;
        };
        click: {
            action: string;
        };
    };
};
export default _default;
export declare const 默认: (args: any) => {
    components: {
        MyButton: import("vue").DefineComponent<{}, {}, any>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export declare const 禁用: (args: any) => {
    components: {
        MyButton: import("vue").DefineComponent<{}, {}, any>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
