declare class XmindParser {
    xmindToJSON(filePath: string): Promise<unknown>;
    JSONToXmind(data: unknown, filePath: string): Promise<unknown>;
}

declare const xmindparser: new () => XmindParser;
export = xmindparser;
