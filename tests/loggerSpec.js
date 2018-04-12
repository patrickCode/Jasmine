import { Logger } from '../js/logger';
import { ConsoleLogger } from '../js/consoleLogger';

describe("Logger", function() {
    
    var fakeConsoleLogger = {
        LogConsoleMessage: function() {
            return "";
        }
    };
    var logger = new Logger(fakeConsoleLogger);

    beforeEach(function() {
        spyOn(fakeConsoleLogger, "LogConsoleMessage");
    });

    it("Should log message", function() {
        var message = "Sample message";
        logger.LogMessage(message);
        expect(fakeConsoleLogger.LogConsoleMessage).toHaveBeenCalled();
    });
});