//@ts-check
import { ConsoleLogger } from './consoleLogger';

export class Logger {
    
    constructor(consoleLogger) {
        if (consoleLogger === undefined || consoleLogger === null) {
            this._consoleLogger = new ConsoleLogger();
        } else {
            this._consoleLogger = consoleLogger;
        }
        this.currentMessage = null;
    }

    LogMessage(message, correlationId) {
        try {
            var finalMessage = this.createFinalMessage(message, correlationId);
            this.currentMessage = finalMessage;
            this._consoleLogger.LogConsoleMessage(finalMessage);
        } catch (exception) {
            console.error(JSON.stringify(exception));
        }
    }

    LogError(message, correlationId) {
        try {
            let finalMessage = this.createFinalMessage(message, correlationId);
            this.currentMessage = finalMessage;
            this._consoleLogger.LogError(finalMessage);
        } catch(exception) {
            console.error(JSON.stringify(exception));
        }
    }

    createFinalMessage(message, correlationId) {
        let finalMessage = message + " - Correlation ID: " + correlationId;
        return finalMessage;
    }
}