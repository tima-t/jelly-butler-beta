import IExchange from './IExchange';

export default class MockExchange implements IExchange {
    constructor() {}

    async placeOrder(__order) {
        return false;
    }
}
