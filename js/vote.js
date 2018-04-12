export class Vote {
    static isAllowedToVote(age) {
        return age >= 18;
    }

    static getFormattedName(gender, firstName, lastName) {
        if (gender === undefined || gender === null)
            return null;
        let salutation = this.getSalutation(gender);
        let formattedName = salutation + firstName[0] +". " + lastName;
        return formattedName;
    }

    static getSalutation(gender) {
        let salutation = gender === "M" ? "Mr. " : "Ms. ";
        return salutation;
    }
}