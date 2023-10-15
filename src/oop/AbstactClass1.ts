export {};

// abstract is used for
// - share common behaviour

abstract class Project2 {
    constructor(public name: string, public budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`);
    }

    abstract makeDelivery(): void;
}

class AiProject extends Project2 {
    makeDelivery(): void {
        throw new Error('Method not implemented.');
    }
}
