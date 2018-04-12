import { Vote } from '../js/vote';

describe("Vote", function() {
    it("Should allow to vote when age is above 18", function() {
        let age = 20;
        var isAllowedToVote = Vote.isAllowedToVote(age);
        expect(isAllowedToVote).toBeTruthy();
    });

    it("Should not allow to vote when age is below 18", function() {
        let age = 8;
        var isAllowedToVote = Vote.isAllowedToVote(age);
        expect(isAllowedToVote).toBeFalsy();
    });

    it("Should format name by gender", function() {
        let name = Vote.getFormattedName("M", "Pratik", "Bhattacharya");
        expect(name).toMatch(/Mr. P./);
    });

    it("Should get null name if gender is not specified", function() {
        let name = Vote.getFormattedName(null, "Pratik", "Bhattacharya");
        expect(name).toBeNull();
    })
});